import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Hotel, ChevronRight } from "lucide-react";
import { BRAND_NAME } from "../data";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Living Areas", href: "#living" },
    { label: "Apex Work", href: "#work" },
    { label: "Suites", href: "#suites" },
    { label: "Romance", href: "#romance" },
    { label: "Dining", href: "#dining" },
    { label: "Wellness", href: "#wellness" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-stone-900/80 backdrop-blur-md border-b border-stone-800/40 shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2.5 text-white focus:outline-none"
            id="header-brand-logo"
          >
            <div className="relative flex items-center justify-center w-10 h-10 border border-white/20 bg-white/5 backdrop-blur-sm rounded-full">
              <span className="font-serif text-lg font-semibold tracking-wider text-brick-100">M</span>
              <div className="absolute -inset-px border border-white/5 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.25em] uppercase font-sans leading-none">{BRAND_NAME}</span>
              <span className="text-[9px] text-stone-400 font-mono tracking-wider mt-1 uppercase">Boutique Stay</span>
            </div>
          </a>

          {/* Nav Items Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-[#ece2da]">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-brick-300 transition-colors duration-200 relative group uppercase"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brick-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Book CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onBookClick}
              id="header-cta-book"
              className="relative px-6 py-2.5 bg-gradient-to-r from-brick-600 to-brick-700 hover:to-brick-600 text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 font-medium active:scale-95 flex items-center gap-2 group border border-transparent rounded-full shadow-md hover:shadow-lg shadow-brick-950/20"
            >
              Book Residency
              <ChevronRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Hamburger Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-white hover:text-brick-100 z-50 focus:outline-none"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-stone-950/95 backdrop-blur-lg md:hidden flex flex-col justify-between p-8 pt-32"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-mono border-b border-stone-800 pb-2">Navigation</span>
              <nav className="flex flex-col gap-5">
                {menuItems.map((item, index) => (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-serif text-stone-100 hover:text-brick-100 transition-all focus:outline-none"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-6 border-t border-stone-900 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-stone-400 font-mono tracking-wider">RESERVATIONS</span>
                <span className="text-sm font-sans text-stone-200">res@themonbnb.com</span>
                <span className="text-sm font-sans text-stone-200">+266 5332 4579</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-brick-600 to-brick-700 text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-full font-semibold shadow-md active:scale-95"
              >
                Book Residency
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
