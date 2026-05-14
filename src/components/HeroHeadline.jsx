import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TEXT = 'REAL-TIME IP INTELLIGENCE';

function TypewriterBadge() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(TEXT.slice(0, i + 1));
      i++;
      if (i === TEXT.length) { clearInterval(interval); setDone(true); }
    }, 55);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-1.5 glass border border-cyan-400/15 rounded-full px-2.5 py-1 md:px-4 md:py-1.5 mb-4"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
      <span className="text-[7px] md:text-xs text-cyan-400 font-mono tracking-wider md:tracking-widest">
        {displayed}
        {!done && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="inline-block w-[2px] h-2.5 bg-cyan-400 ml-0.5 align-middle"
          />
        )}
      </span>
    </motion.div>
  );
}

function HeroHeadline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <TypewriterBadge />

      <h1
        className="font-display font-extrabold leading-tight tracking-tight"
        style={{ fontSize: 'clamp(1.75rem, 9vw, 5rem)' }}
      >
        <span className="gradient-text">Trace</span>
        <span className="text-white"> any IP instantly.</span>
      </h1>

      {/* Single line on mobile using nowrap + clamp font */}
      <p
        className="text-slate-400 mx-auto mt-3 whitespace-nowrap overflow-hidden text-ellipsis px-2"
        style={{ fontSize: 'clamp(0.6rem, 3vw, 1rem)' }}
      >
        Geolocation · ISP · ASN · VPN detection · Interactive map
      </p>
    </motion.div>
  );
}

export default HeroHeadline;