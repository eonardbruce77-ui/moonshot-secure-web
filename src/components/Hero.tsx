import { motion } from "framer-motion";
import { ArrowForward, TouchApp, Videocam, Security, Cable, ElectricalServices } from "@mui/icons-material";
import { Button } from "@/components/ui/button";
import electricianHero from "@/assets/electrician-hero.jpg";

const Hero = () => {
  const floatingIcons = [
    { Icon: Videocam, delay: 0, x: "10%", y: "20%" },
    { Icon: Security, delay: 0.2, x: "80%", y: "15%" },
    { Icon: Cable, delay: 0.4, x: "15%", y: "70%" },
    { Icon: ElectricalServices, delay: 0.6, x: "85%", y: "65%" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay, duration: 0.8 }}
          className="absolute hidden md:block"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay }}
          >
            <Icon className="text-primary" style={{ fontSize: 60 }} />
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Secure Your Future with{" "}
              <span className="text-gradient">Smart Technology Solutions</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12"
          >
            Professional CCTV, Networking, Electrical & Security Systems Installation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              variant="secondary"
              className="glow-orange text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              Get Free Quote
              <ArrowForward className="ml-2" />
            </Button>
            <Button
              onClick={() => scrollToSection("#services")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              Our Services
              <TouchApp className="ml-2" />
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 sm:mt-16 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Security className="text-primary" />
              <span>Licensed & Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Quality Guaranteed</span>
            </div>
          </motion.div>
          </div>

          {/* Electrician Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl z-0"
              />
              <img
                src={electricianHero}
                alt="Professional electrician from New Moon Entrepreneur"
                className="relative z-20 w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl shadow-lg hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <Security className="text-primary text-3xl" />
                <div>
                  <div className="text-sm font-semibold">Certified</div>
                  <div className="text-xs text-muted-foreground">Professionals</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-6 -right-6 glass-card p-4 rounded-xl shadow-lg hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="text-sm font-semibold">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
