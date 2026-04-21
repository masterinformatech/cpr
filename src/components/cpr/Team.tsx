"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const leadership = [
  {
    id: 1,
    name: "Aimé Hydevert Mouagni",
    role: "Député Honoraire - 1ère Circonscription Moungali",
    bio: "Président du Club Perspectives et Réalités, acteur majeur de la majorité présidentielle, défendant la liberté, la justice et le progrès social.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    phone: "+242 06 123 4567",
    email: "president@cpr-congo.cg",
    location: "Moungali, Brazzaville",
  },
  {
    id: 2,
    name: "Cyr Euloge MOUTOU",
    role: "Conseiller Départemental et Municipal",
    bio: "Tête de liste CPR aux élections de 2022 pour l'arrondissement 4 Moungali. Élu conseiller au Conseil Départemental et Municipal de Brazzaville.",
    image:
      "https://au.int/sites/default/files/styles/full/public/pressreleases/44389-A-meeting-of-the-Peace-and-Security-Council-of-the-African-Union-File-photo-AU.jpg?itok=mnkcj8qO",
    phone: "+242 06 234 5678",
    email: "conseiller@cpr-congo.cg",
    location: "Moungali, Brazzaville",
  },
  {
    id: 3,
    name: "Directeur de Cabinet",
    role: "Chef du Cabinet Consultatif",
    bio: "Responsable de la gestion quotidienne des opérations du cabinet, coordination interservices et conseil stratégique.",
    image:
      "https://www.shutterstock.com/image-photo/team-african-bussines-people-debating-600w-1272443623.jpg",
    phone: "+242 06 345 6789",
    email: "direction@cpr-congo.cg",
    location: "Brazzaville",
  },
  {
    id: 4,
    name: "Secrétaire Général",
    role: "Secrétaire du Parti",
    bio: "Chargé de la coordination des activités et des échanges entre les membres et le conseiller.",
    image:
      "https://www.afdb.org/sites/default/files/styles/1700x900/public/1500-visite-svp-au-congo-oct-2025-en.jpg?itok=lVi96t05",
    phone: "+242 06 456 7890",
    email: "secretaire@cpr-congo.cg",
    location: "Brazzaville",
  },
];

const poles = [
  { name: "Planification & Territoire", role: "Pôle 1" },
  { name: "Urbanisme & Habitat", role: "Pôle 2" },
  { name: "Éducation", role: "Pôle 3" },
  { name: "Santé & Social", role: "Pôle 4" },
  { name: "Environnement", role: "Pôle 5" },
  { name: "Sports & Culture", role: "Pôle 6" },
  { name: "Agriculture & Pêche", role: "Pôle 7" },
  { name: "Administration", role: "Pôle 8" },
  { name: "Commerce & Artisanat", role: "Pôle 9" },
  { name: "Travaux Publics", role: "Pôle 10" },
  { name: "Mines & Énergie", role: "Pôle 11" },
  { name: "Emploi", role: "Pôle 12" },
  { name: "Secrétariat", role: "Pôle 13" },
];

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cabinet"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#1a4b8c]/10 text-[#1a4b8c] text-sm font-semibold rounded-full mb-4">
            LE CABINET
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Notre équipe dirigeante
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des leaders engagés pour le développement de Brazzaville
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {leadership.map((member, index) => (
            <div
              key={member.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#009E3A] font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {member.bio}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Phone size={14} className="text-[#009E3A]" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={14} className="text-[#009E3A]" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} className="text-[#009E3A]" />
                    <span>{member.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cabinet Consultatif */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3
            className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Cabinet Consultatif
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {poles.map((pole, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gradient-to-br hover:from-[#009E3A]/10 hover:to-[#F7D618]/10 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    background: `linear-gradient(135deg, #009E3A, #F7D618)`,
                  }}
                >
                  {index + 1}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm group-hover:text-[#009E3A] transition-colors">
                  {pole.name}
                </h4>
                <p className="text-xs text-gray-500">{pole.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
