import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <p className="text-lg text-blue-400 font-medium">Chargée de Communication Digitale au parcours pluridisciplinaire, je suis madame</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-blue-300">
                KASSA MOUKAMBI
                <span className="block gradient-text text-blue-500">Shymène</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Chargée de Communication Digitale passionnée par le design visuel, la stratégie numérique et l'accompagnement des structures locales. Fortes d'expériences pluridisciplinaires mêlant 
                gestion administrative, comptabilité et communication, je combine rigueur, créativité pour construire des projets à fort impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-700 to-blue-400 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 text-center"
              >
                Travaillons ensemble
              </a>
              <a
                href="#"
                className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                Télécharger mon CV
              </a>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Disponible pour nouveaux projets</span>
              </div>
              <div>Port-Gentil, Libreville, Gabon</div>
            </div>
          </div>

          {/* Image/Avatar */}
          <div className="relative fade-in-up animate-delay-200">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-900 to-black rounded-full flex items-center justify-center floating-animation">
                <img
                  src="/lovable-uploads/d09c20d3-4159-4d06-af4a-9e7daaee3b08.png"
                  alt="Shymène KASSA MOUKAMBI"
                  className="w-72 h-72 object-cover rounded-full border-4 border-blue-700 shadow-2xl"
                />
              </div>
              
              
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <ChevronDown className="h-6 w-6 text-blue-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
