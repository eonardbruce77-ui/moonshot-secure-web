import { motion } from "framer-motion";
import { FormatQuote, Star, AccountCircle } from "@mui/icons-material";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Mutua",
      role: "Business Owner",
      rating: 5,
      text: "Excellent service! The CCTV system they installed for my shop has given me peace of mind. Professional team and affordable prices.",
    },
    {
      name: "Sarah Wanjiku",
      role: "Homeowner",
      rating: 5,
      text: "Very impressed with their networking services. They set up WiFi throughout my home and the signal is strong everywhere. Highly recommend!",
    },
    {
      name: "David Omondi",
      role: "Property Manager",
      rating: 5,
      text: "We've used New Moon Entrepreneur for multiple properties. Their alarm systems are top-notch and their response time is excellent.",
    },
    {
      name: "Grace Njeri",
      role: "Restaurant Owner",
      rating: 5,
      text: "From consultation to installation, everything was smooth. The intercom system they installed works perfectly for our multi-floor restaurant.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
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
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from satisfied customers across Kenya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full hover:glow-blue transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 sm:p-8">
                  <FormatQuote className="text-primary text-5xl mb-4 opacity-50" />
                  
                  <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-secondary text-xl" />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <AccountCircle className="text-primary text-5xl" />
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
