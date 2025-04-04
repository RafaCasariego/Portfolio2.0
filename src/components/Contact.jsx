import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-200 mb-16">
          rafacasariego@gmail.com
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg">
          <div className="text-gray-300">
            <span className="font-medium">Disponible para</span> trabajar
          </div>
          <div className="hidden sm:block text-gray-500">|</div>
          <div className="text-gray-300">
            <span className="font-medium">Disponible como</span> <i>freelance</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
