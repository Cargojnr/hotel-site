import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });


  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-card relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
{/* Google Map Embed */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254165.67285717133!2d-0.5991633044619165!3d5.5166583167011165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbb6ad91d1e23%3A0x8a4832939ab8e34d!2sKamp%20David%20Gym!5e0!3m2!1sen!2sgh!4v1769083844291!5m2!1sen!2sgh" 
                 width="100%"
                  height="100%"
                 style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                  title={` Hotel"Location"`}
                />
              </div>

              {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-overline text-primary mb-4"
            >
              How to Find Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-headline mb-6"
            >
              OUR{" "}
              <span className="text-gold-gradient italic">Location</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-body-lg text-muted-foreground"
            >
             {/* Quick Info */}
              <div className="glass-card p-6">
                <h4 className="font-semibold text-foreground mb-4">Getting Here</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">By Car:</strong> Free parking available on-site with over 200 spaces.
                  </p>
                  <p>
                    <strong className="text-foreground">By Public Transit:</strong> 5-minute walk from Central Station (Lines 1, 2, 3).
                  </p>
                  <p>
                    <strong className="text-foreground">By Bike:</strong> Secure bike storage available for members.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 pt-8 border-t border-border"
            >
              <p className="font-display text-xl italic text-foreground mb-2">
                "Hospitality is not a transaction—it's a relationship."
              </p>
              <p className="text-caption text-muted-foreground">
                — The NeighbourStay Team
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
   );
}