import { motion } from "framer-motion";
import { FormatQuote, Star, AccountCircle, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useEffect, useState } from "react";

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

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

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isAutoScrolling) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    let scrollPosition = 0;

    const scroll = () => {
      if (!container) return;
      scrollPosition += 1;
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, [isAutoScrolling]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    setIsAutoScrolling(false);
    const scrollAmount = 500;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
    
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
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
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from satisfied customers across Kenya
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Scroll Controls */}
          <button
            onClick={() => handleManualScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 glow-blue"
            aria-label="Scroll left"
          >
            <ChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => handleManualScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary/20 hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 glow-blue"
            aria-label="Scroll right"
          >
            <ChevronRight className="text-2xl" />
          </button>

          <div ref={scrollContainerRef} className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 lg:gap-8 px-4" style={{ width: "max-content" }}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-[90vw] sm:w-[450px] md:w-[500px] flex-shrink-0"
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
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
