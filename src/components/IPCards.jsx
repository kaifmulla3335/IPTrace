import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InfoCard from './InfoCard';
import { ShieldIcon, CopyIcon, CheckIcon } from './icons';
import { formatLocation } from '../utils';

function DetailRow({ label, value, mono }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-white/4 last:border-0">
      <span className="text-xs text-slate-500 uppercase tracking-widest font-display">{label}</span>
      <span className={`text-sm text-slate-200 ${mono ? 'font-mono text-cyan-300' : ''}`}>{value || '—'}</span>
    </div>
  );
}

function IPCards({ ipData, copied, onCopy }) {
  const [showDetails, setShowDetails] = useState(false);
  const isVPN = ipData?.is_vpn || ipData?.is_proxy || ipData?.is_tor;

  return (
    <motion.div
      key={ipData.ip}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-6"
    >
      {isVPN && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 rounded-full px-4 py-1.5 mb-4"
        >
          <ShieldIcon />
          <span className="text-xs text-amber-300 font-mono">VPN / Proxy detected</span>
        </motion.div>
      )}

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">

        {/* IP — Copy button: icon only on mobile, icon+text on md+ */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="relative h-full"
        >
          <InfoCard
            title="IP Address" value={ipData.ip} accent="cyan" mono
            badge={ipData.is_bogon ? 'Private' : ipData.type || null}
          />
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onCopy}
            className={`absolute top-3 right-3 flex items-center gap-1 rounded-lg font-semibold transition-all duration-200 z-10
              p-1.5 md:px-2.5 md:py-1.5
              ${copied
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-white/6 text-slate-400 hover:text-white border border-white/8 hover:border-white/20'
              }`}
          >
            {copied ? (
              <>
                <CheckIcon />
                <span className="hidden md:inline text-xs">Copied</span>
              </>
            ) : (
              <>
                <CopyIcon />
                <span className="hidden md:inline text-xs">Copy</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Location */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="h-full">
          <InfoCard title="Location" value={formatLocation(ipData.location)} accent="violet" badge={ipData.location?.country_code} />
        </motion.div>

        {/* Timezone */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="h-full">
          <InfoCard title="Timezone" value={ipData.location?.timezone} accent="blue" mono />
        </motion.div>

        {/* ISP */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="h-full">
          <InfoCard title="ISP / Org" value={ipData.company?.name || ipData.asn?.org} accent="emerald" />
        </motion.div>
      </div>

      {/* Advanced Details */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-4">
        <button
          onClick={() => setShowDetails((v) => !v)}
          className="flex items-center gap-2 mx-auto text-xs text-slate-500 hover:text-cyan-400 transition-colors font-mono tracking-widest uppercase py-2 px-4"
        >
          <span>{showDetails ? '▲' : '▼'}</span>
          {showDetails ? 'Hide' : 'Show'} advanced details
        </button>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="glass rounded-2xl p-4 border border-white/6">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-display mb-3">Network</p>
                  <DetailRow label="ASN"        value={ipData.asn?.asn ? `AS${ipData.asn.asn}` : null} mono />
                  <DetailRow label="ASN Org"    value={ipData.asn?.org} />
                  <DetailRow label="ASN Domain" value={ipData.asn?.domain} mono />
                  <DetailRow label="IP Type"    value={ipData.type} />
                  <DetailRow label="RIR"        value={ipData.rir} />
                </div>
                <div className="glass rounded-2xl p-4 border border-white/6">
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-display mb-3">Security Flags</p>
                  <DetailRow label="VPN"         value={ipData.is_vpn        ? '🔴 Yes' : '✅ No'} />
                  <DetailRow label="Proxy"       value={ipData.is_proxy      ? '🔴 Yes' : '✅ No'} />
                  <DetailRow label="Tor Exit"    value={ipData.is_tor        ? '🔴 Yes' : '✅ No'} />
                  <DetailRow label="Data Center" value={ipData.is_datacenter ? '⚠️ Yes' : '✅ No'} />
                  <DetailRow label="Bogon"       value={ipData.is_bogon      ? '⚠️ Yes' : '✅ No'} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default IPCards;