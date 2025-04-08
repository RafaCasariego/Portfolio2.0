import React, { useState } from 'react';
import bentoFront from '../assets/bento-front.png';
import bentoCicd from '../assets/bento-cicd.png';
import bentoCloud from '../assets/bento-cloud.png';

const ProjectCard = ({ project, onClick, isWide }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl
                 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(79,70,229,0.45)]
                 shadow-[0_4px_20px_rgb(79,70,229,0.2)]
                 hover:ring-2 hover:ring-indigo-600
                 transition-all duration-300 aspect-[2/1] ${isWide ? 'md:aspect-[2/1]' : 'md:aspect-square'}`}
    >
      {/* Imagen de fondo */}
      <img 
        src={project.image || bentoFront} 
        alt={project.title}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      {/* Contenido */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-200 text-sm">{project.subtitle}</p>
        </div>
        
        {/* Tags y botón en la misma línea */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-wrap gap-2 flex-1 mr-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-800/80 text-gray-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <button className="px-4 py-1.5 text-sm bg-indigo-600 text-white rounded-lg
                           hover:bg-indigo-500 transition-colors duration-300 whitespace-nowrap">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gray-900 rounded-2xl max-w-3xl w-full mx-auto overflow-hidden">
        {/* Botón cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white
                     w-8 h-8 flex items-center justify-center rounded-full
                     bg-black/20 hover:bg-black/40 transition-colors duration-300"
        >
          ✕
        </button>
        
        {/* Contenido */}
        <div>
          <img 
            src={project.image || bentoFront}
            alt={project.title}
            className="w-full h-[300px] object-cover"
          />
          
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs font-medium bg-gray-800 text-gray-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Botones */}
            <div className="flex gap-4">
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center bg-indigo-600 text-white rounded-lg
                         hover:bg-indigo-500 transition-colors duration-300"
              >
                Demo
              </a>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center bg-gray-700 text-white rounded-lg
                         hover:bg-gray-600 transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      title: "Infraestructura Cloud con Terraform y Kubernetes",
      subtitle: "Despliegue de infraestructura con Terraform y Kubernetes en AWS para la app del proyecto 'Rafcetario'",
      description: "Lorem ipsum blabla, lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma",
      tags: ["Terraform", "Kubernetes", "AWS"],
      image: bentoCloud,
      demo: "#",
      github: "#"
    },
    {
      title: "Rafcetario",
      subtitle: "Web interactiva con Front y Backend propios. Api Rest, base de datos, autenticación, CRUD de recetas, etc.",
      description: "Lorem ipsum blabla, lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma",
      tags: ["FastAPI", "Python", "React", "MySQL"],
      image: bentoFront,
      demo: "#",
      github: "#"
    },
    {
      title: "Pipelines CI/CD",
      subtitle: "Testing, linting, dockerización, despliegue en ECR y EKS de la aplicación 'Rafcetario'",
      description: "Lorem ipsum blabla, lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma lorem ipsum dolor cuantum queries et ipsma",
      tags: ["GitHub Actions", "Docker", "AWS ECR"],
      image: bentoCicd,
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section id="proyectos" className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-light">
            Así es como
            <br />
            <span className="font-bold text-6xl">
              le meto mano al código
            </span>
          </h1>
        </div>
        
        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div>
            <ProjectCard
              project={projects[1]}
              onClick={() => setSelectedProject(projects[1])}
            />
          </div>
          <div>
            <ProjectCard
              project={projects[2]}
              onClick={() => setSelectedProject(projects[2])}
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <ProjectCard
              project={projects[0]}
              onClick={() => setSelectedProject(projects[0])}
              isWide={true}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
