import { motion } from "framer-motion";
import { CheckCircle } from "@mui/icons-material";

const WhyChooseUs = () => {
  const benefits = [
    "Expert Installation & Support",
    "Quality Products & Equipment",
    "Affordable Pricing",
    "24/7 Customer Service",
    "Licensed & Certified Technicians",
    "Warranty on All Services",
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">New Moon Entrepreneur</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for technology and security solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 flex items-center gap-4 hover:glow-blue transition-all duration-300 hover:scale-105"
            >
              <CheckCircle className="text-primary text-3xl flex-shrink-0" />
              <span className="text-base sm:text-lg font-medium">{benefit}</span>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
