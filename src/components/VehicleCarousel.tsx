"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = Array.from({ length: 13 }, (_, i) => `/guma-product/vehicle-${i + 1}.jpg`);

export default function VehicleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-stage">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={src} className="carousel-slide">
              <Image 
                src={src} 
                alt={`Vehicle ${index + 1}`} 
                fill 
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 600px"
                priority={index === 0}
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
