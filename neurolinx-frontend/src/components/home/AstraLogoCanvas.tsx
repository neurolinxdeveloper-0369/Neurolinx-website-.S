import React, { useEffect, useRef } from 'react';
import { LOGO_POINTS } from './logoPoints';

interface Particle {
  x: number;
  y: number;
  startX: number;
  startY: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  isRed: boolean;
  baseAlpha: number;
  delay: number;
  duration: number;
  normDx: number;
  normDy: number;
  curveDist: number;
  phase: number;
  isLanded: boolean;
}

interface AmbientParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  isRed: boolean;
}

export function AstraLogoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animId: number;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    let particles: Particle[] = [];
    let ambientParticles: AmbientParticle[] = [];
    let startTime: number | null = null;
    let hasIntroduced = false;

    // Smooth interpolated mouse
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

      // Position logo towards the right side as requested
      const centerX = width > 768 
        ? Math.min(width * 0.65, width - targetSize / 2 - 60)
        : Math.min(width * 0.55, width - targetSize / 2 - 20);
      const centerY = height / 2;

      particles = [];
      const particlesPerPoint = width > 768 ? 3 : 2;

      let seed = 42;
      const seededRandom = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      };

      for (let i = 0; i < LOGO_POINTS.length; i++) {
        const [ptX, ptY, isRed] = LOGO_POINTS[i];
        const baseX = centerX + (ptX - 35) * scale;
        const baseY = centerY + (ptY - 35) * scale;

        for (let p = 0; p < particlesPerPoint; p++) {
          const jitterX = (seededRandom() - 0.5) * scale * 0.75;
          const jitterY = (seededRandom() - 0.5) * scale * 0.75;
          const originX = baseX + jitterX;
          const originY = baseY + jitterY;
          const radius = seededRandom() * 0.32 + (width > 768 ? 0.68 : 0.55);

          // Astra Full-Page Distribution:
          // Particles start distributed across the entire screen from edge to edge
          const marginX = width * 0.12;
          const marginY = height * 0.12;
          const startX = -marginX + seededRandom() * (width + marginX * 2);
          const startY = -marginY + seededRandom() * (height + marginY * 2);

          const dx = originX - startX;
          const dy = originY - startY;
          const dist = Math.hypot(dx, dy);

          // Unit normal vector perpendicular to straight path (for Astra curving streamline vortex)
          const udx = dx / (dist || 1);
          const udy = dy / (dist || 1);
          const normDx = -udy;
          const normDy = udx;

          // Coherent clockwise orbital swirl into center
          const vortexTx = -(startY - centerY);
          const vortexTy = startX - centerX;
          const dot = normDx * vortexTx + normDy * vortexTy;
          const swirlSign = dot >= 0 ? 1 : -1;

          // Curvature arc deflection
          const curveDist = (0.22 + seededRandom() * 0.28) * dist * swirlSign;

          // Distance-based stagger: outer particles stream in behind closer ones
          const distFromCenter = Math.hypot(startX - centerX, startY - centerY);
          const maxDist = Math.hypot(width / 2, height / 2);
          const normDist = Math.min(1.2, distFromCenter / (maxDist || 1));

          // Staggered departure: inner particles start first, outer stream in smoothly
          const delay = 220 + normDist * 380 + seededRandom() * 260;
          const duration = 2100 + seededRandom() * 400; // 2.1s - 2.5s silky cinematic flight

          particles.push({
            x: startX,
            y: startY,
            startX,
            startY,
            originX,
            originY,
            vx: 0,
            vy: 0,
            radius,
            isRed: isRed === 1,
            baseAlpha: seededRandom() * 0.35 + 0.65,
            delay,
            duration,
            normDx,
            normDy,
            curveDist,
            phase: seededRandom() * Math.PI * 2,
            isLanded: false,
          });
        }
      }

      // Background ambient cosmic dust
      ambientParticles = [];
      const ambientCount = width > 768 ? 60 : 30;
      for (let a = 0; a < ambientCount; a++) {
        ambientParticles.push({
          x: seededRandom() * width,
          y: seededRandom() * height,
          vx: (seededRandom() - 0.5) * 0.35,
          vy: (seededRandom() - 0.5) * 0.35,
          radius: seededRandom() * 0.4 + 0.35,
          phase: seededRandom() * Math.PI * 2,
          isRed: seededRandom() > 0.45,
        });
      }
    };

    initParticles();

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    const handleResize = () => {
      hasIntroduced = true;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('resize', handleResize);

    const render = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsed = time - startTime;
      const t = time * 0.001;

      // Soft global fade-in with smoothstep over the first 450ms
      const rawGlobalFade = Math.min(1, elapsed / 450);
      const globalFade = rawGlobalFade * rawGlobalFade * (3 - 2 * rawGlobalFade);

      ctx.save();
      ctx.scale(dpr, dpr);

      // Deep black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      const targetSize = Math.min(width * 0.85, height * 0.72, width > 768 ? 440 : 270);
      const centerX = width > 768 
        ? Math.min(width * 0.65, width - targetSize / 2 - 60) 
        : Math.min(width * 0.55, width - targetSize / 2 - 20);
      const centerY = height / 2;

      // Soft ambient crimson nebula glow with smoothstep bloom
      const rawBloom = Math.min(1, Math.max(0, (elapsed - 400) / 2200));
      const nebulaBloom = rawBloom * rawBloom * (3 - 2 * rawBloom);
      const glowRadius = Math.min(width, height) * 0.42;
      const nebulaGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowRadius);
      nebulaGlow.addColorStop(0, `rgba(226, 39, 39, ${0.14 * nebulaBloom})`);
      nebulaGlow.addColorStop(0.35, `rgba(160, 20, 30, ${0.05 * nebulaBloom})`);
      nebulaGlow.addColorStop(0.7, `rgba(30, 10, 20, ${0.015 * nebulaBloom})`);
      nebulaGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = nebulaGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // Fluid viscous mouse lerp (liquid smooth tracking)
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      } else {
        mouse.x = -9999;
        mouse.y = -9999;
      }

      const mouseRadius = mouse.radius;
      const mouseRadiusSq = mouseRadius * mouseRadius;

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (p.isLanded) {
          // Assembled in logo: ultra-gentle organic micro-drift + fluid mouse interaction
          const driftX = Math.sin(t * 1.1 + p.phase) * 0.35;
          const driftY = Math.cos(t * 0.9 + p.phase) * 0.35;
          const targetX = p.originX + driftX;
          const targetY = p.originY + driftY;

          const ax = (targetX - p.x) * 0.10;
          const ay = (targetY - p.y) * 0.10;
          p.vx = (p.vx + ax) * 0.88;
          p.vy = (p.vy + ay) * 0.88;

          // Interactive fluid mouse dispersion
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < mouseRadiusSq && distSq > 0.1) {
              const dist = Math.sqrt(distSq);
              const normDist = 1 - dist / mouseRadius;
              const force = normDist * normDist * 3.0;

              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
            }
          }

          p.x += p.vx;
          p.y += p.vy;
        } else {
          // Astra starting effect: particles are full in page, then converge smoothly to logo
          if (elapsed < p.delay) {
            // Suspended across full page with gentle atmospheric idle drift
            const idleT = t * 1.2 + p.phase;
            p.x = p.startX + Math.sin(idleT) * 1.5;
            p.y = p.startY + Math.cos(idleT) * 1.5;
            p.vx = 0;
            p.vy = 0;
          } else {
            const flightElapsed = elapsed - p.delay;
            const rawProgress = Math.min(1, flightElapsed / p.duration);

            // Smootherstep (Ken Perlin's quintic polynomial): zero jerk at both launch and landing
            const ease = rawProgress * rawProgress * rawProgress * (rawProgress * (rawProgress * 6 - 15) + 10);

            // Sin^2 curve: zero lateral velocity at start and zero at landing
            const arcFactor = Math.pow(Math.sin(rawProgress * Math.PI), 2);
            const arcX = p.normDx * p.curveDist * arcFactor;
            const arcY = p.normDy * p.curveDist * arcFactor;

            // Seamlessly dissolve initial idle drift into the flight path (first 25% of flight)
            const idleT = t * 1.2 + p.phase;
            const driftFade = Math.max(0, 1 - rawProgress * 4);
            const startXWithDrift = p.startX + Math.sin(idleT) * 1.5 * driftFade;
            const startYWithDrift = p.startY + Math.cos(idleT) * 1.5 * driftFade;

            const targetX = startXWithDrift + (p.originX - p.startX) * ease + arcX;
            const targetY = startYWithDrift + (p.originY - p.startY) * ease + arcY;

            if (rawProgress >= 1) {
              p.isLanded = true;
              p.x = p.originX;
              p.y = p.originY;
              p.vx = 0;
              p.vy = 0;
            } else {
              p.x = targetX;
              p.y = targetY;
              p.vx = 0;
              p.vy = 0;
            }
          }
        }
      }

      // Update ambient stardust particles with wrap-around margins
      for (let a = 0; a < ambientParticles.length; a++) {
        const ap = ambientParticles[a];
        ap.x += ap.vx;
        ap.y += ap.vy;
        if (ap.x < -10) ap.x = width + 10;
        if (ap.x > width + 10) ap.x = -10;
        if (ap.y < -10) ap.y = height + 10;
        if (ap.y > height + 10) ap.y = -10;
      }

      // Render with enhanced color thickness and opacity:
      // 1. Red Dust Particles Path (Logo + Ambient)
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!p.isRed) continue;
        ctx.moveTo(p.x + p.radius, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      }
      for (let a = 0; a < ambientParticles.length; a++) {
        const ap = ambientParticles[a];
        if (!ap.isRed) continue;
        ctx.moveTo(ap.x + ap.radius, ap.y);
        ctx.arc(ap.x, ap.y, ap.radius, 0, Math.PI * 2);
      }
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = `rgba(255, 28, 54, ${globalFade})`;
      ctx.fill();
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = `rgba(255, 50, 75, ${globalFade * 0.75})`;
      ctx.fill();

      // 2. Silver/White Dust Particles Path (Logo + Ambient)
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.isRed) continue;
        ctx.moveTo(p.x + p.radius, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      }
      for (let a = 0; a < ambientParticles.length; a++) {
        const ap = ambientParticles[a];
        if (ap.isRed) continue;
        ctx.moveTo(ap.x + ap.radius, ap.y);
        ctx.arc(ap.x, ap.y, ap.radius, 0, Math.PI * 2);
      }
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = `rgba(245, 248, 255, ${globalFade})`;
      ctx.fill();
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = `rgba(255, 255, 255, ${globalFade * 0.75})`;
      ctx.fill();

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block z-0 cursor-default"
    />
  );
}
