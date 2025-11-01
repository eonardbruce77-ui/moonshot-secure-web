import { motion } from "framer-motion";
import {
  Videocam,
  NotificationsActive,
  SpeakerPhone,
  Store,
  Build,
  Router,
  ElectricalServices,
  MoreHoriz,
} from "@mui/icons-material";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      Icon: Videocam,
      title: "CCTV Cameras",
      description: "24/7 surveillance solutions for homes and businesses",
      details: "High-definition cameras, remote monitoring, night vision capabilities, and cloud storage options.",
    },
    {
      Icon: NotificationsActive,
      title: "Alarm Systems",
      description: "Advanced intrusion detection and alert systems",
      details: "Motion sensors, door/window contacts, panic buttons, and instant mobile notifications.",
    },
    {
      Icon: SpeakerPhone,
      title: "Intercom Systems",
      description: "Modern communication systems for buildings and compounds",
      details: "Video intercoms, access control integration, and multi-unit connectivity.",
    },
    {
      Icon: Store,
      title: "Product Sales",
      description: "Quality tech products and security equipment",
      details: "Authorized dealer of leading security brands with warranty and support.",
    },
    {
      Icon: Build,
      title: "Maintenance Services",
      description: "Regular servicing and technical support",
      details: "Preventive maintenance, emergency repairs, system upgrades, and 24/7 technical support.",
    },
    {
      Icon: Router,
      title: "Networking",
      description: "Professional network setup and infrastructure",
      details: "Wi-Fi installation, structured cabling, network security, and router configuration.",
    },
    {
      Icon: ElectricalServices,
      title: "Electrical Wiring",
      description: "Complete electrical installations and repairs",
      details: "Residential and commercial wiring, panel upgrades, lighting installation, and power solutions.",
    },
    {
      Icon: MoreHoriz,
      title: "And More...",
      description: "Custom solutions tailored to your needs",
      details: "Smart home automation, solar systems, access control, and specialized security solutions.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology and security solutions for every need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full group hover:glow-blue transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.Icon className="text-primary text-3xl" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
