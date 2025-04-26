"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Shield,
  Clock,
  Users,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = [
    "Essential Contact Information",
    "Digital Marketing Solutions",
    "Web Design Excellence",
    "Event Organization",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 hero-gradient hero-pattern overflow-hidden relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left lg:col-span-5"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Leading Ethiopian Technology Company
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Connecting Ethiopia with{" "}
              <span className="text-blue-200 inline-block transition-all duration-300 ease-in-out">
                {phrases[currentIndex]}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Meleket Technology provides comprehensive contact directories and
              innovative digital solutions for businesses and individuals across
              Ethiopia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gap-2 rounded-full bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                Learn More
              </Button>
            </div>

            {/* <div className="mt-12 relative max-w-md mx-auto lg:mx-0">
              <div className="relative flex items-center glass-card rounded-full p-1.5 pl-4">
                <Search className="text-white h-5 w-5 mr-2" />
                <Input
                  type="text"
                  placeholder="Search for a business or service..."
                  className="border-0 bg-transparent text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  size="sm"
                  className="rounded-full bg-white text-blue-600 hover:bg-blue-50"
                >
                  Search
                </Button>
              </div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div>
              <div className="w-[90vw] sm:w-[95vw] md:w-[600px] h-[90vw] sm:h-[95vw] md:h-[600px] bg-blue-400/20 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-full overflow-hidden">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="glass-card rounded-2xl p-4 md:p-6 backdrop-blur-md"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-white">
                      <Globe className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm md:text-base">
                        Nationwide Coverage
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-white/80 mb-3 md:mb-4">
                    Our directory covers all regions of Ethiopia, providing
                    essential contacts for every city and town.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-white/10 text-white hover:bg-white/20 text-xs">
                      11 Regions
                    </Badge>
                    <Badge className="bg-white/10 text-white hover:bg-white/20 text-xs">
                      All Major Cities
                    </Badge>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="glass-card rounded-2xl p-4 md:p-6 backdrop-blur-md mt-0 sm:mt-8 md:mt-12"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-white">
                      <Shield className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm md:text-base">
                        Emergency Services
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-white/80 mb-3 md:mb-4">
                    Quick access to emergency contacts including police,
                    ambulance, and fire services.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-full border-white/20 text-white hover:bg-white/10 py-1 h-auto text-xs md:text-sm md:py-2"
                  >
                    Emergency Contacts
                    <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="glass-card rounded-2xl p-4 md:p-6 backdrop-blur-md"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-white">
                      <Clock className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm md:text-base">
                        24/7 Availability
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-white/80 mb-3 md:mb-4">
                    Our services are available around the clock, ensuring you
                    always have access when you need it.
                  </p>
                  <div className="w-full bg-white/10 rounded-full h-1.5 md:h-2 mb-1">
                    <div className="bg-blue-400 h-1.5 md:h-2 rounded-full w-[99.9%]"></div>
                  </div>
                  <p className="text-xs text-white/80 text-right">
                    99.9% Uptime
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="glass-card rounded-2xl p-4 md:p-6 backdrop-blur-md mt-0 sm:mt-8 md:mt-12"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-white">
                      <Users className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-sm md:text-base">
                        Growing Community
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-white/80 mb-3 md:mb-4">
                    Join our growing community of users and businesses across
                    Ethiopia.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-1.5 md:-space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-6 w-6 md:h-8 md:w-8 rounded-full border-2 border-white overflow-hidden"
                        >
                          <img
                            src={`/images/team-member-${i}.jpg`}
                            alt={`User ${i}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                      <div className="h-6 w-6 md:h-8 md:w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] md:text-xs font-medium border-2 border-white">
                        +250K
                      </div>
                    </div>
                    <Badge className="bg-white/10 text-white hover:bg-white/20 text-xs">
                      Join Now
                    </Badge>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
