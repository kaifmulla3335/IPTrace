import { motion } from "framer-motion";

function HeroHeadline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="inline-flex items-center gap-2 glass border border-cyan-400/15 rounded-full px-4 py-1.5 mb-6">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-xs text-cyan-400 font-mono tracking-widest uppercase">
          Real-time IP intelligence
        </span>
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold leading-tight tracking-tight">
        <span className="gradient-text">Trace</span>
        <span className="text-white"> any IP instantly.</span>
      </h1>

      <p className="text-slate-400 max-w-xl mx-auto mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
        Geolocation · ISP · ASN · VPN detection · Interactive map
      </p>
    </motion.div>
  );
}

export default HeroHeadline;
