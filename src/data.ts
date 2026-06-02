import { Room, PackageOption, BreakfastOption, Testimonial } from "./types";

export const BRAND_NAME = "The Mon BnB";
export const TAGLINE = "Architectural Opulence Meets Raw Natural Calm";
export const SUB_TAGLINE = "A hand-crafted boutique stay framed by glowing face-brick walls, bespoke modern interiors, and high-contrast twilight elements.";

export const IN_BRIEF = {
  altitude: "1,240m Above Sea Level",
  materials: "Reclaimed Face-Brick, Exposed Oak, Brushed Steel",
  atmosphere: "Private Sanctuary with Panoramic Splendor",
  vibe: "Apple-Grade Design Clarity meets Organic Serenity",
};

export const HERO_IMAGE = "/Images/unnamed.webp"; // Daytime pool and brick house

export const LIVING_SPACE = {
  title: "The Main House",
  subtitle: "Shared Living & Immersive Leisure Space",
  description: "Designed as an architectural dialogue between raw, textured brick masonry and modern, clean-lined furnishings. The central fireplace crackles as dusk descends, casting soft shadows across custom dark leather sofas. Beyond the double-height glass panes, a pristine pool shimmers, offering views of the distant mountain peaks.",
  leftImage: "/Images/unnamed (6).webp", // Living room with brick fireplace
  rightImage: "/Images/unnamed (12).webp", // Wider living look with couch, dining table, desk
};

export const WORKSPACE = {
  title: "The Apex Workspace",
  subtitle: "Precision-Built for the Digital Vanguard",
  description: "Work with absolute focus. Featuring a massive modern wooden desk set against a high-contrast rustic face-brick wall, the workspace is complete with pristine ambient lighting, fresh-cut local flora, a massive layout clock tracking global hours, and blazing-fast fiber-optic web. Crafted for founders, remote architects, and visionaries.",
  image: "/Images/unnamed (10).webp", // Workspace layout
  features: [
    "1 Gbps Synchronous Fiber & Wi-Fi 6E",
    "Ergonomic Bespoke Oak Desk",
    "Preloaded 4K Desktop Monitors on request",
    "Artisanal Coffee & Tea Bar in arms-reach",
  ]
};

export const ROOMS: Room[] = [
  {
    id: "sanctuary",
    name: "The Sanctuary Suite",
    tagline: "Uncompromised Sleep & Premium Entertainment",
    description: "Our premier accommodation features hand-spun premium organic white linens, a minimalist grey headboard, and rich custom textured pillows of deep violet and slate. Control your climate and entertainment instantly; a wall-mounted display stands ready with your pre-configured media stream.",
    size: "52 m²",
    capacity: "2 Adults",
    pricePerNight: 280,
    imageSrc: "/Images/unnamed (1).webp", // Bed setup
    features: [
      "Ultra-density Egyptian Cotton Bedding",
      "Bespoke Ambient Dimmer System",
      "Wall-mounted 55\" Smart Display with Netflix Premium",
      "Dedicated En-Suite Ceramic Bathroom",
      "Morning espresso bar with vintage grinder",
    ]
  },
  {
    id: "loft",
    name: "The Terra Loft",
    tagline: "High Ceilings & Industrial Brick Elegance",
    description: "A gorgeous vertical-loft layout framing views of the pool deck. Merges warm face-brick accents with industrial iron structures. Complete with premium smart controls, high-speed connectivity, and an integrated private balcony looking towards the sunrise trails.",
    size: "68 m²",
    capacity: "2 Adults",
    pricePerNight: 340,
    imageSrc: "/Images/unnamed (12).webp", // Using the beautiful spacious open-plan view
    features: [
      "Mezzanine bedding floor",
      "Exposed iron stairs & brick textures",
      "Private sunrise view deck",
      "High-Fidelity speaker array",
    ]
  }
];

export const AMENITIES_PREMIUM = {
  headline: "Amenities Created for Discovery",
  subheading: "Where physical textures elevate routine to ritual.",
  kitchenTitle: "The Culinary Workshop",
  kitchenDesc: "The fully equipped premium kitchen features matte black granite countertops, handle-less cabinets in satin lacquer, and a stunning geometric tiled backsplash. Perfect for self-catering, crafting slow pour-overs, or staging private chef experiences.",
  kitchenImage: "/Images/unnamed (5).webp", // Kitchen
  bathTitle: "The Wellness Crucible",
  bathDesc: "A pristine sanctuary designed around an deep, sculptural white slipper bathtub and raw stone. Complemented by high-pressure, water-saving custom chrome mixers, organic hemp linens, and local essential oil formulations.",
  bathImage: "/Images/unnamed (3).webp", // Bathtub with chrome mixer
};

export const ROMANTIC_EXPERIENCE: PackageOption = {
  id: "romantic",
  name: "The Solitaire Romance Package",
  description: "Crafted exclusively for couple anniversaries, honeymoons, or deep romance. Arrive to custom rose petal paths, a hand-crafted chocolate platter, and floating balloons. Designed to slow down time and frame your shared space in intimate, high-luxury aesthetic perfection.",
  price: 150,
  imageSrc: "/Images/unnamed (7).webp", // Romantic setup (7 & 8 webp show different angles)
  secondaryImageSrc: "/Images/unnamed (8).webp", // Candlelight & balloons detail
  included: [
    "Verdant red rose-petal heart arrangement on arrival",
    "Chilled premium MCC or handcrafted vintage wine in crystal flutes",
    "Floating helium ambient balloons in warm crimson",
    "Bespoke aromatherapy preparation on departure night",
    "A late checking-out extension (until 14:00 PM)",
  ]
};

export const BREAKFAST_OPTIONS: BreakfastOption[] = [
  {
    id: "gourmet",
    name: "The Gourmet Spread",
    tagline: "Option 1: Culinary Abundance",
    description: "A vibrant, hearty spread crafted with farm-to-table ingredients. Featuring perfectly poached organic eggs, artisanal pan-sautéed mushrooms, roasted vine-ripened tomatoes, sweet maple-glazed breakfasts, creamy fresh avocado smash, fresh organic crusty toast, and dark slow-brewed micro-lot coffee.",
    imageSrc: "/Images/unnamed (13).webp", // Gourmet plate
    price: 35,
    included: [
      "Poached or Sunny Farm Eggs",
      "Pan-sautéed Wild Mushrooms & Tomatoes",
      "Gourmet Sausages & Glazed Bacon",
      "Avocado smash with black sea salt",
      "Single-Origin Filter Coffee / Fresh Squeezed Juice",
    ]
  },
  {
    id: "classic",
    name: "The Classic Morning",
    tagline: "Option 2: Timeless Continental",
    description: "A fast, traditional, clean-crafted breakfast layout designed to start your morning with clarity. Pristine premium eggs, hand-cured bacon, slow-roasted beans, and golden bread paired with our historic silver kettle boiling fresh spring water on-demand.",
    imageSrc: "/Images/unnamed (15).webp", // Classic morning plate with kettle
    price: 25,
    included: [
      "Classic Scrambled / Fried Eggs",
      "Streaky Wood-Smoked Bacon",
      "Piped hot baked beans in traditional ramekins",
      "Boiling spring water via Silver Electric Kettle",
      "Daily fresh pastry selection with homemade marmalade",
    ]
  }
];

export const TWILIGHT = {
  title: "Under a Velvet Sky",
  subtitle: "Outdoor Twilight & Coals",
  poolTitle: "The Midnight Pool",
  poolDesc: "As the sun ducks below the ridge, underwater spot spotlights illuminate the warm saline pool. Swim a twilight lap as the cool mountain air hits, and watch the stars crystalize. It is peacefulness rendered in light and liquid.",
  poolImage: "/Images/unnamed (4).webp", // Midnight swimming pool
  braaiTitle: "The Authentic Braai Ritual",
  braaiDesc: "Experience the timeless regional art of open-fire grilling. Golden embers glow on the brick-paved patio as culinary cuts sizzle on the charcoal. We provide artisanal local firewoods and robust seasoning boards.",
  braaiImage: "/Images/unnamed (11).webp", // Sizzling meat on braai
};

export const GALLERY = {
  walkwayImage: "/Images/unnamed (2).webp", // Lookout path to pool towards mountain
  bannerImage: "/Images/unnamed (14).webp", // Dramatic sunset sky from yard
  bannerTitle: "The Final Horizon",
  bannerSubtitle: "A memory etched in crimson, face-brick, and clear skies.",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Elena Rostova",
    role: "Architect & Creative Director",
    comment: "This is a triumph of design honesty. The face-brick texture, coupled with the precision of the workspace and the incredible twilight pool, made me feel like I was residing inside a high-end architectural editorial.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Vance",
    role: "Founder, Apex Web Technologies",
    comment: "A flawless stay for remote execution. The Apex Workspace had unbelievable fiber speeds and perfect comfort. Switching from my code to a swim in the midnight saline pool is an experience I will recreate yearly.",
    rating: 5,
  }
];
