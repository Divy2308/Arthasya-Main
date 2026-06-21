import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Asset Imports Setup
import buildiumLogo from '../assets/buildium.png';
import doubleLogo from '../assets/double.png';
import drakeLogo from '../assets/drake-software-logo.png';
import proconnectLogo from '../assets/intuit proconnect.png';
import quickbooksLogo from '../assets/Intuit_QuickBooks_logo.png';
import quickenLogo from '../assets/quicken.png';
import sageLogo from '../assets/Sage_Group_logo.svg';
import xeroLogo from '../assets/xero-logo.png';
import zohoLogo from '../assets/zoho.png';

const logos = [
  { src: buildiumLogo, alt: 'Buildium', style: { height: '80px', transform: 'scale(1.2)' } },
  { src: doubleLogo, alt: 'Double', style: { height: '85px', transform: 'scale(1.2)' } },
  { src: drakeLogo, alt: 'Drake Software', style: { height: '65px', transform: 'scale(1.3)' } },
  { src: proconnectLogo, alt: 'Intuit Proconnect', style: { height: '70px', transform: 'scale(1.15)' } },
  { src: quickbooksLogo, alt: 'Intuit QuickBooks', style: { height: '55px', transform: 'scale(1.25)' } },
  { src: quickenLogo, alt: 'Quicken', style: { height: '70px', transform: 'scale(1.15)' } },
  { src: sageLogo, alt: 'Sage Group', style: { height: '65px', transform: 'scale(1.15)' } },
  { src: xeroLogo, alt: 'Xero', style: { height: '85px', transform: 'scale(1.35)' } },
  { src: zohoLogo, alt: 'Zoho', style: { height: '60px', transform: 'scale(1.25)' } }
];

const SoftwareTicker = () => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const timeoutId = useRef(null);

  // Auto-scroll loop using requestAnimationFrame
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;

    const scroll = () => {
      if (!isPaused && !isDragging.current) {
        container.scrollLeft += 0.75; // Smooth scroll speed (0.75px per frame)

        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  // Drag Scroll - Mouse Handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag sensitivity
    let newScroll = scrollLeft.current - walk;

    const halfWidth = containerRef.current.scrollWidth / 2;
    if (newScroll >= halfWidth) {
      newScroll -= halfWidth;
      startX.current = x;
      scrollLeft.current = newScroll;
    } else if (newScroll <= 0) {
      newScroll += halfWidth;
      startX.current = x;
      scrollLeft.current = newScroll;
    }

    containerRef.current.scrollLeft = newScroll;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Drag Scroll - Touch Handlers for Mobile
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    let newScroll = scrollLeft.current - walk;

    const halfWidth = containerRef.current.scrollWidth / 2;
    if (newScroll >= halfWidth) {
      newScroll -= halfWidth;
      startX.current = x;
      scrollLeft.current = newScroll;
    } else if (newScroll <= 0) {
      newScroll += halfWidth;
      startX.current = x;
      scrollLeft.current = newScroll;
    }

    containerRef.current.scrollLeft = newScroll;
  };

  // Temporarily pause auto-scroll on manual navigation
  const pauseAutoScrollTemporarily = () => {
    setIsPaused(true);
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setIsPaused(false);
    }, 2500); // Resume auto-scroll after 2.5s of inactivity
  };

  // Arrow Navigation Buttons
  const scrollPrev = () => {
    const container = containerRef.current;
    if (!container) return;

    pauseAutoScrollTemporarily();
    let target = container.scrollLeft - 280; // Scroll distance (cell width + gap)

    const halfWidth = container.scrollWidth / 2;
    if (target <= 0) {
      container.scrollLeft += halfWidth;
      target += halfWidth;
    }

    container.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  };

  const scrollNext = () => {
    const container = containerRef.current;
    if (!container) return;

    pauseAutoScrollTemporarily();
    let target = container.scrollLeft + 280;

    const halfWidth = container.scrollWidth / 2;
    if (target >= halfWidth) {
      container.scrollLeft -= halfWidth;
      target -= halfWidth;
    }

    container.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16 w-full max-w-7xl mx-auto px-4 md:px-8 bg-transparent">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center tracking-tight font-display">
        We are adroit with multiple accounting tools!
      </h2>

      {/* Infinite Carousel Container */}
      <div className="relative w-full py-4 group">
        
        {/* Left & Right fine fading gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-10 pointer-events-none"></div>

        {/* Left Navigation Button */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full shadow-md hover:shadow-lg border border-gray-150 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center opacity-100"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full shadow-md hover:shadow-lg border border-gray-150 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center opacity-100"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrolling Viewport */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            isDragging.current = false;
          }}
          className="overflow-hidden flex gap-8 items-center w-full select-none cursor-grab active:cursor-grabbing scroll-smooth"
        >
          {/* Render array twice to enable seamless infinite wrap */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm h-28 md:h-32 w-52 md:w-60 flex items-center justify-center flex-shrink-0 transition-shadow duration-300 hover:shadow-md pointer-events-none"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={logo.style}
                className="max-w-[85%] object-contain mix-blend-multiply select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareTicker;
