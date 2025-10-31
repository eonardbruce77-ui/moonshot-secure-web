import { motion } from "framer-motion";
import { NightsStay } from "@mui/icons-material";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2"
    >
      <div className="relative">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-secondary/20 blur-md" />
        </motion.div>
        <NightsStay className="text-secondary relative z-10 text-3xl sm:text-4xl" style={{ filter: "drop-shadow(0 0 8px hsl(var(--secondary)))" }} />
      </div>
      <div>
        <span className="text-gradient font-bold text-lg sm:text-xl">New Moon</span>
        <div className="text-xs text-muted-foreground -mt-1">Entrepreneur</div>
      </div>
    </motion.div>
  );
};

export default Logo;
