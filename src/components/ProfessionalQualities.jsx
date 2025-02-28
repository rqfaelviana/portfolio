import { motion } from "framer-motion";

const ProfessionalQualities = () => {
  const qualities = [
    { name: "Comunicação", description: "" },
    { name: "Trabalho em Equipe", description: "" },
    { name: "Resiliência", description: "" },
    { name: "Pensamento crítico", description: "" },
    { name: "Adaptação", description: "" },
    { name: "Proatividade", description: "" }
  ];

  return (
    <div id="professional-qualities" className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-16 md:gap-32 py-24">
      <h1 
        className="text-4xl font-semibold text-white md:text-6xl">
        Qualidades Profissionais
      </h1>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
        {qualities.map((quality, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -100 }} // Vindo da esquerda
            whileInView={{ opacity: 1, x: 0 }} // Posição final
            transition={{ duration: 0.4, delay: 0.1 * index }} // Delay crescente
            viewport={{ once: false }}
            className="flex flex-col items-center">
            <h3 className="text-2xl font-medium text-white">{quality.name}</h3>
            <p className="text-white text-center mt-2">{quality.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalQualities;
