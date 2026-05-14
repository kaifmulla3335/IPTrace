import { motion } from 'framer-motion';

function InfoCard({ title, value, accent = 'cyan', badge, onClick, mono }) {
  const accentMap = {
    cyan:    'from-cyan-500/10 to-transparent border-cyan-400/10 hover:border-cyan-400/25',
    violet:  'from-violet-500/10 to-transparent border-violet-400/10 hover:border-violet-400/25',
    blue:    'from-blue-500/10 to-transparent border-blue-400/10 hover:border-blue-400/25',
    emerald: 'from-emerald-500/10 to-transparent border-emerald-400/10 hover:border-emerald-400/25',
  };
  const dotMap = {
    cyan: 'bg-cyan-400', violet: 'bg-violet-400',
    blue: 'bg-blue-400', emerald: 'bg-emerald-400',
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br ${accentMap[accent]} border transition-all duration-300 ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="relative z-10">
        {/* Title */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotMap[accent]}`} />
            <p className="text-xs text-slate-500 tracking-widest uppercase font-display font-semibold">
              {title}
            </p>
          </div>
          {badge && (
            <span className="text-[10px] bg-white/5 border border-white/8 text-slate-400 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>

        {/* Value */}
        <h2 className={`text-white text-base font-semibold break-words leading-snug ${mono ? 'font-mono' : 'font-display'}`}>
          {value || '—'}
        </h2>
      </div>
    </motion.div>
  );
}

export default InfoCard;