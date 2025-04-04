import { useEffect, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaFilePdf } from 'react-icons/fa6';
import { HiMenu, HiX } from 'react-icons/hi';

const sections = ['sobre-mi', 'proyectos', 'experiencia', 'formacion', 'contacto'];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 100;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón de menú móvil */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-[#d3d2cd] text-black"
      >
        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
      </button>

      {/* Overlay para móvil */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-full bg-[#0f0f16] text-[#e5e5e5] flex flex-col justify-between
        transform transition-transform duration-300 ease-in-out z-40
        w-[85%] sm:w-[440px] px-8 sm:px-12 py-14
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Rafa<br />Casariego
          </h1>
          <p className="text-sm sm:text-base mt-4 text-[#cfcfcf] leading-snug">
            Junior DevOps, con experiencia personal y muchas ganas de aprender <span>⭐</span>
          </p>

          <nav className="mt-14 space-y-6 text-lg sm:text-xl font-medium">
            {sections.map((id, index) => {
              const label = id.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
              const isActive = activeSection === id;

              return (
                <a
                  key={index}
                  href={`#${id}`}
                  onClick={handleLinkClick}
                  className="group flex items-center gap-3"
                >
                  <span
                    className={`
                      block h-px bg-gray-500 transition-all duration-300
                      ${isActive ? 'w-10 bg-white' : 'w-4 group-hover:w-8'}
                    `}
                  />
                  <span className={`transition-colors duration-300 ${isActive ? 'text-white font-semibold' : 'text-[#d3d2cd] group-hover:text-white'}`}>
                    {label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex justify-center gap-4 sm:gap-8 mt-12">
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-md bg-[#d3d2cd] shadow-md text-black hover:shadow-lg hover:bg-[#e0dfdb] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-5 sm:w-6 h-5 sm:h-6" />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md bg-[#d3d2cd] shadow-md text-black hover:shadow-lg hover:bg-[#e0dfdb] transition"
          >
            <FaFilePdf className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="text-sm sm:text-base font-medium">CV</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-md bg-[#d3d2cd] shadow-md text-black hover:shadow-lg hover:bg-[#e0dfdb] transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 sm:w-6 h-5 sm:h-6" />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
