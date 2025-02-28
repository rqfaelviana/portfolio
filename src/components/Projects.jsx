import Chelsea from "/src/assets/Chelsea.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: Chelsea,
    title: "Flappy Rowlet",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorem optio eius doloribus fugiat quod assumenda quidem iure officiis labore fuga atque velit odit quo, quia saepe tenetur aliquid laboriosam.",
    technologies: ["Python"]
  },
  {
    image: Chelsea,
    title: "Unnamed1",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorem optio eius doloribus fugiat quod assumenda quidem iure officiis labore fuga atque velit odit quo, quia saepe tenetur aliquid laboriosam.",
    technologies: ["Unnamed"]
  },
  {
    image: Chelsea,
    title: "Unnamed2",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorem optio eius doloribus fugiat quod assumenda quidem iure officiis labore fuga atque velit odit quo, quia saepe tenetur aliquid laboriosam.",
    technologies: ["Unnamed"]
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <motion.img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl md:w-[300px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        />

        <div className="flex flex-col gap-5">
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </motion.div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-semibold text-white md:text-6xl">Projetos</h1>
      </motion.div>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
