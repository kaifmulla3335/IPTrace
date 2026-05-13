import { motion } from "framer-motion";

function InfoCard({
  title,
  value,
  icon,
  accent = "cyan",
  badge,
  onClick,
  mono,
}) {
  const accentMap = {
    cyan: "from-cyan-500/10 to-transparent border-cyan-400/10 hover:border-cyan-400/25",
    violet:
      "from-violet-500/10 to-transparent border-violet-400/10 hover:border-violet-400/25",
    blue: "from-blue-500/10 to-transparent border-blue-400/10 hover:border-blue-400/25",
    emerald:
      "from-emerald-500/10 to-transparent border-emerald-400/10 hover:border-emerald-400/25",
  };

  const dotMap = {
    cyan: "bg-cyan-400",
    violet: "bg-violet-400",
    blue: "bg-blue-400",
    emerald: "bg-emerald-400",
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br ${accentMap[accent]} border transition-all duration-300 min-h-[100px] flex flex-col justify-between ${onClick ? "cursor-pointer" : ""}`}
    >
      {/* Subtle bg glow */}
      <div
        className={`absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-20 ${dotMap[accent].replace("bg-", "bg-")}`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${dotMap[accent]}`} />
            <p className="text-[10px] md:text-xs text-slate-500 tracking-[0.15em] uppercase font-display font-semibold">
              {title}
            </p>
          </div>
          {badge && (
            <span className="text-[10px] bg-white/5 border border-white/8 text-slate-400 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
          {icon && <span className="text-slate-500 text-base">{icon}</span>}
        </div>

        <h2
          className={`text-white text-sm md:text-base font-semibold break-words leading-snug ${mono ? "font-mono" : "font-display"}`}
        >
          {value || "—"}
        </h2>
      </div>
    </motion.div>
  );
}

export default InfoCard;
