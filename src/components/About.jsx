import React, { useState } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';

const styles = document.createElement('style');
styles.textContent = `
  .carousel-slide {
    animation: slide 90s linear infinite;
    width: fit-content;
  }

  .carousel-slide.paused {
    animation-play-state: paused;
  }

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.333%);
    }
  }
`;
document.head.appendChild(styles);

const About = () => {
  const [isPaused, setIsPaused] = useState(false);
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section id="sobre-mi" className="relative overflow-x-hidden">
      {/* Contenido principal centrado */}
      <div className="max-w-screen-md mx-auto px-4 text-center py-20">
        <div className="mb-10">
          <h2 className="text-5xl font-light">
            Hola,
            <br />
            <span className="font-bold text-6xl inline-flex items-center justify-center gap-2">
              soy este de aquí
              <span className="text-2xl">👇</span>
            </span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 mb-24">
          <p>
            Lorem ipsum blabla, lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma.
          </p>
        </div>
      </div>

      {/* Carrusel a ancho completo */}
      <div 
        className="relative w-screen left-1/2 -translate-x-1/2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Contenedor del carrusel */}
        <div className="relative mx-auto max-w-[1400px] overflow-hidden">
          <div
            className={`flex space-x-1 carousel-slide ${isPaused ? 'paused' : ''}`}
          >
            {/* Triplicamos las imágenes para un scroll infinito sin cortes */}
            {[...images, ...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Foto ${(index % images.length) + 1}`}
                className="h-[350px] w-auto object-cover rounded-xl flex-none"
                loading={index < images.length ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
