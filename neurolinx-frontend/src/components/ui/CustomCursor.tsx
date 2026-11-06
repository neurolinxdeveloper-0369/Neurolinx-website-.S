import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop / fine pointer devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    // Hide default cursor across interactive elements
    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      
      const target = e.target as HTMLElement;
      if (
        target && (
          target.closest('a') || 
          target.closest('button') || 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer')
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;
    const render = () => {
      // Smooth interpolation for the outer ring trailing effect
      ring.current.x += (mouse.current.x - ring.current.x) * 0.22;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.22;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (style.parentNode) style.parentNode.removeChild(style);
    };
  }, [isVisible]);

  return (
    <div 
      className={`pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden md:block transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Outer Smooth Trailing Ring (Clean Thin Red Circle) */}
      <div 
        ref={ringRef}
        className={`fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none transition-[border-color,background-color,transform] duration-150 ease-out flex items-center justify-center border ${
          isHovered 
            ? 'scale-125 border-[#E0001B] bg-[#E0001B]/10 shadow-[0_0_12px_rgba(224,0,27,0.3)]' 
            : isClicked
            ? 'scale-90 border-[#E0001B] bg-[#E0001B]/20'
            : 'scale-100 border-[#E0001B]/55 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Center Solid Red Dot */}
      <div 
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none transition-transform duration-75 ease-out bg-[#E0001B] ${
          isClicked ? 'scale-75' : isHovered ? 'scale-125' : 'scale-100'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
