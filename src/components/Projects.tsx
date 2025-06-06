
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Branding E-commerce',
      category: 'Identité visuelle',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Application Mobile',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      title: 'Campagne Publicitaire',
      category: 'Communication Digitale',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Site Web Corporate',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Packaging Produit',
      category: 'Design Graphique',
      image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=500&h=300&fit=crop',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Réseaux Sociaux',
      category: 'Contenu Digital',
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&h=300&fit=crop',
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Projets <span className="gradient-text">Récents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes dernières créations qui illustrent 
            ma passion pour l'innovation et l'excellence créative.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group cursor-pointer fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold">Voir le projet</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            Voir tous les projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
