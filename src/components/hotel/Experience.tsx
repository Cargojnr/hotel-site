import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Clock, MapPin, Heart } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Elegant Rooms",
    description:
      "Thoughtfully designed spaces with premium amenities for the perfect stay.",
  },
  {
    icon: Clock,
    title: "24/7 Concierge",
    description:
      "Round-the-clock service ensuring every need is met with care.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Strategically positioned for easy access to local attractions.",
  },
  {
    icon: Heart,
    title: "Trusted Comfort",
    description:
      "A home away from home, where every guest feels valued.",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--muted))_0%,transparent_50%)] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-overline text-primary mb-4"
          >
            The Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-headline"
          >
            Crafted for{" "}
            <span className="text-gold-gradient italic">memorable</span>
            <br />
            moments
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-body-lg text-muted-foreground mt-6"
          >
            Every detail is designed to exceed expectations, creating an
            experience that guests remember long after checkout.
          </motion.p>
        </div>

        {/* Feature Cards - Staggered Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group card-luxury p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
