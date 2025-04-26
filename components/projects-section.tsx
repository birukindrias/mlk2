"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Code,
  Globe,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    title: "Addis Business Directory",
    description:
      "A comprehensive business directory application for Addis Ababa, featuring over 5,000 businesses with detailed contact information, location data, and service offerings.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Application Software",
    icon: <Code className="h-5 w-5" />,
    link: "/projects/addis-business-directory",
  },
  {
    title: "Ethiopian Tourism Portal",
    description:
      "A modern, responsive website showcasing Ethiopia's tourist destinations, cultural heritage, and travel information. Includes interactive maps and booking capabilities.",
    image:
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web Design",
    icon: <Globe className="h-5 w-5" />,
    link: "/projects/ethiopian-tourism-portal",
  },
  {
    title: "Habesha Market Campaign",
    description:
      "A digital marketing campaign for Ethiopia's largest online marketplace, resulting in a 200% increase in user engagement and 150% growth in vendor registrations.",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Digital Marketing",
    icon: <TrendingUp className="h-5 w-5" />,
    link: "/projects/habesha-market-campaign",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-gradient-to-b"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-pattern-circles opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-24"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24"></div>

      {/* Floating shapes */}
      <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured <span className="text-blue-300">Projects</span>
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Explore some of our recent work delivering innovative solutions for
            Ethiopian businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent z-10"></div>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-20">
                <Badge className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                  {project.icon}
                  {project.category}
                </Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-blue-100 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full border-white/20 text-white hover:bg-white/10 group-hover:border-blue-300 group-hover:text-blue-300"
                >
                  <Link href={project.link}>
                    View project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <Button
                  size="icon"
                  variant="outline"
                  asChild
                  className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm border-white/10 text-white hover:bg-white/20"
                >
                  <Link href={project.link}>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            asChild
            className="rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
          >
            <Link href="/projects">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
