import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    thoughts: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden">
      <div className="flex flex-col gap-4 relative">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-black leading-none text-center lg:text-left">
          Contact
        </h1>

        {/* Sección izquierda - Formulario */}
        <div className="space-y-6 sm:space-y-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 sm:space-y-8 w-full lg:w-1/3"
          >
            {/* Campo Nombre */}
            <div className="space-y-2">
              <label className="block text-white text-base sm:text-lg font-medium">
                Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-gray-400 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:border-white transition-colors duration-300 outline-none text-sm sm:text-base"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            {/* Campo Email */}
            <div className="space-y-2">
              <label className="block text-white text-base sm:text-lg font-medium">
                Your Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b-2 border-gray-400 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:border-white transition-colors duration-300 outline-none text-sm sm:text-base"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Campo Pensamientos */}
            <div className="space-y-2">
              <label className="block text-white text-base sm:text-lg font-medium">
                Share your thoughts
              </label>
              <div className="relative">
                <textarea
                  name="thoughts"
                  value={formData.thoughts}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-gray-400 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:border-white transition-colors duration-300 outline-none resize-none text-sm sm:text-base"
                  placeholder="Share your thoughts with us..."
                />
                {/* Triángulo de redimensionamiento */}
                <div className="absolute bottom-2 right-2 w-3 h-3 opacity-30">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <path d="M22 22H20V20H22V22ZM22 18H20V16H22V18ZM18 22H16V20H18V22ZM18 18H16V16H18V18ZM14 22H12V20H14V22ZM22 14H20V12H22V14Z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Botón con efecto glitch */}
            <button
              type="submit"
              className="relative w-full bg-white text-black py-3 sm:py-4 px-6 sm:px-8 font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-gray-100 transition-colors duration-300 group cursor-pointer"
            >
              {/* Efecto glitch - Capa roja/naranja */}
              <span className="absolute inset-0 bg-orange-600 text-black py-3 sm:py-4 px-6 sm:px-8 font-bold text-base sm:text-lg uppercase tracking-wider opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 z-10 text-red-500">
                Share Your Feedback
              </span>

              {/* Efecto glitch - Capa azul/cyan */}
              <span className="absolute inset-0 bg-white text-black py-3 sm:py-4 px-6 sm:px-8 font-bold text-base sm:text-lg uppercase tracking-wider opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 z-10 text-orange-600">
                Share Your Feedback
              </span>

              {/* Texto principal */}
              <span className="relative z-20">Share Your Feedback</span>
            </button>
          </form>
        </div>

        {/* Forma orgánica de fondo */}
        <div className="absolute w-[60%] sm:w-[50%] lg:w-[40%] right-0 bottom-0 hidden sm:block">
          <svg viewBox="0 0 400 300" className="w-full opacity-20" fill="none">
            <path
              d="M50,50 Q100,20 150,50 T250,50 Q300,80 350,100 T350,200 Q300,250 250,250 T150,250 Q100,220 50,200 T50,50"
              stroke="gray"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="absolute w-[60%] sm:w-[50%] lg:w-[40%] right-4 sm:right-10 -bottom-10 hidden sm:block">
          <svg
            viewBox="0 0 400 300"
            className="w-full h-full opacity-20"
            fill="none"
          >
            <path
              d="M50,50 Q100,20 150,50 T250,50 Q300,80 350,100 T350,200 Q300,250 250,250 T150,250 Q100,220 50,200 T50,50"
              stroke="gray"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <img
          src="/img/muros.jpg"
          alt=""
          className="absolute w-48 h-64 sm:w-64 sm:h-80 lg:w-72 lg:h-[350px] object-cover right-4 sm:right-10 top-10 hidden sm:block"
        />
      </div>
    </div>
  );
};
