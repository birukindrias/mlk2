import Link from "next/link";
import { ArrowRight, Code, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Projects | Meleket",
  description:
    "Explore our portfolio of innovative technology solutions for Ethiopian businesses",
};

const projects = [
  {
    id: "addis-business-directory",
    title: "Addis Business Directory",
    description:
      "A comprehensive business directory application for Addis Ababa, featuring location-based search, business profiles, and user reviews.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Mobile Application",
    icon: "Code",
    link: "/projects/addis-business-directory",
  },
  {
    id: "ethiopian-tourism-portal",
    title: "Ethiopian Tourism Portal",
    description:
      "A modern, responsive website showcasing Ethiopia's tourist destinations, cultural heritage, and travel information. Includes interactive maps and booking capabilities.",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web Design",
    icon: "Globe",
    link: "/projects/ethiopian-tourism-portal",
  },
  {
    id: "habesha-market-campaign",
    title: "Habesha Market Campaign",
    description:
      "A comprehensive digital marketing campaign for Habesha Market, resulting in 142% increased social engagement, 86% more website traffic, and 37% revenue growth.",
    image:
      "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Digital Marketing",
    icon: "TrendingUp",
    link: "/projects/habesha-market-campaign",
  },
  {
    id: "amharic-ocr-system",
    title: "Amharic OCR System",
    description:
      "An optical character recognition solution specifically designed for Amharic script, enabling businesses to digitize historical documents and streamline data entry processes.",
    image:
      "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Application Software",
    icon: "Code",
    link: "/projects/amharic-ocr-system",
  },
  {
    id: "ethiopia-payment-gateway",
    title: "Ethiopia Payment Gateway",
    description:
      "A secure digital payment processing system that connects Ethiopian merchants with both local and international payment methods, including mobile money solutions.",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Application Software",
    icon: "Code",
    link: "/projects/ethiopia-payment-gateway",
  },
  {
    id: "addis-real-estate-platform",
    title: "Addis Real Estate Platform",
    description:
      "A digital marketplace connecting property buyers, sellers, and renters in Addis Ababa, featuring verified listings, virtual tours, and automated contract generation.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web Design",
    icon: "Globe",
    link: "/projects/addis-real-estate-platform",
  },
];

export default function ProjectsPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="h-5 w-5" />;
      case "Globe":
        return <Globe className="h-5 w-5" />;
      case "TrendingUp":
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  return (
    <>
      <main className="pt-24 pb-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Innovative <span className="text-blue-300">Projects</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Explore our portfolio of digital solutions designed for the unique
              needs of Ethiopian businesses and organizations.
            </p>
          </div>

          {/* Project filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant="outline"
              className="rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              All Projects
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm opacity-70 hover:opacity-100"
            >
              Application Software
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm opacity-70 hover:opacity-100"
            >
              Web Design
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm opacity-70 hover:opacity-100"
            >
              Digital Marketing
            </Button>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent z-10"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                    {getIcon(project.icon)}
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-100 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-white/20 text-white hover:bg-white/10 group-hover:border-blue-300 group-hover:text-blue-300"
                    asChild
                  >
                    <Link href={project.link}>
                      View project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-24 bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Custom Digital Solution?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Our team of experts can help you build innovative digital products
              tailored to your specific business requirements.
            </p>
            <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
              <Link href="/location">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
