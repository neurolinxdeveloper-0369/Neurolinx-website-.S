const {
  PDFDocument,
  rgb,
  StandardFonts,
  pushGraphicsState,
  popGraphicsState,
  moveTo,
  lineTo,
  closePath,
  clip,
  endPath
} = require('../node_modules/pdf-lib');
const fs = require('fs');
const path = require('path');

async function buildBrochure() {
  console.log('Generating Smart Home Automation Brochure with upscaled HD images and exact original cover size...');
  const doc = await PDFDocument.create();

  // Standard Fonts
  const helvetica = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);

  // Exact Brand Color Palette
  const brandDark = rgb(0.0667, 0.1059, 0.1765);    // #111B2D (original heading/text dark)
  const subtitleTeal = rgb(0.0667, 0.4863, 0.4902); // #117C7D (original subtitle teal)
  const textMuted = rgb(0.3216, 0.3804, 0.4510);    // #526173 (original metadata gray)
  const dividerColor = rgb(0.8431, 0.8941, 0.8980); // #D7E4E5 (original hairline divider)
  const brandRed = rgb(0.878, 0.0, 0.106);          // #E0001B (Neurolinx Red)
  const pureWhite = rgb(1, 1, 1);
  const cardBg = rgb(0.975, 0.98, 0.99);

  const PAGE_WIDTH = 595.28;   // A4
  const PAGE_HEIGHT = 841.89;  // A4
  const MARGIN_X = 42;
  const CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN_X; // 511.28

  // Helper to load and embed an image safely
  async function embedPng(filePath) {
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return null;
    }
    const bytes = fs.readFileSync(filePath);
    return await doc.embedPng(bytes);
  }

  async function embedJpg(filePath) {
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return null;
    }
    const bytes = fs.readFileSync(filePath);
    return await doc.embedJpg(bytes);
  }

  // Load HIGH-RESOLUTION UPSCALED & ORIGINAL IMAGES (Zero dullness, 1000px - 2048px HD)
  const origDir = path.join(__dirname, '../public/media/orig_brochure_images');
  const mediaDir = path.join(__dirname, '../public/media');

  const imgPage1 = await embedPng(path.join(origDir, 'page_1_2048x682_clear.png')); // 2048 x 682
  const imgPage2 = await embedPng(path.join(origDir, 'page_2_2048x682_clear.png')); // 2048 x 682
  const imgPage3 = await embedPng(path.join(origDir, 'page_3_upscaled.png'));        // 1110 x 1773 HD
  const imgPage4 = await embedJpg(path.join(mediaDir, 'retrofit_touch_panel_hd.jpg')); // 1376 x 768 HD
  const imgPage6 = await embedJpg(path.join(mediaDir, 'universal_ir_blaster_hd.jpg')); // 1376 x 768 HD
  const imgPage7 = await embedJpg(path.join(mediaDir, 'smart_energy_meter_single_three_phase.jpg')); // 1024 x 576 HD
  const imgPage8 = await embedJpg(path.join(mediaDir, 'smart_water_control_clean.jpg'));               // 1376 x 768 HD
  const imgPage9 = await embedJpg(path.join(mediaDir, 'motorized_smart_curtains_hd.jpg')); // 1376 x 768 HD
  const imgPage10 = await embedJpg(path.join(mediaDir, 'temperature_monitor_clean.jpg'));             // 1376 x 768 HD
  const imgPage11 = await embedPng(path.join(origDir, 'page_10_2048x682_clear.png')); // 2048 x 682

  // Load 7 Modular Touch Panel Models for Page 5 (1200 x 896 HD)
  const imgPanel1M = await embedJpg(path.join(mediaDir, 'panel_1_moduler.jpg'));
  const imgPanel2M = await embedJpg(path.join(mediaDir, 'panel_2_moduler.jpg'));
  const imgPanel4M = await embedJpg(path.join(mediaDir, 'panel_4_moduler.jpg'));
  const imgPanel8M = await embedJpg(path.join(mediaDir, 'panel_8_moduler.jpg'));
  const imgPanel10M = await embedJpg(path.join(mediaDir, 'panel_10_moduler.jpg'));
  const imgPanel12M = await embedJpg(path.join(mediaDir, 'panel_12_moduler.jpg'));
  const imgPanel16M = await embedJpg(path.join(mediaDir, 'panel_16_moduler.jpg'));

  // Standard Header & Footer for Pages 2+
  // CRITICAL: NO TEAL / COLOURED LINE AT TOP!
  function drawHeaderFooter(page, sectionName, pageNumStr) {
    // Header Text
    page.drawText('NEUROLINX', {
      x: MARGIN_X,
      y: 802,
      size: 11,
      font: helveticaBold,
      color: brandRed
    });

    const subHeader = 'SMART HOME AUTOMATION';
    const subWidth = helvetica.widthOfTextAtSize(subHeader, 9);
    page.drawText(subHeader, {
      x: PAGE_WIDTH - MARGIN_X - subWidth,
      y: 802,
      size: 9,
      font: helvetica,
      color: textMuted
    });

    // Clean subtle hairline divider below header (NO teal/coloured line at top!)
    page.drawLine({
      start: { x: MARGIN_X, y: 790 },
      end: { x: PAGE_WIDTH - MARGIN_X, y: 790 },
      thickness: 0.5,
      color: dividerColor
    });

    // Footer divider
    page.drawLine({
      start: { x: MARGIN_X, y: 49 },
      end: { x: PAGE_WIDTH - MARGIN_X, y: 49 },
      thickness: 0.5,
      color: dividerColor
    });

    // Footer Text
    page.drawText(sectionName.toUpperCase(), {
      x: MARGIN_X,
      y: 32,
      size: 8,
      font: helvetica,
      color: textMuted
    });

    const numWidth = helveticaBold.widthOfTextAtSize(pageNumStr, 8);
    page.drawText(pageNumStr, {
      x: PAGE_WIDTH - MARGIN_X - numWidth,
      y: 32,
      size: 8,
      font: helveticaBold,
      color: textMuted
    });
  }

  // Draw 3 standard paragraphs matching original brochure typography
  function drawOriginalParagraphs(page, p1, p2, p3, startY = 390.9, gap = 65) {
    const size = 11.1;
    const leading = 17;

    function drawPara(text, y) {
      const words = text.split(' ');
      let currentLine = '';
      let curY = y;

      for (let i = 0; i < words.length; i++) {
        const testLine = currentLine ? `${currentLine} ${words[i]}` : words[i];
        const testWidth = helvetica.widthOfTextAtSize(testLine, size);

        if (testWidth > CONTENT_WIDTH && currentLine) {
          page.drawText(currentLine, { x: MARGIN_X, y: curY, size, font: helvetica, color: brandDark });
          currentLine = words[i];
          curY -= leading;
        } else {
          currentLine = testLine;
        }
      }

      if (currentLine) {
        page.drawText(currentLine, { x: MARGIN_X, y: curY, size, font: helvetica, color: brandDark });
      }
    }

    drawPara(p1, startY);
    if (p2) drawPara(p2, startY - gap);
    if (p3) drawPara(p3, startY - gap * 2);
  }

  // Helper to draw clipped image cleanly
  function drawClippedImage(page, img, clipY, clipH, drawX, drawY, drawW, drawH) {
    if (!img) return;
    page.pushOperators(
      pushGraphicsState(),
      moveTo(MARGIN_X, clipY),
      lineTo(MARGIN_X + CONTENT_WIDTH, clipY),
      lineTo(MARGIN_X + CONTENT_WIDTH, clipY + clipH),
      lineTo(MARGIN_X, clipY + clipH),
      closePath(),
      clip(),
      endPath()
    );

    page.drawImage(img, {
      x: drawX,
      y: drawY,
      width: drawW,
      height: drawH
    });

    page.pushOperators(popGraphicsState());
  }

  // =========================================================================
  // PAGE 1: COVER PAGE
  // CRITICAL: PURE WHITE BG + EXACT OLD SIZE FULL-BLEED IMAGE (NO DULLNESS)
  // =========================================================================
  {
    console.log('Building Page 1: Pure White Cover with exact old image size...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);

    // Explicit pure white background
    page.drawRectangle({
      x: 0,
      y: 0,
      width: PAGE_WIDTH,
      height: PAGE_HEIGHT,
      color: pureWhite
    });

    // Top Brand Tag
    page.drawText('NEUROLINX', {
      x: MARGIN_X,
      y: 795,
      size: 16,
      font: helveticaBold,
      color: brandRed
    });

    // Main Title
    page.drawText('SMART HOME', {
      x: MARGIN_X,
      y: 742,
      size: 34,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('AUTOMATION', {
      x: MARGIN_X,
      y: 701,
      size: 34,
      font: helveticaBold,
      color: brandDark
    });

    // Red Accent Underline
    page.drawRectangle({
      x: MARGIN_X,
      y: 686,
      width: 48,
      height: 3,
      color: brandRed
    });

    // EXACT OLD IMAGE SIZE & POSITION (Full Bleed across entire page width)
    // Exactly matching original brochure: x: -333.1158, y: 270, width: 1261.232, height: 420
    // Inside clipping box: x: 0, y: 270, width: 595.28, height: 420
    if (imgPage1) {
      page.pushOperators(
        pushGraphicsState(),
        moveTo(0, 270),
        lineTo(PAGE_WIDTH, 270),
        lineTo(PAGE_WIDTH, 690),
        lineTo(0, 690),
        closePath(),
        clip(),
        endPath()
      );

      page.drawImage(imgPage1, {
        x: -333.1158,
        y: 270,
        width: 1261.232,
        height: 420
      });

      page.pushOperators(popGraphicsState());
    }

    // Exact Original Cover Copy
    page.drawText('One Smart Control. Endless Possibilities.', {
      x: MARGIN_X,
      y: 222,
      size: 16,
      font: helveticaBold,
      color: brandDark
    });

    const desc1 = 'A contemporary collection of connected controls, lighting automation, energy monitoring, motorized';
    const desc2 = 'curtains and intelligent home-management solutions.';
    page.drawText(desc1, { x: MARGIN_X, y: 196, size: 10.5, font: helvetica, color: textMuted });
    page.drawText(desc2, { x: MARGIN_X, y: 180, size: 10.5, font: helvetica, color: textMuted });

    // Bottom Catalogue Bar
    page.drawLine({
      start: { x: MARGIN_X, y: 70 },
      end: { x: PAGE_WIDTH - MARGIN_X, y: 70 },
      thickness: 0.5,
      color: dividerColor
    });

    page.drawText('PRODUCT CATALOGUE  |  2026', {
      x: MARGIN_X,
      y: 50,
      size: 10,
      font: helveticaBold,
      color: brandRed
    });

    const url = 'WWW.NEUROLINX.IN';
    const urlW = helvetica.widthOfTextAtSize(url, 9);
    page.drawText(url, {
      x: PAGE_WIDTH - MARGIN_X - urlW,
      y: 50,
      size: 9,
      font: helvetica,
      color: textMuted
    });
  }

  // =========================================================================
  // PAGE 2: OVERVIEW
  // =========================================================================
  {
    console.log('Building Page 2: Overview (clear 2048x682 HD image)...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Overview', '02');

    page.drawText('Designed for Smarter Living', {
      x: MARGIN_X,
      y: 748,
      size: 29,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Connected experiences across everyday spaces', {
      x: MARGIN_X,
      y: 725,
      size: 11,
      font: helvetica,
      color: subtitleTeal
    });

    // Exact Original Image (Clear 2048x682 HD)
    if (imgPage2) {
      drawClippedImage(
        page,
        imgPage2,
        424,
        250,
        -77.87,
        424,
        750.73,
        250
      );
    }

    const p1 = 'Neurolinx brings together familiar wall controls and modern connected devices in a unified smart-home concept. The portfolio shown here spans retrofit and touch-panel interfaces, infrared appliance control, single-phase and three-phase energy metering, water control, motorized curtains, and environmental monitoring.';
    const p2 = 'A thoughtfully planned installation allows users to operate suitable devices from convenient control points while preserving an intuitive experience for family members and visitors. Actual functions depend on the selected model, wiring arrangement, network availability, and system configuration.';
    drawOriginalParagraphs(page, p1, p2, null, 388, 65);
  }

  // =========================================================================
  // PAGE 3: LIGHTING AUTOMATION
  // =========================================================================
  {
    console.log('Building Page 3: Lighting Automation (upscaled 1110x1773 HD image)...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Lighting Automation', '03');

    page.drawText('Lighting Automation', {
      x: MARGIN_X,
      y: 748,
      size: 29,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Back-End Devices', {
      x: MARGIN_X,
      y: 722,
      size: 11,
      font: helvetica,
      color: subtitleTeal
    });

    // Exact Original Image with Toggle Switch & Golden Glow (Upscaled HD)
    if (imgPage3) {
      drawClippedImage(
        page,
        imgPage3,
        425,
        264,
        MARGIN_X,
        148.89,
        511,
        816.22
      );
    }

    const p1 = 'Lighting automation combines switching devices, control modules and user interfaces so a home can manage its lights more conveniently. Back-end devices may be installed behind compatible switches or in suitable electrical enclosures, while front-end controls remain familiar to occupants.';
    const p2 = 'A well-designed system can support room-by-room switching, preset scenes and timed operation. In retrofit projects, the electrical load, neutral-wire availability, enclosure space and appropriate protection must be checked before selecting hardware.';
    const p3 = 'In living rooms, corridors and bedrooms, coordinated lighting scenes can make everyday routines simpler. Energy outcomes depend on the lighting equipment and how schedules and occupancy rules are configured.';
    drawOriginalParagraphs(page, p1, p2, p3, 390.9, 65);
  }

  // =========================================================================
  // PAGE 4: RETROFIT & TOUCH PANELS
  // =========================================================================
  {
    console.log('Building Page 4: Retrofit & Touch Panels (upscaled 1424x916 HD image)...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Retrofit & Touch Panels', '04');

    page.drawText('Retrofit & Touch Panels', {
      x: MARGIN_X,
      y: 748,
      size: 25,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Elegant Wall Controls', {
      x: MARGIN_X,
      y: 722,
      size: 11,
      font: helvetica,
      color: subtitleTeal
    });

    // Pristine 1376x768 HD image of touch panel on slatted wall (Zero dullness)
    if (imgPage4) {
      const imgH = 511 * (768 / 1376); // 285.2 pt
      const imgY = 425 - (imgH - 264) / 2;
      drawClippedImage(
        page,
        imgPage4,
        425,
        264,
        MARGIN_X,
        imgY,
        511,
        imgH
      );
    }

    const p1 = 'Retrofit automation is intended to add connected functionality to suitable existing electrical installations without requiring a complete redesign of the home. Touch panels provide a clean, modern interaction surface for common lighting and scene controls.';
    const p2 = 'The touch interface becomes a visible part of the interior design. Panel selection should consider the number of controlled circuits, load ratings, wiring, mounting dimensions and user accessibility. A manual method of control is especially useful when network connectivity is unavailable.';
    const p3 = 'Neurolinx product imagery illustrates premium wall-panel styling. Exact panel finishes, channel counts, dimming capabilities and voice compatibility should be confirmed against the chosen product specification.';
    drawOriginalParagraphs(page, p1, p2, p3, 390.9, 65);
  }

  // =========================================================================
  // PAGE 5: TOUCH PANELS MODELS (1, 2, 4, 8, 10, 12, 16)
  // CRITICAL REQUIREMENT: NO TABLE! USE THE ENTIRE PAGE ONLY FOR MODELS!
  // =========================================================================
  {
    console.log('Building Page 5: Touch Panels Models (NO TABLE - ONLY MODELS)...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Touch Panels Models', '05');

    page.drawText('Touch Panels Models', {
      x: MARGIN_X,
      y: 752,
      size: 26,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Available in 1, 2, 4, 8, 10, 12 and 16 Module Form Factors', {
      x: MARGIN_X,
      y: 726,
      size: 11.5,
      font: helvetica,
      color: subtitleTeal
    });

    // -----------------------------------------------------------------------
    // ROW 1: 3 Models (1 Module, 2 Module, 4 Module)
    // -----------------------------------------------------------------------
    const row1Y = 512;
    const row1H = 192;
    const cardW3 = (CONTENT_WIDTH - 2 * 12) / 3; // ~162.4 pt

    const row1Models = [
      {
        title: '1 MODULE',
        dim: '50 × 86 mm',
        box: '1M Flush Box',
        img: imgPanel1M
      },
      {
        title: '2 MODULE',
        dim: '86 × 86 mm',
        box: '2M Square Box',
        img: imgPanel2M
      },
      {
        title: '4 MODULE',
        dim: '146 × 86 mm',
        box: '4M Horizontal Box',
        img: imgPanel4M
      }
    ];

    row1Models.forEach((m, idx) => {
      const cardX = MARGIN_X + idx * (cardW3 + 12);

      // Card Container
      page.drawRectangle({
        x: cardX,
        y: row1Y,
        width: cardW3,
        height: row1H,
        color: cardBg,
        borderColor: dividerColor,
        borderWidth: 0.75
      });

      // Clear Model Image (aspect ratio 1200 x 896 -> 150 x 112)
      if (m.img) {
        const imgW = cardW3 - 12;
        const imgH = imgW * (896 / 1200);
        page.drawImage(m.img, {
          x: cardX + 6,
          y: row1Y + row1H - imgH - 6,
          width: imgW,
          height: imgH
        });
        page.drawRectangle({
          x: cardX + 6,
          y: row1Y + row1H - imgH - 6,
          width: imgW,
          height: imgH,
          borderColor: dividerColor,
          borderWidth: 0.5
        });
      }

      // Model Labels
      page.drawText(m.title, {
        x: cardX + 10,
        y: row1Y + 42,
        size: 11,
        font: helveticaBold,
        color: brandDark
      });

      page.drawText(m.dim, {
        x: cardX + 10,
        y: row1Y + 26,
        size: 9,
        font: helveticaBold,
        color: brandRed
      });

      page.drawText(m.box, {
        x: cardX + 10,
        y: row1Y + 12,
        size: 8,
        font: helvetica,
        color: textMuted
      });
    });

    // -----------------------------------------------------------------------
    // ROW 2: 3 Models (8 Module, 10 Module, 12 Module)
    // -----------------------------------------------------------------------
    const row2Y = 300;
    const row2H = 192;

    const row2Models = [
      {
        title: '8 MODULE',
        dim: '224 × 86 mm',
        box: '8M Horizontal Box',
        img: imgPanel8M
      },
      {
        title: '10 MODULE',
        dim: '250 × 146 mm',
        box: '10M Deep Box',
        img: imgPanel10M
      },
      {
        title: '12 MODULE',
        dim: '250 × 200 mm',
        box: '12M Two-Tier Box',
        img: imgPanel12M
      }
    ];

    row2Models.forEach((m, idx) => {
      const cardX = MARGIN_X + idx * (cardW3 + 12);

      // Card Container
      page.drawRectangle({
        x: cardX,
        y: row2Y,
        width: cardW3,
        height: row2H,
        color: cardBg,
        borderColor: dividerColor,
        borderWidth: 0.75
      });

      // Clear Model Image
      if (m.img) {
        const imgW = cardW3 - 12;
        const imgH = imgW * (896 / 1200);
        page.drawImage(m.img, {
          x: cardX + 6,
          y: row2Y + row2H - imgH - 6,
          width: imgW,
          height: imgH
        });
        page.drawRectangle({
          x: cardX + 6,
          y: row2Y + row2H - imgH - 6,
          width: imgW,
          height: imgH,
          borderColor: dividerColor,
          borderWidth: 0.5
        });
      }

      // Model Labels
      page.drawText(m.title, {
        x: cardX + 10,
        y: row2Y + 42,
        size: 11,
        font: helveticaBold,
        color: brandDark
      });

      page.drawText(m.dim, {
        x: cardX + 10,
        y: row2Y + 26,
        size: 9,
        font: helveticaBold,
        color: brandRed
      });

      page.drawText(m.box, {
        x: cardX + 10,
        y: row2Y + 12,
        size: 8,
        font: helvetica,
        color: textMuted
      });
    });

    // -----------------------------------------------------------------------
    // ROW 3: 16 MODULE GRAND SHOWCASE (Full Width, NO TABLE)
    // -----------------------------------------------------------------------
    const row3Y = 65;
    const row3H = 215;

    page.drawRectangle({
      x: MARGIN_X,
      y: row3Y,
      width: CONTENT_WIDTH,
      height: row3H,
      color: cardBg,
      borderColor: dividerColor,
      borderWidth: 0.75
    });

    // Large 16 Module Image on Left
    if (imgPanel16M) {
      const img16W = 265;
      const img16H = img16W * (896 / 1200); // ~197.8 pt
      page.drawImage(imgPanel16M, {
        x: MARGIN_X + 10,
        y: row3Y + 8,
        width: img16W,
        height: img16H
      });
      page.drawRectangle({
        x: MARGIN_X + 10,
        y: row3Y + 8,
        width: img16W,
        height: img16H,
        borderColor: dividerColor,
        borderWidth: 0.5
      });
    }

    // 16 Module Model Info on Right
    const infoX = MARGIN_X + 290;
    page.drawText('16 MODULE', {
      x: infoX,
      y: row3Y + row3H - 32,
      size: 15,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Master Grand Console', {
      x: infoX,
      y: row3Y + row3H - 49,
      size: 10.5,
      font: helveticaBold,
      color: brandRed
    });

    page.drawText('Dimensions: 250 × 250 mm', {
      x: infoX,
      y: row3Y + row3H - 72,
      size: 9.5,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Standard Box: 16M Grand Flush Enclosure', {
      x: infoX,
      y: row3Y + row3H - 88,
      size: 8.5,
      font: helvetica,
      color: textMuted
    });

    // Model features (bullet points only, strictly about the model, NO table)
    const bullets = [
      '16 Capacitive Touch Points + Dual Power Sockets',
      'Individual Backlit LED Touch Status Indicators',
      'Whole-Home Master Off & Scene Switching',
      'Luxury Scratch-Resistant Tempered Glass'
    ];

    bullets.forEach((b, i) => {
      const bY = row3Y + row3H - 116 - i * 18;
      page.drawText('•', { x: infoX, y: bY, size: 9, font: helveticaBold, color: brandRed });
      page.drawText(b, { x: infoX + 10, y: bY, size: 8.5, font: helvetica, color: brandDark });
    });
  }

  // =========================================================================
  // PAGE 6: UNIVERSAL IR BLASTER
  // =========================================================================
  {
    console.log('Building Page 6: Universal IR Blaster (upscaled 1424x916 HD image)...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Universal IR Blaster', '06');

    page.drawText('Universal IR Blaster', {
      x: MARGIN_X,
      y: 748,
      size: 29,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('One Interface for Infrared Appliances', {
      x: MARGIN_X,
      y: 722,
      size: 11,
      font: helvetica,
      color: subtitleTeal
    });

    // Pristine 1376x768 HD Image (Zero dullness, centered in 264pt clipping window)
    if (imgPage6) {
      const imgH = 511 * (768 / 1376); // 285.2 pt
      const imgY = 425 - (imgH - 264) / 2;
      drawClippedImage(
        page,
        imgPage6,
        425,
        264,
        MARGIN_X,
        imgY,
        511,
        imgH
      );
    }

    const p1 = 'A universal infrared blaster is designed to transmit compatible IR commands to devices such as televisions, set-top boxes and certain air conditioners. It can reduce dependence on multiple handheld remotes by placing commonly used commands into a suitable app or automation interface.';
    const p2 = 'Because infrared typically requires appropriate positioning and a clear transmission path, room layout matters. Compatibility depends on the appliance model and the command library or learning capability of the specific IR controller.';
    const p3 = 'For a practical living-room setup, frequently used functions can be grouped into simple controls. An IR blaster does not necessarily receive confirmation that an appliance executed a command, so device state should not be assumed without feedback.';
    drawOriginalParagraphs(page, p1, p2, p3, 390.9, 65);
  }

  // =========================================================================
  // PAGE 7: SMART ENERGY METERS
  // CRITICAL: PRISTINE 1024x576 HD ASSET (ZERO DULLNESS, RAZOR SHARP)
  // =========================================================================
  {
    console.log('Building Page 7: Smart Energy Meters (1024x576 pristine HD asset)...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Smart Energy Meters', '07');

    page.drawText('Smart Energy Meters', {
      x: MARGIN_X,
      y: 748,
      size: 29,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Single-Phase & Three-Phase Monitoring', {
      x: MARGIN_X,
      y: 722,
      size: 11,
      font: helvetica,
      color: subtitleTeal
    });

    // Pristine 1024x576 HD Image centered in 264pt clipping window
    if (imgPage7) {
      const imgH = 511 * (576 / 1024); // 287.4 pt
      const imgY = 425 - (imgH - 264) / 2;
      drawClippedImage(
        page,
        imgPage7,
        425,
        264,
        MARGIN_X,
        imgY,
        511,
        imgH
      );
    }

    const p1 = 'Smart energy meters can provide visibility into electrical consumption and help users understand where and when electricity is being used. Single-phase and three-phase installations have different electrical arrangements, so meter selection must match the supply and measurement requirements.';
    const p2 = 'Depending on the meter and software platform, useful information may include voltage, current, power, cumulative energy and historical trends. Data can support awareness, reporting and better-informed decisions about appliance schedules.';
    const p3 = 'Energy monitoring does not itself guarantee lower bills. Meter accuracy, current-transformer selection where applicable, communications and electrical installation must be verified by qualified professionals.';
    drawOriginalParagraphs(page, p1, p2, p3, 390.9, 65);
  }

  // =========================================================================
  // PAGE 8: SMART WATER CONTROL SYSTEM
  // CRITICAL: PRISTINE 1376x768 HD ASSET (ZERO DULLNESS, RAZOR SHARP)
  // =========================================================================
  {
    console.log('Building Page 8: Smart Water Control System (1376x768 pristine HD asset)...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Smart Water Control System', '08');

    page.drawText('Smart Water Control System', {
      x: MARGIN_X,
      y: 748,
      size: 29,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Connected Water Management', {
      x: MARGIN_X,
      y: 722,
      size: 11,
      font: helvetica,
      color: subtitleTeal
    });

    // Pristine 1376x768 HD Image centered in 264pt clipping window
    if (imgPage8) {
      const imgH = 511 * (768 / 1376); // 285.2 pt
      const imgY = 425 - (imgH - 264) / 2;
      drawClippedImage(
        page,
        imgPage8,
        425,
        264,
        MARGIN_X,
        imgY,
        511,
        imgH
      );
    }

    const p1 = 'Smart water-control solutions combine compatible sensors, valves, pumps or controllers to support convenient management of household water systems. Applications can include tank-level awareness, pump scheduling and status notifications when the installed hardware supports them.';
    const p2 = 'A practical system should account for water pressure, plumbing compatibility, power interruptions and manual override arrangements. Sensor placement and calibration are important for trustworthy readings, while control safeguards help avoid unintended operation.';
    const p3 = 'The product image illustrates a connected water-management concept. Leak detection, dry-run protection and remote shutoff should be described as available features only when confirmed for the specific installed model.';
    drawOriginalParagraphs(page, p1, p2, p3, 390.9, 65);
  }

  // =========================================================================
  // PAGE 9: MOTORIZED SMART CURTAINS
  // =========================================================================
  {
    console.log('Building Page 9: Motorized Smart Curtains (upscaled 1424x916 HD image)...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Motorized Smart Curtains', '09');

    page.drawText('Motorized Smart Curtains', {
      x: MARGIN_X,
      y: 748,
      size: 29,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Comfortable, Convenient Shading', {
      x: MARGIN_X,
      y: 722,
      size: 11,
      font: helvetica,
      color: subtitleTeal
    });

    // Pristine 1376x768 HD Image (Zero dullness, centered in 264pt clipping window)
    if (imgPage9) {
      const imgH = 511 * (768 / 1376); // 285.2 pt
      const imgY = 425 - (imgH - 264) / 2;
      drawClippedImage(
        page,
        imgPage9,
        425,
        264,
        MARGIN_X,
        imgY,
        511,
        imgH
      );
    }

    const p1 = 'Motorized curtain tracks automate the opening and closing of suitable curtains, adding convenience to living rooms, bedrooms and large glazed spaces. Control may be offered through a wall switch, dedicated remote, application or integrated scene, depending on the selected motor and controller.';
    const p2 = 'Curtain automation can be scheduled around daily routines or coordinated with compatible lighting systems. The track length, curtain weight, motor torque, available power and installation clearance determine the correct hardware configuration.';
    const p3 = 'Thoughtful commissioning includes setting travel limits, checking smooth movement and ensuring that curtains can be operated safely. Voice and mobile-app features require compatible integrations and should be verified before purchase.';
    drawOriginalParagraphs(page, p1, p2, p3, 390.9, 65);
  }

  // =========================================================================
  // PAGE 10: TEMPERATURE MONITORING
  // =========================================================================
  {
    console.log('Building Page 10: Temperature Monitoring (1376x768 pristine HD asset)...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Temperature Monitoring', '10');

    page.drawText('Temperature Monitoring', {
      x: MARGIN_X,
      y: 748,
      size: 29,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Room Conditions & Alerts', {
      x: MARGIN_X,
      y: 722,
      size: 11,
      font: helvetica,
      color: subtitleTeal
    });

    // Pristine 1376x768 HD Image centered in 264pt clipping window
    if (imgPage10) {
      const imgH = 511 * (768 / 1376); // 285.2 pt
      const imgY = 425 - (imgH - 264) / 2;
      drawClippedImage(
        page,
        imgPage10,
        425,
        264,
        MARGIN_X,
        imgY,
        511,
        imgH
      );
    }

    const p1 = 'A connected temperature monitor helps residents observe conditions in a room and can provide humidity readings when a suitable combined sensor is used. Clear on-screen measurements make environmental information easier to understand at a glance.';
    const p2 = 'When paired with a supported app or automation platform, sensor readings may be used for notifications or to trigger compatible equipment. Alert thresholds should be chosen for the room and the purpose of monitoring, with consideration for sensor accuracy and placement.';
    const p3 = 'Temperature and humidity monitoring is useful for general comfort awareness but should not be presented as a certified medical, fire-safety or industrial protection system unless the actual device is approved for that application.';
    drawOriginalParagraphs(page, p1, p2, p3, 390.9, 65);
  }

  // =========================================================================
  // PAGE 11: ONE CONNECTED EXPERIENCE
  // =========================================================================
  {
    console.log('Building Page 11: One Connected Experience (2048x682 HD image)...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Connected Experience', '11');

    page.drawText('One Connected Experience', {
      x: MARGIN_X,
      y: 748,
      size: 29,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('From individual products to coordinated spaces', {
      x: MARGIN_X,
      y: 722,
      size: 11,
      font: helvetica,
      color: subtitleTeal
    });

    // Clear 2048x682 HD Image
    if (imgPage11) {
      drawClippedImage(
        page,
        imgPage11,
        424,
        250,
        -77.87,
        424,
        750.73,
        250
      );
    }

    const p1 = 'A smart-home experience is strongest when individual controls feel like one coherent system. Wall panels, app interfaces, infrared controls, motorized curtains and environmental monitoring can be arranged around the routines of the household, subject to the supported functions of each device.';
    const p2 = 'A typical evening scene might combine compatible room lighting and curtain movement, while an energy dashboard offers a separate view of electricity consumption. Automation rules should be tested carefully, especially where pumps, valves or other powered equipment are involved.';
    const p3 = 'Connected-home standards such as Matter aim to improve interoperability across certified devices and ecosystems. However, no specific Neurolinx product in this catalogue is claimed to be Matter-certified; verify interoperability, app support and voice-assistant compatibility by model.';
    drawOriginalParagraphs(page, p1, p2, p3, 390.9, 65);
  }

  // =========================================================================
  // PAGE 12: PLAN FOR RELIABILITY
  // =========================================================================
  {
    console.log('Building Page 12: Plan for Reliability...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Planning and Installation', '12');

    page.drawText('Plan for Reliability', {
      x: MARGIN_X,
      y: 748,
      size: 29,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Design, installation and long-term usability', {
      x: MARGIN_X,
      y: 722,
      size: 11,
      font: helvetica,
      color: subtitleTeal
    });

    const p1 = 'Successful smart-home projects begin with a room-by-room assessment of the existing wiring, network coverage, equipment ratings and user requirements. Device locations should be chosen for convenience, signal coverage and access for maintenance.';
    const p2 = 'Electrical devices and meters should be installed and commissioned by qualified personnel in accordance with applicable local electrical rules and manufacturer instructions. Water-control components also require suitable plumbing arrangements and fail-safe operating considerations.';
    const p3 = 'During handover, users should be shown how to operate essential functions, how to respond to a network outage and how to identify the correct support channel. Regular firmware maintenance, strong account security and clear permissions help keep a connected home manageable.';
    const p4 = 'This brochure describes product categories and intended use cases. It is not a technical datasheet or certification declaration. Final product capabilities, ratings, supported protocols, warranties and compliance details must be confirmed from official Neurolinx documentation.';

    function drawCustomPara(text, y) {
      const size = 10.5;
      const leading = 16;
      const words = text.split(' ');
      let currentLine = '';
      let curY = y;

      for (let i = 0; i < words.length; i++) {
        const testLine = currentLine ? `${currentLine} ${words[i]}` : words[i];
        const testWidth = helvetica.widthOfTextAtSize(testLine, size);

        if (testWidth > CONTENT_WIDTH && currentLine) {
          page.drawText(currentLine, { x: MARGIN_X, y: curY, size, font: helvetica, color: brandDark });
          currentLine = words[i];
          curY -= leading;
        } else {
          currentLine = testLine;
        }
      }

      if (currentLine) {
        page.drawText(currentLine, { x: MARGIN_X, y: curY, size, font: helvetica, color: brandDark });
      }
    }

    drawCustomPara(p1, 675);
    drawCustomPara(p2, 605);
    drawCustomPara(p3, 535);
    drawCustomPara(p4, 465);

    // Corporate Contact box at bottom
    const boxY = 85;
    const boxH = 150;
    page.drawRectangle({
      x: MARGIN_X,
      y: boxY,
      width: CONTENT_WIDTH,
      height: boxH,
      color: cardBg,
      borderColor: dividerColor,
      borderWidth: 0.75
    });

    page.drawText('NEUROLINX GLOBAL PRIVATE LIMITED', {
      x: MARGIN_X + 20,
      y: boxY + boxH - 26,
      size: 11,
      font: helveticaBold,
      color: brandRed
    });

    page.drawText('Electronics, Automation & AI Robotics Systems', {
      x: MARGIN_X + 20,
      y: boxY + boxH - 42,
      size: 9.5,
      font: helvetica,
      color: brandDark
    });

    page.drawText('Headquarters:', { x: MARGIN_X + 20, y: boxY + 74, size: 9, font: helveticaBold, color: brandDark });
    page.drawText('C12/A, Industrial Area, Kushaiguda, Hyderabad, Secunderabad, Telangana 500062, India', {
      x: MARGIN_X + 20,
      y: boxY + 58,
      size: 8.5,
      font: helvetica,
      color: textMuted
    });

    page.drawText('Contact: +91 7013486961  |  +91 8074067851   •   Email: support@neurolinx.in  |  info@neurolinx.in', {
      x: MARGIN_X + 20,
      y: boxY + 36,
      size: 8.5,
      font: helvetica,
      color: textMuted
    });

    page.drawText('Official Website: www.neurolinx.in', {
      x: MARGIN_X + 20,
      y: boxY + 16,
      size: 8.5,
      font: helveticaBold,
      color: brandRed
    });
  }

  // =========================================================================
  // PAGE 13: INDUSTRY CONTEXT & REFERENCES
  // =========================================================================
  {
    console.log('Building Page 13: Industry Context & References...');
    const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    drawHeaderFooter(page, 'Research and References', '13');

    page.drawText('Industry Context', {
      x: MARGIN_X,
      y: 748,
      size: 29,
      font: helveticaBold,
      color: brandDark
    });

    page.drawText('Public sources used for general technology background', {
      x: MARGIN_X,
      y: 722,
      size: 11,
      font: helvetica,
      color: subtitleTeal
    });

    let curY = 675;

    const references = [
      {
        title: 'ENERGY STAR - Smart Home Energy Management Systems',
        url: 'https://www.energystar.gov/products/smart_home_energy_mgnt_systems'
      },
      {
        title: 'ENERGY STAR - Smart Home Tips',
        url: 'https://www.energystar.gov/products/smart_home_tips'
      },
      {
        title: 'Connectivity Standards Alliance - Matter',
        url: 'https://csa-iot.org/all-solutions/matter/'
      },
      {
        title: 'Connectivity Standards Alliance - Matter FAQs',
        url: 'https://csa-iot.org/all-solutions/matter/matter-faq/'
      }
    ];

    references.forEach(ref => {
      page.drawText(ref.title, {
        x: MARGIN_X,
        y: curY,
        size: 10.5,
        font: helveticaBold,
        color: brandDark
      });
      curY -= 16;
      page.drawText(ref.url, {
        x: MARGIN_X,
        y: curY,
        size: 9,
        font: helvetica,
        color: subtitleTeal
      });
      curY -= 26;
    });

    // Source note box (Exact from original brochure)
    const noteBoxY = 120;
    const noteBoxH = 175;

    page.drawRectangle({
      x: MARGIN_X,
      y: noteBoxY,
      width: CONTENT_WIDTH,
      height: noteBoxH,
      color: cardBg,
      borderColor: dividerColor,
      borderWidth: 0.75
    });

    page.drawText('Source Note & Publication Notice:', {
      x: MARGIN_X + 18,
      y: noteBoxY + noteBoxH - 26,
      size: 10,
      font: helveticaBold,
      color: brandRed
    });

    function drawWrappedNote(text, startY) {
      const size = 9.5;
      const leading = 15;
      const maxWidth = CONTENT_WIDTH - 36;
      const words = text.split(' ');
      let currentLine = '';
      let curY = startY;

      for (let i = 0; i < words.length; i++) {
        const testLine = currentLine ? `${currentLine} ${words[i]}` : words[i];
        const testWidth = helvetica.widthOfTextAtSize(testLine, size);

        if (testWidth > maxWidth && currentLine) {
          page.drawText(currentLine, { x: MARGIN_X + 18, y: curY, size, font: helvetica, color: brandDark });
          currentLine = words[i];
          curY -= leading;
        } else {
          currentLine = testLine;
        }
      }

      if (currentLine) {
        page.drawText(currentLine, { x: MARGIN_X + 18, y: curY, size, font: helvetica, color: brandDark });
      }
    }

    drawWrappedNote(
      'The product names and imagery come from the user-provided Neurolinx screenshots. The explanatory text is original brochure copy informed by general industry references, not a quotation or verified Neurolinx specification.',
      noteBoxY + noteBoxH - 48
    );

    drawWrappedNote(
      'Product photography in the screenshots is illustrative. Verify exact product variants, certifications, technical ratings, availability and integrations before external publication.',
      noteBoxY + noteBoxH - 110
    );
  }

  // Save the PDF
  const pdfBytes = await doc.save();
  const outputPath = path.join(__dirname, '../public/media/smart_home_automation_brochure.pdf');
  const distPath = path.join(__dirname, '../dist/media/smart_home_automation_brochure.pdf');

  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Saved updated brochure to: ${outputPath} (${pdfBytes.length} bytes)`);

  if (fs.existsSync(path.join(__dirname, '../dist/media'))) {
    fs.writeFileSync(distPath, pdfBytes);
    console.log(`Saved updated brochure to: ${distPath}`);
  }

  console.log('Done!');
}

buildBrochure().catch(err => {
  console.error('Error generating brochure:', err);
  process.exit(1);
});
