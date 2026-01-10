'use client';

import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'ENTENTE-2026',
      subtitle: 'Knowledge Society in Transition',
    },
    {
      title: 'Advancing Sustainability',
      subtitle: 'Through Multidisciplinary Research',
    },
    {
      title: 'NIIT University',
      subtitle: 'Neemrana, Rajasthan',
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
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero-banner.jpg" 
          alt="ENTENTE-2026 Conference" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-maroon/70"></div>
      </div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl md:text-2xl text-yellow">{slide.subtitle}</p>
          </div>
        </div>
      ))}

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
