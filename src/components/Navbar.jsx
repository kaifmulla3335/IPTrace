import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CrosshairIcon } from './icons';

function Navbar({ onDetect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center relative z-20 mb-8">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/25 shrink-0">
          <CrosshairIcon />
        </div>
        <span className="text-base font-display font-bold tracking-tight">IPTrace</span>
      </div>

      {/* Detect button — icon only on mobile, full text on md+ */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onDetect}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className="relative flex items-center gap-2 glass border border-white/8 hover:border-cyan-400/30 transition-all duration-300 rounded-xl text-slate-300 hover:text-white overflow-hidden
          p-2 md:px-4 md:py-2.5"
      >
        <CrosshairIcon />

        {/* Always visible on md+ */}
        <span className="hidden md:inline text-sm font-medium whitespace-nowrap">
          Detect My Location
        </span>

        {/* Hover tooltip on small screens */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.15 }}
              className="md:hidden absolute right-full mr-2 bg-slate-800 border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl"
            >
              Detect My Location
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </nav>
  );
}

export default Navbar;