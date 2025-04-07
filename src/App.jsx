import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full bg-[#121219] text-white min-h-screen lg:ml-[440px] overflow-x-hidden">
        <div className="space-y-32">
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </div>
      </main>


    </div>
  );
}

export default App;
