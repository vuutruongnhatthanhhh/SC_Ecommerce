"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "@/styles/Slider.module.css";

interface SliderProps {
  images: {
    desktop: string;
    tablet: string;
    mobile: string;
  }[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${styles.sliderWrapper} relative w-full h-auto p-4 overflow-hidden`}
    >
      <picture>
        <source
          srcSet={images[currentIndex].mobile}
          media="(max-width: 640px)"
        />
        <source
          srcSet={images[currentIndex].tablet}
          media="(max-width: 1024px)"
        />
        <source
          srcSet={images[currentIndex].desktop}
          media="(min-width: 1025px)"
        />
        <img
          src={images[currentIndex].desktop} // Default image
          alt="Slider Image"
          className="w-full h-auto object-cover rounded-xl"
        />
      </picture>

      {/* Nút điều hướng */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#c4123f] text-white p-2 rounded-full"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#c4123f] text-white p-2 rounded-full"
          >
            <FaChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default Slider;
