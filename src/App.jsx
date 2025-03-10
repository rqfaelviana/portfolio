import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Tech from './components/Tech';
import Contact from './components/Contact';
import ProfessionalQualities from './components/ProfessionalQualities';

export const App = () => {
  return (
    <>
      <div className="relative h-full overflow-y-hidden antialiased"> 
        <div 
          className="fixed inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundColor: "#00131c" }}
        ></div>

        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Navbar />
          <Hero />
          <Projects />
          <Services />
          <Tech />
          <ProfessionalQualities />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;

