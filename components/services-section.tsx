"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Globe,
  TrendingUp,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    id: "app-development",
    icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Application Software",
    shortTitle: "Apps",
    description:
      "We create intuitive applications that deliver real-time information and streamline business processes for Ethiopian organizations. Our custom software solutions are designed to address specific needs while ensuring scalability and security.",
    features: [
      "Custom mobile applications for Android and iOS",
      "Enterprise software solutions",
      "Real-time data synchronization",
      "Offline functionality for low-connectivity areas",
      "Integration with existing systems",
      "ERP and CRM solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1573152958734-1922c188fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "web-design",
    icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Web Design",
    shortTitle: "Web",
    description:
      "Our web design services combine aesthetic appeal with functional excellence. We create responsive websites that represent your brand effectively and provide seamless user experiences across all devices.",
    features: [
      "Responsive design for all devices",
      "Custom UI/UX development",
      "E-commerce solutions",
      "Content management systems",
      "Performance optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "digital-marketing",
    icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Digital Marketing",
    shortTitle: "Marketing",
    description:
      "We help Ethiopian businesses establish a strong online presence through strategic digital marketing. Our data-driven approach ensures your marketing efforts reach the right audience and deliver measurable results.",
    features: [
      "Social media marketing campaigns",
      "Search engine optimization (SEO)",
      "Pay-per-click advertising",
      "Content marketing strategies",
      "Analytics and performance tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "event-organizing",
    icon: <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Event Organizing",
    shortTitle: "Events",
    description:
      "From corporate gatherings to large-scale conferences, we handle all aspects of event planning and execution. Our team ensures every detail is perfect, allowing you to focus on the purpose of your event.",
    features: [
      "Corporate event management",
      "Conference planning and execution",
      "Product launches and exhibitions",
      "Virtual and hybrid events",
      "Post-event analysis and reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("app-development");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const scrollToTab = (tabId: string) => {
    const tab = document.querySelector(`[data-value="${tabId}"]`);
    if (tab && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const tabRect = tab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Calculate the scroll position to center the tab
      const scrollLeft =
        tab.scrollLeft +
        (tabRect.left - containerRect.left) -
        containerRect.width / 2 +
        tabRect.width / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Scroll to center the active tab when it changes
    scrollToTab(activeTab);
  }, [activeTab]);

  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-24"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container relative z-10 px-4 sm:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-6 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Innovative <span className="text-blue-300">Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8">
            We combine cutting-edge technology with local expertise to deliver
            digital solutions tailored for Ethiopian businesses.
          </p>
        </div>

        <Tabs
          defaultValue="app-development"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="relative flex justify-center mb-8 sm:mb-12">


            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-4 max-w-[90vw] md:max-w-[80vw]"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <TabsList className="flex bg-white/10 p-1.5 rounded-full backdrop-blur-sm mx-auto gap-2">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    data-value={service.id}
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-blue-900 data-[state=active]:shadow-sm px-5 py-2.5 text-white text-sm whitespace-nowrap flex-shrink-0 snap-start transition-all duration-300 hover:bg-white/20"
                    onClick={() => {
                      setActiveTab(service.id);
                      scrollToTab(service.id);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">{service.icon}</div>
                      <span className="hidden xs:inline">
                        {service.shortTitle}
                      </span>
                      <span className="xs:hidden">
                        {service.shortTitle.substring(0, 3)}
                      </span>
                      <span className="hidden sm:inline">
                        {service.title.split(" ")[0]}
                      </span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>


          </div>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-white/10"
                >
                  <Badge className="px-2 py-1 sm:px-3 sm:py-1 mb-3 sm:mb-4 text-xs sm:text-sm font-medium bg-white/20 text-white border-0">
                    {service.title}
                  </Badge>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                    {service.description.split(".")[0]}.
                  </h3>
                  <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-6">
                    {service.description.split(".").slice(1).join(".").trim()}
                  </p>

                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <div className="mt-1 bg-blue-500/20 p-1 rounded-full text-blue-300 flex-shrink-0">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-white text-sm sm:text-base">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <Button className="rounded-full bg-white text-blue-900 hover:bg-blue-100 group text-sm sm:text-base w-full sm:w-auto">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-video hidden sm:block"
                >
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-indigo-500/30 backdrop-blur-sm flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                      <h4 className="text-lg sm:text-2xl font-semibold text-white">
                        {service.title}
                      </h4>
                    </div>
                    <p className="text-blue-100 text-sm sm:text-lg max-w-md">
                      {service.description.split(".")[0]}.
                    </p>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
