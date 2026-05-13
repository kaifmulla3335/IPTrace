import { useEffect, useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import HeroHeadline from "./components/HeroHeadline";
import SearchBar from "./components/SearchBar";
import IPCards from "./components/IPCards";
import MapView from "./components/MapView";
import Loader from "./components/Loader";
import ErrorBanner from "./components/ErrorBanner";
import Footer from "./components/Footer";
import BackgroundOrbs from "./components/BackgroundOrbs";
import { useIPTracker } from "./hooks/useIPTracker";
import { COPY_RESET_DELAY } from "./constants";

function App() {
  const { ipData, loading, error, history, fetchIPData, clearHistory } =
    useIPTracker();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchIPData();
  }, []);

  const handleCopy = useCallback(() => {
    if (!ipData?.ip) return;
    navigator.clipboard.writeText(ipData.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), COPY_RESET_DELAY);
  }, [ipData]);

  const detectLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      () => fetchIPData(),
      () => fetchIPData(),
    );
  }, [fetchIPData]);

  return (
    <main className="min-h-screen bg-[#07080f] text-white overflow-x-hidden font-body">
      {/* HERO */}
      <section className="relative min-h-[60vh] px-4 md:px-8 pt-8 pb-36 overflow-hidden">
        <BackgroundOrbs />
        <Navbar onDetect={detectLocation} />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <HeroHeadline />
          <SearchBar
            fetchIPData={fetchIPData}
            history={history}
            clearHistory={clearHistory}
          />
          <ErrorBanner message={error} onDismiss={() => {}} />

          <AnimatePresence>{loading && <Loader />}</AnimatePresence>

          <AnimatePresence>
            {ipData && !loading && (
              <IPCards ipData={ipData} copied={copied} onCopy={handleCopy} />
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* MAP */}
      <AnimatePresence>
        {ipData?.location?.latitude && (
          <MapView
            lat={ipData.location.latitude}
            lng={ipData.location.longitude}
            ip={ipData.ip}
            city={ipData.location?.city}
            country={ipData.location?.country}
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

export default App;
