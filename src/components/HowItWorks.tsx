import { motion } from "framer-motion";
import { Call, Assessment, Construction, SupportAgent } from "@mui/icons-material";

const HowItWorks = () => {
  const steps = [
    {
      Icon: Call,
      title: "Contact Us",
      description: "Reach out via phone, email, or our contact form to discuss your needs",
      step: "01",
    },
    {
      Icon: Assessment,
      title: "Consultation",
      description: "We assess your requirements and provide expert recommendations",
      step: "02",
    },
    {
      Icon: Construction,
      title: "Installation",
      description: "Professional setup and installation by certified technicians",
      step: "03",
    },
    {
      Icon: SupportAgent,
      title: "Support",
      description: "Ongoing maintenance and 24/7 technical support for your peace of mind",
      step: "04",
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple and transparent process from consultation to completion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="glass-card p-6 sm:p-8 text-center h-full hover:glow-blue transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 mt-4">
                  <step.Icon className="text-primary text-4xl" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
