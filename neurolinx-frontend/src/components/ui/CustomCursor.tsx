import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const circle = useRef({ x: -100, y: -100 });
  
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      
      const target = e.target as HTMLElement;
      if (target && (target.closest('a') || target.closest('button') || target.tagName === 'A' || target.tagName === 'BUTTON')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    let animationFrameId: number;
    const render = () => {
      circle.current.x += (mouse.current.x - circle.current.x) * 0.25;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.25;
      
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circle.current.x}px, ${circle.current.y}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Center Small Dot */}
      <div 
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none transition-transform duration-75 ease-out ${
          isClicked ? 'scale-50' : isHovered ? 'scale-150' : 'scale-100'
        } bg-brand-red shadow-[0_0_8px_rgba(224,0,27,0.8)]`}
      />
      
      {/* Outer Smooth Trailing Ring */}
      <div 
        ref={circleRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-[width,height,background-color,border-color] duration-200 ease-out flex items-center justify-center ${
          isHovered 
            ? 'w-12 h-12 -ml-6 -mt-6 border-2 border-brand-red bg-brand-red/15 backdrop-blur-[1px] shadow-[0_0_15px_rgba(224,0,27,0.4)]' 
            : isClicked
            ? 'w-6 h-6 -ml-3 -mt-3 border-2 border-brand-red bg-brand-red/20'
            : 'w-8 h-8 -ml-4 -mt-4 border-2 border-brand-red bg-brand-red/10 shadow-[0_0_10px_rgba(224,0,27,0.35)]'
        }`}
      />
    </div>
  );
}
