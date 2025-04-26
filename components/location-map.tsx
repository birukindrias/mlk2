"use client";

import React, { useRef, useEffect, useState } from "react";
import { MapPin } from "lucide-react";

interface LocationMapProps {
  className?: string;
}

export function LocationMap({ className = "" }: LocationMapProps) {
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

  // Use Mapbox fixed URL with specific coordinates for Bole, Addis Ababa
  const mapboxUrl =
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l+3498db(38.7778,9.0056)/38.7778,9.0056,14,0/600x600?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

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

      {/* Interactive iframe for those who need OpenStreetMap */}
      <div className="h-full w-full relative">
        <iframe
          ref={iframeRef}
          src="https://www.openstreetmap.org/export/embed.html?bbox=38.7478%2C8.9856%2C38.8078%2C9.0256&layer=mapnik&marker=9.0056%2C38.7778"
          className="w-full h-full border-0"
          style={{ minHeight: "360px" }}
          allowFullScreen={true}
          loading="lazy"
          title="Map of Bole, Addis Ababa, Ethiopia"
        ></iframe>
      </div>

      {/* Fixed map marker to make it prominent */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="flex flex-col items-center">
          <MapPin
            className="h-12 w-12 text-blue-600 drop-shadow-lg"
            strokeWidth={2.5}
          />
          <div className="mt-1 px-2 py-1 bg-white rounded-md shadow-md">
            <span className="text-slate-900 text-sm font-semibold">
              Meleket Office
            </span>
          </div>
        </div>
      </div>

      {/* Map title overlay */}
      <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg z-10">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-400" />
          <span className="text-white text-sm font-medium">
            Bole, Addis Ababa
          </span>
        </div>
      </div>

      {/* User zoom actions */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
        <a
          href="https://www.openstreetmap.org/?mlat=9.0056&mlon=38.7778#map=14/9.0056/38.7778"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900/80 backdrop-blur-sm p-2 rounded-lg hover:bg-slate-900 transition-colors"
          title="Open in new tab"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      {/* Attribution */}
      <div className="absolute bottom-1 right-1 text-xs text-white/70 bg-black/30 px-1 rounded">
        © OpenStreetMap
      </div>
    </div>
  );
}
