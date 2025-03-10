import image from "/src/assets/image.png";
import { motion } from "framer-motion";
import { RiGithubLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";

const Hero = () => {
  return (
    <div id="home" className="flex min-h-screen w-full items-center justify-center py-16 px-6 md:px-8 lg:px-16 mt-[80px]">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center gap-4 w-full sm:w-[85%] md:w-[300px] lg:w-[350px] max-w-[90%] h-auto bg-[#171e2b] rounded-2xl p-4 shadow-lg"
        >
          <motion.img
            src={image}
            alt="Minha Foto"
            className="w-full h-full object-cover rounded-xl cursor-pointer shadow-[0_0_30px_10px_rgba(93,150,190,0.3)] 
                      transition-all duration-300 hover:-translate-y-5 hover:scale-110 
                      hover:shadow-[0_0_40px_15px_rgba(93,150,190,0.5)]"
          />
          <div className="text-white text-xl font-semibold mt-6">
            Rafael Viana
          </div>
          <div className="flex gap-6 mt-4 text-white">
            <a href="https://github.com/rqfaelviana" target="_blank" rel="noopener noreferrer">
              <RiGithubLine size={24} />
            </a>
            <a href="https://www.instagram.com/rafavsilva_" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rafael-lucasviana/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:rafael.lucas111215@gmail.com">
              <MdMailOutline size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-3 text-center max-w-[600px] px-4 sm:px-6 md:px-8 lg:px-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            <span className="text-white">DESENVOLVEDOR</span>
            <span className="text-[#1f2833] font-extrabold text-shadow-md"> WEB</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-pretty leading-relaxed">
            Com foco em interfaces intuitivas e responsivas, transformo ideias em soluções digitais eficientes que aliam funcionalidade e estética, criando experiências que atendem às necessidades do usuário e oferecem navegação fluida e eficaz em todas as plataformas.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
