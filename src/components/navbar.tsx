import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aStyle =
    "text-white hover:text-orange-500 hover:border-b-2 hover:border-white transition-colors duration-300 ";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 py-4 bg-black text-white fixed w-full top-0 z-50 border border-t-0 border-x-0 border-b-white/10 main-title">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold uppercase">
        Andrés Gómez
      </h1>

      {/* Menú de escritorio */}
      <div className="hidden lg:flex gap-6 xl:gap-10 uppercase">
        <a href="#home" className={aStyle}>
          Home
        </a>
        <a href="#gallery" className={aStyle}>
          Gallery
        </a>
        <a href="pricing" className={aStyle}>
          Pricing
        </a>
        <a href="#contact" className={aStyle}>
          Contact
        </a>
      </div>

      {/* Botón hamburguesa para móvil */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Menú móvil */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-black/95 navbar-mobile-menu border-b border-white/10 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col py-4 px-4 sm:px-6 md:px-8">
          <a
            href="#home"
            className={`${aStyle} py-3 text-lg uppercase`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#gallery"
            className={`${aStyle} py-3 text-lg uppercase`}
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            href="pricing"
            className={`${aStyle} py-3 text-lg uppercase`}
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#contact"
            className={`${aStyle} py-3 text-lg uppercase`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
