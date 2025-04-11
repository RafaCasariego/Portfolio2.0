import React, { useState, useEffect, useRef } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';

const About = () => {
  const trackRef = useRef(null);
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);
  const images = [
    img1, img2, img3, img4, img5, img6, img7,
    img1, img2, img3, img4, img5, img6, img7,
    img1, img2, img3, img4, img5, img6, img7
  ];

  useEffect(() => {
    // Añadir los estilos al head del documento
    const style = document.createElement('style');
    style.textContent = `
      .carousel-container {
        position: relative;
        width: 100%;
        overflow: hidden;
      }

      .carousel-track {
        display: flex;
        width: fit-content;
        animation: slide 140s linear infinite;
      }

      .carousel-container:hover .carousel-track {
        animation-play-state: paused;
      }

      @keyframes slide {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-66.66666666666666%);
        }
      }

      .heart-emoji {
        position: fixed;
        font-size: 1.5rem;
        user-select: none;
        pointer-events: none;
        animation: floatHeart 1.5s ease-out forwards;
        z-index: 1000;
      }

      @keyframes floatHeart {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        100% {
          transform: translate(calc(-50% + var(--random-x)), calc(-300% + var(--random-y))) scale(2);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Limpiar los estilos cuando el componente se desmonte
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const createHeart = (x, y, emoji) => {
    const heart = document.createElement('div');
    heart.className = 'heart-emoji';
    heart.textContent = emoji;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    
    // Añadir variación aleatoria al movimiento
    const randomX = (Math.random() - 0.5) * 300; // Aumentado de 100 a 300
    const randomY = (Math.random() - 0.5) * 200;
    heart.style.setProperty('--random-x', `${randomX}px`);
    heart.style.setProperty('--random-y', `${randomY}px`);
    
    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
      document.body.removeChild(heart);
    });
  };

  const triggerHeartConfetti = (e) => {
    if (hasTriggeredConfetti) return;

    const emojis = ['💙', '🩵', '🩶', '🤍'];
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Crear múltiples corazones en diferentes momentos y posiciones
    for (let i = 0; i < 20; i++) { // Aumentado de 15 a 20 emojis
      setTimeout(() => {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        // Dispersión inicial desde el punto de origen
        const randomOffsetX = (Math.random() - 0.5) * 200; // Aumentado de 100 a 200
        const randomOffsetY = (Math.random() - 0.5) * 100;
        createHeart(
          centerX + randomOffsetX, 
          centerY + randomOffsetY, 
          randomEmoji
        );
      }, i * 80); // Reducido de 100 a 80ms para que salgan más rápido
    }

    setHasTriggeredConfetti(true);
  };

  return (
    <section id="sobre-mi" className="relative overflow-x-hidden">
      {/* Contenido principal centrado */}
      <div className="max-w-screen-md mx-auto px-4 text-center py-20">
        <div className="mb-10">
          <h1 className="text-5xl font-light">
            Hola,
            <br />
            <span className="font-bold text-6xl inline-flex items-center justify-center gap-2">
              soy este de aquí
              <span className="text-2xl">👇</span>
            </span>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 mb-24">
          <p>
            Lorem ipsum blabla, lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma.
          </p>
        </div>
      </div>

      {/* Carrusel a ancho completo */}
      <div className="relative w-screen left-1/2 -translate-x-1/2">
        {/* Contenedor del carrusel */}
        <div className="relative mx-auto max-w-[1400px]">
          <div className="carousel-container">
            <div 
              ref={trackRef}
              className="carousel-track"
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Foto ${(index % 7) + 1}`}
                  className="h-[350px] w-auto object-cover rounded-xl flex-none mx-0.5 cursor-pointer"
                  loading={index < 7 ? "eager" : "lazy"}
                  onClick={triggerHeartConfetti}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
