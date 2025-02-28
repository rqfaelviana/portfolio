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
      <div
        style={{ backgroundColor: "#00131c", height: "100vh" }}
        className="fixed -z-10 min-h-screen w-full"
      ></div>

      <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 gap-32'>
        <Navbar />
        <Hero />
        <Projects />
        <Services />
        <Tech />
        <ProfessionalQualities />
        <Contact />
        
      </main>
    </>
  );
}

export default App;
