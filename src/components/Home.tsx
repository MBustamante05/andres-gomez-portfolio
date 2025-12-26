export const Home = () => {
  return (
    <div className="h-screen bg-black text-white relative top-10 pt-36 px-4 sm:px-6 md:px-8 lg:px-10 main-title">
      <div className="max-w-7xl w-full mx-auto relative">
        <div className="z-10 relative flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-4">
            <div className="flex flex-col items-start gap-4 order-2 lg:order-1">
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-white mt-4"></div>
              <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
                Urban photographer who loves to capture the essence of the city
              </p>
            </div>
            <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-bold uppercase text-orange-600 z-10 leading-none order-1 lg:order-2 text-center lg:text-left">
              Andrés
            </h1>
          </div>
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-white/30 to-white z-10 leading-none text-center lg:text-left">
            Gómez
          </h1>
          <img
            src="/andres.jpg"
            alt="Andrés Gómez"
            className="absolute bottom-0 right-0 w-32 h-24 sm:w-48 sm:h-36 md:w-80 md:h-60 lg:w-96 lg:h-72 xl:w-[600px] xl:h-[450px] object-cover -rotate-12 opacity-70 hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
};
