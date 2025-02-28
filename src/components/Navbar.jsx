import { Home, Folder, Headset, Wrench, Send, Star } from "lucide-react";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; 
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#0D1117] px-4 py-2 rounded-2xl shadow-lg flex justify-center items-center gap-4 sm:gap-6 md:gap-8 w-auto max-w-full z-50 flex-nowrap">
      <div className="relative group">
        <button 
          onClick={() => handleScroll("home")} 
          className="p-2 text-gray-300 hover:text-white transition transform scale-90 sm:scale-100"
        >
          <Home size={20} />
        </button>
        <span className="tooltip absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-[#1f2833] text-white text-xs p-2 rounded-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-[-42px]">Início</span>
      </div>
      
      <div className="relative group">
        <button 
          onClick={() => handleScroll("projects")} 
          className="p-2 text-gray-300 hover:text-white transition transform scale-90 sm:scale-100"
        >
          <Folder size={20} />
        </button>
        <span className="tooltip absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-[#1f2833] text-white text-xs p-2 rounded-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-[-42px]">Projetos</span>
      </div>

      <div className="relative group">
        <button 
          onClick={() => handleScroll("services")} 
          className="p-2 text-gray-300 hover:text-white transition transform scale-90 sm:scale-100"
        >
          <Headset size={20} />
        </button>
        <span className="tooltip absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-[#1f2833] text-white text-xs p-2 rounded-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-[-42px]">Serviços</span>
      </div>

      <div className="relative group">
        <button 
          onClick={() => handleScroll("technologies")} 
          className="p-2 text-gray-300 hover:text-white transition transform scale-90 sm:scale-100"
        >
          <Wrench size={20} />
        </button>
        <span className="tooltip absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-[#1f2833] text-white text-xs p-2 rounded-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-[-42px]">Tecnologias</span>
      </div>

      <div className="relative group">
        <button 
          onClick={() => handleScroll("professional-qualities")} 
          className="p-2 text-gray-300 hover:text-white transition transform scale-90 sm:scale-100"
        >
          <Star size={20} />
        </button>
        <span className="tooltip absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-[#1f2833] text-white text-xs p-2 rounded-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-[-42px]">Qualidades</span>
      </div>

      <div className="relative group">
        <button 
          onClick={() => handleScroll("contact")} 
          className="p-2 text-gray-300 hover:text-white transition transform scale-90 sm:scale-100"
        >
          <Send size={20} />
        </button>
        <span className="tooltip absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-[#1f2833] text-white text-xs p-2 rounded-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-[-42px]">Contato</span>
      </div>
    </nav>
  );
};

export default Navbar;