"use client";

import { InfoCardsGrid } from "@/components/info-cards-grid";
import { Footer } from "@/components/footer";
import { ServiceTabs, TabPanel } from "@/components/service-tabs";
import {
  Globe,
  Laptop,
  BarChart3,
  Calendar,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import { InfoCard } from "@/components/info-card";
import { MapComponent } from "@/components/map-component";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      <main className="flex-1">
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-screen-xl">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Services
              </h1>
              <p className="text-lg text-blue-100">
                Comprehensive solutions for businesses and individuals across
                Ethiopia.
              </p>
            </div>

            {/* Tabs Navigation */}
            <ServiceTabs className="my-8">
              <TabPanel tabId="app">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <InfoCardsGrid />
                  </div>

                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-semibold mb-4 text-white">
                      Application Services
                    </h2>
                    <p className="text-blue-100 mb-6">
                      Our mobile application provides instant access to
                      essential services and contacts throughout Ethiopia.
                    </p>
                    <ul className="space-y-3 text-sm text-blue-100">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>24/7 access to emergency contacts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>Offline access to important numbers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>Location-based service recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>Regular updates with new contacts</span>
                      </li>
                    </ul>

                    <div className="mt-8">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg transition">
                        Download App
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel tabId="web">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InfoCard
                    icon={<Globe className="h-4 w-4 md:h-5 md:w-5" />}
                    title="Web Directory"
                    description="Our comprehensive web directory provides access to thousands of contacts across Ethiopia."
                    button={{ label: "Browse Directory" }}
                  />

                  <InfoCard
                    icon={<BarChart3 className="h-4 w-4 md:h-5 md:w-5" />}
                    title="Business Listings"
                    description="Find and connect with businesses throughout Ethiopia with our detailed listings."
                    button={{ label: "Explore Listings" }}
                  />

                  <div className="md:col-span-2 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-semibold mb-4 text-white">
                      Web Platform Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h3 className="font-medium text-blue-200 mb-2">
                          For Users
                        </h3>
                        <ul className="space-y-2 text-blue-100">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Advanced search capabilities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Save favorite contacts</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Interactive maps integration</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium text-blue-200 mb-2">
                          For Businesses
                        </h3>
                        <ul className="space-y-2 text-blue-100">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Create and manage listings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Analytics dashboard</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Customer reviews management</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel tabId="digital">
                <div className="space-y-8">
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-semibold mb-4 text-white">
                      Digital Marketing Solutions
                    </h2>
                    <p className="text-blue-100 mb-6">
                      We help Ethiopian businesses establish a strong online
                      presence through strategic digital marketing services.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <h3 className="font-medium text-white mb-2">
                          Social Media
                        </h3>
                        <p className="text-sm text-blue-100">
                          Strategic management of your social media presence
                          across platforms.
                        </p>
                      </div>

                      <div className="bg-white/5 p-4 rounded-lg">
                        <h3 className="font-medium text-white mb-2">SEO</h3>
                        <p className="text-sm text-blue-100">
                          Optimize your visibility in search engines with our
                          SEO services.
                        </p>
                      </div>

                      <div className="bg-white/5 p-4 rounded-lg">
                        <h3 className="font-medium text-white mb-2">
                          Content Marketing
                        </h3>
                        <p className="text-sm text-blue-100">
                          Engaging content creation that drives traffic and
                          conversions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <InfoCard
                    icon={<BarChart3 className="h-4 w-4 md:h-5 md:w-5" />}
                    title="Performance Analytics"
                    description="Track the success of your digital marketing campaigns with our advanced analytics tools."
                    progress={{ value: 85, label: "Average ROI improvement" }}
                  />
                </div>
              </TabPanel>

              <TabPanel tabId="event">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-semibold mb-4 text-white">
                      Event Management Services
                    </h2>
                    <p className="text-blue-100 mb-6">
                      From corporate gatherings to large-scale conferences, we
                      handle all aspects of event planning and execution in
                      Ethiopia.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white/5 p-4 rounded-lg text-center">
                        <Calendar className="h-6 w-6 mx-auto mb-2 text-blue-300" />
                        <h3 className="font-medium text-white text-sm">
                          Planning
                        </h3>
                      </div>

                      <div className="bg-white/5 p-4 rounded-lg text-center">
                        <BarChart3 className="h-6 w-6 mx-auto mb-2 text-blue-300" />
                        <h3 className="font-medium text-white text-sm">
                          Coordination
                        </h3>
                      </div>

                      <div className="bg-white/5 p-4 rounded-lg text-center">
                        <Laptop className="h-6 w-6 mx-auto mb-2 text-blue-300" />
                        <h3 className="font-medium text-white text-sm">
                          Technology
                        </h3>
                      </div>

                      <div className="bg-white/5 p-4 rounded-lg text-center">
                        <Globe className="h-6 w-6 mx-auto mb-2 text-blue-300" />
                        <h3 className="font-medium text-white text-sm">
                          Promotion
                        </h3>
                      </div>
                    </div>
                  </div>

                  <InfoCard
                    icon={<Calendar className="h-4 w-4 md:h-5 md:w-5" />}
                    title="Corporate Events"
                    description="Professional planning and execution of corporate events, conferences, and product launches."
                    button={{ label: "Request Quote" }}
                  />

                  <InfoCard
                    icon={<Calendar className="h-4 w-4 md:h-5 md:w-5" />}
                    title="Community Events"
                    description="Organize impactful community gatherings, cultural celebrations, and public events."
                    button={{ label: "Learn More" }}
                  />
                </div>
              </TabPanel>

              <TabPanel tabId="location">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <MapComponent className="h-[400px] md:h-[500px]" />
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                      <h2 className="text-xl font-semibold mb-4 text-white flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                        Addis Ababa Office
                      </h2>
                      <p className="text-blue-100 mb-6">
                        Our main office is located in the heart of Addis Ababa,
                        providing easy access to our services from anywhere in
                        the city.
                      </p>
                      <ul className="space-y-4 text-sm text-blue-100">
                        <li className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>
                            Bole Road, Addis Ababa, Ethiopia
                            <br />
                            Near Bole International Airport
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>+251 11 551 7700</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>info@meleket.com</span>
                        </li>
                      </ul>

                      <div className="mt-6">
                        <a
                          href="https://goo.gl/maps/JmRKYJL8nScYiPEE6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Get directions
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>

                    <InfoCard
                      icon={<Globe className="h-4 w-4 md:h-5 md:w-5" />}
                      title="Regional Offices"
                      description="We have offices in major cities across Ethiopia to serve you better."
                      button={{ label: "Find Nearest Office" }}
                    />
                  </div>
                </div>
              </TabPanel>
            </ServiceTabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
