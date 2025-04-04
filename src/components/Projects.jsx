import React from 'react';

const ProjectCard = ({ title, subtitle, description, isLarge = false }) => {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ${isLarge ? 'col-span-full' : 'col-span-full md:col-span-1'}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400">
            A
          </div>
          <div>
            <div className="text-gray-300 font-medium">Header</div>
            <div className="text-sm text-gray-400">Subhead</div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className={`aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-gray-700 to-gray-600 group-hover:from-gray-600 group-hover:to-gray-500 transition-all duration-300`}>
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-16 h-16 text-gray-500 group-hover:text-gray-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5l7 4.5v9L12 14m0-9L5 9.5v9L12 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 group-hover:text-white transition-colors">{title}</h3>
        <p className="text-sm sm:text-base text-gray-400">{subtitle}</p>
        <p className="text-sm sm:text-base text-gray-400 line-clamp-2">{description}</p>
      </div>

      <div className="mt-6 flex space-x-3">
        <button className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors">Demo</button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-500 transition-colors">GitHub</button>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Personal",
      subtitle: "React + Tailwind CSS",
      description: "Un portfolio moderno y responsive construido con las últimas tecnologías web."
    },
    {
      title: "E-commerce Gaming",
      subtitle: "Next.js + Stripe",
      description: "Plataforma de comercio electrónico especializada en productos gaming."
    },
    {
      title: "Dashboard Analytics",
      subtitle: "React + D3.js",
      description: "Panel de control para visualización de datos en tiempo real."
    }
  ];

  return (
    <section id="proyectos" className="min-h-screen">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-gray-200">
          Algunos de mis mejores proyectos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <ProjectCard 
            isLarge={true}
            {...projects[0]}
          />
          <ProjectCard {...projects[1]} />
          <ProjectCard {...projects[2]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
