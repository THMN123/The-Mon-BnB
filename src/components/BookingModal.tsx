import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import BookingForm from "./BookingForm";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSuiteId: string;
}

export default function BookingModal({ isOpen, onClose, initialSuiteId }: BookingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blur Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-950/80 backdrop-blur-md"
          />

          {/* Modal Content container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl z-10 custom-scrollbar"
          >
            {/* Elegant Floating Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-50 p-2 text-stone-400 hover:text-white bg-stone-950/60 hover:bg-stone-950/90 transition-all rounded-full focus:outline-none border border-stone-800/60 backdrop-blur-xs hover:scale-105 active:scale-95"
              aria-label="Close booking process"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Render full customized interactive booking form */}
            <BookingForm 
              initialSuiteId={initialSuiteId}
              onBookingConfirmed={(details) => {
                console.log("Suite Booking complete", details);
                // Keep modal open so they can see confirmation screen and print if needed,
                // but clicking "Book Another Stay" resets form inside.
              }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
