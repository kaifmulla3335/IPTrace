# 🛰 IPTrace — IP Address Tracker

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white&style=flat-square" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green?style=flat-square" />
</p>

A sleek, production-grade IP & domain tracker with real-time geolocation, an interactive dark map, search history, and VPN/proxy detection — built with React, Tailwind CSS, Leaflet, and Framer Motion.

---

## ✨ Features

- 🔍 **IP & domain lookup** — query any IPv4/IPv6 address or hostname
- 🗺 **Interactive dark map** — Leaflet map with smooth fly-to animations and a custom pin
- 🕰 **Search history** — last 8 lookups persisted in `localStorage`
- 🛡 **Security flags** — VPN / Proxy / Tor / Datacenter detection
- 📡 **ASN & network info** — ISP, ASN, and advanced network details
- 📋 **One-click copy** — copy the current IP to clipboard
- 📍 **Detect my location** — browser Geolocation API fallback
- ⚡ **Skeleton loaders** — polished loading states via Framer Motion
- 🚀 **Vercel-ready** — `vercel.json` with SPA rewrites and asset caching included

---

## 🖥 Preview

> Search an IP → get cards with location, ISP, timezone, and security flags → see the location pinned on a dark Leaflet map.

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [Leaflet](https://leafletjs.com) + [react-leaflet](https://react-leaflet.js.org) | Interactive map |
| [react-hot-toast](https://react-hot-toast.com) | Toast notifications |
| [ipapi.is](https://ipapi.is) | Free IP geolocation API |

---

## 📁 Project Structure

```
ip-tracker/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BackgroundOrbs.jsx   # Decorative animated background blobs
│   │   ├── ErrorBanner.jsx      # Dismissible error display
│   │   ├── Footer.jsx           # Footer with tech-stack badges
│   │   ├── HeroHeadline.jsx     # Animated hero title
│   │   ├── icons.jsx            # SVG icon components
│   │   ├── InfoCard.jsx         # Reusable animated stat card
│   │   ├── IPCards.jsx          # IP data card grid (IP, location, timezone, ISP)
│   │   ├── Loader.jsx           # Skeleton + spinner loader
│   │   ├── MapView.jsx          # Dark Leaflet map with custom marker
│   │   ├── Navbar.jsx           # Top navigation bar
│   │   └── SearchBar.jsx        # Search input with history dropdown
│   ├── constants/
│   │   └── index.js             # App-wide constants (API base, limits, accents)
│   ├── hooks/
│   │   └── useIPTracker.js      # Fetch logic, state, and history management
│   ├── utils/
│   │   └── index.js             # localStorage helpers, location formatter
│   ├── App.jsx                  # Root layout and page composition
│   ├── index.css                # Global styles & Tailwind directives
│   └── main.jsx                 # React entry point
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json                  # Vercel SPA rewrites + asset caching
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install & run locally

```bash
# Clone
git clone https://github.com/kaifmulla3335/ip-tracker.git
cd ip-tracker

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

### Option 1 — Vercel CLI (recommended)

```bash
npm i -g vercel
vercel
```

Vercel auto-detects Vite. The included `vercel.json` handles SPA routing and sets long-lived cache headers for static assets.

### Option 2 — Vercel Dashboard (GitHub import)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) → **Import Repository**.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy** ✅

### Other platforms (Netlify, GitHub Pages, etc.)

```bash
npm run build   # output in dist/
```

Upload or configure the `dist/` directory. Make sure your host is configured to serve `index.html` for all routes (SPA fallback).

---

## ⚙️ Configuration

All app-wide constants live in `src/constants/index.js`:

```js
export const MAX_HISTORY    = 8;                       // max saved search entries
export const HISTORY_KEY    = 'iptrace_history';       // localStorage key
export const COPY_RESET_DELAY = 2000;                  // ms before "Copied!" resets
export const API_BASE       = 'https://api.ipapi.is';  // IP data API endpoint
```

The project uses the free tier of [ipapi.is](https://ipapi.is) — no API key is required.

---

## 🗺 How It Works

1. On load, `useIPTracker` calls the API with no query to fetch the visitor's own IP.
2. The user can type any IP address or domain into the `SearchBar` and submit.
3. Results populate the `IPCards` grid (IP, location, timezone, ISP + security flags).
4. Coordinates from the response fly-to the `MapView` map and drop a custom pin.
5. Each successful lookup is saved to `localStorage` (up to 8 entries) and shown in a history dropdown.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

MIT © [Mohammadkaif Mulla](https://github.com/kaifmulla3335)
