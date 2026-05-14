import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';

const customIcon = L.divIcon({
  html: `
    <div style="position:relative;display:flex;flex-direction:column;align-items:center;">
      <div style="
        width:36px;height:36px;
        background:linear-gradient(135deg,#22d3ee,#8b5cf6);
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        box-shadow:0 4px 20px rgba(34,211,238,0.5),0 0 0 4px rgba(34,211,238,0.15);
        display:flex;align-items:center;justify-content:center;
      ">
        <div style="transform:rotate(45deg);width:10px;height:10px;background:white;border-radius:50%;"></div>
      </div>
      <div style="width:2px;height:10px;background:linear-gradient(to bottom,rgba(34,211,238,0.6),transparent);margin-top:1px;"></div>
    </div>
  `,
  className: '',
  iconSize: [36, 56],
  iconAnchor: [18, 56],
  popupAnchor: [0, -58],
});

function FlyTo({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 15, { animate: true, duration: 1.5 });
  }, [lat, lng, map]);
  return null;
}

function MapView({ lat, lng, ip, city, country }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 px-4 md:px-8 mt-4 md:mt-8"
    >
      {/* Label bar */}
      <div className="max-w-7xl mx-auto mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">Live Map</span>
        </div>
        <span className="text-xs text-slate-600 font-mono">{lat.toFixed(4)}, {lng.toFixed(4)}</span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[45vh] sm:h-[52vh] md:h-[65vh] rounded-3xl overflow-hidden border border-white/6 shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative">
          <MapContainer
            center={[lat, lng]}
            zoom={15}
            scrollWheelZoom={true}
            className="w-full h-full"
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <FlyTo lat={lat} lng={lng} />
            <Marker position={[lat, lng]} icon={customIcon}>
              <Popup>
                <div className="text-center py-1">
                  <p className="font-mono text-cyan-400 text-sm font-semibold">{ip}</p>
                  {city && <p className="text-slate-400 text-xs mt-1">{city}{country ? `, ${country}` : ''}</p>}
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </motion.section>
  );
}

export default MapView;