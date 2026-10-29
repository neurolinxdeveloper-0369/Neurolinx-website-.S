import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: -100, y: -100 });
  const circle = useRef({ x: -100, y: -100 });
  
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    // Hide default cursor globally
    document.documentElement.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      if (
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }

      // Check for dark or red backgrounds to change cursor color
      let overDark = false;
      let currentElement: HTMLElement | null = target;
      while (currentElement) {
        if (typeof currentElement.className === 'string') {
          const cls = currentElement.className;
          
          const isDarkBg = cls.includes('bg-brand-red') || cls.includes('bg-brand-charcoal') || cls.includes('bg-black') || cls.includes('bg-red-') || cls.includes('bg-gray-900');
          const isLightBg = cls.includes('bg-white') || cls.includes('bg-[#f7f2f2]') || cls.includes('bg-gray-50') || cls.includes('bg-gray-100');
          
          if (isDarkBg) {
            overDark = true;
            break;
          } else if (isLightBg) {
            overDark = false;
            break;
          }
        }
        currentElement = currentElement.parentElement;
      }
      setIsOverDark(overDark);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    let animationFrameId: number;
    const render = () => {
      // Smooth lerp for the trailing circle
      circle.current.x += (mouse.current.x - circle.current.x) * 0.2;
      circle.current.y += (mouse.current.y - circle.current.y) * 0.2;
      
      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circle.current.x}px, ${circle.current.y}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      {/* Trailing Circle */}
      <div 
        ref={circleRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-[1.5px] pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isOverDark ? 'border-white' : 'border-brand-red'
        } ${
          isHovered 
            ? (isOverDark ? 'w-12 h-12 bg-white/20 border-white/50' : 'w-12 h-12 bg-brand-red/10 border-brand-red/50') 
            : ''
        } ${isClicked ? 'scale-75' : 'scale-100'}`}
      ></div>
      
      {/* Center Dot */}
      <div 
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] transition-opacity duration-300 ${
          isOverDark ? 'bg-white' : 'bg-brand-red'
        } ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>
    </>
  );
}
