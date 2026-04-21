"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, PieChart, Users, Lightbulb, Building, Leaf } from "lucide-react";

const programCategories = [
  {
    id: 0,
    title: "Développement Local",
    icon: "PieChart",
    color: "#009E3A",
    points: [
      "Démocratie participative : élus et citoyens collaborent",
      "Co-construction de solutions adaptées aux réalités locales",
      "Projets intégrés pour le développement du département",
      "Partenariats avec les organisations internationales",
      "Transparence et reddition de comptes",
    ],
  },
  {
    id: 1,
    title: "Économie & Emploi",
    icon: "Users",
    color: "#F7D618",
    points: [
      "Soutien aux entrepreneurs et PME locales",
      "Formation professionnelle et insertion des jeunes",
      "Développement du commerce et de l'artisanat",
      "Création d'opportunités d'emploi durables",
      "Promotion du Made in Congo",
    ],
  },
  {
    id: 2,
    title: "Éducation & Santé",
    icon: "Lightbulb",
    color: "#D72638",
    points: [
      "Amélioration de la qualité de l'enseignement",
      "Accès aux soins de santé primaires pour tous",
      "Programmes d'éducation adaptés aux réalités locales",
      "Soutien aux établissements scolaires",
      "Sensibilisation à la santé et à l'hygiène",
    ],
  },
  {
    id: 3,
    title: "Infrastructure",
    icon: "Building",
    color: "#009E3A",
    points: [
      "Entretien des infrastructures (routes, ponts)",
      "Amélioration de la mobilité urbaine",
      "Logements sociaux et durables",
      "Adduction d'eau potable",
      "Électrification des quartiers",
    ],
  },
  {
    id: 4,
    title: "Agriculture & Environnement",
    icon: "Leaf",
    color: "#F7D618",
    points: [
      "Soutien aux agriculteurs et pêcheurs",
      "Promotion de la pisciculture et de l'élevage",
      "Gestion durable des ressources naturelles",
      "Préservation de l'environnement",
      "Tourisme écologique et durable",
    ],
  },
];

const getIcon = (iconName: string, className: string = "w-6 h-6") => {
  switch (iconName) {
    case "PieChart":
      return <PieChart className={className} />;
    case "Users":
      return <Users className={className} />;
    case "Lightbulb":
      return <Lightbulb className={className} />;
    case "Building":
      return <Building className={className} />;
    case "Leaf":
      return <Leaf className={className} />;
    default:
      return <PieChart className={className} />;
  }
};

export default function Program() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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
      id="programme"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#D72638]/10 text-[#D72638] text-sm font-semibold rounded-full mb-4">
            NOTRE PROGRAMME
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Un projet pour Brazzaville
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des engagements concrets pour transformer notre communauté
          </p>
        </div>

        {/* Tabs Navigation */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {programCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-white shadow-lg text-gray-900"
                  : "bg-transparent text-gray-600 hover:bg-white/50"
              }`}
              style={{
                border:
                  activeTab === index
                    ? `2px solid ${category.color}`
                    : "2px solid transparent",
              }}
            >
              <span
                style={{
                  color: activeTab === index ? category.color : "inherit",
                }}
              >
                {getIcon(category.icon)}
              </span>
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Image */}
            <div
              className="relative h-64 lg:h-auto min-h-[400px]"
              style={{
                backgroundImage: `url('https://www.afdb.org/sites/default/files/styles/1700x900/public/r2am25-legacy-agriculture-1500-en.jpg?itok=Ww_Lxhyp')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center p-8 lg:p-12">
                <div className="text-white">
                  <h3
                    className="text-3xl lg:text-4xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {programCategories[activeTab].title}
                  </h3>
                  <p className="text-lg text-white/80 max-w-md">
                    Des mesures concrètes pour transformer notre communauté
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: programCategories[activeTab].color + "20",
                    color: programCategories[activeTab].color,
                  }}
                >
                  {getIcon(programCategories[activeTab].icon)}
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Nos engagements
                </h4>
              </div>

              <ul className="space-y-4">
                {programCategories[activeTab].points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
                      style={{ color: programCategories[activeTab].color }}
                    />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector("#contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center space-x-2 text-gray-900 font-semibold hover:text-[#009E3A] transition-colors duration-200"
                >
                  <span>Contribuez à notre programme</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
