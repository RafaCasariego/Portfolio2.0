import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <div className="mb-16">
          <h1 className="text-5xl font-light">
            ¡Hey!
            <br />
            <span className="font-bold text-6xl">
              ¿Trabajamos juntos?
            </span>
          </h1>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg">
          <div className="text-gray-300">
            <span className="font-medium">rafacasariego@gmail.com</span>
          </div>
          <div className="text-gray-300">
            <span className="font-medium">Disponible para</span> <i>trabajar</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
