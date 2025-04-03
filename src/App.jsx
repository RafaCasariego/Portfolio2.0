import Sidebar from './components/Sidebar';
import About from './components/About';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-96 w-full bg-[#121219] text-white">
        <About />
      </main>
    </div>
  );
}

export default App;
