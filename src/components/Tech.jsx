import { FaGitAlt, FaPython, FaAngular, FaJava, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tecnologias = () => {
  const frontendSkills = [
    { name: "React", Icon: RiReactjsLine, color: "#61DAFB" },
    { name: "Angular", Icon: FaAngular, color: "#DD0031" },
    { name: "Tailwind CSS", Icon: BiLogoTailwindCss, color: "#38B2AC" },
  ];

  const backendSkills = [
    { name: "Node.js", Icon: FaNodeJs, color: "#8CC84B" },
    { name: "Python", Icon: FaPython, color: "#3776AB" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "Java", Icon: FaJava, color: "#007396" },
    { name: "Git", Icon: FaGitAlt, color: "#F05032" },
  ];

  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24 py-24">
      <h1 className="text-4xl font-semibold text-white mb-16 text-center md:text-6xl">
        Tecnologias
      </h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2"
      >
        {/* Frontend */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-medium text-white mb-6">Front-end</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {frontendSkills.map(({ name, Icon, color }, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  className="flex items-center justify-center w-24 h-24 rounded-2xl border-4 border-gray-600"
                  variants={iconVariants(2 + index * 1.5)}
                  initial="initial"
                  animate="animate"
                >
                  <Icon className="text-[50px] sm:text-[70px]" style={{ color }} />
                </motion.div>
                <span className="text-white text-sm mt-2">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-medium text-white mb-6">Back-end</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {backendSkills.map(({ name, Icon, color }, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  className="flex items-center justify-center w-24 h-24 rounded-2xl border-4 border-gray-600"
                  variants={iconVariants(2 + index * 1.5)}
                  initial="initial"
                  animate="animate"
                >
                  <Icon className="text-[50px] sm:text-[70px]" style={{ color }} />
                </motion.div>
                <span className="text-white text-sm mt-2">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tecnologias;
