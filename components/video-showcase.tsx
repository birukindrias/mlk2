"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    {
      title: "Ice Product Showcase",
      description:
        "Watch our latest product demonstration showcasing Meleket's innovative solutions for businesses in Ethiopia",
      thumbnail: "/images/ice-drinks.png",
      video: "/videos/ice product.mp4",
      platform: "YouTube",
      duration: "1:30",
    },
    {
      title: "D-Crown Product Launch",
      description:
        "Coverage of our latest product launch event in Addis Ababa showcasing Meleket's expanding services",
      thumbnail: "/images/teeth.png",
      video: "/videos/D-crown procri.mp4",
      platform: "TikTok",
      duration: "2:00",
    },
    {
      title: "Animation Advertisement",
      description:
        "A fun and engaging animation showcasing Meleket's services and how they can benefit you",
      thumbnail: "/images/ani.png",
      video: "/videos/anim.mp4",
      platform: "TikTok",
      duration: "2:00",
    },
    {
      title: "Coffee Experience",
      description:
        "A quick overview of Meleket's services and how they're transforming access to information",
      thumbnail: "/images/coffee-cup.png",
      video: "/videos/oI2Cy3iduIBLh5QATcNofZiOzuEOI3SgkEu2yA.mp4",
      platform: "Instagram",
      duration: "0:45",
    },
    {
      title: "Fili coffee",
      description:
        "Highlights from our community outreach program helping local residents access essential services",
      thumbnail: "/images/fili.png",
      video: "/videos/sunday breackfast.mp4",
      platform: "Facebook",
      duration: "3:45",
    },
  
  ];

  const nextVideo = () => {
    setIsPlaying(false);
    // Small delay before changing the video to avoid race conditions
    setTimeout(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
    }, 50);
  };

  const prevVideo = () => {
    setIsPlaying(false);
    // Small delay before changing the video to avoid race conditions
    setTimeout(() => {
      setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
    }, 50);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Use a promise with catch to handle potential play() errors
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.error("Error playing video:", error);
              // Don't update state if play failed
            });
        }
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="videos"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="px-3.5 py-1.5 mb-6 text-sm font-medium border-blue-800 text-blue-300"
          >
            Video Showcase
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Meleket in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-lg text-slate-400">
            Watch our promotional videos to see how Meleket is transforming
            access to information in Ethiopia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            key={activeVideo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:col-span-5"
          >
            <div className="mobile-video-container relative">
              <video
                ref={videoRef}
                poster={videos[activeVideo].thumbnail}
                className="w-full h-full object-cover"
                muted={isMuted}
                autoPlay
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onCanPlay={() => console.log("Video can play now")}
                preload="auto"
              >
  
                <source src={videos[activeVideo].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Button
                  size="icon"
                  className={`h-16 w-16 rounded-full bg-blue-600/80 hover:bg-blue-600 transition-opacity ${
                    isPlaying ? "opacity-0" : "opacity-80"
                  } hover:opacity-100`}
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8 text-white" />
                  ) : (
                    <Play className="h-8 w-8 text-white" fill="white" />
                  )}
                </Button>
              </div>

              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4 text-white" />
                  ) : (
                    <Volume2 className="h-4 w-4 text-white" />
                  )}
                </Button>
              </div>

              {/* <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-blue-600/90 text-white backdrop-blur-sm">
                  {videos[activeVideo].platform}
                </Badge>
              </div> */}
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm font-medium border-blue-800 text-blue-300"
                >
                  {activeVideo + 1} / {videos.length}
                </Badge>
                <Badge className="bg-blue-900 text-blue-200">
                  {videos[activeVideo].duration}
                </Badge>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {videos[activeVideo].title}
              </h3>
              <p className="text-slate-400 mb-8">
                {videos[activeVideo].description}
              </p>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setIsPlaying(false);
                      // Small delay before changing the video
                      setTimeout(() => setActiveVideo(index), 50);
                    }}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                      index === activeVideo
                        ? "border-blue-500 shadow-lg"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-24 object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-blue-600/80 flex items-center justify-center">
                          <Play className="h-4 w-4 text-white" fill="white" />
                        </div>
                      </div>
                      <div className="absolute bottom-1 right-1">
                        <span className="text-xs bg-black/70 text-white px-1 rounded">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-6 items-center">
                <button
                  onClick={prevVideo}
                  className="h-10 w-10 rounded-full flex items-center justify-center"
                  disabled={activeVideo === 0}
                >
                  <ChevronLeft
                    className={
                      activeVideo === 0 ? "text-slate-700" : "text-blue-400 w-6"
                    }
                  />
                </button>

                <div className="h-2 flex-1 bg-slate-700 rounded-full overflow-hidden">
                  {videos.map((_, idx) => (
                    <div
                      key={idx}
                      className={
                        idx === activeVideo ? "bg-blue-400 w-6" : "bg-slate-700"
                      }
                      style={{
                        width: `${100 / videos.length}%`,
                        height: "100%",
                        float: "left",
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={nextVideo}
                  className="h-10 w-10 rounded-full flex items-center justify-center"
                  disabled={activeVideo === videos.length - 1}
                >
                  <ChevronRight
                    className={
                      activeVideo === videos.length - 1
                        ? "text-slate-700"
                        : "text-blue-400 w-6"
                    }
                  />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800 rounded-xl p-6 shadow-md">
                <div className="mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Promotional Videos
                </h4>
                <p className="text-sm text-slate-400">
                  Our promotional videos showcase the latest services and
                  features to help businesses and individuals connect.
                </p>
                <div className="mt-4">
                  <p className="text-sm text-slate-400">
                    <span className="font-medium">Latest:</span> April 2023
                  </p>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 shadow-md">
                <div className="mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M10 8l6 4-6 4V8z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2">Tutorial Videos</h4>
                <p className="text-sm text-slate-400">
                  Learn how to use Meleket's services with our step-by-step
                  tutorial videos designed for users of all technical levels.
                </p>
                <div className="mt-4">
                  <p className="text-sm text-slate-400">
                    <span className="font-medium">Updated:</span> June 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
