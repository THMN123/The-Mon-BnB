export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  size: string;
  capacity: string;
  pricePerNight: number;
  imageSrc: string;
  features: string[];
}

export interface PackageOption {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  secondaryImageSrc?: string;
  included: string[];
}

export interface BreakfastOption {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageSrc: string;
  included: string[];
  price: number;
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  guests: number;
  selectedSuiteId: string;
  selectedPackageId: string;
  selectedBreakfastOption: string; // 'none' | 'gourmet' | 'classic'
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  specialRequests: string;
  promoCode: string;
  isConfirmed: boolean;
  bookingReference?: string;
  totalNights: number;
  accommodationTotal: number;
  packageTotal: number;
  breakfastTotal: number;
  finalTotal: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
}
