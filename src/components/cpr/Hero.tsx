"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Users, Target, Vote } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    const element = document.querySelector("#actualites");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/75" />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[#F7D618]/30 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-20 w-24 h-24 border-4 border-[#009E3A]/30 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#D72638]/20 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-[#F7D618]/20 rounded-full blur-xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Location Badge */}
        <div
          className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="w-2 h-2 bg-[#009E3A] rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            Brazzaville, République du Congo
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="block text-[#F7D618]">Club Perspectives</span>
          <span className="block mt-2">et Réalités</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-light transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Libéralisme démocratique et valeurs humanistes
        </p>

        {/* CPR Line */}
        <div
          className={`flex items-center justify-center space-x-4 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-16 h-1 bg-[#009E3A] rounded" />
          <span className="text-3xl sm:text-4xl font-bold text-white tracking-wider">
            CPR
          </span>
          <div className="w-16 h-1 bg-[#D72638] rounded" />
        </div>

        {/* Stats Grid */}
        <div
          className={`grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-full mx-auto mb-2">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-[#F7D618]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">
              Membre
            </div>
            <div className="text-xs sm:text-sm text-white/70">
              Majorité Présidentielle
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-full mx-auto mb-2">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 text-[#009E3A]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">
              Démocratie
            </div>
            <div className="text-xs sm:text-sm text-white/70">
              Participative
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm rounded-full mx-auto mb-2">
              <Vote className="w-6 h-6 sm:w-7 sm:h-7 text-[#D72638]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white">2022</div>
            <div className="text-xs sm:text-sm text-white/70">Élections</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#apropos"
            className="group relative px-8 py-4 bg-[#009E3A] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#009E3A]/30"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#actualites");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Découvrir notre parti</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#009E3A] transition-all duration-300"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Rejoignez-nous</span>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
