import { useState } from "react";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      header: "Basic Package",
      title: "Free",
      price: null,
      features: [
        "Up to 5 urban photography sessions per month",
        "Basic photo editing included",
        "Digital delivery via email",
        "Standard resolution (1920x1080)",
        "Basic urban location scouting",
      ],
      buttonStyle:
        "border border-white text-white hover:bg-white hover:text-black",
      isPopular: false,
    },
    {
      header: "Professional Package",
      title: "$99",
      price: "/m",
      features: [
        "Unlimited urban photography sessions",
        "Advanced photo editing & retouching",
        "High-resolution delivery (4K)",
        "Priority scheduling & location booking",
        "Urban photography consultation",
      ],
      buttonStyle: "bg-white text-black hover:bg-gray-100",
      isPopular: true,
    },
    {
      header: "Premium Urban Collection",
      title: "$199",
      price: "/m",
      features: [
        "Unlimited sessions with priority processing",
        "Professional retouching & color grading",
        "Multiple format delivery (RAW + edited)",
        "24/7 booking & consultation support",
        "Exclusive urban location access",
      ],
      buttonStyle:
        "border border-white text-white hover:bg-white hover:text-black",
      isPopular: false,
    },
  ];

  return (
    <div className="min-h-screen h-full bg-black text-white py-20 sm:py-24 md:py-28 lg:py-36 px-4 sm:px-6 md:px-8 lg:px-4 relative overflow-hidden">
      {/* Texto de fondo grande */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[8rem] sm:text-[12rem] md:text-[18rem] lg:text-[22rem] xl:text-[25rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-white/5 to-white select-none text-center">
          PRICING
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título principal */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-600 mb-4 main-title">
            Urban Photography Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto px-4">
            Capture the essence of urban life with professional photography
            packages designed for city enthusiasts and urban storytellers
          </p>
        </div>

        {/* Toggle de facturación anual */}
        <div className="flex justify-center items-center mb-12 sm:mb-14 md:mb-16">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`w-14 sm:w-16 h-7 sm:h-8 rounded-full transition-colors duration-300 ${
                  isYearly ? "bg-white" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-5 sm:w-6 h-5 sm:h-6 bg-black rounded-full transition-transform duration-300 ${
                    isYearly
                      ? "transform translate-x-7 sm:translate-x-8"
                      : "transform translate-x-1"
                  }`}
                />
              </button>
            </div>
            <span className="text-white text-base sm:text-lg font-medium">
              Billed Yearly
            </span>
          </div>
        </div>

        {/* Tarjetas de precios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 rounded-2xl backdrop-blur-md transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                plan.isPopular
                  ? "bg-white/15 border border-white/30 shadow-2xl shadow-white/10"
                  : "bg-black/50 border border-white/20 shadow-xl shadow-white/5"
              }`}
            >
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Header */}
              <div className="text-center mb-6 relative z-10">
                <h3 className="text-white text-base sm:text-lg font-medium mb-2">
                  {plan.header}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                    {plan.title}
                  </span>
                  {plan.price && (
                    <span className="text-lg sm:text-xl md:text-2xl text-white/60 ml-1">
                      {isYearly ? "/y" : plan.price}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-3 group"
                  >
                    <div className="flex-shrink-0 w-4 sm:w-5 h-4 sm:h-5 bg-black rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-2.5 sm:w-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white text-xs sm:text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Botón */}
              <div className="text-center relative z-10">
                <button
                  className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${plan.buttonStyle}`}
                >
                  Get Started
                </button>
              </div>

              {/* Indicador de plan popular */}
              {plan.isPopular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-white text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
