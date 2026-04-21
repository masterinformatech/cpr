"use client";

import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#accueil" className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14">
                <img
                  src="/logo-cpr.png"
                  alt="Logo CPR"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block text-lg font-bold leading-tight">
                  Club Perspectives
                </span>
                <span className="text-xs opacity-80">et Réalités</span>
              </div>
            </a>
            <p className="text-gray-400 mb-6">
              Parti politique membre de la Majorité Présidentielle, défendant le
              libéralisme démocratique et les valeurs humanistes pour le
              développement de Brazzaville.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#009E3A] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#009E3A] transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#009E3A] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#009E3A] transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#accueil"
                  className="text-gray-400 hover:text-[#F7D618] transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#actualites"
                  className="text-gray-400 hover:text-[#F7D618] transition-colors"
                >
                  Actualités
                </a>
              </li>
              <li>
                <a
                  href="#programme"
                  className="text-gray-400 hover:text-[#F7D618] transition-colors"
                >
                  Programme
                </a>
              </li>
              <li>
                <a
                  href="#cabinet"
                  className="text-gray-400 hover:text-[#F7D618] transition-colors"
                >
                  Le Cabinet
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#F7D618] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Le Parti */}
          <div>
            <h4 className="text-lg font-bold mb-6">Le Parti</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#histoire"
                  className="text-gray-400 hover:text-[#F7D618] transition-colors"
                >
                  Notre Histoire
                </a>
              </li>
              <li>
                <a
                  href="#vision"
                  className="text-gray-400 hover:text-[#F7D618] transition-colors"
                >
                  Notre Vision
                </a>
              </li>
              <li>
                <a
                  href="#valeurs"
                  className="text-gray-400 hover:text-[#F7D618] transition-colors"
                >
                  Nos Valeurs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#F7D618] transition-colors"
                >
                  Statuts et Règlement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#009E3A] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Moungali, Arrondissement 4
                  <br />
                  Brazzaville, République du Congo
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#009E3A]" />
                <span className="text-gray-400">+242 06 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#009E3A]" />
                <span className="text-gray-400">contact@cpr-congo.cg</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Club Perspectives et Réalités (CPR). Tous droits
              réservés.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Politique de confidentialité
              </a>
            </div>
            {/* Flag Colors */}
            <div className="flex items-center space-x-1">
              <div className="w-4 h-6 bg-[#009E3A] rounded-l" />
              <div className="w-4 h-6 bg-[#F7D618]" />
              <div className="w-4 h-6 bg-[#D72638] rounded-r" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
