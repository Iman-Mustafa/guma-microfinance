"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = Array.from({ length: 13 }, (_, i) => `/guma-product/vehicle-${i + 1}.jpg`);
// For seamless looping: Clone last image to start, first image to end
const extendedImages = [images[images.length - 1], ...images, images[0]];

export default function VehicleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 (the first real image)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (currentIndex >= extendedImages.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    // The user requested to move from "left to right", which means the previous slide comes in
    timerRef.current = setInterval(() => {
      prevSlide();
    }, 4000); // stay for a few seconds
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const handleTransitionEnd = () => {
    if (currentIndex === extendedImages.length - 1) {
      // Reached the cloned first image at the end
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Reached the cloned last image at the beginning
      setIsTransitioning(false);
      setCurrentIndex(extendedImages.length - 2);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-stage">
        <div 
          className="carousel-track"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((src, index) => (
            <div key={`${src}-${index}`} className="carousel-slide">
              <Image 
                src={src} 
                alt={`Vehicle`} 
                fill 
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 600px"
                priority // Preload all to prevent image pop-in
              />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide} className="carousel-btn" aria-label="Previous">&lt;</button>
        <button onClick={nextSlide} className="carousel-btn" aria-label="Next">&gt;</button>
      </div>
    </div>
  );
}
