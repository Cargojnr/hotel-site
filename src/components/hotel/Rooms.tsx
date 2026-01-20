import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const rooms = [
  {
    name: "The Classic Suite",
    description: "Timeless elegance with modern comfort",
    price: "From $299/night",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80",
    features: ["King Bed", "City View", "40 sqm"],
  },
  {
    name: "The Grand Room",
    description: "Spacious luxury for the discerning traveler",
    price: "From $459/night",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80",
    features: ["King Bed", "Panoramic View", "65 sqm"],
  },
  {
    name: "The Penthouse",
    description: "Ultimate indulgence with private terrace",
    price: "From $899/night",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&auto=format&fit=crop&q=80",
    features: ["Master Suite", "Private Terrace", "120 sqm"],
  },
];

export default function Rooms() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="rooms"
      className="section-padding bg-card relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header - Right Aligned for Contrast */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-overline text-primary mb-4">Accommodations</p>
            <h2 className="font-display text-headline">
              Rooms designed for{" "}
              <span className="text-gold-gradient italic">rest</span>
            </h2>
          </motion.div>
          <motion.a
            href="#book"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="btn-outline inline-flex items-center gap-2 self-start lg:self-end"
          >
            View All Rooms
            <ArrowUpRight size={18} />
          </motion.a>
        </div>

        {/* Room Cards - Asymmetric Layout */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {rooms.map((room, i) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative ${i === 1 ? "lg:-mt-8" : ""}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                <motion.img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Features Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 text-xs bg-background/80 backdrop-blur-sm rounded-full text-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-overline text-muted-foreground mb-2">
                  {room.price}
                </p>
                <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                  {room.name}
                </h3>
                <p className="text-body text-muted-foreground">
                  {room.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
