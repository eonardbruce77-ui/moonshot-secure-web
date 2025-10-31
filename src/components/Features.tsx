import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { EmojiEvents, DoneAll, ThumbUp, LocationOn } from "@mui/icons-material";

const Features = () => {
  const stats = [
    { Icon: EmojiEvents, value: 10, suffix: "+", label: "Years Experience" },
    { Icon: DoneAll, value: 500, suffix: "+", label: "Projects Completed" },
    { Icon: ThumbUp, value: 450, suffix: "+", label: "Happy Clients" },
    { Icon: LocationOn, value: 20, suffix: "+", label: "Service Areas" },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Hundreds</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that speak for our expertise and commitment
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ Icon, value, suffix, label, index }: any) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 sm:p-8 text-center hover:glow-blue transition-all duration-300 hover:scale-105"
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="text-primary text-3xl sm:text-4xl" />
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export default Features;
