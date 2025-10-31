import { motion } from "framer-motion";
import { WhatsApp } from "@mui/icons-material";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.link/37uvbj";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group glow-orange"
      aria-label="Contact us on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsApp className="text-white text-3xl sm:text-4xl" />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
