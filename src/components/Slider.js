import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slides = [
    { img: '/img/whiteout-survival.webp', alt: 'Whiteout Survival', link: '/guides/whiteout-survival' },
    { img: '/img/rok.webp', alt: 'Rise of Kingdoms', link: '/guides/rise-of-kingdoms' },
  ];

  const moveSlide = (step) => {
    setCurrentSlide((prev) => (prev + step + slides.length) % slides.length);
  };

  useEffect(() => {
    let interval = setInterval(() => moveSlide(1), 5000);
    const slider = sliderRef.current;

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => (interval = setInterval(() => moveSlide(1), 5000));

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(interval);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="slider" ref={sliderRef}>
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide.img} alt={slide.alt} />
            <a href={slide.link} className="btn">Ver guía</a>
          </div>
        ))}
      </div>
      <button className="prev" aria-label="Diapositiva anterior" onClick={() => moveSlide(-1)}>❮</button>
      <button className="next" aria-label="Diapositiva siguiente" onClick={() => moveSlide(1)}>❯</button>
    </section>
  );
}

export default Slider;