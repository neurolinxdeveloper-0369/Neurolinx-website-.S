import React, { useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CardItem {
  title: string;
  img: string;
  linkUrl: string;
}

interface ContinuousCarouselProps {
  items: CardItem[];
}

function ContinuousCarousel({ items }: ContinuousCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isHoveredRef = useRef(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout>();

  // Tripled items ensure a truly seamless infinite marquee loop
  const tripledItems = useMemo(() => [...items, ...items, ...items], [items]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Start in middle set of items so user can scroll left or right immediately
    const initTimer = setTimeout(() => {
      const oneSetWidth = container.scrollWidth / 3;
      if (oneSetWidth > 0 && container.scrollLeft === 0) {
        container.scrollLeft = oneSetWidth;
      }
    }, 60);

    let animationId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isPausedRef.current && container) {
        const oneSetWidth = container.scrollWidth / 3;
        if (oneSetWidth > 0) {
          // Continuous scroll speed: delta * 0.062 (~62px/sec)
          const step = delta * 0.062;
          container.scrollLeft += step;

          // Seamless infinite wrap
          if (container.scrollLeft >= oneSetWidth * 2) {
            container.scrollLeft -= oneSetWidth;
          } else if (container.scrollLeft <= 5) {
            container.scrollLeft += oneSetWidth;
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      clearTimeout(initTimer);
      cancelAnimationFrame(animationId);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [items]);

  const pauseScrolling = () => {
    isHoveredRef.current = true;
    isPausedRef.current = true;
  };

  const resumeScrolling = () => {
    isHoveredRef.current = false;
    isPausedRef.current = false;
  };

  const handleManualScroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    // Pause auto-scrolling during user interaction
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);

    const firstCard = container.querySelector('[data-card-item]') as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth : 300;
    
    // Gap calculation based on viewport width matching Tailwind breakpoints
    const gap = window.innerWidth >= 1024 ? 24 : (window.innerWidth >= 640 ? 20 : 16);
    const stride = cardWidth + gap;

    // Advance by 4 cards on desktop (lg+), 2 on tablet (sm+), 1 on mobile
    const visibleCards = window.innerWidth >= 1024 ? 4 : (window.innerWidth >= 640 ? 2 : 1);

    const oneSetWidth = container.scrollWidth / 3;

    // Infinite loop normalization before scrolling
    if (container.scrollLeft <= oneSetWidth * 0.4) {
      container.scrollLeft += oneSetWidth;
    } else if (container.scrollLeft >= oneSetWidth * 2.2) {
      container.scrollLeft -= oneSetWidth;
    }

    // Align to nearest card edge and advance by exactly 4 cards on desktop
    const currentCardIndex = Math.round(container.scrollLeft / stride);
    const targetIndex = direction === 'right' 
      ? currentCardIndex + visibleCards 
      : currentCardIndex - visibleCards;
    
    const targetScrollLeft = targetIndex * stride;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });

    // Keep paused for 4s so user can view the 4 newly revealed cards
    pauseTimeoutRef.current = setTimeout(() => {
      if (!isHoveredRef.current) {
        isPausedRef.current = false;
      }
    }, 4000);
  };

  return (
    <div 
      className="relative group/carousel px-1 sm:px-2"
      onMouseEnter={pauseScrolling}
      onMouseLeave={resumeScrolling}
      onPointerEnter={pauseScrolling}
      onPointerLeave={resumeScrolling}
    >
      {/* Left Arrow Button */}
      <button
        type="button"
        onClick={() => handleManualScroll('left')}
        aria-label="Previous 4 cards"
        className="absolute -left-2 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/90 hover:bg-brand-red text-white border border-white/25 hover:border-brand-red flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
      </button>

      {/* Slider Track (Exactly 4 cards visible on desktop in a line) */}
      <div
        ref={scrollRef}
        onMouseEnter={pauseScrolling}
        onMouseLeave={resumeScrolling}
        onTouchStart={pauseScrolling}
        onTouchEnd={() => {
          pauseTimeoutRef.current = setTimeout(resumeScrolling, 4000);
        }}
        className="flex overflow-x-auto gap-4 sm:gap-5 lg:gap-6 pt-6 pb-6 select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tripledItems.map((item, index) => (
          <div
            key={index}
            data-card-item
            className="flex-none w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(25%-18px)] group/card hover:z-20 transition-all"
          >
            {/* Direct clickable card with reduced size & hover lift + scale */}
            <Link
              to={item.linkUrl}
              className="group relative block h-[290px] sm:h-[310px] lg:h-[325px] xl:h-[340px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-white/10 hover:border-brand-red/80 bg-zinc-950 transition-all duration-300 ease-out hover:-translate-y-2.5 hover:scale-[1.04] hover:shadow-2xl hover:shadow-red-950/40 cursor-pointer"
            >
              {/* Image with subtle zoom on hover */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 ease-out" 
                loading="lazy" 
              />
              
              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none transition-opacity duration-300 group-hover:via-black/30" />

              {/* Title only */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-5 z-10">
                <h3 className="text-sm sm:text-base md:text-base lg:text-base xl:text-lg font-display font-bold text-white leading-snug drop-shadow-md group-hover:text-brand-red transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        type="button"
        onClick={() => handleManualScroll('right')}
        aria-label="Next 4 cards"
        className="absolute -right-2 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/90 hover:bg-brand-red text-white border border-white/25 hover:border-brand-red flex items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer opacity-90 hover:opacity-100"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
      </button>
    </div>
  );
}

export function Services() {
  // Combined Solutions & Products in one unified carousel line of 4
  const solutionsAndProducts: CardItem[] = [
    {
      title: "Remote Monitoring System & Smart Metering",
      img: "/media/rms_home_card.jpg",
      linkUrl: "/rms-smart-metering"
    },
    {
      title: "Smart Home Automation",
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/home-automation"
    },
    {
      title: "Internet of Things",
      img: "/media/smart_home_hero_iot.jpg",
      linkUrl: "/iot"
    },
    {
      title: "Smart POS Application",
      img: "/media/pos_home_card.jpg",
      linkUrl: "/pos-application"
    },
    {
      title: "Non-UV Disinfection Light",
      img: "/media/non_uv_disinfection_home.jpg",
      linkUrl: "/non-uv-disinfection"
    },
    {
      title: "Chip-Level Designing",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/chip-level-design"
    },
    {
      title: "Robotics & AI",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/robotics"
    },
    {
      title: "Railways",
      img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/railways"
    },
    {
      title: "FogPASS Device",
      img: "/media/why_fogpass_bg.jpg",
      linkUrl: "/fog-pass"
    },
    {
      title: "Power Supply & Drivers",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "/power-supply"
    }
  ];

  return (
    <section className="w-full bg-transparent py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative z-10 border-t border-white/10 overflow-hidden">
      {/* Subtle ambient crimson nebula glow matching hero section */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-red/[0.08] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-10 h-1 bg-brand-red rounded-full"></div>
            <span className="font-body text-brand-red font-bold tracking-[0.2em] uppercase text-xs">Our Solutions &amp; Products</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-4 sm:mb-6 leading-tight">
            Expert Solutions Across <br/> Innovation &amp; Engineering
          </h2>
        </div>

        {/* Single Unified Carousel (Line of 4, continuous scroll, pause on hover, left & right arrows) */}
        <div>
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-1 bg-brand-red rounded-full"></div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">Our Solutions &amp; Products</h3>
          </div>
          <ContinuousCarousel items={solutionsAndProducts} />
        </div>

      </div>
    </section>
  );
}
