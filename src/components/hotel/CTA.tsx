import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { hotel } from "@/data/hotel";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="book"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&auto=format&fit=crop&q=80"
          alt="Hotel terrace view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-overline text-primary mb-6"
        >
          Ready to Experience Luxury?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-headline lg:text-5xl mb-6"
        >
          Your perfect stay
          <br />
          <span className="text-gold-gradient italic">awaits</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-body-lg text-muted-foreground max-w-xl mx-auto mb-10"
        >
          Book directly for the best rates and exclusive perks. Experience the
          difference of personalized hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#" className="btn-primary group inline-flex items-center gap-3">
            Reserve Your Room
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a href={`tel:${hotel.phone.main}`} className="btn-outline">
            Contact Us
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border/50"
        >
          {["Best Price Guarantee", "Free Cancellation", "Instant Confirmation"].map(
            (badge) => (
              <p
                key={badge}
                className="text-caption text-muted-foreground flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                {badge}
              </p>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
