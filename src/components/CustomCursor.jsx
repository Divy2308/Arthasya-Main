import React, { useState, useEffect, useRef } from 'react';

const styleSheet = `
@keyframes cursor-halo-pulse {
  0% {
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 0.15;
  }
  50% {
    transform: translate3d(-50%, -50%, 0) scale(1.4);
    opacity: 0.05;
  }
  100% {
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 0.15;
  }
}

.cursor-pulse-halo {
  animation: cursor-halo-pulse 2.2s infinite ease-in-out;
}

.custom-cursor-dot {
  transition: width 0.2s, height 0.2s, opacity 0.2s;
  will-change: transform;
}

.custom-cursor-ring {
  transition: width 0.3s, height 0.3s, border-radius 0.3s, background-color 0.3s, border-color 0.3s;
  will-change: transform;
}

.custom-cursor-halo {
  transition: width 0.3s, height 0.3s, opacity 0.3s;
  will-change: transform;
}
`;

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });

  const dotDomRef = useRef(null);
  const ringDomRef = useRef(null);
  const haloDomRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable cursor animations on pointer-fine (desktop) systems
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Global click target hover detection
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isClickable) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    // Smooth movement loop using lerping and requestAnimationFrame
    let animationFrameId;
    const render = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      // Lock center dot directly to mouse coordinates (instant tracking)
      dotRef.current.x = targetX;
      dotRef.current.y = targetY;

      // Outer ring lerps snappily for a clean organic offset
      ringRef.current.x += (targetX - ringRef.current.x) * 0.25;
      ringRef.current.y += (targetY - ringRef.current.y) * 0.25;

      // Update style positions directly on the DOM nodes for maximum performance
      if (dotDomRef.current) {
        dotDomRef.current.style.transform = `translate3d(${dotRef.current.x}px, ${dotRef.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }
      if (ringDomRef.current) {
        ringDomRef.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }
      if (haloDomRef.current) {
        haloDomRef.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0) translate3d(-50%, -50%, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleSheet }} />
      <div className="fixed inset-0 z-[9999] pointer-events-none select-none hidden md:block">

        {/* Pulsing Outer Halo */}
        <div
          ref={haloDomRef}
          className={`absolute rounded-full border border-sky-400/10 cursor-pulse-halo custom-cursor-halo ${
            isHovered ? 'w-24 h-24' : 'w-16 h-16'
          }`}
          style={{ willChange: 'transform' }}
        />

        {/* Glassmorphism Outer Ring */}
        <div
          ref={ringDomRef}
          className={`absolute flex items-center justify-center border custom-cursor-ring ${
            isHovered
              ? 'w-16 h-16 rounded-xl bg-cyan-500/10 border-blue-500'
              : 'w-12 h-12 rounded-full bg-white/5 border-blue-500'
          } ${isClicked ? 'scale-90 opacity-80' : ''}`}
          style={{ willChange: 'transform' }}
        />

        {/* Center Glowing Dot */}
        <div
          ref={dotDomRef}
          className={`absolute rounded-full bg-gradient-to-tr from-cyan-400 to-white border border-blue-500 custom-cursor-dot ${
            isHovered ? 'w-4 h-4 opacity-40' : 'w-3 h-3 opacity-100'
          } ${isClicked ? 'scale-75' : ''}`}
          style={{ willChange: 'transform' }}
        />

      </div>
    </>
  );
}
