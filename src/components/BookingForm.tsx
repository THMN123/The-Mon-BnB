import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Room, PackageOption, BreakfastOption, BookingDetails } from "../types";
import { ROOMS, ROMANTIC_EXPERIENCE, BREAKFAST_OPTIONS } from "../data";
import { Calendar, Users, Percent, Gift, Check, Coffee, Heart, ArrowRight, ShieldCheck, Printer, MessageSquare, Send } from "lucide-react";

const getWhatsAppUrl = (booking: BookingDetails) => {
  const suiteName = booking.selectedSuiteId === "sanctuary" ? "The Sanctuary Suite" : "The Mon Suite";
  const romanceText = booking.selectedPackageId !== "none" ? "Yes, Solitaire Romance Package" : "None";
  const breakfastText = booking.selectedBreakfastOption !== "none" ? `${booking.selectedBreakfastOption} Plan` : "None";
  const specialReqText = booking.specialRequests ? booking.specialRequests : "None";
  const promoText = booking.promoCode ? booking.promoCode : "None";

  const message = `Hello The Mon BnB, I would like to lock in my secure stay inquiry:
- Reference Code: ${booking.bookingReference}
- Guest Name: ${booking.customerName}
- Guest Email: ${booking.customerEmail}
- Guest Phone: ${booking.customerPhone}
- Suite: ${suiteName}
- Check-In: ${booking.checkIn}
- Check-Out: ${booking.checkOut}
- Nights: ${booking.totalNights}
- Residents: ${booking.guests}
- Gastronomy: ${breakfastText}
- Romance Package: ${romanceText}
- Special Requests: ${specialReqText}
- Promo Code: ${promoText}`;

  return `https://wa.me/26653324579?text=${encodeURIComponent(message)}`;
};

interface BookingFormProps {
  initialSuiteId?: string;
  onBookingConfirmed?: (details: BookingDetails) => void;
}

export default function BookingForm({ initialSuiteId = "sanctuary", onBookingConfirmed }: BookingFormProps) {
  const [checkIn, setCheckIn] = useState("2026-06-08");
  const [checkOut, setCheckOut] = useState("2026-06-11");
  const [guests, setGuests] = useState(2);
  const [selectedSuiteId, setSelectedSuiteId] = useState(initialSuiteId);
  const [addRomance, setAddRomance] = useState(false);
  const [selectedBreakfast, setSelectedBreakfast] = useState<"none" | "gourmet" | "classic">("gourmet");
  
  // Lead info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState("");
  const [promoError, setPromoError] = useState("");
  const [formError, setFormError] = useState("");

  // Confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Synced with initial inputs
  useEffect(() => {
    if (initialSuiteId) {
      setSelectedSuiteId(initialSuiteId);
    }
  }, [initialSuiteId]);

  // Calculations
  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0;
    const diffTime = end.getTime() - start.getTime();
    if (diffTime <= 0) return 0;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const activeSuite = ROOMS.find((r) => r.id === selectedSuiteId) || ROOMS[0];
  const accommodationTotal = activeSuite.pricePerNight * nights;
  
  const packageTotal = addRomance ? ROMANTIC_EXPERIENCE.price : 0;
  
  const breakfastOption = BREAKFAST_OPTIONS.find((b) => b.id === selectedBreakfast);
  const breakfastTotal = breakfastOption ? breakfastOption.price * guests * nights : 0;

  const rawTotal = accommodationTotal + packageTotal + breakfastTotal;
  const discountAmount = Math.round(rawTotal * (discountPercent / 100));
  const finalTotal = rawTotal - discountAmount;

  const handleApplyPromo = () => {
    setPromoError("");
    const code = promoCode.trim().toUpperCase();
    if (code === "MONBNB2026" || code === "WELCOME10") {
      setDiscountPercent(10);
      setPromoApplied(code);
    } else if (code === "HONEYMOON") {
      setDiscountPercent(15);
      setPromoApplied(code);
    } else if (code === "") {
      setPromoError("Please enter a valid promotional code.");
    } else {
      setPromoError("This promo code is either expired or invalid for this residency.");
    }
  };

  const handleRemovePromo = () => {
    setDiscountPercent(0);
    setPromoApplied("");
    setPromoCode("");
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!name || !email || !phone) {
      setFormError("Please provide your name, email, and contact number to request entry.");
      return;
    }
    if (nights <= 0) {
      setFormError("Invalid duration. The departure date must be strictly after the check-in date.");
      return;
    }

    setIsSubmitting(true);
    // Simulate premium validation
    setTimeout(() => {
      const refCode = "MON-" + Math.floor(100000 + Math.random() * 900000);
      const booking: BookingDetails = {
        checkIn,
        checkOut,
        guests,
        selectedSuiteId,
        selectedPackageId: addRomance ? "romantic" : "none",
        selectedBreakfastOption: selectedBreakfast,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        specialRequests,
        promoCode: promoApplied,
        isConfirmed: true,
        bookingReference: refCode,
        totalNights: nights,
        accommodationTotal,
        packageTotal,
        breakfastTotal,
        finalTotal,
      };

      // Save to local storage for realistic state persistence
      const currentBookings = JSON.parse(localStorage.getItem("mon_bnb_bookings") || "[]");
      localStorage.setItem("mon_bnb_bookings", JSON.stringify([...currentBookings, booking]));

      setConfirmedBooking(booking);
      setIsSubmitting(false);

      const whatsappUrl = getWhatsAppUrl(booking);
      try {
        const w = window.open(whatsappUrl, "_blank");
        if (!w || w.closed || typeof w.closed === "undefined") {
          window.location.href = whatsappUrl;
        }
      } catch (err) {
        window.location.href = whatsappUrl;
      }

      if (onBookingConfirmed) {
        onBookingConfirmed(booking);
      }
    }, 1500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full relative bg-stone-900 border border-stone-800/60 rounded-3xl shadow-2xl overflow-hidden text-stone-100" id="booking-container-card">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brick-600 via-brick-300 to-brick-700"></div>
      
      <AnimatePresence mode="wait">
        {!confirmedBooking ? (
          <motion.div
            key="booking-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 md:p-8"
          >
            <div className="mb-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#e2a68f] block mb-2">Exclusive Residency Request</span>
              <h3 className="text-2xl font-serif text-white tracking-wide">Request Your Stay</h3>
              <p className="text-xs text-stone-400 mt-1">Please configure your accommodation schedule below.</p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-5">
              {/* Primary Schedule Parameters */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* Check In */}
                <div className="space-y-1.5">
                  <label htmlFor="check-in" className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-wider font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-brick-100" /> Check-In
                  </label>
                  <input
                    type="date"
                    id="check-in"
                    min="2026-06-01"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2.5 bg-stone-955 border border-stone-800 text-xs font-mono text-white focus:outline-none focus:border-brick-600 rounded-2xl"
                    required
                  />
                </div>

                {/* Check Out */}
                <div className="space-y-1.5">
                  <label htmlFor="check-out" className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-wider font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-brick-100" /> Departure
                  </label>
                  <input
                    type="date"
                    id="check-out"
                    min={checkIn}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2.5 bg-stone-955 border border-stone-800 text-xs font-mono text-white focus:outline-none focus:border-brick-600 rounded-2xl"
                    required
                  />
                </div>

                {/* Guests */}
                <div className="col-span-2 sm:col-span-1 space-y-1.5">
                  <label htmlFor="guests-count" className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-wider font-mono flex items-center gap-1">
                    <Users className="w-3 h-3 text-brick-100" /> Travel Cohort
                  </label>
                  <select
                    id="guests-count"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2.5 bg-stone-955 border border-stone-800 text-xs font-mono text-white focus:outline-none focus:border-brick-600 rounded-2xl"
                  >
                    <option value={1}>1 Resident</option>
                    <option value={2}>2 Residents</option>
                  </select>
                </div>
              </div>

              {/* Suite Selection Grid */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-stone-400 uppercase tracking-wider font-mono block">Selected Suite</label>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {ROOMS.map((room) => (
                    <button
                      key={room.id}
                      type="button"
                      id={`select-suite-${room.id}`}
                      onClick={() => setSelectedSuiteId(room.id)}
                      className={`flex flex-col text-left p-3 sm:p-4.5 border rounded-2xl sm:rounded-3xl transition-all duration-250 ${
                        selectedSuiteId === room.id
                          ? "border-brick-600 bg-stone-950 shadow-md"
                          : "border-stone-800/80 bg-stone-955/40 hover:bg-stone-950/70 hover:border-stone-700"
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="text-xs font-semibold text-white tracking-wider truncate">{room.name}</span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-stone-450 mt-1 font-sans line-clamp-1">{room.tagline}</span>
                      <span className="text-[8px] sm:text-[9px] text-[#e2a68f] mt-1.5 font-mono uppercase tracking-widest">{room.size.split(" ")[0]} · {room.capacity.split(" ")[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Premium Add-ons Section */}
              <div className="border-t border-stone-800/80 pt-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-300">Residency Tailoring</h4>
                  <span className="text-[10px] text-brick-300 font-mono italic">Optional Add-ons</span>
                </div>

                {/* Romantic Package Toggle */}
                <div
                  id="toggle-romantic-addon"
                  onClick={() => setAddRomance(!addRomance)}
                  className={`flex items-start gap-4 p-4 border cursor-pointer select-none transition-all rounded-3xl ${
                    addRomance
                      ? "border-brick-600 bg-stone-950"
                      : "border-stone-800/50 bg-stone-900/10 hover:border-stone-800 hover:bg-stone-950/20"
                  }`}
                >
                  <div className="mt-0.5">
                    <div className={`w-4 h-4 border flex items-center justify-center rounded-md ${
                      addRomance ? "border-brick-600 bg-brick-600 text-white" : "border-stone-600 bg-transparent"
                    }`}>
                      {addRomance && <Check className="w-3 h-3" />}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5 text-[#b85d3b]" /> {ROMANTIC_EXPERIENCE.name}
                      </span>
                    </div>
                    <p className="text-[10px] text-stone-400 mt-0.5 line-clamp-1">{ROMANTIC_EXPERIENCE.description}</p>
                  </div>
                </div>

                {/* Breakfast Options Selector */}
                <div className="space-y-2">
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider font-mono block">Morning Gastronomy Selection</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      id="breakfast-none"
                      onClick={() => setSelectedBreakfast("none")}
                      className={`p-3 border text-left text-xs transition-all rounded-3xl font-sans ${
                        selectedBreakfast === "none"
                          ? "border-brick-600 bg-stone-950 text-white shadow-md animate-pulse-once"
                          : "border-stone-800/50 bg-stone-900/10 hover:border-stone-850"
                      }`}
                    >
                      <span className="font-semibold block text-[11px] text-white">No Culinary Plan</span>
                      <span className="text-[9px] text-stone-500 font-mono mt-0.5 block">Self-catering base</span>
                    </button>

                    {BREAKFAST_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        id={`breakfast-${opt.id}`}
                        onClick={() => setSelectedBreakfast(opt.id as any)}
                        className={`p-3 border text-left text-xs transition-all rounded-3xl ${
                          selectedBreakfast === opt.id
                            ? "border-brick-600 bg-stone-950 text-white shadow-md"
                            : "border-stone-800/50 bg-stone-900/10 hover:border-stone-850"
                        }`}
                      >
                        <div className="flex justify-between items-baseline">
                          <span className="font-semibold block text-[11px] text-white truncate">{opt.name}</span>
                        </div>
                        <span className="text-[9px] text-stone-400 font-mono mt-0.5 block">Per guest, per morning</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Guest Profile Details */}
              <div className="border-t border-stone-800/80 pt-5 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-300">Guest Contact Credentials</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="fullname" className="text-[9px] text-stone-400 uppercase tracking-widest font-mono">Full Name</label>
                    <input
                      type="text"
                      id="fullname"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-3.5 bg-stone-955 border border-stone-800 text-xs font-sans text-stone-200 focus:outline-none focus:border-brick-600 rounded-3xl placeholder-stone-650"
                      required
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="custemail" className="text-[9px] text-stone-400 uppercase tracking-widest font-mono">Email Address</label>
                    <input
                      type="email"
                      id="custemail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@domain.com"
                      className="w-full px-3.5 py-3.5 bg-stone-955 border border-stone-800 text-xs font-sans text-stone-200 focus:outline-none focus:border-brick-600 rounded-3xl placeholder-stone-650"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="custphone" className="text-[9px] text-stone-400 uppercase tracking-widest font-mono">Contact Number</label>
                    <input
                      type="tel"
                      id="custphone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+27 82 000 0000"
                      className="w-full px-3.5 py-3.5 bg-stone-955 border border-stone-800 text-xs font-sans text-stone-200 focus:outline-none focus:border-brick-600 rounded-3xl placeholder-stone-650"
                      required
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="promo" className="text-[9px] text-stone-400 uppercase tracking-widest font-mono">Promotional Code</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        id="promo"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="e.g. MONBNB2026"
                        className="flex-1 px-3.5 py-3.5 bg-stone-955 border border-stone-800 text-xs font-mono text-stone-200 focus:outline-none focus:border-brick-600 rounded-3xl placeholder-stone-650"
                      />
                      {promoApplied ? (
                        <button
                          type="button"
                          onClick={handleRemovePromo}
                          className="px-4.5 bg-stone-850 hover:bg-stone-800 text-[10px] font-mono text-rose-400 border border-stone-800 transition-colors rounded-full"
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleApplyPromo}
                          className="px-4.5 bg-stone-800 hover:bg-stone-750 text-[10px] font-mono text-brick-100 border border-stone-800 transition-colors rounded-full"
                        >
                          Apply
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {promoError && <p className="text-[10px] font-mono text-rose-400">{promoError}</p>}
                {promoApplied && (
                  <p className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Special Code Applied: {promoApplied} ({discountPercent}% Discount)
                  </p>
                )}

                <div className="space-y-1.5">
                  <label htmlFor="remarks" className="text-[9px] text-stone-400 uppercase tracking-widest font-mono">Special Architectural Preparations / Dietary Requests</label>
                  <textarea
                    id="remarks"
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g., pillow style preferences, workspace requests..."
                    className="w-full px-3.5 py-3 bg-stone-955 border border-stone-800 text-xs font-sans text-stone-200 focus:outline-none focus:border-brick-600 rounded-3xl placeholder-stone-600 resize-none"
                  />
                </div>
              </div>

              {/* Summary of Reservation Selections */}
              <div className="bg-stone-955 p-5 border border-stone-800/60 font-mono text-xs space-y-2.5 text-stone-400 rounded-3xl shadow-inner">
                <div className="flex justify-between">
                  <span>Stay Duration</span>
                  <span className="text-stone-200">{nights > 0 ? `${nights} Night${nights !== 1 ? "s" : ""}` : "Not configured"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected Suite</span>
                  <span className="text-stone-200">{activeSuite.name}</span>
                </div>
                {addRomance && (
                  <div className="flex justify-between text-stone-400">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-[#b85d3b]" /> Romance Package Setup Included</span>
                  </div>
                )}
                {selectedBreakfast !== "none" && (
                  <div className="flex justify-between">
                    <span>Morning Gastronomy Plan</span>
                    <span className="text-stone-200 capitalize">{selectedBreakfast} Plan</span>
                  </div>
                )}
                
                {nights <= 0 && (
                  <p className="text-[10px] text-center text-rose-450 font-sans italic mt-2">
                    Please configure valid dates to confirm residency availability.
                  </p>
                )}
              </div>

              {/* Inline Interactive Warning Banner */}
              {formError && (
                <div className="p-3 bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs rounded-3xl flex items-start gap-2 animate-bounce-once">
                  <ShieldCheck className="w-4 h-4 text-rose-450 mt-0.5 flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Booking CTA Button */}
              <button
                type="submit"
                id="submit-booking-action"
                disabled={isSubmitting || nights <= 0}
                className={`w-full py-4 text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 font-semibold rounded-full shadow-md ${
                  nights > 0
                    ? "bg-gradient-to-r from-brick-600 to-[#b85a36] text-white cursor-pointer hover:shadow-lg active:scale-[0.98]"
                    : "bg-stone-850 text-stone-500 cursor-not-allowed border border-stone-900"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-stone-400 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Transmit Secure Stay Request
                    <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          /* Confirmation Receipt Page */
          <motion.div
            key="booking-success"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="p-8 text-center flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-emerald-950/40 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
            </div>

            <span className="text-stone-500 font-mono text-[9px] uppercase tracking-widest">TRANSMISSION COMPLETE</span>
            <h3 className="text-2xl font-serif text-white mt-1">Residency Requested Successfully</h3>
            <p className="text-xs text-stone-400 mt-2 max-w-md mx-auto">
              Welcome, <span className="text-brick-100">{confirmedBooking.customerName}</span>. Your request for stay has been logged into the secure reservation registries of The Mon BnB.
            </p>

            {/* Premium Ticket Receipt block */}
            <div className="w-full max-w-sm bg-stone-950 p-6 border border-stone-800 text-left font-mono text-xs text-stone-400 rounded-3xl shadow-inner my-6 space-y-4">
              <div className="flex justify-between border-b border-stone-900 pb-3">
                <span className="text-stone-500 uppercase text-[9px]">ID REFERENCE</span>
                <span className="text-white font-bold tracking-wider text-sm">{confirmedBooking.bookingReference}</span>
              </div>

              <div className="grid grid-cols-2 gap-y-3 text-[11px]">
                <div>
                  <span className="text-stone-500 text-[9px] block">ACCOMMODATION</span>
                  <span className="text-stone-200 font-sans">{activeSuite.name}</span>
                </div>
                <div>
                  <span className="text-stone-500 text-[9px] block">TRAVEL COHORT</span>
                  <span className="text-stone-200">{confirmedBooking.guests} Resident{confirmedBooking.guests > 1 && "s"}</span>
                </div>
                <div>
                  <span className="text-stone-500 text-[9px] block">CHECK-IN</span>
                  <span className="text-stone-200">{confirmedBooking.checkIn}</span>
                </div>
                <div>
                  <span className="text-stone-500 text-[9px] block">DEPARTURE</span>
                  <span className="text-stone-200">{confirmedBooking.checkOut}</span>
                </div>
                <div>
                  <span className="text-stone-500 text-[9px] block">RETAILED TIME</span>
                  <span className="text-stone-200">{confirmedBooking.totalNights} night{confirmedBooking.totalNights > 1 && "s"}</span>
                </div>
                <div>
                  <span className="text-stone-500 text-[9px] block">GASTRONOMY</span>
                  <span className="text-stone-200 font-sans capitalize">{confirmedBooking.selectedBreakfastOption} Plan</span>
                </div>
              </div>

              <div className="border-t border-stone-900 pt-3 flex justify-between text-xs">
                <span>RESIDENCY STATUS</span>
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px]">INQUIRY SUBMITTED</span>
              </div>

              {confirmedBooking.promoCode && (
                <div className="text-[10px] text-emerald-400 text-right">
                  Code "{confirmedBooking.promoCode}" applied
                </div>
              )}
            </div>

            <p className="text-[11px] text-stone-400 max-w-sm">
              An invitation email has been dispatched to <span className="text-stone-200">{confirmedBooking.customerEmail}</span>. Our stay coordinators will contact you directly on <span className="text-stone-200">{confirmedBooking.customerPhone}</span> within the next 4 hours to verify credentials and arrange direct private parking directions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center mt-8">
              <a
                href={getWhatsAppUrl(confirmedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-mono tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all active:scale-95 rounded-full shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Chat via WhatsApp
              </a>
              <button
                onClick={() => setConfirmedBooking(null)}
                className="px-6 py-2.5 border border-stone-800 hover:border-stone-700 bg-transparent text-[10px] font-mono tracking-wider uppercase text-stone-300 transition-all active:scale-95 rounded-full"
              >
                Book Another Stay
              </button>
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 bg-gradient-to-r from-stone-800 to-stone-700 text-white text-[10px] font-mono tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all active:scale-95 rounded-full shadow-md"
              >
                <Printer className="w-3.5 h-3.5" /> Print Summary
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
