"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = Array.from({ length: 13 }, (_, i) => `/guma-product/vehicle-${i + 1}.jpg`);

export default function VehicleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const setSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds timer requested by user
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isHovered]);

  const getPrevIndices = () => {
    return [
      (currentIndex - 3 + images.length) % images.length,
      (currentIndex - 2 + images.length) % images.length,
      (currentIndex - 1 + images.length) % images.length,
    ];
  };

  const getNextIndices = () => {
    return [
      (currentIndex + 1) % images.length,
      (currentIndex + 2) % images.length,
      (currentIndex + 3) % images.length,
    ];
  };

  const leftThumbs = getPrevIndices();
  const rightThumbs = getNextIndices();

  return (
    <div 
      className="carousel-container new-design"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-layout">
        <div className="carousel-side left-side desktop-only">
          {leftThumbs.map((idx) => (
            <div key={`left-${idx}`} className="thumbnail" onClick={() => setSlide(idx)}>
              <Image src={images[idx]} alt={`Thumbnail ${idx}`} fill sizes="150px" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        <div className="carousel-center">
          <div className="oval-frame">
            <Image 
              src={images[currentIndex]} 
              alt="Central Vehicle" 
              fill 
              sizes="(max-width: 768px) 100vw, 600px" 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>
        </div>

        <div className="carousel-side right-side desktop-only">
          {rightThumbs.map((idx) => (
            <div key={`right-${idx}`} className="thumbnail" onClick={() => setSlide(idx)}>
              <Image src={images[idx]} alt={`Thumbnail ${idx}`} fill sizes="150px" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-thumbnails mobile-only">
         {images.map((src, idx) => (
            <div 
              key={`mob-${idx}`} 
              className={`thumbnail ${idx === currentIndex ? 'active' : ''}`} 
              onClick={() => setSlide(idx)}
            >
              <Image src={src} alt={`Thumbnail ${idx}`} fill sizes="80px" style={{ objectFit: 'cover' }} />
            </div>
         ))}
      </div>
    </div>
  );
}
