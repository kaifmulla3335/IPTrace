import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon, XIcon, HistoryIcon } from './icons';

function SearchBar({ fetchIPData, history, clearHistory }) {
  const [input, setInput]     = useState('');
  const [focused, setFocused] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    fetchIPData(input);
    setInput('');
    setFocused(false);
  }

  const showDropdown = focused && history.length > 0 && !input;

  return (
    <div className="w-full mt-6 relative z-30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-3xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="relative">
          <div
            className="relative flex items-center glass rounded-2xl px-3 py-2.5 md:px-4 md:py-3 transition-all duration-300"
            style={{
              border: '1px solid',
              borderColor: focused ? 'rgba(34,211,238,0.25)' : 'rgba(255,255,255,0.07)',
              boxShadow: focused ? '0 0 30px rgba(34,211,238,0.1)' : 'none',
            }}
          >
            <span className="text-slate-400 shrink-0 mr-2">
              <SearchIcon />
            </span>

            <input
              type="text"
              placeholder="IP address or domain..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 150)}
              className="flex-1 min-w-0 bg-transparent text-white text-sm md:text-base placeholder:text-slate-500 outline-none font-body"
            />

            {input && (
              <button type="button" onClick={() => setInput('')} className="text-slate-500 hover:text-white shrink-0 mx-1">
                <XIcon />
              </button>
            )}

            <motion.button
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="shrink-0 bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-xl font-semibold font-display ml-2
                text-xs px-3 py-2 md:text-sm md:px-5 md:py-2.5"
            >
              Track
            </motion.button>
          </div>
        </form>

        {/* History Dropdown */}
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full mt-2 w-full left-0 glass rounded-2xl overflow-hidden border border-white/7 shadow-2xl"
            >
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
                <span className="text-xs text-slate-500 font-display tracking-wider uppercase">Recent</span>
                <button onClick={clearHistory} className="text-xs text-slate-500 hover:text-cyan-400 transition-colors">Clear</button>
              </div>
              {history.map((item, i) => (
                <motion.button
                  key={item.ip + i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => { fetchIPData(item.ip); setFocused(false); }}
                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-left"
                >
                  <HistoryIcon />
                  <span className="font-mono text-sm text-cyan-400">{item.ip}</span>
                  <span className="text-xs text-slate-500 ml-auto">{item.city}, {item.country}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default SearchBar;