import React, { useEffect, useRef } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';

const About = () => {
  const scrollRef = useRef(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const delta = window.scrollY - lastScroll.current;
      lastScroll.current = window.scrollY;

      if (scrollRef.current) {
        scrollRef.current.scrollLeft += delta * 1.2;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="sobre-mi" className="min-h-screen bg-[#121219] text-[#e5e5e5] py-20">
      <div className="max-w-screen-md mx-auto px-10 text-center">
        {/* Título */}
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

        {/* Texto de presentación */}
        <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 mb-24">
          <p>
          Lorem ipsum blabla, lorem ipsum dolor cuántum queries et ipsma lorem             Lorem ipsum blabla, lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma.
          ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma lorem ipsum dolor cuántum queries et ipsma.
          </p>
        </div>
      </div>

      {/* Carrusel centrado al 90% de ancho */}
      <div
        ref={scrollRef}
        className="w-[98%] mx-auto overflow-hidden whitespace-nowrap scroll-smooth snap-x snap-mandatory"
      >
        {[img1, img2, img3, img4, img5, img6, img7].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Foto ${index + 1}`}
            className="inline-block w-64 h-80 object-cover rounded-md mr-[2px] snap-start"
          />
        ))}
      </div>
    </section>
  );
};

export default About;
