import Link from "next/link";
import {
  ArrowLeft,
  Globe,
  CircleCheck,
  Calendar,
  Users,
  Building,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

export const metadata = {
  title: "Ethiopian Tourism Portal | Projects | Meleket",
  description:
    "A modern, responsive website showcasing Ethiopia's tourist destinations, cultural heritage, and travel information, featuring interactive maps and booking capabilities.",
};

export default function EthiopianTourismPortalPage() {
  return (
    <PageTransition>
      <main className="pt-24 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container max-w-5xl">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-200 hover:text-blue-100 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>

            <div className="flex flex-wrap gap-4 items-center justify-between">
              <Badge className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                <Globe className="h-5 w-5" />
                Web Design
              </Badge>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="rounded-3xl overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Ethiopian Tourism Portal"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ethiopian Tourism Portal
          </h1>
          <p className="text-lg text-blue-100 mb-12 border-l-4 border-blue-400 pl-4">
            A comprehensive tourism website showcasing Ethiopia's diverse
            attractions, cultural heritage, and travel experiences with
            interactive maps and booking capabilities.
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-blue-100 mb-6">
                The Ethiopian Tourism Portal is a modern web platform designed
                to promote tourism in Ethiopia by showcasing the country's
                unique destinations, rich cultural heritage, and diverse travel
                experiences. The website serves as a comprehensive resource for
                travelers planning visits to Ethiopia, offering detailed
                information, interactive maps, and booking capabilities.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Challenges</h2>
              <p className="text-blue-100 mb-6">
                Ethiopia's tourism sector faced several challenges that limited
                its growth potential:
              </p>

              <ul className="space-y-2 mb-8 text-blue-100">
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Lack of a modern, comprehensive online presence to showcase
                    attractions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Limited interactive tools for travelers to plan their
                    journeys
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Inefficient booking and reservation systems for tours and
                    accommodations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Need for multilingual support to reach international
                    audiences
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Solutions</h2>
              <p className="text-blue-100 mb-6">
                We developed a feature-rich tourism portal that addresses these
                challenges through modern web technologies and thoughtful
                design:
              </p>

              <ul className="space-y-2 mb-8 text-blue-100">
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Interactive Maps:</strong> Integration of Mapbox for
                    interactive destination exploration with custom markers for
                    attractions, accommodations, and tour sites
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Cultural Showcases:</strong> Rich media galleries
                    featuring Ethiopia's diverse cultures, festivals, and
                    historical sites with immersive storytelling
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Booking System:</strong> Integrated reservation
                    system for tours, accommodations, and experiences with
                    secure payment processing through Stripe
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Travel Guides:</strong> Downloadable travel guides,
                    itineraries, and practical information for visitors
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Results</h2>
              <p className="text-blue-100 mb-6">
                Since its launch, the Ethiopian Tourism Portal has significantly
                improved Ethiopia's online tourism presence and delivered
                measurable results:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    45+
                  </div>
                  <div className="text-blue-100">Countries Reached</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    75%
                  </div>
                  <div className="text-blue-100">Booking Increase</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    50K+
                  </div>
                  <div className="text-blue-100">Monthly Visitors</div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/5 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Client</div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-blue-300" />
                      <span>Ethiopian Tourism Organization</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-200 mb-1">Timeline</div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-300" />
                      <span>6 months</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-200 mb-1">Team Size</div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-300" />
                      <span>8 specialists</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-200 mb-1">Location</div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-300" />
                      <span>Addis Ababa, Ethiopia</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="font-medium mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-white/10 hover:bg-white/20 text-white">
                      React.js
                    </Badge>
                    <Badge className="bg-white/10 hover:bg-white/20 text-white">
                      Next.js
                    </Badge>
                    <Badge className="bg-white/10 hover:bg-white/20 text-white">
                      Mapbox
                    </Badge>
                    <Badge className="bg-white/10 hover:bg-white/20 text-white">
                      Stripe
                    </Badge>
                    <Badge className="bg-white/10 hover:bg-white/20 text-white">
                      Sanity CMS
                    </Badge>
                    <Badge className="bg-white/10 hover:bg-white/20 text-white">
                      Framer Motion
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Need a Similar Solution?
                </h3>
                <p className="text-blue-100 mb-4">
                  We can create a custom tourism platform tailored to your
                  specific region or business needs.
                </p>
                <Button className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <a href="mailto:Melekettechnology@gmail.com">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Interactive Maps</h3>
              <p className="text-blue-100">
                Explore Ethiopia's diverse regions with custom-designed
                interactive maps featuring points of interest, travel routes,
                and detailed location information.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Cultural Showcases</h3>
              <p className="text-blue-100">
                Immersive galleries and stories highlighting Ethiopia's rich
                cultural heritage, historical sites, and traditional practices
                with high-quality media.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Booking System</h3>
              <p className="text-blue-100">
                Seamless reservation and payment processing for tours,
                accommodations, and experiences with real-time availability
                checking and instant confirmation.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Travel Guides</h3>
              <p className="text-blue-100">
                Downloadable guides with practical information, suggested
                itineraries, and local insights to help travelers plan their
                perfect Ethiopian adventure.
              </p>
            </div>
          </div>

          {/* Images gallery */}
          <h2 className="text-2xl font-bold mb-6">Project Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Homepage Design"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577367996134-1b6ae832c1fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Interactive Map Feature"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621682372775-533449e550ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Cultural Heritage Section"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529420258198-20c353bda1f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Booking Interface"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Related projects */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Addis Business Directory"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                    <Globe className="h-5 w-5" />
                    Application
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    Addis Business Directory
                  </h3>
                  <Button
                    variant="outline"
                    className="rounded-full border-white/20 text-white hover:bg-white/10 group-hover:border-blue-300 group-hover:text-blue-300"
                    asChild
                  >
                    <Link href="/projects/addis-business-directory">
                      View project
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="group relative rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Habesha Market Campaign"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                    <Globe className="h-5 w-5" />
                    Marketing
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    Habesha Market Campaign
                  </h3>
                  <Button
                    variant="outline"
                    className="rounded-full border-white/20 text-white hover:bg-white/10 group-hover:border-blue-300 group-hover:text-blue-300"
                    asChild
                  >
                    <Link href="/projects/habesha-market-campaign">
                      View project
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
