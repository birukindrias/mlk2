"use client";

import React, { useRef, useEffect, useState } from "react";
import { MapPin } from "lucide-react";

interface MapComponentProps {
  className?: string;
}

export function MapComponent({ className = "" }: MapComponentProps) {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const handleIframeLoad = () => {
      setIsLoading(false);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
    }

    return () => {
      clearTimeout(timer);
      if (iframe) {
        iframe.removeEventListener("load", handleIframeLoad);
      }
    };
  }, []);

  // Better coordinate for Bole area in Addis Ababa (where Bole International Airport is)
  // We use OpenStreetMap which doesn't require an API key
  const openStreetMapUrl =
    "https://www.openstreetmap.org/export/embed.html?bbox=38.7478%2C8.9856%2C38.8078%2C9.0256&layer=mapnik&marker=9.0056%2C38.7778";

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg ${className}`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 z-10">
          <div className="flex flex-col items-center">
            <div className="animate-pulse">
              <MapPin className="h-12 w-12 text-blue-400" />
            </div>
            <p className="text-white mt-4">Loading map of Addis Ababa...</p>
          </div>
        </div>
      )}

      <iframe
        ref={iframeRef}
        src={openStreetMapUrl}
        className="w-full h-full border-0"
        style={{ minHeight: "360px" }}
        allowFullScreen={true}
        loading="lazy"
        title="Map of Bole, Addis Ababa, Ethiopia"
      ></iframe>

      {/* Map title overlay */}
      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg z-10">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-400" />
          <span className="text-white text-sm font-medium">
            Meleket Office - Bole
          </span>
        </div>
      </div>

      {/* Attribution */}
      <div className="absolute bottom-1 right-1 text-xs text-white/70 bg-black/30 px-1 rounded">
        © OpenStreetMap
      </div>
    </div>
  );
}
