"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Phone,
  Bell,
  Search,
  Star,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AppSection() {
  return (
    <section
      id="app"
      className="py-16 md:py-20 bg-gradient-to-b overflow-hidden"
    >
      {/* Decorative elements - static positioning */}
      <div className="fixed inset-0 bg-pattern-waves opacity-10 -z-50"></div>

      {/* Floating shapes - removed animation */}
      <div className="fixed top-40 right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl -z-40"></div>
      <div className="fixed bottom-40 left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl -z-40"></div>

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            Mobile App
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ethiopia's Premier{" "}
            <span className="text-blue-300">Contact Directory</span>
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Access essential contact information, emergency services, and local
            news all in one place with the Meleket mobile app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Badge className="px-3 py-1 mb-4 text-sm font-medium bg-white/10 text-white border-0 backdrop-blur-sm">
              Meleket App
            </Badge>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Your Essential Contact Directory in Ethiopia
            </h3>
            <p className="text-blue-100 mb-6">
              The Meleket app provides instant access to thousands of essential
              contacts across Ethiopia, including emergency services,
              businesses, and government offices. Stay connected and informed
              with our comprehensive directory.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 mb-3">
                  <Phone className="h-5 w-5" />
                </div>
                <h4 className="font-medium text-white mb-1">
                  Comprehensive Directory
                </h4>
                <p className="text-sm text-blue-100">
                  Access thousands of essential contacts including emergency
                  services.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 mb-3">
                  <Bell className="h-5 w-5" />
                </div>
                <h4 className="font-medium text-white mb-1">
                  Emergency Alerts
                </h4>
                <p className="text-sm text-blue-100">
                  Receive important notifications and emergency alerts for your
                  location.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 mb-3">
                  <Search className="h-5 w-5" />
                </div>
                <h4 className="font-medium text-white mb-1">Smart Search</h4>
                <p className="text-sm text-blue-100">
                  Find exactly what you need with our intelligent search system.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 mb-3">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="font-medium text-white mb-1">
                  Always Available
                </h4>
                <p className="text-sm text-blue-100">
                  Access critical information 24/7, even with limited
                  connectivity.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* hyper link to another page */}
           
              <Button className="rounded-full gap-2 bg-white text-blue-900 hover:bg-blue-100">
                <Download className="h-4 w-4"/>
                <a
                  href="https://play.google.com/store/apps/details?id=com.meleket.melekete"
                  target="_blank"
                  rel="noopener noreferrer"   
                >
                  Download on Google Play
                </a>
              </Button>
              <Button
                variant="outline"
                className="rounded-full gap-2 border-white/20 text-white hover:bg-white/10"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[280px] mx-auto pb-14">
              {/* Phone image container with mockup styling */}
              <div className="border-8 border-slate-800 rounded-[40px] shadow-xl overflow-hidden bg-white">
                <div className="w-full h-5 bg-slate-800 flex justify-center items-end pb-0.5">
                  <div className="w-20 h-1.5 rounded-full bg-slate-600"></div>
                </div>
                <img
                  src="/images/app-screenshot.jpg"
                  alt="Meleket App Screenshot"
                  className="w-full object-cover"
                />
                <div className="w-full h-10 bg-white flex justify-center items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-slate-300"></div>
                </div>
              </div>

              {/* Testimonial card - positioned as overlay on bottom of phone */}
              <div className="bg-slate-800/70 backdrop-blur-md p-4 rounded-lg shadow-xl w-[230px] absolute bottom-0 right-0 border border-white/10 z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-blue-600/90 backdrop-blur-sm text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold border border-blue-500/30">
                    M
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">
                      Meleket App
                    </p>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-3 w-3 text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="text-xs text-blue-200 ml-1">4.9</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-blue-100">
                  "Essential app for anyone in Ethiopia. Saved me countless
                  times when I needed emergency contacts!"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
