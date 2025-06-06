
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">
              Shymène
            </div>
            <p className="text-gray-400 mb-4">
              Chargée de communication digitale & créatrice visuelle passionnée 
              par l'innovation et la créativité.
            </p>
            <div className="text-sm text-gray-500">
              📍 Port-Gentil, Gabon
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projets</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Design Graphique</li>
              <li>Communication Digitale</li>
              <li>UI/UX Design</li>
              <li>Création de Contenu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Shymène Kassa Moukambi. Tous droits réservés.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://shymenemouk.com" className="text-gray-400 hover:text-white transition-colors text-sm">
              shymenemouk.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
