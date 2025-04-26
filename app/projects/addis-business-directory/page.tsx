import Link from "next/link";
import {
  ArrowLeft,
  Globe,
  CircleCheck,
  Calendar,
  Users,
  Building,
  Phone,
  Map,
  Search,
  Layers,
  Smartphone,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LocationMap } from "@/components/location-map";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

export const metadata = {
  title: "Addis Business Directory | Projects | Meleket",
  description:
    "A comprehensive business directory application for Addis Ababa, featuring location-based search, business profiles, and user reviews.",
};

export default function AddisBusinessDirectoryPage() {
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
                Mobile Application
              </Badge>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  View Case Study
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="rounded-3xl overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Addis Business Directory"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Addis Business Directory
          </h1>
          <p className="text-lg text-blue-100 mb-12 border-l-4 border-blue-400 pl-4">
            A comprehensive business directory application for Addis Ababa,
            helping residents and visitors discover local businesses through
            location-based search, detailed profiles, and user reviews.
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-blue-100 mb-6">
                The Addis Business Directory is a mobile-first application that
                connects users with thousands of businesses across Addis Ababa.
                Designed for both residents and tourists, the platform provides
                detailed information about local establishments, from
                restaurants and hotels to service providers and retail shops.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Challenges</h2>
              <p className="text-blue-100 mb-6">
                Creating a comprehensive business directory for Addis Ababa
                presented several key challenges:
              </p>

              <ul className="space-y-2 mb-8 text-blue-100">
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Collecting accurate business data in an environment with
                    limited digital records
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Addressing inconsistent addressing systems across different
                    parts of the city
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Creating an intuitive interface that works across various
                    device capabilities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Building a platform that functions well in areas with
                    intermittent connectivity
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Our Solution</h2>
              <p className="text-blue-100 mb-6">
                We developed a comprehensive solution that addressed these
                challenges while providing a valuable resource for the
                community:
              </p>

              <ul className="space-y-2 mb-8 text-blue-100">
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Data Collection:</strong> Combined field research,
                    business partnerships, and user contributions to build a
                    comprehensive database
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Advanced Mapping:</strong> Implemented a flexible
                    location system with multiple reference points and visual
                    mapping
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Progressive Web App:</strong> Created a responsive
                    interface that adapts to different devices while providing
                    offline functionality
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Verified Reviews:</strong> Implemented a trusted
                    review system with verification to ensure quality feedback
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="mb-4">
                    <Search className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Smart Search</h3>
                  <p className="text-blue-100">
                    Powerful search functionality with filters for category,
                    location, ratings, and operating hours, with support for
                    Amharic and English queries.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="mb-4">
                    <Map className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Interactive Mapping
                  </h3>
                  <p className="text-blue-100">
                    Visual map exploration with clustered markers, directions,
                    and proximity-based recommendations for easy navigation
                    around the city.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="mb-4">
                    <Layers className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Detailed Business Profiles
                  </h3>
                  <p className="text-blue-100">
                    Comprehensive listings including contact information,
                    services, hours, photos, menus or product catalogs, and
                    verified user reviews.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="mb-4">
                    <Smartphone className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Offline Access</h3>
                  <p className="text-blue-100">
                    Core functionality available offline, including saved
                    businesses, maps for common areas, and the ability to queue
                    reviews for later submission.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8">Results</h2>
              <p className="text-blue-100 mb-6">
                The Addis Business Directory has become a vital resource for
                both residents and visitors, successfully bridging the
                information gap for local businesses:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    25,000+
                  </div>
                  <div className="text-blue-100">Registered Businesses</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    100,000+
                  </div>
                  <div className="text-blue-100">Active Users</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    4.7/5
                  </div>
                  <div className="text-blue-100">App Store Rating</div>
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
                      <span>Addis Ababa Chamber of Commerce</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-200 mb-1">Timeline</div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-300" />
                      <span>8 months</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-200 mb-1">Team Size</div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-300" />
                      <span>12 specialists</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-200 mb-1">Platform</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-white/10 hover:bg-white/20 text-white">
                        iOS
                      </Badge>
                      <Badge className="bg-white/10 hover:bg-white/20 text-white">
                        Android
                      </Badge>
                      <Badge className="bg-white/10 hover:bg-white/20 text-white">
                        Web
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Need a Similar App?</h3>
                <p className="text-blue-100 mb-4">
                  Let our team build a custom directory or location-based
                  application for your organization.
                </p>
                <Button className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <a href="mailto:Melekettechnology@gmail.com">Contact Us</a>
                </Button>
              </div>

              <div className="mt-8">
                <div className="rounded-xl overflow-hidden">
                  <LocationMap />
                </div>
                <div className="text-center text-sm text-blue-200 mt-3">
                  Our office in Addis Ababa
                </div>
              </div>
            </div>
          </div>

          {/* App Screenshots */}
          <h2 className="text-2xl font-bold mb-6">Application Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Business Listing Screen"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Map View"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529336953128-a85760f58cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Review Screen"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Testimonials */}
          <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white/5 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Star className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-bold">Kebede Tadesse</div>
                  <div className="text-blue-200 text-sm">Restaurant Owner</div>
                </div>
              </div>
              <p className="text-blue-100">
                "The Addis Business Directory has transformed how customers find
                my restaurant. Since joining, we've seen a 30% increase in new
                customers, especially tourists who might never have discovered
                us otherwise."
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Star className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-bold">Sara Mekonnen</div>
                  <div className="text-blue-200 text-sm">
                    Addis Ababa Resident
                  </div>
                </div>
              </div>
              <p className="text-blue-100">
                "This app has become essential for navigating Addis. I use it
                almost daily to find new places, check business hours, and read
                reviews. The offline maps feature is especially helpful in areas
                with poor connection."
              </p>
            </div>
          </div>

          {/* Related projects */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative rounded-xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ethiopian Tourism Portal"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                    <Globe className="h-5 w-5" />
                    Web Design
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    Ethiopian Tourism Portal
                  </h3>
                  <Button
                    variant="outline"
                    className="rounded-full border-white/20 text-white hover:bg-white/10 group-hover:border-blue-300 group-hover:text-blue-300"
                    asChild
                  >
                    <Link href="/projects/ethiopian-tourism-portal">
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
                    Digital Marketing
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
