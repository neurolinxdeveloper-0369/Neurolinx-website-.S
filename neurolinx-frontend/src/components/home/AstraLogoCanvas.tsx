import React, { useEffect, useRef } from 'react';
import { LOGO_POINTS } from './logoPoints';

interface Particle {
  x: number;
  y: number;
  startX: number;
  startY: number;
  departX: number;
  departY: number;
  hasDeparted: boolean;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  isRed: boolean;
  baseAlpha: number;
  delay: number;
  duration: number;
  normDx: number;
  normDy: number;
  curveDist: number;
  phase: number;
  isLanded: boolean;

  // Pure Circle in Center (Strictly Circular Formation, 0 Protruding Arms)
  circleR: number;            // Radius <= circleRadius
  circleBaseAngle: number;    // Angle in circle
  circleSpeedMult: number;    // Subtle celestial spin

  // Moving Side Starfield: Truly Random 2D Distribution (Zero Lines, Zero Rows)
  isSideStardust: boolean;
  sideIsLeft: boolean;
  sideBaseX: number;
  sideBaseY: number;
  sideVx: number;             // Continuous horizontal drift
  sideVy: number;             // Continuous upward floating speed
  swayAmpX: number;           // Gentle horizontal floating sway
  swayAmpY: number;           // Gentle vertical floating breathing
  swaySpeedX: number;         // Sway oscillation frequency
  swaySpeedY: number;
  swayPhaseX: number;         // Unique sway phase
  swayPhaseY: number;
  sideRadius: number;
  sideBaseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  isBrightStar: boolean;
  burstArcY: number;
  dispX: number;
  dispY: number;
  divideStagger: number;
}

interface AmbientParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  isRed: boolean;
  baseAlpha: number;
  pulseSpeed: number;
  isBright: boolean;
}

export function AstraLogoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    let particles: Particle[] = [];
    let ambientParticles: AmbientParticle[] = [];
    let startTime: number | null = null;

    // Geometric anchors for 3D logo hit detection & rotation
    let logoCenterX = 0;
    let logoCenterY = 0;
    let logoHitRadius = 200;

    // Flank boundaries for left and right side stardust
    let leftMinX = 18;
    let leftMaxX = 220;
    let rightMinX = 800;
    let rightMaxX = 1000;

    // Interactive 360 rotation & smooth non-bouncing auto-return
    let activeDragTarget: 'logo' | null = null;
    let isDragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;

    let logoRotX = 0;
    let logoRotY = 0;
    let logoTargetRotX = 0;
    let logoTargetRotY = 0;

    let smoothedScrollY = window.scrollY;

    // Smooth mouse tracking (for hover effects at top)
    const mouse = {
      targetX: -9999,
      targetY: -9999,
      x: -9999,
      y: -9999,
      active: false,
      radius: 130,
    };

    const initParticles = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Responsive size for logo: ~440px desktop, ~270px mobile
      const targetSize = Math.min(width * 0.85, height * 0.72, width > 768 ? 440 : 270);
      const scale = targetSize / 66;

      // Position logo towards the right side on desktop, centered lower on mobile
      logoCenterX = width > 768 
        ? Math.min(width * 0.65, width - targetSize / 2 - 60)
        : width / 2;
      logoCenterY = width > 768 ? height / 2 : height * 0.62;
      logoHitRadius = targetSize * 0.62;

      particles = [];
      const particlesPerPoint = width > 768 ? 3 : 2;

      // High-Entropy 32-bit PRNG (Mulberry32) - zero lattice planes, true uniform 2D distribution
      let seed = 20261031;
      const seededRandom = () => {
        seed |= 0;
        seed = (seed + 0x6D2B79F5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };

      // Pure Circular Formation in Center (Radius ~150px - 175px, perfect circle, 0 protruding arms)
      const circleRadius = Math.min(width, height) * (width > 768 ? 0.16 : 0.20);

      // Strict Content Clearance: content container is centered (max-w-7xl with px-8)
      const contentMaxWidth = 1200;
      const marginWidth = Math.max(25, (width - contentMaxWidth) / 2);
      const leftMarginEnd = Math.max(25, marginWidth - 25);
      const rightMarginStart = width - leftMarginEnd;

      // 1. Initialize 3D Hexagonal Logo Particles + Perfect Circle Targets
      for (let i = 0; i < LOGO_POINTS.length; i++) {
        const [ptX, ptY, isRed] = LOGO_POINTS[i];
        const baseX = logoCenterX + (ptX - 35) * scale;
        const baseY = logoCenterY + (ptY - 35) * scale;

        for (let p = 0; p < particlesPerPoint; p++) {
          const jitterX = (seededRandom() - 0.5) * scale * 0.75;
          const jitterY = (seededRandom() - 0.5) * scale * 0.75;
          const originX = baseX + jitterX;
          const originY = baseY + jitterY;
          const radius = seededRandom() * 0.32 + (width > 768 ? 0.68 : 0.55);

          // Full-page distribution before initial convergence
          const marginX = width * 0.12;
          const marginY = height * 0.12;
          const startX = -marginX + seededRandom() * (width + marginX * 2);
          const startY = -marginY + seededRandom() * (height + marginY * 2);

          const dx = originX - startX;
          const dy = originY - startY;
          const dist = Math.hypot(dx, dy);

          const udx = dx / (dist || 1);
          const udy = dy / (dist || 1);
          const normDx = -udy;
          const normDy = udx;

          const vortexTx = -(startY - logoCenterY);
          const vortexTy = startX - logoCenterX;
          const dot = normDx * vortexTx + normDy * vortexTy;
          const swirlSign = dot >= 0 ? 1 : -1;
          const curveDist = (0.22 + seededRandom() * 0.28) * dist * swirlSign;

          const distFromCenter = Math.hypot(startX - logoCenterX, startY - logoCenterY);
          const maxDist = Math.hypot(width / 2, height / 2);
          const normDist = Math.min(1.2, distFromCenter / (maxDist || 1));

          const delay = 1400 + normDist * 400 + seededRandom() * 260;
          const duration = 2200 + seededRandom() * 400;

          // Pure Circle Coordinates in Center (Dense center core + radiant disc falloff)
          const u = seededRandom();
          const circleR = circleRadius * Math.pow(u, 0.65);
          const circleBaseAngle = seededRandom() * Math.PI * 2;
          const circleSpeedMult = 0.85 + 0.30 * (1 - circleR / circleRadius);

          particles.push({
            x: startX,
            y: startY,
            startX,
            startY,
            departX: startX,
            departY: startY,
            hasDeparted: false,
            originX,
            originY,
            vx: 0,
            vy: 0,
            radius,
            baseRadius: radius,
            isRed: isRed === 1,
            baseAlpha: seededRandom() * 0.35 + 0.65,
            delay,
            duration,
            normDx,
            normDy,
            curveDist,
            phase: seededRandom() * Math.PI * 2,
            isLanded: false,
            circleR,
            circleBaseAngle,
            circleSpeedMult,
            isSideStardust: false,
            sideIsLeft: false,
            sideBaseX: 0,
            sideBaseY: 0,
            sideVx: 0,
            sideVy: 0,
            swayAmpX: 0,
            swayAmpY: 0,
            swaySpeedX: 0,
            swaySpeedY: 0,
            swayPhaseX: 0,
            swayPhaseY: 0,
            sideRadius: radius,
            sideBaseAlpha: 0.6,
            pulseSpeed: 1.0,
            pulsePhase: 0,
            isBrightStar: false,
            burstArcY: 0,
            dispX: 0,
            dispY: 0,
            divideStagger: 0,
          });
        }
      }

      // Group particles by color to maintain ~30% Red / 70% Silver brand palette
      const redIndices: number[] = [];
      const silverIndices: number[] = [];
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].isRed) redIndices.push(i);
        else silverIndices.push(i);
      }

      // Shuffle indices for unbiased selection across the logo
      for (let i = redIndices.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom() * (i + 1));
        [redIndices[i], redIndices[j]] = [redIndices[j], redIndices[i]];
      }
      for (let i = silverIndices.length - 1; i > 0; i--) {
        const j = Math.floor(seededRandom() * (i + 1));
        [silverIndices[i], silverIndices[j]] = [silverIndices[j], silverIndices[i]];
      }

      // Reduced particles for left and right flanks (light, starry, truly random, non-crowded)
      const targetSideCount = width > 1200 ? 50 : (width > 768 ? 36 : 22);
      const sideRedCount = Math.max(5, Math.floor(targetSideCount * 0.30));
      const sideSilverCount = targetSideCount - sideRedCount;

      const leftSelectedIndices = [
        ...redIndices.slice(0, sideRedCount),
        ...silverIndices.slice(0, sideSilverCount)
      ];
      const rightSelectedIndices = [
        ...redIndices.slice(sideRedCount, sideRedCount * 2),
        ...silverIndices.slice(sideSilverCount, sideSilverCount * 2)
      ];

      // Broad organic margins for truly random placement across left and right sides
      leftMinX = 18;
      leftMaxX = Math.min(width * 0.28, Math.max(160, leftMarginEnd));
      const leftSpanX = Math.max(60, leftMaxX - leftMinX);

      rightMinX = Math.max(width * 0.72, Math.min(width - 160, rightMarginStart));
      rightMaxX = width - 18;
      const rightSpanX = Math.max(60, rightMaxX - rightMinX);

      // Configure helper to apply random stardust characteristics to all particles spreading to left and right
      const configureSideStardust = (
        selectedIndices: number[],
        isLeft: boolean,
        minX: number,
        spanX: number
      ) => {
        const count = selectedIndices.length;
        for (let k = 0; k < count; k++) {
          const p = particles[selectedIndices[k]];
          p.isSideStardust = true;
          p.sideIsLeft = isLeft;

          // Pure uniform random placement across the side flank margin
          p.sideBaseY = seededRandom() * height;
          p.sideBaseX = minX + seededRandom() * spanX;

          // Continuous 2D gentle floating vectors (calm, subtle, reduced speed)
          p.sideVx = (seededRandom() - 0.5) * 0.10;
          p.sideVy = -(0.03 + seededRandom() * 0.08);
          p.swayAmpX = 2.0 + seededRandom() * 4.5;
          p.swayAmpY = 1.5 + seededRandom() * 3.5;
          p.swaySpeedX = 0.18 + seededRandom() * 0.35;
          p.swaySpeedY = 0.14 + seededRandom() * 0.28;
          p.swayPhaseX = seededRandom() * Math.PI * 2;
          p.swayPhaseY = seededRandom() * Math.PI * 2;
          p.pulseSpeed = 0.8 + seededRandom() * 1.6;
          p.pulsePhase = seededRandom() * Math.PI * 2;
          p.burstArcY = (seededRandom() - 0.5) * 1.8;
          p.divideStagger = (k / count) * 0.70 + seededRandom() * 0.30;

          // 3-Tier starfield sizing & luminosity
          const tier = seededRandom();
          if (tier < 0.70) {
            p.sideRadius = 0.45 + seededRandom() * 0.30;
            p.sideBaseAlpha = 0.40 + seededRandom() * 0.30;
            p.isBrightStar = false;
          } else if (tier < 0.92) {
            p.sideRadius = 0.80 + seededRandom() * 0.35;
            p.sideBaseAlpha = 0.65 + seededRandom() * 0.25;
            p.isBrightStar = false;
          } else {
            p.sideRadius = 1.25 + seededRandom() * 0.35;
            p.sideBaseAlpha = 0.88 + seededRandom() * 0.12;
            p.isBrightStar = true;
          }
        }
      };

      configureSideStardust(leftSelectedIndices, true, leftMinX, leftSpanX);
      configureSideStardust(rightSelectedIndices, false, rightMinX, rightSpanX);

      // 2. Hero Section Whole-Page Random Moving Ambient Dust (~170 moving particles across full viewport)
      ambientParticles = [];
      const ambientCount = width > 1024 ? 170 : (width > 768 ? 110 : 65);
      for (let a = 0; a < ambientCount; a++) {
        const x = seededRandom() * width;
        const y = seededRandom() * height;

        const tierRoll = seededRandom();
        let radius: number;
        let baseAlpha: number;
        let isBright = false;

        if (tierRoll < 0.70) {
          radius = seededRandom() * 0.28 + 0.38;
          baseAlpha = seededRandom() * 0.25 + 0.30;
        } else if (tierRoll < 0.92) {
          radius = seededRandom() * 0.38 + 0.70;
          baseAlpha = seededRandom() * 0.25 + 0.52;
        } else {
          radius = seededRandom() * 0.45 + 1.15;
          baseAlpha = seededRandom() * 0.15 + 0.78;
          isBright = true;
        }

        ambientParticles.push({
          x,
          y,
          vx: (seededRandom() - 0.5) * 0.28,
          vy: (seededRandom() - 0.5) * 0.28,
          radius,
          phase: seededRandom() * Math.PI * 2,
          isRed: seededRandom() > 0.45,
          baseAlpha,
          pulseSpeed: seededRandom() * 1.4 + 0.8,
          isBright,
        });
      }
    };

    const loadFontAndInit = async () => {
      try {
        if (document.fonts) {
          await document.fonts.load(`800 64px 'Space Grotesk'`);
          await document.fonts.ready;
        }
      } catch {
        // Fallback gracefully
      }
      initParticles();
    };
    loadFontAndInit();

    // Helper to wrap angle to [-PI, PI] for shortest, smoothest return without extra spins
    const wrapAngle = (angle: number) => {
      let a = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      if (a > Math.PI) a -= Math.PI * 2;
      return a;
    };

    // Strict detection for cursor hover styling ('grab')
    const isOverTarget = (clientX: number, clientY: number): 'logo' | null => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Logo circular area
      const distLogo = Math.hypot(x - logoCenterX, y - logoCenterY);
      if (distLogo <= logoHitRadius * 1.1) {
        return 'logo';
      }

      return null;
    };

    // Inclusive target detection for click-and-drag rotation of 3D logo
    const getDragTarget = (clientX: number, clientY: number): 'logo' | null => {
      const strict = isOverTarget(clientX, clientY);
      if (strict) return strict;

      if (smoothedScrollY < 80) {
        const rect = canvas.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const distLogo = Math.hypot(x - logoCenterX, y - logoCenterY);
        if (distLogo < logoHitRadius * 1.6) return 'logo';
      }

      return null;
    };

    const handlePointerDown = (clientX: number, clientY: number) => {
      if (smoothedScrollY > 80) return;
      const target = getDragTarget(clientX, clientY);
      if (!target) return;

      activeDragTarget = target;
      isDragging = true;
      lastPointerX = clientX;
      lastPointerY = clientY;
      canvas.style.cursor = 'grabbing';
    };

    const handlePointerMove = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      mouse.targetX = x;
      mouse.targetY = y;
      mouse.active = true;

      if (isDragging && activeDragTarget) {
        const dx = clientX - lastPointerX;
        const dy = clientY - lastPointerY;
        lastPointerX = clientX;
        lastPointerY = clientY;

        // Smooth 360 degree rotation sensitivity in all directions (up, down, right, left)
        const ROT_SENSITIVITY = 0.0125;

        if (activeDragTarget === 'logo') {
          logoTargetRotY += dx * ROT_SENSITIVITY;
          logoTargetRotX += dy * ROT_SENSITIVITY;
        }
      } else {
        if (smoothedScrollY < 80) {
          const hovered = isOverTarget(clientX, clientY);
          canvas.style.cursor = hovered ? 'grab' : 'default';
        } else {
          canvas.style.cursor = 'default';
        }
      }
    };

    const handlePointerUp = () => {
      if (isDragging) {
        isDragging = false;
        activeDragTarget = null;
        canvas.style.cursor = 'default';

        // Auto-return: normalize angles so it takes shortest, smoothest route back to 0
        logoTargetRotX = 0;
        logoTargetRotY = 0;
        logoRotX = wrapAngle(logoRotX);
        logoRotY = wrapAngle(logoRotY);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      handlePointerDown(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      handlePointerUp();
    };

    const handleMouseLeave = () => {
      handlePointerUp();
      mouse.active = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const target = getDragTarget(touch.clientX, touch.clientY);
        if (target && smoothedScrollY < 80) {
          handlePointerDown(touch.clientX, touch.clientY);
          if (e.cancelable) e.preventDefault();
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        if (isDragging && e.cancelable) {
          e.preventDefault();
        }
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      handlePointerUp();
      mouse.active = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    const handleResize = () => {
      initParticles();
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);
    window.addEventListener('resize', handleResize);

    const smoothstep = (min: number, max: number, v: number) => {
      const x = Math.max(0, Math.min(1, (v - min) / (max - min)));
      return x * x * (3 - 2 * x);
    };

    const render = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsed = time - startTime;
      const t = time * 0.001;

      // Smooth scroll tracking
      const targetScrollY = window.scrollY;
      smoothedScrollY += (targetScrollY - smoothedScrollY) * 0.16;
      if (Math.abs(targetScrollY - smoothedScrollY) < 0.2) {
        smoothedScrollY = targetScrollY;
      }

      const scrollProgress = smoothedScrollY / Math.max(1, height);

      // Stage 1: Logo -> Perfect Circle in Center (S: 0.02 -> 0.30)
      const easeGalaxy = smoothstep(0.02, 0.30, scrollProgress);

      // Stage 2: Spreading outward from Center to Left & Right (S: 0.28 -> 0.78)
      const easeSpread = smoothstep(0.28, 0.78, scrollProgress);

      // Pointer events: active at top for 360 drag; disabled on scroll so content is clickable
      if (canvasRef.current) {
        if (smoothedScrollY < 75) {
          if (canvasRef.current.style.pointerEvents !== 'auto') {
            canvasRef.current.style.pointerEvents = 'auto';
          }
        } else {
          if (canvasRef.current.style.pointerEvents !== 'none') {
            canvasRef.current.style.pointerEvents = 'none';
          }
        }
      }

      const rawGlobalFade = Math.min(1, elapsed / 450);
      const globalFade = rawGlobalFade * rawGlobalFade * (3 - 2 * rawGlobalFade);

      ctx.save();
      ctx.scale(dpr, dpr);

      // Transparent clearing: page content shows through with 100% clarity
      ctx.clearRect(0, 0, width, height);

      const galaxyCenterX = width / 2;
      const galaxyCenterY = height / 2;

      // Exact Content Exclusion Corridor:
      // Absolutely 0 particles can ever be drawn inside [leftMarginEnd, rightMarginStart] when scrolled!
      const contentMaxWidth = 1200;
      const marginWidth = Math.max(25, (width - contentMaxWidth) / 2);
      const leftMarginEnd = Math.max(25, marginWidth - 25);
      const rightMarginStart = width - leftMarginEnd;

      // Soft ambient crimson nebula glow behind logo at top
      const rawBloom = Math.min(1, Math.max(0, (elapsed - 1400) / 2200));
      const nebulaBloom = rawBloom * rawBloom * (3 - 2 * rawBloom) * (1 - easeGalaxy);
      if (nebulaBloom > 0.01) {
        const glowRadius = Math.min(width, height) * 0.42;
        const glowCenterX = logoCenterX;
        const glowCenterY = logoCenterY;
        const nebulaGlow = ctx.createRadialGradient(glowCenterX, glowCenterY, 0, glowCenterX, glowCenterY, glowRadius);
        nebulaGlow.addColorStop(0, `rgba(226, 39, 39, ${0.14 * nebulaBloom})`);
        nebulaGlow.addColorStop(0.35, `rgba(160, 20, 30, ${0.05 * nebulaBloom})`);
        nebulaGlow.addColorStop(0.7, `rgba(30, 10, 20, ${0.015 * nebulaBloom})`);
        nebulaGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = nebulaGlow;
        ctx.beginPath();
        ctx.arc(glowCenterX, glowCenterY, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Circular formation radius in center
      const circleRadius = Math.min(width, height) * (width > 768 ? 0.16 : 0.20);

      const rawLogoFade = Math.min(1, Math.max(0, (elapsed - 900) / 700));
      const logoFade = rawLogoFade * rawLogoFade * (3 - 2 * rawLogoFade);

      if (mouse.active && smoothedScrollY < 60) {
        mouse.x += (mouse.targetX - mouse.x) * 0.35;
        mouse.y += (mouse.targetY - mouse.y) * 0.35;
      } else {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      const mouseRadius = mouse.radius;
      const mouseRadiusSq = mouseRadius * mouseRadius;

      // Outward burst shockwave when AboutUs text strikes
      const strikeBurst = Math.sin(easeSpread * Math.PI);

      // Central Corridor Dissolve Factor:
      // Center circle stays present and gradually dissolves as particles stream out to margins
      const centerCorridorFade = Math.max(0, 1 - smoothstep(0.48, 0.82, scrollProgress));

      // Release drag if scrolled down
      if (smoothedScrollY > 70 && isDragging) {
        handlePointerUp();
      }

      // 1. Logo Smooth Rotation Update (Interactive 360 drag + Non-bouncing smooth auto-return)
      if (isDragging && activeDragTarget === 'logo') {
        logoRotX += (logoTargetRotX - logoRotX) * 0.35;
        logoRotY += (logoTargetRotY - logoRotY) * 0.35;
      } else {
        // Auto-return to original position (0, 0)
        // Zero bounce: pure monotonic exponential decay straight to 0
        const RETURN_SPEED = 0.085;
        logoRotX += (0 - logoRotX) * RETURN_SPEED;
        logoRotY += (0 - logoRotY) * RETURN_SPEED;

        if (Math.abs(logoRotX) < 0.0004) logoRotX = 0;
        if (Math.abs(logoRotY) < 0.0004) logoRotY = 0;
        if (logoRotX === 0 && logoRotY === 0) {
          logoTargetRotX = 0;
          logoTargetRotY = 0;
        }
      }

      // 3D rotation projection setup for Logo
      const FOCAL_LENGTH = 900;
      const logoCosY = Math.cos(logoRotY);
      const logoSinY = Math.sin(logoRotY);
      const logoCosX = Math.cos(logoRotX);
      const logoSinX = Math.sin(logoRotX);

      // 1. UPDATE & POSITION LOGO PARTICLES (Logo -> Pure Circle in Center -> Left/Right Starfield)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1A. State 1: 3D Perspective Rotated Logo Coordinate
        const relX = p.originX - logoCenterX;
        const relY = p.originY - logoCenterY;

        // Yaw around Y-axis (horizontal drag)
        const x1 = relX * logoCosY;
        const z1 = -relX * logoSinY;
        const y1 = relY;

        // Pitch around X-axis (vertical drag)
        const x2 = x1;
        const y2 = y1 * logoCosX - z1 * logoSinX;
        const z2 = y1 * logoSinX + z1 * logoCosX;

        const scale3d = FOCAL_LENGTH / (FOCAL_LENGTH + z2);
        const rotOriginX = logoCenterX + x2 * scale3d;
        const rotOriginY = logoCenterY + y2 * scale3d;

        let curLogoX = rotOriginX;
        let curLogoY = rotOriginY;

        if (p.isLanded) {
          const driftX = Math.sin(t * 1.1 + p.phase) * 0.35;
          const driftY = Math.cos(t * 0.9 + p.phase) * 0.35;
          const baseLogoX = rotOriginX + driftX;
          const baseLogoY = rotOriginY + driftY;

          // Subtle mouse-reactive particle displacement effect (GPT-6 Astra inspired)
          if (mouse.active && !isDragging && smoothedScrollY < 60) {
            const mdx = baseLogoX - mouse.x;
            const mdy = baseLogoY - mouse.y;
            const distSq = mdx * mdx + mdy * mdy;
            const EFFECT_RADIUS = 95;
            const EFFECT_RADIUS_SQ = EFFECT_RADIUS * EFFECT_RADIUS;

            if (distSq < EFFECT_RADIUS_SQ && distSq > 0.01) {
              const dist = Math.sqrt(distSq);
              const normDist = 1 - dist / EFFECT_RADIUS;
              // Smooth cubic hermite falloff (zero jerk at outer boundary)
              const smoothFalloff = normDist * normDist * (3 - 2 * normDist);
              // Subtle displacement distance (max ~15px)
              const targetDispX = (mdx / dist) * smoothFalloff * 15;
              const targetDispY = (mdy / dist) * smoothFalloff * 15;
              p.dispX += (targetDispX - p.dispX) * 0.16;
              p.dispY += (targetDispY - p.dispY) * 0.16;
            } else {
              // Smooth non-bouncing return when outside mouse radius
              p.dispX += (0 - p.dispX) * 0.10;
              p.dispY += (0 - p.dispY) * 0.10;
            }
          } else {
            // Smooth non-bouncing return when mouse is away or inactive
            p.dispX += (0 - p.dispX) * 0.10;
            p.dispY += (0 - p.dispY) * 0.10;
          }

          if (Math.abs(p.dispX) < 0.001) p.dispX = 0;
          if (Math.abs(p.dispY) < 0.001) p.dispY = 0;

          curLogoX = baseLogoX + p.dispX;
          curLogoY = baseLogoY + p.dispY;
        } else {
          if (elapsed < p.delay) {
            const idleT = t * 1.2 + p.phase;
            curLogoX = p.startX + Math.sin(idleT) * 1.5;
            curLogoY = p.startY + Math.cos(idleT) * 1.5;
          } else {
            if (!p.hasDeparted) {
              p.hasDeparted = true;
              p.departX = p.x;
              p.departY = p.y;
            }

            const flightElapsed = elapsed - p.delay;
            const rawProgress = Math.min(1, flightElapsed / p.duration);
            const ease = rawProgress * rawProgress * rawProgress * (rawProgress * (rawProgress * 6 - 15) + 10);

            const arcFactor = Math.pow(Math.sin(rawProgress * Math.PI), 2);
            const arcX = p.normDx * p.curveDist * arcFactor;
            const arcY = p.normDy * p.curveDist * arcFactor;

            curLogoX = p.departX + (rotOriginX - p.departX) * ease + arcX;
            curLogoY = p.departY + (rotOriginY - p.departY) * ease + arcY;

            if (rawProgress >= 1) {
              p.isLanded = true;
            }
          }
        }

        // 1B. State 2: Pure Circle Formation in Center (ZERO ROTATION, static calm sphere)
        const circX = galaxyCenterX + p.circleR * Math.cos(p.circleBaseAngle);
        const circY = galaxyCenterY + p.circleR * Math.sin(p.circleBaseAngle);

        // 1C. State 3: Left & Right Starfield in Continuous 2D Floating Movement (Zero lines, Zero rows)
        if (p.isSideStardust) {
          p.sideBaseY += p.sideVy;
          p.sideBaseX += p.sideVx;

          // Seamless vertical wrap-around
          if (p.sideBaseY < -20) {
            p.sideBaseY = height + 20;
          } else if (p.sideBaseY > height + 20) {
            p.sideBaseY = -20;
          }

          // Safe horizontal flank bounds (soft rebound, prevents edge bunching)
          if (p.sideIsLeft) {
            if (p.sideBaseX < leftMinX) { p.sideBaseX = leftMinX + 2; p.sideVx = Math.abs(p.sideVx); }
            if (p.sideBaseX > leftMaxX) { p.sideBaseX = leftMaxX - 2; p.sideVx = -Math.abs(p.sideVx); }
          } else {
            if (p.sideBaseX < rightMinX) { p.sideBaseX = rightMinX + 2; p.sideVx = Math.abs(p.sideVx); }
            if (p.sideBaseX > rightMaxX) { p.sideBaseX = rightMaxX - 2; p.sideVx = -Math.abs(p.sideVx); }
          }
        }

        // Multi-frequency organic 2D floating sway (no static row/column alignment)
        const swayX = Math.sin(t * p.swaySpeedX + p.swayPhaseX) * p.swayAmpX;
        const swayY = Math.cos(t * p.swaySpeedY + p.swayPhaseY) * p.swayAmpY;

        // 1D. Transition: Logo -> Center Circle -> Spread to Left/Right Flanks
        const posCircX = curLogoX + (circX - curLogoX) * easeGalaxy;
        const posCircY = curLogoY + (circY - curLogoY) * easeGalaxy;

        // Gradual staggered spread from center circle out to left and right margins
        // Starts streaming from center starting at 0.28, fully spreads out across flanks by 0.78
        const pSpreadStart = 0.28 + p.divideStagger * 0.18;
        const pSpreadEnd = Math.min(0.80, pSpreadStart + 0.32);
        const pEaseSpread = smoothstep(pSpreadStart, pSpreadEnd, scrollProgress);

        if (p.isSideStardust) {
          // Slow scroll motion opposite to scroll direction (scroll down -> particles on BOTH sides go up, and vice versa)
          const scrollSpeed = 0.10;
          const scrollShift = -(smoothedScrollY * scrollSpeed) * pEaseSpread;

          // Seamless vertical wrap-around for side particles
          const wrapPad = 30;
          const totalSpan = height + wrapPad * 2;
          const rawSideY = p.sideBaseY + swayY + scrollShift;
          const wrappedSideY = (((rawSideY + wrapPad) % totalSpan) + totalSpan) % totalSpan - wrapPad;

          const sideX = p.sideBaseX + swayX;
          const sideY = wrappedSideY;

          // Gentle organic vertical wave during division transit
          const transitWaveY = Math.sin(pEaseSpread * Math.PI) * p.burstArcY * 18;

          p.x = posCircX + (sideX - posCircX) * pEaseSpread;
          p.y = posCircY + (sideY - posCircY) * pEaseSpread + transitWaveY;
          p.radius = (p.baseRadius * (1 + (scale3d - 1) * (1 - easeGalaxy))) + (p.sideRadius - p.baseRadius) * pEaseSpread;
        } else {
          // Non-side particles: expand outward from center & dissolve completely into thin air
          const disperseDist = pEaseSpread * (circleRadius * 1.5 + 50);
          p.x = posCircX + Math.cos(p.circleBaseAngle) * disperseDist;
          p.y = posCircY + Math.sin(p.circleBaseAngle) * disperseDist;
          p.radius = p.baseRadius * (1 + (scale3d - 1) * (1 - easeGalaxy)) * (1 - pEaseSpread * 0.4);
        }
      }

      // 2. UPDATE HERO & BACKGROUND AMBIENT PARTICLES (Continuous Living Moving Position across Whole Page)
      const ambientBackgroundFade = Math.max(0, 1 - smoothstep(0.44, 0.70, scrollProgress));

      for (let a = 0; a < ambientParticles.length; a++) {
        const ap = ambientParticles[a];
        ap.x += ap.vx;
        ap.y += ap.vy;
        if (ap.x < -15) ap.x = width + 15;
        if (ap.x > width + 15) ap.x = -15;
        if (ap.y < -15) ap.y = height + 15;
        if (ap.y > height + 15) ap.y = -15;
      }

      // RENDER SECTION 1: BACKGROUND AMBIENT PARTICLES (Active in Hero & while forming circle, only in background)
      if (ambientBackgroundFade > 0.005) {
        // Red Ambient Particles
        ctx.beginPath();
        for (let a = 0; a < ambientParticles.length; a++) {
          const ap = ambientParticles[a];
          if (!ap.isRed) continue;

          // While circle forms, keep ambient particles strictly in the background surrounding the circle
          const distFromCircle = Math.hypot(ap.x - galaxyCenterX, ap.y - galaxyCenterY);
          const circleOcclusion = easeGalaxy > 0.1
            ? Math.min(1, Math.max(0, (distFromCircle - circleRadius * 0.85) / (circleRadius * 0.35)))
            : 1;
          if (circleOcclusion <= 0.01) continue;

          // Content corridor clearance when About Us arrives
          const isCenterCorridor = ap.x > leftMarginEnd && ap.x < rightMarginStart;
          const corridorFade = isCenterCorridor
            ? Math.max(0, 1 - smoothstep(0.38, 0.58, scrollProgress))
            : 1;
          if (corridorFade <= 0.01) continue;

          ctx.moveTo(ap.x + ap.radius, ap.y);
          ctx.arc(ap.x, ap.y, ap.radius, 0, Math.PI * 2);
        }
        const redAlpha = globalFade * ambientBackgroundFade;
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = `rgba(255, 28, 54, ${redAlpha * 0.70})`;
        ctx.fill();
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = `rgba(255, 50, 75, ${redAlpha * 0.40})`;
        ctx.fill();

        // Silver Ambient Particles
        ctx.beginPath();
        for (let a = 0; a < ambientParticles.length; a++) {
          const ap = ambientParticles[a];
          if (ap.isRed) continue;

          const distFromCircle = Math.hypot(ap.x - galaxyCenterX, ap.y - galaxyCenterY);
          const circleOcclusion = easeGalaxy > 0.1
            ? Math.min(1, Math.max(0, (distFromCircle - circleRadius * 0.85) / (circleRadius * 0.35)))
            : 1;
          if (circleOcclusion <= 0.01) continue;

          const isCenterCorridor = ap.x > leftMarginEnd && ap.x < rightMarginStart;
          const corridorFade = isCenterCorridor
            ? Math.max(0, 1 - smoothstep(0.38, 0.58, scrollProgress))
            : 1;
          if (corridorFade <= 0.01) continue;

          ctx.moveTo(ap.x + ap.radius, ap.y);
          ctx.arc(ap.x, ap.y, ap.radius, 0, Math.PI * 2);
        }
        const silverAlpha = globalFade * ambientBackgroundFade;
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = `rgba(240, 245, 255, ${silverAlpha * 0.75})`;
        ctx.fill();
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = `rgba(255, 255, 255, ${silverAlpha * 0.45})`;
        ctx.fill();

        // Subtle aura for bright ambient stars
        ctx.beginPath();
        for (let a = 0; a < ambientParticles.length; a++) {
          const ap = ambientParticles[a];
          if (!ap.isBright) continue;

          const distFromCircle = Math.hypot(ap.x - galaxyCenterX, ap.y - galaxyCenterY);
          const circleOcclusion = easeGalaxy > 0.1
            ? Math.min(1, Math.max(0, (distFromCircle - circleRadius * 0.85) / (circleRadius * 0.35)))
            : 1;
          if (circleOcclusion <= 0.01) continue;

          const isCenterCorridor = ap.x > leftMarginEnd && ap.x < rightMarginStart;
          const corridorFade = isCenterCorridor
            ? Math.max(0, 1 - smoothstep(0.38, 0.58, scrollProgress))
            : 1;
          if (corridorFade <= 0.01) continue;

          const haloR = ap.radius * 2.2;
          ctx.moveTo(ap.x + haloR, ap.y);
          ctx.arc(ap.x, ap.y, haloR, 0, Math.PI * 2);
        }
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = `rgba(255, 255, 255, ${silverAlpha * 0.22})`;
        ctx.fill();
      }

      // RENDER SECTION 3: LOGO / CENTER CIRCLE / SPREAD TO LEFT & RIGHT SIDES
      if (logoFade > 0.001) {
        const nonSideDissolveAlpha = Math.max(0, 1 - smoothstep(0.24, 0.62, scrollProgress));

        // 3A. Non-side Logo / Circle particles (Active initially & dissolve outward into thin air on scroll)
        if (nonSideDissolveAlpha > 0.005) {
          // Red dissolving particles
          ctx.beginPath();
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            if (p.isSideStardust || !p.isRed) continue;
            ctx.moveTo(p.x + p.radius, p.y);
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          }
          const dissolveRedAlpha = logoFade * nonSideDissolveAlpha;
          ctx.globalCompositeOperation = 'source-over';
          ctx.fillStyle = `rgba(255, 28, 54, ${dissolveRedAlpha})`;
          ctx.fill();
          ctx.globalCompositeOperation = 'lighter';
          ctx.fillStyle = `rgba(255, 50, 75, ${dissolveRedAlpha * 0.75})`;
          ctx.fill();

          // Silver dissolving particles
          ctx.beginPath();
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            if (p.isSideStardust || p.isRed) continue;
            ctx.moveTo(p.x + p.radius, p.y);
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          }
          const dissolveSilverAlpha = logoFade * nonSideDissolveAlpha;
          ctx.globalCompositeOperation = 'source-over';
          ctx.fillStyle = `rgba(245, 248, 255, ${dissolveSilverAlpha})`;
          ctx.fill();
          ctx.globalCompositeOperation = 'lighter';
          ctx.fillStyle = `rgba(255, 255, 255, ${dissolveSilverAlpha * 0.75})`;
          ctx.fill();
        }

        // 3B. Reduced Random Stardust Particles on Left & Right Flanks (Continuous living starfield)
        // Red Side Stardust
        ctx.beginPath();
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (!p.isSideStardust || !p.isRed) continue;
          ctx.moveTo(p.x + p.radius, p.y);
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        }
        const stardustRedAlpha = logoFade * (1 - easeSpread * 0.12);
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = `rgba(255, 28, 54, ${stardustRedAlpha})`;
        ctx.fill();
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = `rgba(255, 50, 75, ${stardustRedAlpha * 0.75})`;
        ctx.fill();

        // Silver Side Stardust
        ctx.beginPath();
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          if (!p.isSideStardust || p.isRed) continue;
          ctx.moveTo(p.x + p.radius, p.y);
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        }
        const stardustSilverAlpha = logoFade * (1 - easeSpread * 0.10);
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = `rgba(245, 248, 255, ${stardustSilverAlpha})`;
        ctx.fill();
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = `rgba(255, 255, 255, ${stardustSilverAlpha * 0.75})`;
        ctx.fill();

        // 3C. Soft aura for bright Tier 3 stars
        if (easeSpread > 0.20) {
          ctx.beginPath();
          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            if (!p.isSideStardust || !p.isBrightStar) continue;
            const haloR = p.radius * 2.2;
            ctx.moveTo(p.x + haloR, p.y);
            ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2);
          }
          const haloAlpha = logoFade * easeSpread * 0.25;
          ctx.globalCompositeOperation = 'lighter';
          ctx.fillStyle = `rgba(255, 255, 255, ${haloAlpha})`;
          ctx.fill();
        }
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full block z-0 select-none touch-none"
    />
  );
}
