
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Design Graphique',
      description: 'Création d\'identités visuelles, logos, supports de communication imprimés et numériques.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📱',
      title: 'Communication Digitale',
      description: 'Stratégies de communication, gestion des réseaux sociaux et campagnes publicitaires.',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      icon: '🌐',
      title: 'UI/UX Design',
      description: 'Conception d\'interfaces utilisateur intuitives et expériences numériques optimisées.',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: '📸',
      title: 'Création de Contenu',
      description: 'Production de contenus visuels engageants pour tous vos canaux de communication.',
      gradient: 'from-blue-500 to-purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Mes <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Je vous accompagne dans tous vos projets de communication visuelle et digitale
            pour donner vie à vos idées les plus créatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white rounded-2xl p-8 shadow-lg card-hover fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
