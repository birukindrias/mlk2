import Link from "next/link";
import {
  ArrowLeft,
  Globe,
  CircleCheck,
  Calendar,
  Users,
  Building,
  BarChart,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

export const metadata = {
  title: "Habesha Market Campaign | Projects | Meleket",
  description:
    "A comprehensive digital marketing campaign for Habesha Market, increasing brand awareness and driving customer engagement through multi-channel strategies.",
};

export default function HabeshaMarketCampaignPage() {
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
                <BarChart className="h-5 w-5" />
                Digital Marketing
              </Badge>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  View Campaign
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="rounded-3xl overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Habesha Market Campaign"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Habesha Market Campaign
          </h1>
          <p className="text-lg text-blue-100 mb-12 border-l-4 border-blue-400 pl-4">
            A comprehensive digital marketing campaign that increased brand
            awareness and drove customer engagement for Habesha Market, a
            premium Ethiopian marketplace.
          </p>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-blue-100 mb-6">
                Habesha Market is a premier marketplace for authentic Ethiopian
                products, from traditional clothing and accessories to artisanal
                home décor and specialty foods. Our digital marketing campaign
                was designed to increase brand awareness, drive customer
                engagement, and boost sales across their online and physical
                retail channels.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Challenges</h2>
              <p className="text-blue-100 mb-6">
                Before our campaign, Habesha Market faced several marketing
                challenges:
              </p>

              <ul className="space-y-2 mb-8 text-blue-100">
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Limited online visibility in a competitive marketplace
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Inconsistent brand messaging across different platforms
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Difficulty connecting with younger, tech-savvy Ethiopian
                    diaspora
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    Low conversion rates from social media traffic to their
                    e-commerce platform
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Our Approach</h2>
              <p className="text-blue-100 mb-6">
                We developed a multi-channel digital marketing strategy that
                focused on authentic storytelling and targeted customer
                engagement:
              </p>

              <ul className="space-y-2 mb-8 text-blue-100">
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Brand Identity Refresh:</strong> Refined brand
                    messaging and visual elements to create a cohesive,
                    premium-feeling identity
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Content Marketing:</strong> Created authentic
                    storytelling content highlighting Ethiopian culture,
                    craftsmanship, and product origins
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Social Media Strategy:</strong> Developed targeted
                    campaigns across Instagram, Facebook, and TikTok with
                    influencer partnerships
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Email Marketing:</strong> Implemented segmented
                    email campaigns with personalized product recommendations
                    and cultural content
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>SEO & SEM:</strong> Optimized online presence for
                    relevant keywords and targeted paid search campaigns
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8">Results</h2>
              <p className="text-blue-100 mb-6">
                The Habesha Market Campaign delivered significant results across
                all key performance indicators:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    142%
                  </div>
                  <div className="text-blue-100">Social Engagement</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    86%
                  </div>
                  <div className="text-blue-100">Website Traffic</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-300 mb-2">
                    37%
                  </div>
                  <div className="text-blue-100">Revenue Increase</div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/5 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Campaign Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-blue-200 mb-1">Client</div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-blue-300" />
                      <span>Habesha Market</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-200 mb-1">Duration</div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-300" />
                      <span>4 months</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-200 mb-1">Team Size</div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-300" />
                      <span>6 specialists</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-blue-200 mb-1">Channels</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-white/10 hover:bg-white/20 text-white">
                        Instagram
                      </Badge>
                      <Badge className="bg-white/10 hover:bg-white/20 text-white">
                        Facebook
                      </Badge>
                      <Badge className="bg-white/10 hover:bg-white/20 text-white">
                        TikTok
                      </Badge>
                      <Badge className="bg-white/10 hover:bg-white/20 text-white">
                        Email
                      </Badge>
                      <Badge className="bg-white/10 hover:bg-white/20 text-white">
                        Google Ads
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">
                  Need Marketing Support?
                </h3>
                <p className="text-blue-100 mb-4">
                  Let our team develop a comprehensive marketing strategy for
                  your business.
                </p>
                <Button className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  <a href="mailto:Melekettechnology@gmail.com">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Campaign Elements */}
          <h2 className="text-2xl font-bold mb-6">Campaign Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 p-6 rounded-xl">
              <div className="mb-4">
                <Target className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Audience Targeting</h3>
              <p className="text-blue-100">
                Precise customer segmentation focusing on the Ethiopian
                diaspora, cultural enthusiasts, and conscious consumers
                interested in authentic, ethically-sourced products.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <div className="mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Content Strategy</h3>
              <p className="text-blue-100">
                Authentic storytelling highlighting Ethiopian craftspeople,
                cultural significance of products, and behind-the-scenes
                glimpses of sourcing and production processes.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <div className="mb-4">
                <TrendingUp className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Marketing</h3>
              <p className="text-blue-100">
                Data-driven campaign optimization with A/B testing, retargeting
                strategies, and conversion rate optimization for the e-commerce
                platform.
              </p>
            </div>
          </div>

          {/* Images gallery */}
          <h2 className="text-2xl font-bold mb-6">Campaign Creative</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Social Media Campaign"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Brand Identity Elements"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Email Marketing Campaign"
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Influencer Collaboration"
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
