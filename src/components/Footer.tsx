import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const aStyle =
    "flex items-center hover:text-orange-600 transition-all duration-300";
  return (
    <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6 lg:gap-10 text-base sm:text-lg lg:text-xl bg-black text-white main-title uppercase py-4 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className={aStyle}>
        <a href="https://www.instagram.com/andres.gomez.g/" target="_blank">
          Instagram
        </a>
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className={aStyle}>
        <a href="https://www.linkedin.com/in/andres-gomez-g/" target="_blank">
          LinkedIn
        </a>
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className={aStyle}>
        <a href="https://www.facebook.com/andres.gomez.g/" target="_blank">
          Facebook
        </a>
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className={aStyle}>
        <a href="https://www.twitter.com/andres.gomez.g/" target="_blank">
          Twitter
        </a>
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className={aStyle}>
        <a href="https://www.youtube.com/andres.gomez.g/" target="_blank">
          YouTube
        </a>
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
    </div>
  );
};
