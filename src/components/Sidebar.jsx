import { useEffect, useState } from 'react';
import { FaLinkedinIn, FaGithub, FaFilePdf } from 'react-icons/fa6';

const sections = ['sobre-mi', 'proyectos', 'experiencia', 'formacion', 'contacto'];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');

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

  return (
    <aside className="fixed left-0 top-0 h-full w-[440px] bg-[#0f0f16] text-[#e5e5e5] px-12 py-14 flex flex-col justify-between">
      <div>
        <h1 className="text-6xl font-extrabold leading-tight tracking-tight">
          Rafa<br />Casariego
        </h1>
        <p className="text-base mt-4 text-[#cfcfcf] leading-snug">
          Junior DevOps, con experiencia personal y muchas ganas de aprender <span>⭐</span>
        </p>

        <nav className="mt-14 space-y-6 text-xl font-medium">
          {sections.map((id, index) => {
            const label = id.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            const isActive = activeSection === id;

            return (
              <a
                key={index}
                href={`#${id}`}
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

      <div className="flex justify-center gap-8 mt-12">
        <a
          href="#"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#d3d2cd] shadow-md text-black hover:shadow-lg hover:bg-[#e0dfdb] transition"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#d3d2cd] shadow-md text-black hover:shadow-lg hover:bg-[#e0dfdb] transition"
        >
          <FaFilePdf className="w-5 h-5" />
          <span className="text-base font-medium">CV</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-[#d3d2cd] shadow-md text-black hover:shadow-lg hover:bg-[#e0dfdb] transition"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
