
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <p className="text-lg text-purple-600 font-medium">Salut! Je suis</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Kassa Moukambi
                <span className="block gradient-text">Shymène</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Chargée de communication digitale & créatrice visuelle passionnée par l'innovation et la créativité. 
                Je transforme vos idées en expériences visuelles mémorables.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 text-center"
              >
                Travaillons ensemble
              </a>
              <a
                href="#"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
              >
                Télécharger mon CV
              </a>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Disponible pour nouveaux projets</span>
              </div>
              <div>📍 Port-Gentil, Gabon</div>
            </div>
          </div>

          {/* Image/Avatar */}
          <div className="relative fade-in-up animate-delay-200">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center floating-animation">
                <img
                  src="/lovable-uploads/d09c20d3-4159-4d06-af4a-9e7daaee3b08.png"
                  alt="Shymène Kassa Moukambi"
                  className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 -right-4 bg-white p-3 rounded-lg shadow-lg floating-animation" style={{animationDelay: '1s'}}>
                <div className="text-2xl">🎨</div>
              </div>
              <div className="absolute bottom-10 -left-4 bg-white p-3 rounded-lg shadow-lg floating-animation" style={{animationDelay: '2s'}}>
                <div className="text-2xl">📱</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <ChevronDown className="h-6 w-6 text-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
