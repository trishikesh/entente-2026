'use client';

import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'ENTENTE-2026',
      subtitle: 'Knowledge Society in Transition',
      image: '/images/hero-banner.jpg',
    },
    {
      title: 'Advancing Sustainability',
      subtitle: 'Through Multidisciplinary Research',
      image: '/images/hero-1.jpg',
    },
    {
      title: 'NIIT University',
      subtitle: 'Neemrana, Rajasthan',
      image: '/images/hero-2.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-sm">
      {/* Background Images that Change */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-maroon/70"></div>
        </div>
      ))}

      {/* Translucent Box - Always Visible */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl px-8 md:px-12 py-8 md:py-10 border border-white/20 shadow-2xl min-w-[300px] md:min-w-[500px]">
          {/* Text Content that Changes */}
          <div className="relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 text-center text-white ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">{slide.title}</h1>
                <p className="text-lg md:text-2xl text-yellow">{slide.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-yellow' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
