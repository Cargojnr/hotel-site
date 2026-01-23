import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hotel } from "@/data/hotel";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-card relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80"
                alt="Hotel lobby"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-overline text-primary mb-4"
            >
              Our Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-headline mb-6"
            >
              A legacy of{" "}
              <span className="text-gold-gradient italic">hospitality</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-body-lg text-muted-foreground"
            >
              <p>
                For over fifteen years, we've been more than just a place to
                stay—we've been a sanctuary for travelers seeking authentic
                experiences and genuine warmth.
              </p>
              <p>
                Our philosophy is simple: treat every guest as family. From the
                moment you arrive, you'll feel the difference that comes from
                a team that truly cares about your comfort and wellbeing.
              </p>
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
                — The {hotel.name} Team
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
