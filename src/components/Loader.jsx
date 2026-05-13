import { motion } from "framer-motion";

function SkeletonCard() {
  return (
    <div className="rounded-2xl p-5 border border-white/5 bg-white/3 overflow-hidden relative">
      <div className="h-3 w-20 bg-white/8 rounded-full mb-4 animate-pulse" />
      <div className="h-6 w-32 bg-white/8 rounded-full animate-pulse" />
      {/* Shimmer */}
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
        }}
      />
    </div>
  );
}

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-10"
    >
      {/* Spinner + text */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 animate-spin" />
          <div
            className="absolute inset-1 rounded-full border border-transparent border-t-violet-400 animate-spin"
            style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
          />
        </div>
        <p className="text-slate-500 text-sm font-mono animate-pulse">
          Tracing route...
        </p>
      </div>

      {/* Skeleton cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <SkeletonCard />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Loader;
