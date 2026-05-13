# 🛰 IPTrace — Premium IP Address Tracker

A sleek, production-grade IP tracker built with React, Tailwind CSS, Leaflet & Framer Motion.

## ✨ Features

- 🔍 **Search any IP or domain** — real-time geolocation data
- 🗺 **Dark interactive map** — custom marker, smooth fly-to animations
- 🕰 **Search history** — last 8 lookups saved in localStorage
- 🛡 **Security flags** — VPN / Proxy / Tor / Datacenter detection
- 📡 **ASN & Network info** — expandable advanced details panel
- 📋 **Copy to clipboard** — one-click IP copy
- 📍 **Detect My Location** — browser GPS fallback
- ⚡ **Skeleton loaders** — polished loading states
- 🚀 **Vercel ready** — `vercel.json` included

## 🚀 Local Setup

```bash
npm install
npm run dev
```

## 🌐 Deploy on Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this project to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repo
4. Framework: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output dir: `dist`
7. Click **Deploy** ✅

## 🔧 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Styling |
| Framer Motion | Animations |
| Leaflet + react-leaflet | Interactive map |
| ipapi.is | Free IP data API |

## 📁 Structure

```
src/
├── components/
│   ├── SearchBar.jsx   # Search with history dropdown
│   ├── InfoCard.jsx    # Animated stat cards
│   ├── MapView.jsx     # Dark map with custom pin
│   ├── Loader.jsx      # Skeleton + spinner
│   └── ErrorBanner.jsx # Error display
├── hooks/
│   └── useIPTracker.js # Fetch logic + history management
├── App.jsx             # Main layout
└── index.css           # Global styles + utilities
```
