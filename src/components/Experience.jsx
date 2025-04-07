import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: "2020 - 2024",
      company: "L3TCRAFT",
      role: "Marketing de Influencers",
      description: "Gestión Bases de Datos, Revisión y Control de Streamers",
      details: "Lorem ipsum blabla, lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma"
    },
    {
      period: "2024",
      company: "vorteX",
      role: "E-Commerce de Gaming",
      description: "Creación de página web, gestión de ventas, montaje de equipos informáticos",
      details: "Lorem ipsum blabla, lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma"
    },
    {
      period: "2019",
      company: "FREELANCE",
      role: "Desarrollo Web",
      description: "Desarrollo Web páginas de referidos de amazon",
      details: "Lorem ipsum blabla, lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma"
    }
  ];

  return (
    <section id="experiencia" className="min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-5xl font-light">
            Dónde he estado
            <br />
            <span className="font-bold text-6xl">
              liándola profesionalmente
            </span>
          </h2>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Línea vertical */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-700"></div>
          
          {/* Contenedor de experiencias */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8">
                {/* Punto en la línea */}
                <div className="absolute left-[-4px] top-4 w-3 h-3 rounded-full bg-gray-400"></div>
                
                {/* Card de experiencia */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-gray-400 mb-3">{exp.period}</div>
                  <div className="mb-4">
                    <h3 className={`text-3xl font-bold mb-2 ${
                      exp.company === 'vorteX' 
                        ? 'text-blue-500' 
                        : exp.company === 'L3TCRAFT' 
                          ? 'text-red-500' 
                          : exp.company === 'FREELANCE'
                            ? 'text-green-400'
                            : 'text-gray-200'
                    }`}>
                      {exp.company}
                    </h3>
                    {exp.role && (
                      <div className="text-xl text-gray-300">{exp.role}</div>
                    )}
                  </div>
                  {exp.description && (
                    <div className="text-lg text-gray-300 mb-4">{exp.description}</div>
                  )}
                  <p className="text-gray-400 leading-relaxed">{exp.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
