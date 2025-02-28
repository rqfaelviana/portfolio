import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xkgodgnj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSuccess("Mensagem enviada com sucesso!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setSuccess("Erro ao enviar mensagem.");
    }
  };

  return (
<div id="contact" className="flex min-h-[60vh] w-full items-center justify-center px-6">
  <div className="max-w-4xl w-full p-8 bg-[#171e2b] rounded-2xl shadow-lg mx-auto">
    <h2 className="text-4xl font-semibold text-white text-center">Contato</h2>

    <form onSubmit={handleSubmit} className="mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Seu Nome"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-4 text-gray-300 bg-[#171e2b] border-2 border-[#9ca9b9] rounded-2xl focus:outline-none focus:border-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Seu E-mail"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-4 text-gray-300 bg-[#171e2b] border-2 border-[#9ca9b9] rounded-2xl focus:outline-none focus:border-blue-500"
        />
      </div>

      <textarea
        name="message"
        rows="4"
        placeholder="Sua Mensagem"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full p-4 mt-4 text-gray-300 bg-[#171e2b] border-2 border-[#9ca9b9] rounded-2xl focus:outline-none focus:border-blue-500 resize-none"
      ></textarea>

      <button
        type="submit"
        className="w-full mt-6 p-4 bg-[#124fbf] text-white rounded-2xl hover:bg-blue-600 transition-all"
      >
        Enviar Mensagem
      </button>

      {success && <p className="text-center mt-4 text-white">{success}</p>}
    </form>
  </div>
</div>
  );
};

export default Contact;
