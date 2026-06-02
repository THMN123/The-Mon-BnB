import { useState } from "react";
import Header from "./components/Header";
import { 
  Hero, LivingAreas, WorkSpace, SuitesSection, 
  RomanticSection, AmenitiesSection, DiningSection, 
  TwilightSection, ExitBannerSection 
} from "./components/PageSections";
import BookingModal from "./components/BookingModal";
import { TESTIMONIALS, IN_BRIEF, BRAND_NAME } from "./data";
import { ArrowUp, Star, Phone, Mail, MapPin, Calendar, Clock, Receipt, UserCheck, MessageSquare } from "lucide-react";

export default function App() {
  const [selectedSuiteId, setSelectedSuiteId] = useState("sanctuary");
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = (suiteId?: string) => {
    if (suiteId) {
      setSelectedSuiteId(suiteId);
    }
    setIsBookingOpen(true);
  };

  const handleSelectSuite = (suiteId: string) => {
    openBooking(suiteId);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans selection:bg-brick-600 selection:text-white">
      
      {/* 1. Header Navigation */}
      <Header onBookClick={() => openBooking()} />

      {/* 2. Fully Responsive Page Body */}
      <main className="overflow-x-hidden">
        
        {/* SECTION 1: THE HERO (First Impression) */}
        <Hero onBookClick={() => openBooking()} />

        {/* SECTION 2: LIFESTYLE & LIVING AREAS */}
        <LivingAreas />

        {/* SECTION 3: WORK & REMOTE PRODUCTIVITY */}
        <WorkSpace />

        {/* SECTION 4: THE LUXURY SUITES (Accommodations) */}
        <SuitesSection onSelectSuite={handleSelectSuite} />

        {/* SECTION 5: THE ROMANTIC EXPERIENCE (Premium Add-ons) */}
        <RomanticSection />

        {/* SECTION 6: AMENITIES & WELLNESS */}
        <AmenitiesSection />

        {/* SECTION 7: THE GOURMET BREAKFAST */}
        <DiningSection />

        {/* SECTION 8: TWILIGHT & OUTDOOR LIVING */}
        <TwilightSection />

        {/* EDITORIAL REVIEWS / TESTIMONIALS */}
        <section className="py-12 md:py-20 bg-stone-50 border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6 md:space-y-10">
            <span className="text-[10px] font-mono tracking-widest text-[#9e5330] uppercase block">EDITORIAL CITED REVIEWS</span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left">
              {TESTIMONIALS.map((test) => (
                <div key={test.id} className="space-y-4 p-6 bg-white border border-stone-200 shadow-md rounded-3xl">
                  <div className="flex gap-1 text-[#b85d3b]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-stone-600 italic font-sans leading-relaxed">
                    "{test.comment}"
                  </p>
                  <div className="border-t border-stone-100 pt-3 flex flex-col">
                    <span className="text-xs font-serif font-bold text-stone-900">{test.name}</span>
                    <span className="text-[10px] text-stone-400 font-mono tracking-wider">{test.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: SCENIC GALLERY & EXIT BANNER */}
        <ExitBannerSection />

        {/* THE RESERVATION ALLOCATION BLOCK */}
        <section id="booking-anchor" className="py-12 md:py-20 lg:py-28 bg-stone-950 text-white relative">
          
          {/* Subtle architectural background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 md:space-y-8">
            <span className="text-xs font-mono tracking-[0.25em] text-brick-300 uppercase block font-semibold">// SECURED RESERVATION GATE</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wider leading-tight max-w-3xl mx-auto">
              Secure Your Quiet Space
            </h2>
            <p className="text-sm md:text-base text-stone-400 font-sans leading-relaxed max-w-2xl mx-auto">
              Residency at The Mon BnB is heavily allocated to foster seclusion and tranquility. Experience beautiful rustic brick textures, tailored gourmet breakfast dining, and a deep saltwater pool.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => openBooking()}
                id="configure-residency-bottom-cta"
                className="px-8 py-3.5 bg-gradient-to-r from-brick-600 to-brick-700 hover:to-brick-600 text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 font-semibold rounded-full shadow-lg shadow-brick-950/40 transform hover:scale-[1.02] active:scale-98 animate-pulse-once"
              >
                Configure Your Residency
              </button>
            </div>

            <div className="border-t border-stone-900 pt-8 max-w-lg mx-auto grid grid-cols-2 gap-4 text-left font-mono text-[11px] text-stone-500">
              <div className="space-y-1">
                <span className="text-stone-400 font-bold block uppercase tracking-wider">REGISTRATION</span>
                <span>In: 14:00 – 19:00</span>
                <span className="block">Out: 10:30 AM</span>
              </div>
              <div className="space-y-1">
                <span className="text-stone-400 font-bold block uppercase tracking-wider">FLEXIBILITY</span>
                <span>Full deposit return</span>
                <span className="block">7 days prior</span>
              </div>
            </div>
            
            {/* Promo Code Suggestion banner helper */}
            <div className="p-4 bg-brick-950/40 border border-brick-600/30 text-stone-250 font-sans text-xs space-y-1.5 rounded-3xl max-w-lg mx-auto text-left">
              <span className="text-[10px] font-mono text-brick-300 uppercase tracking-wider block font-semibold flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" /> DIRECT EXCLUSIVE BENEFIT
              </span>
              <p className="text-[11px] leading-relaxed text-stone-300">
                Use our verified launch key code <span className="text-brick-100 font-mono font-bold bg-[#381a0b] px-1.5 py-0.5">MONBNB2026</span> in the form to redeem an immediate <span className="text-white font-bold">10% discount</span>.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* 4. FOOTER */}
      <footer className="bg-stone-950 text-stone-400 border-t border-stone-900 font-mono text-xs py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo & coordinates */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center bg-white/5">
                <span className="font-serif text-sm">M</span>
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase font-sans">{BRAND_NAME}</span>
            </div>
            <p className="text-stone-500 font-sans leading-relaxed text-[11px] max-w-xs">
              Calibrated architecture framing beautiful countryside and towering mountains. Raw brick charm made for slow restoration.
            </p>
            <div className="space-y-1.5 p-3.5 bg-stone-900/40 border border-stone-800/40 rounded-3xl max-w-xs">
              <p className="text-[10px] font-sans text-stone-400 leading-normal">
                No public Facebook/Instagram handles are running at present. Please like and follow our referral page so we can continue doing our part of giving you opportunities no one wants you to have. Direct calls and WhatsApp are our primary communication channels.
              </p>
            </div>
            <span className="text-[10px] text-stone-600 block">© {currentYear} The Mon BnB Stay, Ltd.</span>
          </div>

          {/* Directory Navigation Links */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-bold text-white tracking-widest">// SECURED DIRECTORY</span>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#living" className="hover:text-[#ecd2b9] transition-colors">Shared Living Deck</a></li>
              <li><a href="#work" className="hover:text-[#ecd2b9] transition-colors">Apex Remote Workspace</a></li>
              <li><a href="#suites" className="hover:text-[#ecd2b9] transition-colors">Sanctuary Bedrooms</a></li>
              <li><a href="#romance" className="hover:text-[#ecd2b9] transition-colors">Romantic Surprises</a></li>
              <li><a href="#dining" className="hover:text-[#ecd2b9] transition-colors">Gourmet Breakfast Plans</a></li>
            </ul>
          </div>

          {/* Location details */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-bold text-white tracking-widest">// LOCAL ESTATE PATH</span>
            <div className="space-y-2 text-[11px] text-stone-500 font-sans">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brick-300 flex-shrink-0 mt-0.5" />
                <span>Tsehlanyane 361, Maseru 100, Lesotho</span>
              </p>
              <p className="font-mono text-[10px]">Plus Code: MF7C+FM Maseru</p>
            </div>
          </div>

          {/* Contact coordinates */}
          <div className="space-y-4">
            <span className="text-[10px] uppercase font-bold text-white tracking-widest">// REGISTRY COMMUNICATOR</span>
            <div className="space-y-2 text-[11px] text-stone-500 font-sans">
              <a href="mailto:res@themonbnb.com" className="flex items-center gap-2 hover:text-[#ecd2b9] transition-colors">
                <Mail className="w-3.5 h-3.5 text-brick-300" />
                <span>res@themonbnb.com</span>
              </a>
              <a href="tel:+26653324579" className="flex items-center gap-2 hover:text-[#ecd2b9] transition-colors mt-2 block">
                <Phone className="w-3.5 h-3.5 text-brick-300" />
                <span>+266 5332 4579</span>
              </a>
              <a href="https://wa.me/26653324579" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ecd2b9] transition-colors mt-2 block font-medium">
                <MessageSquare className="w-3.5 h-3.5 text-brick-300" />
                <span>WhatsApp Chat Link</span>
              </a>
            </div>
            <div className="pt-2">
              <span className="text-[9px] text-[#e2a68f] uppercase tracking-widest font-mono font-semibold block">COMS AVAILABLE 24/7 FOR RESIDENTS</span>
            </div>
          </div>

        </div>

        {/* Scroll back to top pointer */}
        <div className="max-w-7xl mx-auto px-6 border-t border-stone-900 mt-12 pt-8 flex justify-between items-center text-stone-600 text-[10px]">
          <span>Designed with high-concept architectural minimalism. Made by <a href="https://apex.dev" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400 underline transition-colors">apex.dev</a>. All rights reserved.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            BACK TO TOP <ArrowUp className="w-3.5 h-3.5 text-brick-600" />
          </button>
        </div>
      </footer>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialSuiteId={selectedSuiteId} 
      />
    </div>
  );
}
