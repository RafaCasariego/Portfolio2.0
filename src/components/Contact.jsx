import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import iconoRafa from '../assets/icono-rafa.jpg';

const Contact = () => {
  const [showCopied, setShowCopied] = useState(false);
  const email = 'rafacasariego@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <section id="contacto" className="pt-16 pb-48 lg:pb-96">
      <div className="max-w-screen-lg mx-auto px-4 text-center w-full">
        <div className="mb-32">
          <h1 className="text-5xl font-light">
            ¡Hey!
            <br />
            <span className="font-bold text-6xl">
              ¿Trabajamos juntos?
            </span>
          </h1>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="bg-neutral-800 rounded-3xl md:rounded-full p-6 md:py-6 md:pl-4 md:pr-8 flex flex-col md:flex-row items-center gap-6 md:gap-x-8 shadow-lg max-w-4xl w-full">
            <div className="w-32 h-32 md:w-24 md:h-24 rounded-full bg-neutral-700 overflow-hidden flex-shrink-0">
              <img
                src={iconoRafa}
                alt="Rafa Casariego"
                className="w-full h-full object-cover"
                id="contact-avatar"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-x-8 w-full">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="text-white"
                >
                  <EnvelopeIcon className="h-8 w-8" />
                </motion.div>
                
                <a 
                  href={`mailto:${email}`}
                  className="text-white text-xl md:text-2xl hover:text-blue-400 transition-colors duration-300"
                >
                  {email}
                </a>
              </div>
              
              <div className="flex gap-4 md:ml-auto w-full md:w-auto justify-center md:justify-end">
                <button
                  onClick={copyToClipboard}
                  className="px-6 py-3 bg-neutral-700 hover:bg-neutral-600 rounded-full text-white transition-colors duration-300 flex-1 md:flex-initial"
                >
                  Copiar
                </button>
                
                <a
                  href={`mailto:${email}`}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition-colors duration-300 flex-1 md:flex-initial"
                >
                  Enviar email
                </a>
              </div>
            </div>
          </div>
          
          {showCopied && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
            >
              ¡Correo copiado!
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
