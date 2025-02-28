import { motion } from "framer-motion";

const Services = () => {
  const qualities = [
    { name: "Landing Pages", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorem optio eius doloribus fugiat quod assumenda quidem iure officiis labore fuga atque velit odit quo, quia saepe tenetur aliquid laboriosam." },
    { name: "Criação de Jogos", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorem optio eius doloribus fugiat quod assumenda quidem iure officiis labore fuga atque velit odit quo, quia saepe tenetur aliquid laboriosam." },
    { name: "Criação de sites", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorem optio eius doloribus fugiat quod assumenda quidem iure officiis labore fuga atque velit odit quo, quia saepe tenetur aliquid laboriosam." },
    { name: "Integração com APIs", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorem optio eius doloribus fugiat quod assumenda quidem iure officiis labore fuga atque velit odit quo, quia saepe tenetur aliquid laboriosam." },
    { name: "Automação de tarefas e Web Scraping", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolorem optio eius doloribus fugiat quod assumenda quidem iure officiis labore fuga atque velit odit quo, quia saepe tenetur aliquid laboriosam." },
  ];

  return (
    <div id="services" className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-16 md:gap-32 py-24">
      <h1
        className="text-4xl font-semibold text-white md:text-6xl"
      >
        Serviços contratáveis
      </h1>

      <motion.div
        className="grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {qualities.map((quality, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-medium text-white">{quality.name}</h3>
            <p className="text-white text-center mt-2">{quality.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
