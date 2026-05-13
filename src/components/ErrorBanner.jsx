import { motion, AnimatePresence } from "framer-motion";

function ErrorBanner({ message, onDismiss }) {
  if (!message) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="mt-6 max-w-3xl mx-auto flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-2xl px-5 py-4"
      >
        <span className="text-red-400 text-lg">⚠</span>
        <p className="text-red-300 text-sm flex-1">{message}</p>
        <button
          onClick={onDismiss}
          className="text-red-400 hover:text-white transition-colors text-lg leading-none"
        >
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

export default ErrorBanner;
