import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: "2020 - 2024",
      company: "LETCRAFT",
      role: "EDUCACIÓN",
      description: "Gestión Bases de Datos, Revisión y Control de Streamers",
      details: "Lorem ipsum blabla, lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma"
    },
    {
      period: "2023",
      company: "vorteX",
      role: "E-Commerce de Gaming",
      description: "",
      details: "Lorem ipsum blabla, lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma"
    },
    {
      period: "2020 - 2024",
      company: "FREELANCE",
      role: "",
      description: "Gestión Bases de Datos, Revisión y Control de Streamers",
      details: "Lorem ipsum blabla, lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma"
    }
  ];

  return (
    <section id="experiencia" className="min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-gray-200">
          Lo que otros dicen de mí
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item text-left">
              <div className="mb-3 text-gray-400">{exp.period}</div>
              <div className="mb-6">
                <h3 className={`text-3xl font-bold mb-2 ${
                  exp.company === 'vorteX' 
                    ? 'text-blue-500' 
                    : exp.company === 'LETCRAFT' 
                      ? 'text-red-500' 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
