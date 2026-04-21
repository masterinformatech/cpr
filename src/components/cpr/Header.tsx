"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface HeaderProps {
  onAdherentClick: () => void;
}

const navItems = [
  { name: "Accueil", href: "#accueil" },
  {
    name: "Le Parti",
    href: "#apropos",
    dropdown: [
      { name: "Notre Histoire", href: "#histoire" },
      { name: "Notre Vision", href: "#vision" },
      { name: "Nos Valeurs", href: "#valeurs" },
    ],
  },
  { name: "Actualités", href: "#actualites" },
  { name: "Programme", href: "#programme" },
  { name: "Le Cabinet", href: "#cabinet" },
  { name: "Contact", href: "#contact" },
];

export default function Header({ onAdherentClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#accueil");
            }}
            className="flex items-center space-x-3"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <img
                src="/logo-cpr.png"
                alt="Logo CPR - Club Perspectives et Réalités"
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className={`hidden sm:block transition-colors duration-300 ${
                isScrolled ? "text-[#1a4b8c]" : "text-white"
              }`}
            >
              <span className="block text-lg font-bold leading-tight">
                Club Perspectives
              </span>
              <span className="text-xs opacity-80">et Réalités</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        isScrolled
                          ? "text-gray-800 hover:bg-gray-100"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-48 rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
                        activeDropdown === item.name
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      } bg-white`}
                    >
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(subItem.href);
                          }}
                          className="block px-4 py-3 text-gray-700 hover:bg-[#1a4b8c] hover:text-white transition-colors duration-200"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isScrolled
                        ? "text-gray-800 hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={onAdherentClick}
            className="hidden lg:block px-6 py-2.5 bg-[#1a4b8c] text-white font-semibold rounded-lg hover:bg-[#153a6f] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Adhérer
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? "text-gray-800 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen mt-4" : "max-h-0"
          }`}
        >
          <nav className="bg-white rounded-xl shadow-xl p-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-4 overflow-hidden transition-all duration-200 ${
                        activeDropdown === item.name ? "max-h-48" : "max-h-0"
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(subItem.href);
                          }}
                          className="block px-4 py-2 text-gray-600 hover:text-[#009E3A] transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onAdherentClick();
                }}
                className="block w-full text-center px-6 py-3 bg-[#1a4b8c] text-white font-semibold rounded-lg hover:bg-[#153a6f] transition-colors duration-200"
              >
                Adhérer au parti
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
