import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Upload, RotateCcw, Check, Move } from 'lucide-react';

export interface TouchPanel3DProps {
  moduleCode: string; // '1M' | '2M' | '4M' | '8M' | '10M' | '12M' | '16M'
  touchPanelsCount: number;
  socketsCount: number;
  configName: string;
  fallbackImage: string;
}

export interface PanelFinish {
  id: string;
  name: string;
  type: 'bruce-lee' | 'color' | 'pattern';
  baseColor: string;
  previewBg: string;
  description: string;
}

export const PREDEFINED_FINISHES: PanelFinish[] = [
  {
    id: 'bruce-lee',
    name: 'Bruce Lee Edition',
    type: 'bruce-lee',
    baseColor: '#08080a',
    previewBg: 'bg-gradient-to-r from-amber-600 via-yellow-500 to-black',
    description: 'Authentic Neurolinx custom UV-printed acrylic with golden typography & Bruce Lee graphic'
  },
  {
    id: 'obsidian-black',
    name: 'Piano Black Acrylic',
    type: 'color',
    baseColor: '#0a0a0c',
    previewBg: 'bg-[#0a0a0c]',
    description: 'Deep high-gloss reflective black acrylic with polished diamond-milled edges'
  },
  {
    id: 'glacier-white',
    name: 'Glacier Pure White',
    type: 'color',
    baseColor: '#fcfcfd',
    previewBg: 'bg-white border border-gray-300',
    description: 'Pristine, ultra-clean white acrylic with optic clarity'
  },
  {
    id: 'statuario-marble',
    name: 'Statuario Gold Marble',
    type: 'pattern',
    baseColor: '#f5f5f7',
    previewBg: 'bg-gradient-to-br from-[#f8f8fa] via-[#e5e5ea] to-[#d8c29d]',
    description: 'Subtle Italian Statuario marble veining beneath crystal-clear acrylic'
  },
  {
    id: 'smoked-carbon',
    name: 'Smoked Carbon Fiber',
    type: 'pattern',
    baseColor: '#121214',
    previewBg: 'bg-gradient-to-br from-[#18181b] via-[#27272a] to-[#09090b]',
    description: 'Precision aerospace twill carbon fiber weave with 3D sheen'
  }
];

// Physical Dimensions in cm for 3D Geometry
function getModuleDimensions(moduleCode: string): { width: number; height: number; depth: number } {
  switch (moduleCode) {
    case '1M':
      return { width: 5.0, height: 8.6, depth: 0.4 };
    case '2M':
      return { width: 8.6, height: 8.6, depth: 0.4 };
    case '4M':
      return { width: 14.6, height: 8.6, depth: 0.4 };
    case '8M':
      return { width: 22.4, height: 8.6, depth: 0.4 };
    case '10M':
      return { width: 25.0, height: 14.6, depth: 0.4 };
    case '12M':
      return { width: 25.0, height: 20.0, depth: 0.4 };
    case '16M':
      return { width: 25.0, height: 25.0, depth: 0.4 };
    default:
      return { width: 22.4, height: 8.6, depth: 0.4 };
  }
}

export function TouchPanel3DCustomizer({
  moduleCode,
  touchPanelsCount,
  socketsCount,
  configName,
  fallbackImage
}: TouchPanel3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Default to Bruce Lee artwork for 8M 8-Switch panel, or Piano Black for others
  const defaultFinish = moduleCode === '8M' && touchPanelsCount === 8 ? PREDEFINED_FINISHES[0] : PREDEFINED_FINISHES[1];
  const [selectedFinish, setSelectedFinish] = useState<PanelFinish>(defaultFinish);
  
  // Custom Image Upload State
  const [customImageUri, setCustomImageUri] = useState<string | null>(null);
  const [imageScale, setImageScale] = useState<number>(1.0);
  const [imageOffsetX, setImageOffsetX] = useState<number>(0);
  const [imageOffsetY, setImageOffsetY] = useState<number>(0);

  // WebGL support
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Three.js Scene References
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const panelGroupRef = useRef<THREE.Group | null>(null);
  const textureCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const textureRef = useRef<THREE.CanvasTexture | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Cached Artwork Image for Bruce Lee Edition
  const bruceLeeImgRef = useRef<HTMLImageElement | null>(null);
  const customImgObjRef = useRef<HTMLImageElement | null>(null);

  // Click-and-Drag Rotation State
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const startRotRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetRotRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentRotRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Pre-load Bruce Lee Artwork Image
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      bruceLeeImgRef.current = img;
      renderDynamicTexture();
    };
    img.src = '/media/plates/bruce_lee_artwork.png';
  }, []);

  // Update finish when module changes to 8M 8-switch
  useEffect(() => {
    if (moduleCode === '8M' && touchPanelsCount === 8 && !customImageUri) {
      setSelectedFinish(PREDEFINED_FINISHES[0]);
    }
  }, [moduleCode, touchPanelsCount, customImageUri]);

  // Check WebGL availability on mount
  useEffect(() => {
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
      }
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  // Handle Custom Image Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomImageUri(result);
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          customImgObjRef.current = img;
          renderDynamicTexture();
        };
        img.src = result;
      };
      reader.readAsDataURL(file);
    }
  };

  const clearCustomImage = () => {
    setCustomImageUri(null);
    customImgObjRef.current = null;
    setImageScale(1.0);
    setImageOffsetX(0);
    setImageOffsetY(0);
    renderDynamicTexture();
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // HIGH-PRECISION 2D TEXTURE GENERATION ON 2048px OFFSCREEN CANVAS
  // ─────────────────────────────────────────────────────────────────────────────
  const renderDynamicTexture = useCallback(() => {
    if (!textureCanvasRef.current) {
      textureCanvasRef.current = document.createElement('canvas');
    }
    const canvas = textureCanvasRef.current;
    const w = 2048;
    const { width: modW, height: modH } = getModuleDimensions(moduleCode);
    const aspect = modW / modH;
    const h = Math.round(w / aspect);
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Base Acrylic Background
    const isBruceLee = selectedFinish.id === 'bruce-lee' && !customImgObjRef.current;

    if (customImgObjRef.current) {
      // User Uploaded Custom Image
      ctx.fillStyle = '#0a0a0c';
      ctx.fillRect(0, 0, w, h);

      const img = customImgObjRef.current;
      const scale = imageScale;
      const imgAspect = img.width / img.height;
      let drawW = w * scale;
      let drawH = drawW / imgAspect;

      if (drawH < h * scale) {
        drawH = h * scale;
        drawW = drawH * imgAspect;
      }

      const drawX = (w - drawW) / 2 + (imageOffsetX / 100) * w;
      const drawY = (h - drawH) / 2 + (imageOffsetY / 100) * h;

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(0, 0, w, h, 36);
      ctx.clip();
      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      // Subtle high-gloss acrylic glaze overlay
      const glaze = ctx.createLinearGradient(0, 0, w, h);
      glaze.addColorStop(0, 'rgba(255, 255, 255, 0.16)');
      glaze.addColorStop(0.4, 'rgba(255, 255, 255, 0.02)');
      glaze.addColorStop(0.7, 'rgba(0, 0, 0, 0.05)');
      glaze.addColorStop(1, 'rgba(255, 255, 255, 0.10)');
      ctx.fillStyle = glaze;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

    } else if (isBruceLee && bruceLeeImgRef.current) {
      // Authentic Bruce Lee Acrylic Reference Artwork
      ctx.fillStyle = '#08080a';
      ctx.fillRect(0, 0, w, h);

      const bImg = bruceLeeImgRef.current;
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(0, 0, w, h, 36);
      ctx.clip();
      ctx.drawImage(bImg, 0, 0, w, h);
      ctx.restore();

    } else {
      // Predefined Luxury Finish
      ctx.save();
      if (selectedFinish.id === 'obsidian-black' || selectedFinish.type === 'bruce-lee') {
        // Deep Piano Glossy Black Acrylic
        ctx.fillStyle = '#0a0a0c';
        ctx.fillRect(0, 0, w, h);

        // Elegant diagonal studio reflection streak (matching real acrylic switchboards)
        const streak = ctx.createLinearGradient(w * 0.25, 0, w * 0.95, h);
        streak.addColorStop(0, 'rgba(255, 255, 255, 0.0)');
        streak.addColorStop(0.45, 'rgba(255, 255, 255, 0.025)');
        streak.addColorStop(0.5, 'rgba(255, 255, 255, 0.07)');
        streak.addColorStop(0.55, 'rgba(255, 255, 255, 0.025)');
        streak.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
        ctx.fillStyle = streak;
        ctx.fillRect(0, 0, w, h);

      } else if (selectedFinish.id === 'glacier-white') {
        // Pure White Acrylic
        ctx.fillStyle = '#fbfcfd';
        ctx.fillRect(0, 0, w, h);

        const sheen = ctx.createLinearGradient(0, 0, w, h);
        sheen.addColorStop(0, '#ffffff');
        sheen.addColorStop(0.5, '#f4f5f8');
        sheen.addColorStop(1, '#eaecf0');
        ctx.fillStyle = sheen;
        ctx.fillRect(0, 0, w, h);

      } else if (selectedFinish.id === 'statuario-marble') {
        // Statuario Marble
        ctx.fillStyle = '#f8f8fa';
        ctx.fillRect(0, 0, w, h);

        ctx.strokeStyle = 'rgba(160, 160, 175, 0.35)';
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.moveTo(w * 0.1, 0);
        ctx.bezierCurveTo(w * 0.3, h * 0.4, w * 0.6, h * 0.3, w * 0.9, h);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(212, 175, 55, 0.28)'; // Gold vein
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(w * 0.15, 0);
        ctx.bezierCurveTo(w * 0.35, h * 0.45, w * 0.65, h * 0.35, w * 0.95, h);
        ctx.stroke();

      } else if (selectedFinish.id === 'smoked-carbon') {
        // Twill Carbon
        ctx.fillStyle = '#101114';
        ctx.fillRect(0, 0, w, h);

        const patternSize = 36;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 2.5;
        for (let x = 0; x < w + h; x += patternSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x - h, h);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(x - h, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
      }
      ctx.restore();
    }

    // 2. High-Precision Acrylic Edge Highlight (Flat Polished Edge)
    ctx.save();
    ctx.lineWidth = 6;
    const borderGrad = ctx.createLinearGradient(0, 0, w, h);
    borderGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
    borderGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.05)');
    borderGrad.addColorStop(0.7, 'rgba(0, 0, 0, 0.25)');
    borderGrad.addColorStop(1, 'rgba(255, 255, 255, 0.25)');
    ctx.strokeStyle = borderGrad;
    ctx.beginPath();
    ctx.roundRect(4, 4, w - 8, h - 8, 30);
    ctx.stroke();
    ctx.restore();

    // 3. Top-Left Official NEUROLINX Branding (as on real 2D plates)
    if (!isBruceLee) {
      ctx.save();
      const logoX = w * 0.055;
      const logoY = h * 0.095;
      const logoR = Math.min(w, h) * 0.035;

      // Red Hexagon Icon
      ctx.fillStyle = '#ff1744';
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const hx = logoX + logoR * Math.cos(angle);
        const hy = logoY + logoR * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.fill();

      // White internal notch
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(logoX - logoR * 0.3, logoY - logoR * 0.3);
      ctx.lineTo(logoX + logoR * 0.3, logoY);
      ctx.lineTo(logoX - logoR * 0.3, logoY + logoR * 0.3);
      ctx.stroke();

      // "NEUROLINX" text
      const isDark = selectedFinish.id !== 'glacier-white' && selectedFinish.id !== 'statuario-marble';
      ctx.font = `bold ${Math.round(logoR * 1.05)}px "Inter", sans-serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(20, 20, 25, 0.85)';
      ctx.letterSpacing = '3px';
      ctx.fillText('NEUROLINX', logoX + logoR * 1.5, logoY);
      ctx.restore();
    }

    // ─────────────────────────────────────────────────────────────────────────
    // 4. DRAW SYMBOLS & SOCKETS (INCREASED SIZE & PROPORTIONS)
    // ─────────────────────────────────────────────────────────────────────────

    const isReal8SwitchPanel = moduleCode === '8M' && touchPanelsCount === 8 && socketsCount === 0;

    if (isReal8SwitchPanel && isBruceLee) {
      // 8 SYMBOLS IN 2 ROWS OF 4 IN CRISP WHITE (Bruce Lee Real Reference)
      const cols = [w * 0.38, w * 0.48, w * 0.58, w * 0.68];
      const row1Y = h * 0.42;
      const row2Y = h * 0.65;
      const symSize = Math.min(w * 0.046, h * 0.105);

      const setupWhiteGlow = () => {
        ctx.save();
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#ffffff';
        ctx.lineWidth = 4.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = 'rgba(255, 255, 255, 0.95)';
        ctx.shadowBlur = 14;
      };

      // 1. Top Row, Col 1: Light Bulb with Radiant Rays
      setupWhiteGlow();
      const cx1 = cols[0];
      const cy1 = row1Y;
      const bR = symSize * 0.55;
      ctx.beginPath();
      ctx.arc(cx1, cy1 - bR * 0.2, bR * 0.58, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx1 - bR * 0.28, cy1 + bR * 0.5);
      ctx.lineTo(cx1 + bR * 0.28, cy1 + bR * 0.5);
      ctx.stroke();
      for (let a = 0; a < 8; a++) {
        const ang = (Math.PI / 4) * a;
        const r1 = bR * 0.92;
        const r2 = bR * 1.35;
        ctx.beginPath();
        ctx.moveTo(cx1 + Math.cos(ang) * r1, cy1 - bR * 0.2 + Math.sin(ang) * r1);
        ctx.lineTo(cx1 + Math.cos(ang) * r2, cy1 - bR * 0.2 + Math.sin(ang) * r2);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Top Row, Col 2: TV / Monitor Screen
      setupWhiteGlow();
      const cx2 = cols[1];
      const cy2 = row1Y;
      const tvW = symSize * 1.35;
      const tvH = symSize * 0.88;
      ctx.beginPath();
      ctx.roundRect(cx2 - tvW / 2, cy2 - tvH * 0.65, tvW, tvH, 6);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx2, cy2 + tvH * 0.35);
      ctx.lineTo(cx2, cy2 + tvH * 0.68);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx2 - tvW * 0.32, cy2 + tvH * 0.68);
      ctx.lineTo(cx2 + tvW * 0.32, cy2 + tvH * 0.68);
      ctx.stroke();
      ctx.restore();

      // 3. Top Row, Col 3: Wall Lamp / Bracket Sconce
      setupWhiteGlow();
      const cx3 = cols[2];
      const cy3 = row1Y;
      const sR = symSize * 0.65;
      ctx.beginPath();
      ctx.moveTo(cx3 - sR * 0.75, cy3 - sR * 0.45);
      ctx.lineTo(cx3 - sR * 0.75, cy3 + sR * 0.45);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx3 - sR * 0.75, cy3);
      ctx.bezierCurveTo(cx3 - sR * 0.3, cy3 - sR * 0.6, cx3 + sR * 0.2, cy3 - sR * 0.6, cx3 + sR * 0.25, cy3 - sR * 0.1);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx3 + sR * 0.05, cy3 + sR * 0.4);
      ctx.lineTo(cx3 + sR * 0.45, cy3 + sR * 0.4);
      ctx.lineTo(cx3 + sR * 0.32, cy3 - sR * 0.1);
      ctx.lineTo(cx3 + sR * 0.18, cy3 - sR * 0.1);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx3 + sR * 0.25, cy3 + sR * 0.52, sR * 0.14, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 4. Top Row, Col 4: Chandelier Fixture
      setupWhiteGlow();
      const cx4 = cols[3];
      const cy4 = row1Y;
      const cR = symSize * 0.72;
      ctx.beginPath();
      ctx.moveTo(cx4, cy4 - cR * 0.7);
      ctx.lineTo(cx4, cy4 + cR * 0.1);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx4, cy4 + cR * 0.42, cR * 0.18, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx4, cy4);
      ctx.bezierCurveTo(cx4 - cR * 0.4, cy4, cx4 - cR * 0.55, cy4 + cR * 0.2, cx4 - cR * 0.55, cy4 + cR * 0.35);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx4 - cR * 0.55, cy4 + cR * 0.48, cR * 0.15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx4, cy4);
      ctx.bezierCurveTo(cx4 + cR * 0.4, cy4, cx4 + cR * 0.55, cy4 + cR * 0.2, cx4 + cR * 0.55, cy4 + cR * 0.35);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx4 + cR * 0.55, cy4 + cR * 0.48, cR * 0.15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 5. Bottom Row, Col 1: Hanging Pendant Lamp
      setupWhiteGlow();
      const cx5 = cols[0];
      const cy5 = row2Y;
      const pR = symSize * 0.7;
      ctx.beginPath();
      ctx.moveTo(cx5, cy5 - pR * 0.85);
      ctx.lineTo(cx5, cy5 - pR * 0.25);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx5, cy5 - pR * 0.25);
      ctx.lineTo(cx5 - pR * 0.65, cy5 + pR * 0.35);
      ctx.lineTo(cx5 + pR * 0.65, cy5 + pR * 0.35);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx5, cy5 + pR * 0.46, pR * 0.18, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // 6. Bottom Row, Col 2: Ceiling Fan
      setupWhiteGlow();
      const cx6 = cols[1];
      const cy6 = row2Y;
      const fR = symSize * 0.68;
      ctx.beginPath();
      ctx.arc(cx6, cy6, fR * 0.2, 0, Math.PI * 2);
      ctx.fill();
      for (let a = 0; a < 4; a++) {
        ctx.save();
        ctx.translate(cx6, cy6);
        ctx.rotate((a * Math.PI) / 2);
        ctx.beginPath();
        ctx.ellipse(0, -fR * 0.62, fR * 0.16, fR * 0.42, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      ctx.restore();

      // 7. Bottom Row, Col 3: Split AC Unit
      setupWhiteGlow();
      const cx7 = cols[2];
      const cy7 = row2Y;
      const acW = symSize * 1.35;
      const acH = symSize * 0.52;
      ctx.beginPath();
      ctx.roundRect(cx7 - acW / 2, cy7 - acH / 2, acW, acH, 5);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx7 - acW * 0.4, cy7 - acH * 0.18);
      ctx.lineTo(cx7 + acW * 0.4, cy7 - acH * 0.18);
      ctx.stroke();
      for (let t = -3; t <= 3; t += 2) {
        ctx.beginPath();
        ctx.moveTo(cx7 + t * (acW * 0.1), cy7 + acH * 0.65);
        ctx.lineTo(cx7 + t * (acW * 0.1) - 4, cy7 + acH * 1.05);
        ctx.stroke();
      }
      ctx.restore();

      // 8. Bottom Row, Col 4: 2-Way Staircase
      setupWhiteGlow();
      const cx8 = cols[3];
      const cy8 = row2Y;
      const stW = symSize * 0.9;
      const stepH = stW * 0.28;
      const stepW = stW * 0.32;
      ctx.beginPath();
      ctx.moveTo(cx8 - stW * 0.5, cy8 + stW * 0.45);
      ctx.lineTo(cx8 - stW * 0.5, cy8 + stW * 0.45 - stepH);
      ctx.lineTo(cx8 - stW * 0.5 + stepW, cy8 + stW * 0.45 - stepH);
      ctx.lineTo(cx8 - stW * 0.5 + stepW, cy8 + stW * 0.45 - stepH * 2);
      ctx.lineTo(cx8 - stW * 0.5 + stepW * 2, cy8 + stW * 0.45 - stepH * 2);
      ctx.lineTo(cx8 - stW * 0.5 + stepW * 2, cy8 + stW * 0.45 - stepH * 3);
      ctx.lineTo(cx8 - stW * 0.5 + stepW * 3, cy8 + stW * 0.45 - stepH * 3);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx8 + stW * 0.25, cy8 - stW * 0.25);
      ctx.lineTo(cx8 + stW * 0.52, cy8 - stW * 0.52);
      ctx.lineTo(cx8 + stW * 0.35, cy8 - stW * 0.52);
      ctx.moveTo(cx8 + stW * 0.52, cy8 - stW * 0.52);
      ctx.lineTo(cx8 + stW * 0.52, cy8 - stW * 0.35);
      ctx.stroke();
      ctx.restore();

    } else {
      // ───────────────────────────────────────────────────────────────────────
      // LARGE BOLD SOCKET DESIGN (MATCHING REAL 2D PLATES & IMAGE 2 CORRECTION)
      // ───────────────────────────────────────────────────────────────────────
      const drawUniversalSocket = (cx: number, cy: number, socketHeight: number) => {
        ctx.save();
        const sColor = '#f0f3f6';
        ctx.strokeStyle = sColor;
        ctx.fillStyle = sColor;
        ctx.lineWidth = 7.5; // Bold stroke matching 2D product photos
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = 'rgba(255, 255, 255, 0.45)';
        ctx.shadowBlur = 10;

        const h = socketHeight;
        
        // Earth Keyhole Socket (Top Center)
        const rEarth = h * 0.16;
        const earthY = cy - h * 0.22;
        ctx.beginPath();
        ctx.arc(cx, earthY, rEarth, 0, Math.PI * 2);
        ctx.stroke();

        const slotW = h * 0.10;
        const slotH = h * 0.16;
        ctx.beginPath();
        ctx.rect(cx - slotW / 2, earthY, slotW, slotH);
        ctx.fill();

        // Left & Right Universal Combination Sockets
        const portY = cy + h * 0.22;
        const spread = h * 0.34;
        const portW = h * 0.30;
        const portH = h * 0.12;
        const rEuro = h * 0.11;

        // Left port
        ctx.beginPath();
        ctx.roundRect(cx - spread - portW / 2, portY - portH / 2, portW, portH, 4);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx - spread, portY, rEuro, 0, Math.PI * 2);
        ctx.stroke();

        // Right port
        ctx.beginPath();
        ctx.roundRect(cx + spread - portW / 2, portY - portH / 2, portW, portH, 4);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx + spread, portY, rEuro, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
      };

      // ───────────────────────────────────────────────────────────────────────
      // LARGE BOLD CAPACITIVE SWITCH (MATCHING REAL 2D PLATES & IMAGE 2 CORRECTION)
      // ───────────────────────────────────────────────────────────────────────
      const drawTouchSwitch = (cx: number, cy: number, switchSize: number, iconType: 'bulb' | 'fan' | 'dot' | 'power') => {
        ctx.save();
        const sqSize = switchSize;
        const half = sqSize / 2;
        const radius = sqSize * 0.22;

        const glowColor = '#00d4ff';
        ctx.strokeStyle = glowColor;
        ctx.lineWidth = 6.5; // Bold squircle border
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 18;
        ctx.beginPath();
        ctx.roundRect(cx - half, cy - half, sqSize, sqSize, radius);
        ctx.stroke();

        // Inner Glyph
        ctx.strokeStyle = glowColor;
        ctx.fillStyle = glowColor;
        ctx.lineWidth = 5.5; // Bold glyph lines
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (iconType === 'bulb') {
          const bR = sqSize * 0.22;
          ctx.beginPath();
          ctx.arc(cx, cy - bR * 0.25, bR, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx - bR * 0.45, cy + bR * 0.85);
          ctx.lineTo(cx + bR * 0.45, cy + bR * 0.85);
          ctx.stroke();
        } else if (iconType === 'fan') {
          const fR = sqSize * 0.26;
          for (let a = 0; a < 4; a++) {
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate((a * Math.PI) / 2);
            ctx.beginPath();
            ctx.ellipse(0, -fR * 0.6, fR * 0.22, fR * 0.42, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }
        } else if (iconType === 'power') {
          const pS = sqSize * 0.3;
          ctx.beginPath();
          ctx.moveTo(cx + pS * 0.15, cy - pS * 0.85);
          ctx.lineTo(cx - pS * 0.5, cy + pS * 0.1);
          ctx.lineTo(cx, cy + pS * 0.1);
          ctx.lineTo(cx - pS * 0.15, cy + pS * 0.85);
          ctx.lineTo(cx + pS * 0.5, cy - pS * 0.1);
          ctx.lineTo(cx, cy - pS * 0.1);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(cx, cy, sqSize * 0.12, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      };

      // ───────────────────────────────────────────────────────────────────────
      // ACCURATE POSITIONING & PROPORTIONS MATCHING REAL 2D PRODUCT PLATES
      // ───────────────────────────────────────────────────────────────────────
      if (socketsCount > 0 && touchPanelsCount === 0) {
        // ── Sockets Only Mode (Large prominent sockets) ──
        const socketH = h * 0.58;

        if (socketsCount === 1) {
          drawUniversalSocket(w / 2, h / 2, socketH);
        } else if (socketsCount === 2) {
          // Exactly as in user's Image 2 (4m-0p-2s & socket-2)
          drawUniversalSocket(w * 0.41, h / 2, socketH);
          drawUniversalSocket(w * 0.59, h / 2, socketH);
        } else if (socketsCount === 3) {
          drawUniversalSocket(w * 0.30, h / 2, socketH);
          drawUniversalSocket(w * 0.44, h / 2, socketH);
          drawUniversalSocket(w * 0.58, h / 2, socketH);
        } else if (socketsCount === 4) {
          drawUniversalSocket(w * 0.31, h / 2, socketH);
          drawUniversalSocket(w * 0.44, h / 2, socketH);
          drawUniversalSocket(w * 0.56, h / 2, socketH);
          drawUniversalSocket(w * 0.69, h / 2, socketH);
        } else {
          for (let s = 0; s < socketsCount; s++) {
            const cx = w * (0.2 + (0.6 / (socketsCount - 1 || 1)) * s);
            drawUniversalSocket(cx, h / 2, socketH * 0.9);
          }
        }

      } else if (socketsCount === 0) {
        // ── Switches Only Mode (Large prominent squircles) ──
        const total = touchPanelsCount;

        if (total === 1) {
          drawTouchSwitch(w / 2, h / 2, Math.min(w, h) * 0.36, 'dot');
        } else if (total === 2) {
          // 2M: 2 switches side-by-side horizontally centered
          const swSize = h * 0.30;
          drawTouchSwitch(w * 0.42, h / 2, swSize, 'bulb');
          drawTouchSwitch(w * 0.58, h / 2, swSize, 'dot');
        } else if (total === 4) {
          // 4M: 2 rows of 2 columns centered
          const swSize = h * 0.30;
          const xs = [w * 0.43, w * 0.57];
          const ys = [h * 0.35, h * 0.65];
          drawTouchSwitch(xs[0], ys[0], swSize, 'bulb');
          drawTouchSwitch(xs[1], ys[0], swSize, 'dot');
          drawTouchSwitch(xs[0], ys[1], swSize, 'dot');
          drawTouchSwitch(xs[1], ys[1], swSize, 'power');
        } else if (total === 8) {
          // 8M: 2 rows of 4 columns centered
          const swSize = h * 0.28;
          const xs = [w * 0.33, w * 0.44, w * 0.56, w * 0.67];
          const ys = [h * 0.35, h * 0.65];
          const icons: ('bulb' | 'fan' | 'dot' | 'power')[] = ['bulb', 'fan', 'dot', 'dot', 'dot', 'dot', 'dot', 'power'];
          for (let r = 0; r < 2; r++) {
            for (let c = 0; c < 4; c++) {
              const idx = r * 4 + c;
              drawTouchSwitch(xs[c], ys[r], swSize, icons[idx]);
            }
          }
        } else if (total === 10) {
          // 10M: 2 rows of 5 columns centered
          const swSize = h * 0.28;
          const xs = [w * 0.26, w * 0.38, w * 0.50, w * 0.62, w * 0.74];
          const ys = [h * 0.35, h * 0.65];
          for (let r = 0; r < 2; r++) {
            for (let c = 0; c < 5; c++) {
              const idx = r * 5 + c;
              const ic = idx === 0 ? 'bulb' : idx === 1 ? 'fan' : idx === 9 ? 'power' : 'dot';
              drawTouchSwitch(xs[c], ys[r], swSize, ic);
            }
          }
        } else if (total === 12) {
          // 12M: 4 rows of 3 columns
          const swSize = Math.min(w * 0.17, h * 0.18);
          const cols = 3;
          const rows = 4;
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const cx = w * ((c + 0.5) / cols);
              const cy = h * ((r + 0.5) / rows);
              const idx = r * cols + c;
              const ic = idx === 0 ? 'bulb' : idx === 1 ? 'fan' : idx === 11 ? 'power' : 'dot';
              drawTouchSwitch(cx, cy, swSize, ic);
            }
          }
        } else if (total === 16) {
          // 16M: 4 rows of 4 columns
          const swSize = Math.min(w * 0.16, h * 0.17);
          const cols = 4;
          const rows = 4;
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const cx = w * ((c + 0.5) / cols);
              const cy = h * ((r + 0.5) / rows);
              const idx = r * cols + c;
              const ic = idx === 0 ? 'bulb' : idx === 1 ? 'fan' : idx === 15 ? 'power' : 'dot';
              drawTouchSwitch(cx, cy, swSize, ic);
            }
          }
        }

      } else {
        // ── Combined Switches + Sockets Mode (Matching Real 2D Plates) ──
        const socketH = h * 0.60;
        const swSize = h * 0.30;
        const ys = [h * 0.35, h * 0.65];

        if (moduleCode === '4M' && touchPanelsCount === 2 && socketsCount === 1) {
          // 4M: 1 socket left, 2 switches right (4m-2p-1s)
          drawUniversalSocket(w * 0.42, h / 2, socketH);
          drawTouchSwitch(w * 0.60, ys[0], swSize, 'bulb');
          drawTouchSwitch(w * 0.60, ys[1], swSize, 'dot');

        } else if (moduleCode === '8M' && touchPanelsCount === 6 && socketsCount === 1) {
          // 8M: 1 socket left, 6 switches right in 3 cols (8m-6p-1s)
          drawUniversalSocket(w * 0.34, h / 2, socketH);
          const xs = [w * 0.51, w * 0.61, w * 0.71];
          const ics: ('bulb' | 'fan' | 'dot' | 'power')[] = ['bulb', 'fan', 'dot', 'dot', 'dot', 'power'];
          for (let c = 0; c < 3; c++) {
            drawTouchSwitch(xs[c], ys[0], swSize, ics[c]);
            drawTouchSwitch(xs[c], ys[1], swSize, ics[c + 3]);
          }

        } else if (moduleCode === '8M' && touchPanelsCount === 4 && socketsCount === 2) {
          // 8M: 2 sockets left, 4 switches right in 2 cols (8m-4p-2s)
          drawUniversalSocket(w * 0.31, h / 2, socketH);
          drawUniversalSocket(w * 0.48, h / 2, socketH);
          const xs = [w * 0.65, w * 0.76];
          drawTouchSwitch(xs[0], ys[0], swSize, 'bulb');
          drawTouchSwitch(xs[1], ys[0], swSize, 'dot');
          drawTouchSwitch(xs[0], ys[1], swSize, 'dot');
          drawTouchSwitch(xs[1], ys[1], swSize, 'power');

        } else if (moduleCode === '8M' && touchPanelsCount === 2 && socketsCount === 3) {
          // 8M: 3 sockets left, 2 switches right in 1 col (8m-2p-3s)
          drawUniversalSocket(w * 0.30, h / 2, socketH);
          drawUniversalSocket(w * 0.44, h / 2, socketH);
          drawUniversalSocket(w * 0.58, h / 2, socketH);
          drawTouchSwitch(w * 0.73, ys[0], swSize, 'bulb');
          drawTouchSwitch(w * 0.73, ys[1], swSize, 'dot');

        } else {
          // General layout for other combinations
          const totalEquivSlots = touchPanelsCount + socketsCount * 2;
          const socketAreaRatio = (socketsCount * 2) / totalEquivSlots;
          const socketAreaW = w * socketAreaRatio;
          const switchAreaW = w - socketAreaW;

          for (let s = 0; s < socketsCount; s++) {
            const cx = (socketAreaW / socketsCount) * (s + 0.5);
            drawUniversalSocket(cx, h / 2, socketH);
          }

          const swCols = Math.ceil(touchPanelsCount / 2);
          for (let c = 0; c < swCols; c++) {
            const cx = socketAreaW + (switchAreaW / swCols) * (c + 0.5);
            for (let r = 0; r < 2; r++) {
              const idx = r * swCols + c;
              if (idx < touchPanelsCount) {
                drawTouchSwitch(cx, ys[r], swSize, idx === 0 ? 'bulb' : idx === 1 ? 'fan' : 'dot');
              }
            }
          }
        }
      }
    }

    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }, [moduleCode, touchPanelsCount, socketsCount, selectedFinish, imageScale, imageOffsetX, imageOffsetY]);

  // ─────────────────────────────────────────────────────────────────────────────
  // THREE.JS SCENE SETUP & SHADERS
  // ─────────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!canvasRef.current || !webGLSupported) return;

    const canvas = canvasRef.current;
    const width = canvas.clientWidth || 600;
    const height = canvas.clientHeight || 400;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 1000);
    camera.position.set(0, 0, 28);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(8, 14, 20);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xf0f4ff, 1.2);
    fillLight.position.set(-12, -6, 12);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.6);
    rimLight.position.set(0, 16, -10);
    scene.add(rimLight);

    const panelGroup = new THREE.Group();
    scene.add(panelGroup);
    panelGroupRef.current = panelGroup;

    rebuild3DModel();

    // 60 FPS Spring Animation Loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      const springFactor = 0.085;
      currentRotRef.current.x += (targetRotRef.current.x - currentRotRef.current.x) * springFactor;
      currentRotRef.current.y += (targetRotRef.current.y - currentRotRef.current.y) * springFactor;

      if (panelGroupRef.current) {
        panelGroupRef.current.rotation.x = currentRotRef.current.x;
        panelGroupRef.current.rotation.y = currentRotRef.current.y;

        const tiltDist = Math.hypot(currentRotRef.current.x, currentRotRef.current.y);
        panelGroupRef.current.position.z = tiltDist * 0.9;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!canvas || !renderer || !camera) return;
      const newW = canvas.clientWidth;
      const newH = canvas.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        setIsDragging(false);
        targetRotRef.current.x = 0;
        targetRotRef.current.y = 0;
      }
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      renderer.dispose();
      scene.clear();
    };
  }, [webGLSupported]);

  // ─────────────────────────────────────────────────────────────────────────────
  // REBUILD 3D MESH (CORRECT SHAPE: FLAT ACRYLIC WITH VERTICAL POLISHED EDGES)
  // ─────────────────────────────────────────────────────────────────────────────
  const rebuild3DModel = useCallback(() => {
    if (!panelGroupRef.current || !sceneRef.current) return;
    const group = panelGroupRef.current;

    while (group.children.length > 0) {
      const obj = group.children[0];
      group.remove(obj);
      if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
    }

    const { width: pW, height: pH, depth: pD } = getModuleDimensions(moduleCode);

    if (cameraRef.current) {
      const maxDim = Math.max(pW, pH);
      cameraRef.current.position.z = Math.max(22, maxDim * 1.55);
    }

    // 1. Acrylic Face Geometry (Clean Flat Slab with Uniform Circular Rounded Corners)
    const shape = new THREE.Shape();
    const r = 0.45; // 4.5mm smooth radius
    const hw = pW / 2;
    const hh = pH / 2;

    shape.moveTo(-hw + r, -hh);
    shape.lineTo(hw - r, -hh);
    shape.absarc(hw - r, -hh + r, r, -Math.PI / 2, 0, false);
    shape.lineTo(hw, hh - r);
    shape.absarc(hw - r, hh - r, r, 0, Math.PI / 2, false);
    shape.lineTo(-hw + r, hh);
    shape.absarc(-hw + r, hh - r, r, Math.PI / 2, Math.PI, false);
    shape.lineTo(-hw, -hh + r);
    shape.absarc(-hw + r, -hh + r, r, Math.PI, Math.PI * 1.5, false);

    // Bevel disabled to prevent overhanging ledge / flared lip shown in Image 1
    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: pD, // Exact 4mm sheet depth
      bevelEnabled: false,
      steps: 1
    };

    const acrylicGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    acrylicGeometry.center(); // Extends from z = -pD/2 (-0.2) to z = +pD/2 (+0.2)

    renderDynamicTexture();
    const texture = new THREE.CanvasTexture(textureCanvasRef.current!);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.colorSpace = THREE.SRGBColorSpace;
    textureRef.current = texture;

    // Authentic High-Gloss Optical Acrylic Material
    const frontAcrylicMaterial = new THREE.MeshPhysicalMaterial({
      map: texture,
      roughness: 0.03,
      metalness: 0.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.01,
      reflectivity: 0.95,
      transmission: 0.08,
      ior: 1.491,
      specularColor: new THREE.Color(0xffffff)
    });

    const sideAcrylicMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(selectedFinish.id === 'glacier-white' ? 0xf0f0f5 : 0x0c0c10),
      roughness: 0.04,
      metalness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.01,
      ior: 1.491
    });

    const acrylicMesh = new THREE.Mesh(acrylicGeometry, [frontAcrylicMaterial, sideAcrylicMaterial]);
    acrylicMesh.castShadow = true;
    acrylicMesh.receiveShadow = true;
    acrylicMesh.position.z = 0; // Front at +pD/2 (+0.2), Back at -pD/2 (-0.2)
    group.add(acrylicMesh);

    // 2. Rear Fire-Retardant ABS Backbox Housing (Seamlessly flush against back of acrylic)
    const chassisW = pW - 0.25;
    const chassisH = pH - 0.25;
    const chassisD = 1.4;

    const chassisGeo = new THREE.BoxGeometry(chassisW, chassisH, chassisD);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x15161a,
      roughness: 0.8,
      metalness: 0.05
    });

    const chassisMesh = new THREE.Mesh(chassisGeo, chassisMat);
    // Front face of chassis touches back of acrylic at z = -pD/2
    chassisMesh.position.set(0, 0, -pD / 2 - chassisD / 2);
    chassisMesh.castShadow = true;
    group.add(chassisMesh);

    // 3. Realistic Metal Mounting Screws on Rear Housing
    const screwMat = new THREE.MeshStandardMaterial({ color: 0x8a8e96, metalness: 0.85, roughness: 0.3 });
    const screwGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.08, 16);
    screwGeo.rotateX(Math.PI / 2);

    const screwOffsets = [
      { x: -chassisW * 0.44, y: 0 },
      { x: chassisW * 0.44, y: 0 }
    ];

    screwOffsets.forEach(pos => {
      const screw = new THREE.Mesh(screwGeo, screwMat);
      screw.position.set(pos.x, pos.y, -pD / 2 - chassisD - 0.02);
      group.add(screw);
    });

    // 4. Soft Contact Shadow Plane beneath floating panel
    const shadowGeo = new THREE.PlaneGeometry(pW * 1.6, pH * 1.6);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.25 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.position.set(0, 0, -pD / 2 - chassisD - 0.8);
    shadowPlane.receiveShadow = true;
    group.add(shadowPlane);
  }, [moduleCode, selectedFinish, renderDynamicTexture]);

  useEffect(() => {
    rebuild3DModel();
  }, [rebuild3DModel]);

  // ─────────────────────────────────────────────────────────────────────────────
  // CLICK-AND-DRAG 360° ROTATION (STRICT: NO ROTATION ON HOVER)
  // ─────────────────────────────────────────────────────────────────────────────
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    startRotRef.current = { x: targetRotRef.current.x, y: targetRotRef.current.y };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !containerRef.current) return;

    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    const rotSpeedX = 0.009;
    targetRotRef.current.y = startRotRef.current.y + dx * rotSpeedX;

    const rotSpeedY = 0.008;
    const maxTilt = Math.PI * 0.28;
    targetRotRef.current.x = Math.max(-maxTilt, Math.min(maxTilt, startRotRef.current.x + dy * rotSpeedY));
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    targetRotRef.current.x = 0;
    targetRotRef.current.y = 0;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    const touch = e.touches[0];
    dragStartRef.current = { x: touch.clientX, y: touch.clientY };
    startRotRef.current = { x: targetRotRef.current.x, y: targetRotRef.current.y };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const dx = touch.clientX - dragStartRef.current.x;
    const dy = touch.clientY - dragStartRef.current.y;

    const rotSpeedX = 0.009;
    const rotSpeedY = 0.008;
    const maxTilt = Math.PI * 0.28;

    targetRotRef.current.y = startRotRef.current.y + dx * rotSpeedX;
    targetRotRef.current.x = Math.max(-maxTilt, Math.min(maxTilt, startRotRef.current.x + dy * rotSpeedY));
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    targetRotRef.current.x = 0;
    targetRotRef.current.y = 0;
  };

  return (
    <div className="w-full flex flex-col bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden">
      
      {/* ── Main Clean 3D Product Canvas (Click-and-Drag Rotation) ── */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[320px] sm:min-h-[400px] bg-gradient-to-b from-[#f9fafb] via-[#f2f4f8] to-[#e9ecf1] flex items-center justify-center overflow-hidden select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {webGLSupported ? (
          <canvas ref={canvasRef} className="w-full h-full block" />
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <img 
              src={fallbackImage} 
              alt={configName} 
              className="max-h-[80%] max-w-[85%] object-contain drop-shadow-xl mb-3" 
            />
            <p className="text-xs text-gray-500 font-medium">
              3D WebGL preview unavailable. Displaying high-resolution studio photo.
            </p>
          </div>
        )}

        {/* Minimalist Discreet Drag Rotation Hint */}
        <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-300 ${
          isDragging ? 'opacity-0' : 'opacity-85'
        }`}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 text-white text-[11px] font-medium backdrop-blur-md shadow-sm">
            <Move className="w-3 h-3 text-brand-red" />
            <span>Click &amp; drag to inspect 360°</span>
          </div>
        </div>
      </div>

      {/* ── Clean, Minimalist Acrylic Customization Drawer ── */}
      <div className="p-4 sm:p-5 bg-white border-t border-gray-100">
        
        {/* Predefined Designs & Custom Artwork Selector */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Acrylic Finish &amp; Custom Artwork
          </span>
          <span className="text-xs text-gray-500 font-medium">
            {customImageUri ? 'Custom UV Subsurface Print' : selectedFinish.name}
          </span>
        </div>

        {/* Finishes Grid + Custom Image Upload */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {PREDEFINED_FINISHES.map(finish => {
            const isSelected = selectedFinish.id === finish.id && !customImageUri;
            return (
              <button
                key={finish.id}
                type="button"
                onClick={() => {
                  setSelectedFinish(finish);
                  setCustomImageUri(null);
                  customImgObjRef.current = null;
                  renderDynamicTexture();
                }}
                className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'border-black ring-2 ring-black bg-[#F8F9FA] shadow-xs'
                    : 'border-gray-200 hover:border-gray-400 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-5 h-5 rounded-md ${finish.previewBg} shadow-2xs`} />
                  {isSelected && <Check className="w-3.5 h-3.5 text-black" />}
                </div>
                <div className="text-[11px] font-bold text-slate-900 truncate">
                  {finish.name}
                </div>
              </button>
            );
          })}

          {/* Upload Custom Image Option */}
          <label className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
            customImageUri
              ? 'border-brand-red ring-2 ring-brand-red bg-red-50/30 shadow-xs'
              : 'border-gray-200 hover:border-gray-400 bg-white'
          }`}>
            <div className="flex items-center justify-between">
              <div className="w-5 h-5 rounded-md bg-black text-white flex items-center justify-center">
                <Upload className="w-3 h-3 text-brand-red" />
              </div>
              {customImageUri && <Check className="w-3.5 h-3.5 text-brand-red" />}
            </div>
            <div className="text-[11px] font-bold text-slate-900 truncate">
              {customImageUri ? 'Custom Active' : 'Upload Art'}
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg, image/webp"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Custom Artwork Sliders (Only visible when user uploads an image) */}
        {customImageUri && (
          <div className="mt-4 pt-3.5 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center justify-between w-full sm:w-auto gap-2">
              <span className="text-xs font-bold text-slate-900 whitespace-nowrap">Artwork Controls:</span>
              <button
                type="button"
                onClick={clearCustomImage}
                className="text-xs font-semibold text-brand-red hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Remove</span>
              </button>
            </div>

            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[10px] font-bold text-gray-500 block mb-1">
                  Zoom: {imageScale.toFixed(2)}x
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="2.5"
                  step="0.05"
                  value={imageScale}
                  onChange={(e) => {
                    setImageScale(parseFloat(e.target.value));
                    renderDynamicTexture();
                  }}
                  className="w-full h-1.5 bg-gray-200 rounded-lg accent-black cursor-pointer"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-500 block mb-1">
                  Pan X: {imageOffsetX}%
                </label>
                <input
                  type="range"
                  min="-50"
                  max="50"
                  step="1"
                  value={imageOffsetX}
                  onChange={(e) => {
                    setImageOffsetX(parseInt(e.target.value));
                    renderDynamicTexture();
                  }}
                  className="w-full h-1.5 bg-gray-200 rounded-lg accent-black cursor-pointer"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-500 block mb-1">
                  Pan Y: {imageOffsetY}%
                </label>
                <input
                  type="range"
                  min="-50"
                  max="50"
                  step="1"
                  value={imageOffsetY}
                  onChange={(e) => {
                    setImageOffsetY(parseInt(e.target.value));
                    renderDynamicTexture();
                  }}
                  className="w-full h-1.5 bg-gray-200 rounded-lg accent-black cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default TouchPanel3DCustomizer;
