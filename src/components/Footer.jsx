function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative px-6 py-10">
        {/* Subtle bg orbs */}
        <div
          className="absolute -bottom-10 left-1/4 w-48 h-48 rounded-full blur-[80px] opacity-10"
          style={{
            background: "radial-gradient(circle, #22d3ee, transparent)",
          }}
        />
        <div
          className="absolute -bottom-10 right-1/4 w-48 h-48 rounded-full blur-[80px] opacity-10"
          style={{
            background: "radial-gradient(circle, #8b5cf6, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 relative z-10">
          {/* Copyright */}
          <p className="text-xs font-serif font-semibold text-slate-400 tracking-wide">
            © {year} <span className="gradient-text font-bold">IPTrace</span> —
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
