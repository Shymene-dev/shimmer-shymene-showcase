
import React from 'react';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projets terminés' },
    { number: '30+', label: 'Clients satisfaits' },
    { number: '3+', label: 'Années d\'expérience' },
    { number: '24/7', label: 'Support disponible' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                À propos de <span className="gradient-text">moi</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Passionnée par l'univers de la communication visuelle depuis plus de 3 ans, 
                  je me spécialise dans la création d'expériences visuelles qui marquent et engagent.
                </p>
                <p>
                  Basée à Port-Gentil au Gabon, je travaille avec des clients du monde entier 
                  pour transformer leurs visions en réalités créatives. Mon approche combine 
                  créativité artistique et stratégie marketing pour des résultats optimaux.
                </p>
                <p>
                  Ma mission ? Vous aider à vous démarquer dans un monde numérique en constante 
                  évolution grâce à des créations authentiques et impactantes.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Mes valeurs</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">✨</span>
                  </div>
                  <span className="text-gray-700">Créativité</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-semibold">🎯</span>
                  </div>
                  <span className="text-gray-700">Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold">🤝</span>
                  </div>
                  <span className="text-gray-700">Collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">⚡</span>
                  </div>
                  <span className="text-gray-700">Innovation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Visual */}
          <div className="fade-in-up animate-delay-200">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-8 mb-8">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold mb-4">Expertise technique</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Design Graphique</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Communication Digitale</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-pink-500 to-orange-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>UI/UX Design</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
