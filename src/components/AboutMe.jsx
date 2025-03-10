import { motion } from "framer-motion";

const AboutMe = () => {
  return (
      <div
       id="AboutMe" className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold text-white md:text-6xl">Sobre Mim</h2>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}

         className="mt-4 text-lg text-gray-400">
          Olá! Eu sou <span className="font-semibold text-blue-600">Rafael</span>, um desenvolvedor apaixonado por criar soluções criativas e eficientes. 
          Atualmente, sou estudante de <strong>Ciência da Computação</strong> e trabalho com tecnologias como <span className="font-semibold text-blue-600">React, TailwindCSS, Node.js, Python, Java e outras</span>.
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          
         className="text-gray-400 text-lg md:text-xl font-pretty leading-relaxed">
          Como freelancer, estou sempre em busca de novos desafios. Acredito que a combinação de conhecimento técnico e comunicação clara são essenciais para o sucesso de qualquer projeto. Meu objetivo é entregar soluções que atendam às necessidades dos meus clientes, respeitando prazos e mantendo a qualidade.
        </motion.p>
      </div>
  );
};

export default AboutMe;
