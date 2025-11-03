import { motion } from "framer-motion";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Videocam, NetworkCheck, ElectricalServices } from "@mui/icons-material";
import teamMember1 from "@/assets/team/team-member-1.jpg";
import teamMember2 from "@/assets/team/team-member-2.jpg";
import teamMember3 from "@/assets/team/team-member-3.jpg";
import teamMember4 from "@/assets/team/team-member-4.jpg";
import teamMember5 from "@/assets/team/team-member-5.jpg";
import teamMember6 from "@/assets/team/team-member-6.jpg";

const TeamSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-scroll effect
  useEffect(() => {
    if (!emblaApi) return;

    const intervalId = setInterval(() => {
      scrollNext();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(intervalId);
  }, [emblaApi, scrollNext]);

  const teamMembers = [
    {
      image: teamMember1,
      name: "James Kamau",
      role: "Lead CCTV Installation Specialist",
      description: "Expert in advanced surveillance systems with 10+ years of experience across Kenya",
      Icon: Videocam,
    },
    {
      image: teamMember2,
      name: "Grace Wanjiru",
      role: "Senior Network Engineer",
      description: "Specializes in enterprise networking solutions and fiber optic installations",
      Icon: NetworkCheck,
    },
    {
      image: teamMember3,
      name: "David Omondi",
      role: "Chief Electrical Engineer",
      description: "Certified electrician with expertise in industrial and residential wiring systems",
      Icon: ElectricalServices,
    },
    {
      image: teamMember4,
      name: "Sarah Njeri",
      role: "CCTV Systems Technician",
      description: "Skilled in IP camera configuration and security system maintenance",
      Icon: Videocam,
    },
    {
      image: teamMember5,
      name: "Michael Otieno",
      role: "Network Solutions Architect",
      description: "Designs scalable network infrastructure for businesses across East Africa",
      Icon: NetworkCheck,
    },
    {
      image: teamMember6,
      name: "Peter Mwangi",
      role: "Electrical Systems Engineer",
      description: "Specialist in power distribution and energy-efficient electrical solutions",
      Icon: ElectricalServices,
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

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
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our certified professionals bring decades of combined experience in CCTV, networking, and electrical solutions
            </p>
          </motion.div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="glass-card p-6 h-full hover:glow-blue transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <member.Icon className="text-primary text-2xl" />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-semibold mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
