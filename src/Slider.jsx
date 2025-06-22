import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  '/noithanhdalat.jpg',
  '/nen.jpg',
  '/thienduongsanmay.jpg',
  '/nhaga.jpg',
  '/tuibunquatgio.jpg',
];

function Slider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="slider-container">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`slide-${idx}`}
          className={`slider-img${idx === current ? ' active' : ''}`}
          style={{display: idx === current ? 'block' : 'none'}}
        />
      ))}
      <div className="slider-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
      <button className="slider-btn prev" onClick={() => setCurrent((current-1+images.length)%images.length)}>&lt;</button>
      <button className="slider-btn next" onClick={() => setCurrent((current+1)%images.length)}>&gt;</button>
    </div>
  );
}

export default Slider;
