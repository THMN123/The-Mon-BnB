import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, Sparkles, Check, Bookmark, Tv, Wifi, Utensils, 
  Coffee, Heart, Flame, Compass, Bath, Award, Volume2, ShieldAlert
} from "lucide-react";
import { 
  BRAND_NAME, TAGLINE, HERO_IMAGE, LIVING_SPACE, WORKSPACE, 
  ROOMS, AMENITIES_PREMIUM, ROMANTIC_EXPERIENCE, BREAKFAST_OPTIONS, 
  TWILIGHT, GALLERY 
} from "../data";

// ==========================================
// 1. HERO SECTION (Daytime architecture & pool)
// ==========================================
interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="hero-section">
      {/* Background Image / Parallex scale effect */}
      <div className="absolute inset-0 bg-stone-950">
        <motion.img
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 12, ease: "easeOut" }}
          src={HERO_IMAGE}
          alt={`${BRAND_NAME} Exterior`}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-stone-950/70"></div>
      </div>

      {/* Floating Accent lines to invoke Apple style blueprints */}
      <div className="absolute inset-x-8 top-1/4 bottom-1/4 border-l border-r border-white/5 pointer-events-none hidden md:block"></div>
      <div className="absolute inset-y-16 left-12 right-12 border-t border-b border-white/5 pointer-events-none hidden md:block"></div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-1.5 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6"
        >
          <Compass className="w-3.5 h-3.5 text-brick-300 animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#f6ebd8] uppercase">Now Hosting Private Residencies</span>
        </motion.div>

        {/* Serif Luxury Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-8xl font-normal tracking-wide text-[#fdfcfb] leading-none mb-6 text-shadow-md"
        >
          {BRAND_NAME}
        </motion.h1>

        {/* Dynamic Descriptive Slate */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif italic text-lg md:text-2xl text-stone-300 max-w-2xl leading-relaxed mb-10 text-shadow-sm font-light"
        >
          "{TAGLINE}"
        </motion.p>

        {/* Action Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono tracking-widest uppercase z-10"
        >
          <button
            onClick={onBookClick}
            id="hero-reservations-button"
            className="px-8 py-3.5 bg-gradient-to-r from-brick-600 to-[#b85a36] hover:from-brick-700 hover:to-[#b85a36] text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl shadow-brick-950/20 active:scale-95 flex items-center gap-2 group font-semibold"
          >
            Check Schedule
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#living"
            className="px-8 py-3.5 bg-white/10 hover:bg-white/15 text-stone-100 rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-white/30"
          >
            Explore Sanctuary
          </a>
        </motion.div>
      </div>

      {/* Decorative details in screen borders (No tech slop - honest, premium coordinate details) */}
      <div className="absolute bottom-8 left-8 hidden lg:flex items-center gap-3 text-[10px] font-mono text-stone-400">
        <span className="text-brick-300">// GPS COORDINATES</span>
        <span>29°33'14\" S, 30°22'45\" E</span>
      </div>
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-1.5 text-[10px] font-mono text-stone-400">
        <Award className="w-3 h-3 text-brick-300" />
        <span>ARCHITECTURAL REVIEW CHROME SELECTION 2026</span>
      </div>

      {/* Down indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-[9px] font-mono text-stone-500 uppercase tracking-widest">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-stone-455 to-transparent"></div>
      </div>
    </div>
  );
}

// ==========================================
// 2. LIFESTYLE & LIVING AREAS (Brick fireplace & space)
// ==========================================
export function LivingAreas() {
  return (
    <section id="living" className="py-12 md:py-20 lg:py-28 bg-stone-50 text-stone-900 border-b border-stone-200">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6"
      >
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] text-brick-600 uppercase block mb-3">Architectural Philosophy</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-stone-900 leading-tight">
            Raw materiality meets the absolute premium details of contemporary life.
          </h2>
        </div>

        {/* Asymmetric Living Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Block - The Fireplace text & Image (8 cols out of 12) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden shadow-2xl rounded-3xl">
              <img
                src={LIVING_SPACE.leftImage}
                alt="Fireplace in Main living room"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03] rounded-3xl"
                referrerPolicy="no-referrer"
              />

            </div>
            
            <div className="max-w-xl pr-6">
              <span className="text-[10px] font-mono text-brick-600 tracking-widest uppercase">THE COZY CORE</span>
              <h3 className="text-xl md:text-2xl font-serif font-semibold mt-1 mb-3 text-stone-950">A Hearth For Deep Warmth</h3>
              <p className="text-sm font-sans text-stone-600 leading-relaxed">
                The massive open-hearth brick chimney stands as the visual anchoring core of the stay. Flanked by deep leather club sofas that invite long evenings of conversation, reading, and watching rising embers. Experience standard regional firewood logs stacked ready for custom fires.
              </p>
            </div>
          </div>

          {/* Right Block - Open Plan Layout description & space view (5 cols out of 12) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 md:space-y-8 lg:mt-0">
            <div className="max-w-md">
              <span className="text-[10px] font-mono text-brick-600 tracking-widest uppercase block mb-2">// SOCIAL COMPOSITION</span>
              <h3 className="text-xl md:text-2xl font-serif text-stone-950 font-semibold mb-3 md:mb-4 leading-snug">The Great Open-Plan Flow</h3>
              <p className="text-sm font-sans text-stone-600 leading-relaxed mb-4 md:mb-6">
                Directly opposite from the fireside, the layout unfurls into a magnificent open structure. Traditional rustic solid timber dining tables flank standard sleek desk systems and comfortable seating clusters. Sunlight trickles across the clay floors, emphasizing architectural honesty at every cross section.
              </p>
              
              <ul className="space-y-2 text-xs text-stone-700 font-mono mb-6 md:mb-8">
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brick-600" /> Reclaimed warm face-brick accents</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brick-600" /> Massive timber slab dining</li>
                <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brick-600" /> Floor-to-ceiling glass pool views</li>
              </ul>
            </div>

            <div className="relative aspect-[4/5] bg-stone-200 overflow-hidden shadow-xl max-w-sm hidden sm:block rounded-3xl">
              <img
                src={LIVING_SPACE.rightImage}
                alt="Wider Open Plan Living Setup"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03] rounded-3xl"
                referrerPolicy="no-referrer"
              />

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

// ==========================================
// 3. WORK & REMOTE PRODUCTIVITY (Apex Workspace)
// ==========================================
export function WorkSpace() {
  return (
    <section id="work" className="py-12 md:py-20 lg:py-28 bg-stone-100 text-stone-900 border-b border-stone-250">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          
          {/* Text content side */}
          <div className="space-y-5 md:space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-brick-600"></span>
              <span className="text-xs font-mono tracking-[0.21em] text-brick-600 uppercase">Remote Architecture & Execution</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif text-stone-950 font-normal tracking-tight leading-tight">
              {WORKSPACE.subtitle}
            </h2>
            
            <p className="text-sm text-stone-600 font-sans leading-relaxed">
              {WORKSPACE.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {WORKSPACE.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-b from-white to-stone-50/70 border border-stone-200/60 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-2 bg-brick-50 border border-brick-100 text-brick-600 mt-0.5 rounded-full">
                    <Wifi className="w-3.5 h-3.5 text-brick-600" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-stone-900 block uppercase">Parameter 0{idx+1}</span>
                    <span className="text-xs text-stone-500 font-sans mt-0.5 block">{feat}</span>
                  </div>
                </div>
              ))}
            </div>
            

          </div>

          {/* Visual Asset side */}
          <div className="relative lg:mt-0">
            {/* Soft background glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-brick-100/30 to-brick-200/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative overflow-hidden shadow-2xl aspect-[4/3] bg-stone-200 rounded-3xl">
              <img
                src={WORKSPACE.image}
                alt="The Apex Workspace detail"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02] rounded-3xl"
                referrerPolicy="no-referrer"
              />
              {/* Image marker label */}
              <div className="absolute inset-0 bg-stone-950/10 hover:bg-transparent transition-colors duration-300"></div>
            </div>
            {/* Editorial citation caption */}
            <p className="text-[11px] font-serif italic text-stone-500 mt-4 text-center">
              "The massive brick workwall stands opposite natural sky lighting, creating an absolute perfect balance of shadow and clarity during peak focus flow."
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

// ==========================================
// 4. THE LUXURY SUITES (Accommodations details)
// ==========================================
interface SuitesProps {
  onSelectSuite: (suiteId: string) => void;
}

export function SuitesSection({ onSelectSuite }: SuitesProps) {
  return (
    <section id="suites" className="py-12 md:py-20 lg:py-28 bg-stone-50 border-b border-stone-200 text-stone-900">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-brick-600 uppercase block mb-3">CONFINED LUXURY</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-950">Luxury Suite Selections</h2>
          <p className="text-sm text-stone-500 mt-2 font-sans italic">
            Each space is calibrated carefully for optimal temperature, acoustic isolation, and pristine comfort.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {ROOMS.map((room) => (
            <div key={room.id} className="bg-white border border-stone-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between flex-1">
              <div>
                {/* Image Container with relative labels */}
                <div className="relative aspect-[16/10] bg-stone-200 overflow-hidden m-4 md:m-5 rounded-3xl">
                  <img
                    src={room.imageSrc}
                    alt={room.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] rounded-3xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-brick-600 to-[#b25835] text-white font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    Featured Asset
                  </div>

                </div>

                {/* Content details */}
                <div className="p-5 sm:p-6 md:p-8 space-y-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-2xl font-serif font-semibold text-stone-950">{room.name}</h3>
                  </div>
                  
                  <span className="text-xs font-mono text-stone-500 block italic leading-none">{room.tagline}</span>
                  
                  <p className="text-xs text-stone-600 font-sans leading-relaxed pt-2">
                    {room.description}
                  </p>

                  <div className="pt-4 border-t border-stone-100">
                    <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase block mb-3">Included Parameters</span>
                    <ul className="text-xs text-stone-700 space-y-2 font-sans">
                      {room.features.slice(0, 4).map((feat, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-brick-600 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Smart entertainment highlight special for Sanctuary */}
                  {room.id === "sanctuary" && (
                    <div className="p-4 bg-gradient-to-r from-brick-50/50 to-stone-50/50 border border-stone-200/60 text-left flex gap-3.5 items-center rounded-3xl mt-4">
                      <div className="p-2.5 bg-white text-brick-600 rounded-full shadow-xs">
                        <Tv className="w-5 h-5 flex-shrink-0" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-stone-900 block">Smart Media Wall</span>
                        <span className="text-[10px] text-stone-500 block leading-snug">Flat-screen luxury setup featuring full digital catalog access instantly customized for you.</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 bg-stone-50/50 border-t border-stone-100 flex items-center justify-between">
                <div className="font-mono text-[10px] text-stone-400 uppercase">
                  <span>Dimension: </span><span className="text-stone-700 font-bold">{room.size}</span>
                </div>
                <button
                  onClick={() => onSelectSuite(room.id)}
                  id={`book-suite-cta-${room.id}`}
                  className="px-6 py-2.5 bg-gradient-to-r from-stone-900 to-stone-800 text-white font-mono text-[10px] tracking-widest uppercase transition-all duration-300 rounded-full font-semibold shadow-md active:scale-95 hover:shadow-lg"
                >
                  Configure Residency
                </button>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}

// ==========================================
// 5. THE ROMANTIC EXPERIENCE (Add-ons Carousel)
// ==========================================
export function RomanticSection() {
  const [activeTab, setActiveTab] = useState(0); // 0 = main bed, 1 = detail close up

  const images = [ROMANTIC_EXPERIENCE.imageSrc, ROMANTIC_EXPERIENCE.secondaryImageSrc!];
  const titles = ["Option A: The Hearth Bed Setup", "Option B: Sparkling Wine & Balloon Details"];

  return (
    <section id="romance" className="py-12 md:py-20 lg:py-28 bg-stone-100 text-stone-900 border-b border-stone-250">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Images Switching Area (7 cols out of 12) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[16/10] bg-stone-200 overflow-hidden shadow-2xl rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(5px)" }}
                  transition={{ duration: 0.4 }}
                  src={images[activeTab]}
                  alt="Romantic Bed Setup and details"
                  className="w-full h-full object-cover rounded-3xl"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              


              {/* Slide Counter Indicator */}
              <div className="absolute bottom-4 right-4 bg-stone-900/85 backdrop-blur-sm px-2.5 py-1 text-white font-mono text-[9px] rounded-full">
                {activeTab + 1} / 2
              </div>
            </div>

            {/* Micro Slider Selectors */}
            <div className="flex gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  id={`romantic-tab-${idx}`}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 p-3.5 border text-left font-sans text-xs transition-all duration-300 rounded-3xl ${
                    idx === activeTab
                      ? "border-brick-600 bg-white shadow-lg text-stone-950 font-semibold -translate-y-0.5"
                      : "border-stone-200 bg-stone-50 text-stone-500 hover:border-stone-300 hover:shadow-sm"
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brick-600 block mb-1">IMAGE OPTION 0{idx+1}</span>
                  <span className="truncate block font-medium">{titles[idx]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Texts content (5 cols out of 12) */}
          <div className="lg:col-span-5 space-y-5 md:space-y-6 lg:mt-0">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-brick-600" />
              <span className="text-xs font-mono tracking-[0.2em] text-brick-700 uppercase">ADD-ON PACKAGES</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif text-stone-950 font-normal tracking-tight leading-tight">
              Honoring Special Occasions
            </h2>

            <p className="text-sm text-stone-600 leading-relaxed font-sans">
              Designed as a passionate, detailed room welcoming set. Perfect for anniversaries, honeymoons, or surprise proposals. Arrive in structural quietness to discover wine, heart arranged rose petals, and bespoke details tailored beautifully to command romance perfectly.
            </p>

            <div className="p-6 bg-gradient-to-br from-white to-[#fbf8f5] border border-stone-200/60 shadow-xl space-y-4 rounded-3xl">
              <div className="flex justify-between items-baseline border-b border-stone-100 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900">Solitaire Romance Tailoring</span>
              </div>
              <ul className="text-xs text-stone-700 space-y-3 font-sans">
                {ROMANTIC_EXPERIENCE.included.map((incl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-3.5 h-3.5 text-brick-600 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{incl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[10px] italic font-mono text-stone-500">
              * Simply tick "The Solitaire Romance Package" in the booking form checklist to apply this setup instantly.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

// ==========================================
// 6. AMENITIES & WELLNESS (Kitchen & Bath)
// ==========================================
export function AmenitiesSection() {
  return (
    <section id="wellness" className="py-12 md:py-20 lg:py-28 bg-stone-50 text-stone-900 border-b border-stone-200">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6"
      >
        
        {/* Paragraph Info */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-brick-600 uppercase block mb-3">Self-Catering & Restoration</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-950 tracking-tight leading-tight">
            {AMENITIES_PREMIUM.headline}
          </h2>
          <p className="text-sm text-stone-500 mt-2 font-sans italic">
            Comfort in raw solitude. Detailed structures created to let you nourish, rest, and reflect.
          </p>
        </div>

        {/* 2-Column Minimalist Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Column Left: Kitchen */}
          <div className="space-y-4 md:space-y-6">
            <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden shadow-xl rounded-3xl">
              <img
                src={AMENITIES_PREMIUM.kitchenImage}
                alt="Modern kitchen countertops"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03] rounded-3xl"
                referrerPolicy="no-referrer"
              />

            </div>
            
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#a84323] uppercase flex items-center gap-1.5 align-middle">
                <Utensils className="w-3.5 h-3.5" /> 01 / CULINARY EXCELLENCE
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-stone-950 font-semibold">{AMENITIES_PREMIUM.kitchenTitle}</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-sans">
                {AMENITIES_PREMIUM.kitchenDesc}
              </p>
            </div>
          </div>

          {/* Column Right: Bathtub */}
          <div className="space-y-4 md:space-y-6 md:mt-0">
            <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden shadow-xl rounded-3xl">
              <img
                src={AMENITIES_PREMIUM.bathImage}
                alt="Pristine white bathtub with shower mixer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03] rounded-3xl"
                referrerPolicy="no-referrer"
              />

            </div>
            
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#a84323] uppercase flex items-center gap-1.5 align-middle">
                <Bath className="w-3.5 h-3.5" /> 02 / HYDROTHERAPY SANCTUARY
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-stone-950 font-semibold">{AMENITIES_PREMIUM.bathTitle}</h3>
              <p className="text-sm text-stone-600 leading-relaxed font-sans">
                {AMENITIES_PREMIUM.bathDesc}
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

// ==========================================
// 7. THE GOURMET BREAKFAST (Dining Experiential Switching Tabs)
// ==========================================
export function DiningSection() {
  const [activeBreakfast, setActiveBreakfast] = useState<"gourmet" | "classic">("gourmet");

  const option = BREAKFAST_OPTIONS.find((b) => b.id === activeBreakfast) || BREAKFAST_OPTIONS[0];

  return (
    <section id="dining" className="py-12 md:py-20 lg:py-28 bg-stone-100 text-stone-900 border-b border-stone-250">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6"
      >
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <span className="text-xs font-mono tracking-[0.2em] text-brick-600 uppercase block mb-3">EXPERIENTIAL DINING</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-950 tracking-tight">Breakfast Calibrations</h2>
          <p className="text-sm text-stone-500 mt-2 font-sans italic">
            Wake up to fine local seasonal spreads styled to read like an elite gastrology review.
          </p>
        </div>

        {/* Tab Switcher Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-16 items-start">
          
          {/* Tab buttons & description column (5 cols out of 12) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-4 md:gap-6">
            
            {/* Apple Style Interactive Buttons */}
            <div className="flex flex-col gap-2.5">
              {BREAKFAST_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  id={`dining-tab-${opt.id}`}
                  onClick={() => setActiveBreakfast(opt.id as any)}
                  className={`w-full p-4.5 border text-left transition-all duration-300 rounded-3xl flex items-center justify-between group shadow-sm hover:shadow-md ${
                    activeBreakfast === opt.id
                      ? "border-brick-600 bg-white shadow-lg text-stone-950"
                      : "border-stone-200 bg-stone-50/70 text-stone-500 hover:border-stone-300"
                  }`}
                >
                  <div className="flex-1">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-brick-600 block mb-1">
                      {opt.id === "gourmet" ? "OPTION 01" : "OPTION 02"}
                    </span>
                    <span className="font-serif text-base font-bold tracking-wide">{opt.name}</span>
                    <span className="text-xs font-mono block mt-1 text-stone-400">{opt.tagline}</span>
                  </div>
                  <ChevronRightIcon active={activeBreakfast === opt.id} />
                </button>
              ))}
            </div>

            {/* Dynamic Content Description */}
            <div className="space-y-4 p-6 bg-white border border-stone-200/50 shadow-xl rounded-3xl">
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {option.description}
              </p>
              
              <div className="pt-4 border-t border-stone-100">
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono block mb-3">FRESHLY INCLUDED IN GRIDS</span>
                <ul className="text-xs text-stone-700 space-y-2 font-sans">
                  {option.included.map((incl, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Coffee className="w-3.5 h-3.5 text-brick-600" />
                      <span>{incl}</span>
                    </li>
                  ))}
                </ul>
              </div>


            </div>

          </div>

          {/* Large Image Column (7 cols out of 12) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden shadow-2xl rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeBreakfast}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45 }}
                  src={option.imageSrc}
                  alt={option.name}
                  className="w-full h-full object-cover rounded-3xl"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

            </div>
            <p className="text-[10px] text-center italic text-stone-500 font-serif mt-3">
              * Sourced entirely from surrounding micro-estates and baked daily in our custom hearth ovens.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

function ChevronRightIcon({ active }: { active: boolean }) {
  return (
    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
      active ? "border-brick-600 bg-brick-600 text-white shadow-md shadow-brick-950/10" : "border-stone-200 bg-white text-stone-400 group-hover:border-stone-350 group-hover:text-stone-700"
    }`}>
      <ArrowRight className="w-3.5 h-3.5" />
    </div>
  );
}

// ==========================================
// 8. TWILIGHT & OUTDOOR LIVING (The Night Vibe Change Background)
// ==========================================
export function TwilightSection() {
  return (
    <section id="twilight" className="py-12 md:py-20 lg:py-28 bg-[#121212] text-stone-100 transition-colors duration-500 border-b border-stone-950">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6"
      >
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-brick-300 uppercase block mb-3">THE TWILIGHT ATMOSPHERE</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-tight">
            {TWILIGHT.title}
          </h2>
          <p className="text-sm text-stone-400 mt-2 font-sans italic">
            Watch the brick textures absorb twilight colors as a warm cozy ambience unfolds outdoors.
          </p>
        </div>

        {/* 2-Column Night Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Pool Evening Element */}
          <div className="space-y-4 md:space-y-6">
            <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden border border-stone-800 shadow-2xl rounded-3xl">
              <img
                src={TWILIGHT.poolImage}
                alt="Midnight pool swimming"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03] rounded-3xl"
                referrerPolicy="no-referrer"
              />

            </div>
            
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#e2a68f] uppercase flex items-center gap-1.5 font-bold">
                <Flame className="w-3.5 h-3.5" /> 01 / LIQUID MEDITATION
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-white">{TWILIGHT.poolTitle}</h3>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                {TWILIGHT.poolDesc}
              </p>
            </div>
          </div>

          {/* Charcoal Weber/Braai Element */}
          <div className="space-y-4 md:space-y-6 lg:mt-0">
            <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden border border-stone-800 shadow-2xl rounded-3xl">
              <img
                src={TWILIGHT.braaiImage}
                alt="Authentic braai setup with sizzling meat"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03] rounded-3xl"
                referrerPolicy="no-referrer"
              />

            </div>
            
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#e2a68f] uppercase flex items-center gap-1.5 font-bold">
                <Flame className="w-3.5 h-3.5 animate-pulse" /> 02 / LOCAL FIRE RITES
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-white">{TWILIGHT.braaiTitle}</h3>
              <p className="text-xs text-stone-400 leading-relaxed font-sans">
                {TWILIGHT.braaiDesc}
              </p>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}

// ==========================================
// 9. SCENIC GALLERY & EXIT BANNER
// ==========================================
export function ExitBannerSection() {
  return (
    <section className="bg-stone-950 text-white overflow-hidden relative border-b border-stone-900">
      
      {/* 2-Column Gallery leading up */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <div className="space-y-4 md:space-y-6 order-2 md:order-1 md:mt-0">
            <span className="text-xs font-mono tracking-[0.25em] text-brick-300 uppercase block mb-3">// MOUNT VISION LOOKOUT</span>
            <h3 className="text-2xl md:text-3xl font-serif font-light leading-snug">The Morning Pathway Walkway</h3>
            <p className="text-sm text-stone-400 font-sans leading-relaxed">
              Step from your suite along the hand-cut brick pathway directly to the outdoor deck. Watch the early morning fog roll down the majestic mountain valleys in utter quietness. This layout ensures you are continually bridged with raw nature.
            </p>
            <div className="p-4.5 rounded-3xl bg-gradient-to-r from-stone-900/60 to-stone-800/25 border-l-4 border-brick-600 text-[11px] text-stone-300 font-mono italic leading-relaxed">
              "We encourage residents to take slow strolls along the poolside path at 06:30 AM to catch the absolute mountain dew clouds."
            </div>
          </div>

          <div className="relative aspect-[16/10] bg-stone-900 overflow-hidden shadow-2xl order-1 md:order-2 rounded-3xl">
            <img
              src={GALLERY.walkwayImage}
              alt="Mountain layout walkways pool"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03] rounded-3xl"
              referrerPolicy="no-referrer"
            />

          </div>

        </div>
      </div>

      {/* Massive Exit Banner using unnamed (14).webp */}
      <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={GALLERY.bannerImage}
            alt="Scenic evening clouds at sunrise gate"
            className="w-full h-full object-cover object-center brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/30 to-stone-950"></div>
        </div>

        {/* Center Text overlaying named exit layout banner */}
        <div className="relative z-10 text-center px-6 max-w-xl space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#e2a68f] block">{GALLERY.bannerSubtitle}</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">{GALLERY.bannerTitle}</h2>
          <p className="text-xs text-stone-300 leading-relaxed font-sans max-w-sm mx-auto">
            Experience skies and dramatic silhouettes showing the beautiful iron gate under deep cloud movements.
          </p>

        </div>
      </div>

    </section>
  );
}
