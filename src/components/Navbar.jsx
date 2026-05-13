import { motion } from 'framer-motion';
import { CrosshairIcon } from './icons';

function Navbar({ onDetect }) {
  return (
    <nav className="max-w-7xl mx-auto flex justify-between items-center relative z-20 mb-16">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
          <CrosshairIcon />
        </div>
        <span className="text-lg font-display font-bold tracking-tight">IPTrace</span>
      </div>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onDetect}
        className="flex items-center gap-2 glass border border-white/8 hover:border-cyan-400/30 transition-all duration-300 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white"
      >
        <CrosshairIcon />
        <span className="hidden sm:inline">Detect My Location</span>
        <span className="sm:hidden">Detect</span>
      </motion.button>
    </nav>
  );
}

export default Navbar;