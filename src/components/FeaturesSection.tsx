import { motion } from "framer-motion";
import { Zap, Palette, Bell, Shield, Smartphone, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Villámgyors",
    description: "Azonnali betöltés és smooth animációk. Nincs több várakozás.",
  },
  {
    icon: Palette,
    title: "Modern dizájn",
    description: "Letisztult, szemet gyönyörködtető felület, ami öröm használni.",
  },
  {
    icon: Bell,
    title: "Okos értesítések",
    description: "Értesülj azonnal az új jegyekről, házi feladatokról és üzenetekről.",
  },
  {
    icon: Shield,
    title: "Biztonságos",
    description: "Adataid védve vannak. Nem tárolunk semmit a szervereinken.",
  },
  {
    icon: Smartphone,
    title: "Offline mód",
    description: "Nézd meg az adataidat internet nélkül is, bárhol, bármikor.",
  },
  {
    icon: Clock,
    title: "Időtakarékos",
    description: "Minden fontos információ egy helyen, pár kattintásra.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-4">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,hsl(173_80%_50%/0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Miért <span className="gradient-text">reKréta</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minden, amire szükséged van egy helyen, a lehető legjobb élménnyel.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,hsl(173_80%_50%/0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
