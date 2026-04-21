import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, ArrowRight, Users, FileText, ImageIcon, Video } from "lucide-react";
import type { WPPost } from "@/lib/wordpress";

interface NewsProps {
  posts?: WPPost[];
}

const defaultNews = [
  {
    id: 1,
    type: "meeting",
    title: "Congrès ordinaire du CPR à Brazzaville",
    excerpt:
      "Le Club Perspectives et Réalités tient son congrès ordinaire avec la participation des délégués des différents arrondissements de Brazzaville.",
    date: "15 Mars 2026",
    readTime: "5 min",
    category: "Événements",
    image:
      "https://au.int/sites/default/files/styles/full/public/pressreleases/44389-A-meeting-of-the-Peace-and-Security-Council-of-the-African-Union-File-photo-AU.jpg?itok=mnkcj8qO",
  },
  {
    id: 2,
    type: "program",
    title: "Présentation du programme pour Moungali",
    excerpt:
      "Monsieur MOUTOU présente les nouvelles mesures en faveur du développement de l'arrondissement 4 Moungali.",
    date: "12 Mars 2026",
    readTime: "4 min",
    category: "Programme",
    image:
      "https://mfwa.org/wp-content/uploads/2022/03/image-4.png",
  },
  {
    id: 3,
    type: "press",
    title: "Déclaration sur la démocratie participative",
    excerpt:
      "Le parti exprime sa position sur les questions de gouvernance locale et appelle au dialogue avec les citoyens.",
    date: "8 Mars 2026",
    readTime: "3 min",
    category: "Communiqués",
    image:
      "https://c8.alamy.com/comp/BX9AN5/villagers-attend-a-community-meeting-in-the-town-of-kakata-liberia-BX9AN5.jpg",
  },
  {
    id: 4,
    type: "event",
    title: "Forum sur le développement local",
    excerpt:
      "Discussion sur les opportunités de développement économique et social pour les quartiers de Brazzaville.",
    date: "5 Mars 2026",
    readTime: "6 min",
    category: "Événements",
    image:
      "https://c8.alamy.com/comp/G585A2/residents-in-bobo-dioulasso-department-burkina-faso-attend-a-village-G585A2.jpg",
  },
  {
    id: 5,
    type: "press",
    title: "Signature du protocole avec les OSC",
    excerpt:
      "Un pas important vers la consolidation du dialogue entre le CPR et les organisations de la société civile.",
    date: "1er Mars 2026",
    readTime: "4 min",
    category: "Actualités",
    image:
      "https://www.shutterstock.com/image-photo/team-african-bussines-people-debating-600w-1272443623.jpg",
  },
  {
    id: 6,
    type: "program",
    title: "Plan stratégique pour Brazzaville",
    excerpt:
      "Le CPR présente sa vision pour transformer Brazzaville à travers la démocratie participative et le développement local.",
    date: "25 Février 2026",
    readTime: "7 min",
    category: "Programme",
    image:
      "https://www.afdb.org/sites/default/files/styles/1700x900/public/1500-photo-de-famille-pm_congo-en.jpg",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "meeting":
      return <Users size={16} />;
    case "program":
      return <FileText size={16} />;
    case "press":
      return <ImageIcon size={16} />;
    default:
      return <Video size={16} />;
  }
};

export default function News({ posts }: NewsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const news = posts
    ? posts.map((post, i) => ({
        id: i,
        type: "press",
        title: post.title,
        excerpt: post.excerpt.replace(/<[^>]*>/g, ""),
        date: new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }),
        readTime: "3 min",
        category: "Actualités",
        image: post.featuredImage?.node?.uri || "",
      }))
    : defaultNews;

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
      id="actualites"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#009E3A]/10 text-[#009E3A] text-sm font-semibold rounded-full mb-4">
            NOS ACTUALITÉS
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Restez informés
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Suivez les dernières nouvelles et actions du Club Perspectives et Réalités
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1569974498991-d3c12a504f95?w=600&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                    {getIcon(item.type)}
                    <span>{item.category}</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center space-x-1.5">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <Clock size={14} />
                    <span>{item.readTime} de lecture</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#009E3A] transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-[#D72638] font-semibold hover:text-[#c41f2f] transition-colors duration-200"
                >
                  <span>Lire la suite</span>
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}