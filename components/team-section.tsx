"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  {
    name: "Biruk Getachew",
    role: "Founder & CEO",
    bio: "With over 4 years of experience in IT and telecommunications, Abebe leads Meleket's vision and strategy. His deep understanding of the Ethiopian market has been instrumental in positioning the company as a leader in the industry.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-11-18_14-43-26.jpg-LEvgAnkxMcnEN7reB65En13sFzAA7o.jpeg",
    expertise: [
      "Strategic Planning",
      "Business Development",
      "Telecommunications",
    ],
    email: "bkgt1998@gmail.com",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Biruk Endrias",
    role: "Co-Founder & CTO",
    bio: "Biruk is a seasoned software engineer with a passion for technology and innovation. He is responsible for overseeing the development of Meleket's digital platforms, ensuring they meet the highest standards of quality and performance.",
    image:
      "/images/bk.jpg",
    expertise: [
      "Software Development",
      "System Architecture",
      "Cloud Computing",

    ],
    email: "hello@iambiruk.com",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },

  {
    name: "Nahom Zeray",
    role: "Content Creator ",
    bio: "content creator and social media manager, Nahom is responsible for creating engaging content that resonates with our audience. His creativity and understanding of digital trends help us maintain a strong online presence.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Z2.jpg-9KJw5UM4JIcYDpTUCgWVFpiSI9BEWH.jpeg",
    expertise: ["Digital Marketing", "Brand Strategy"],
    // email: "dawit@meleket-tech.com",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Dawit Mesfin",
    role: "Content Creator ",
    bio: "content creator and social media manager, Nahom is responsible for creating engaging content that resonates with our audience. His creativity and understanding of digital trends help us maintain a strong online presence.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B2.jpg-BPq8TdFz08kpAUUWgdv7mYukOwvJOP.jpeg",
    expertise: [
      "Digital Marketing",
      "Brand Strategy",
      "Social Media Management",],
    // email: "bereket@meleket-tech.com",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Fitum Bereket",
    role: "Marketer",
    bio: "Fitum is a skilled marketer with a focus on digital marketing strategies. She plays a key role in promoting Meleket's products and services, ensuring we reach our target audience effectively.",

    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0007.JPG-b6SREIwQy1phnTxJQTeXKNrNOOmGdE.jpeg",
    expertise: [ 
       "Digital Marketing"],
    // email: "yonas@meleket-tech.com",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Yonatan Anannia",
    role: "Marketing Manager",
    bio: "Yonatan is a marketing manager with a strong background in digital marketing and brand management. He is responsible for developing and executing marketing strategies that drive growth and engagement.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-09%20144412-9Ug8ITno8ypIZoTjJ1yvAEOqFarFTW.png",
    expertise: [
      "Digital Marketing",
      "Brand Management",
      "Social Media Strategy",
    ],
    // email: "henok@meleket-tech.com",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Benyam Tesfaye",
    role: "Animation Creator",
    bio: "Benyam is a talented animation creator who brings our ideas to life through engaging animations. His creativity and technical skills enhance our marketing efforts and product presentations.",
    image:
      "/images/ananai.png",
    expertise: [
      "Animation",
      "Graphic Design",
      "Video Production",
    ],
    // email: "henok@meleket-tech.com",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },

  
];

export function TeamSection() {
  const [activeMember, setActiveMember] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveMember((prev) => (prev + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextMember = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setActiveMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setActiveMember(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const member = teamMembers[activeMember];

  return (
    <section
      id="team"
      className="py-24 hero-gradient hero-pattern relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            Our Talented Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meet the Experts Behind{" "}
            <span className="text-blue-200">Meleket</span>
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our team combines technical expertise with deep local knowledge to
            deliver exceptional solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={activeMember}
                    initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                {/* Member name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    key={`name-${activeMember}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-300 text-lg">{member.role}</p>
                  </motion.div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 glass-card px-4 py-2 rounded-full shadow-lg">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeMember
                        ? "bg-blue-400 scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setDirection(index > activeMember ? 1 : -1);
                      setActiveMember(index);
                    }}
                    aria-label={`View team member ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-8 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <Badge className="bg-white/10 text-white hover:bg-white/20 px-3 py-1">
                      {activeMember + 1} / {teamMembers.length}
                    </Badge>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevMember}
                        className="h-8 w-8 rounded-full border-white/20 text-white hover:bg-white/10"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextMember}
                        className="h-8 w-8 rounded-full border-white/20 text-white hover:bg-white/10"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-blue-300 font-medium mb-1">
                        About
                      </h4>
                      <p className="text-white/90 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-blue-300 font-medium mb-3">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <Badge
                            key={index}
                            className="px-3 py-1.5 bg-white/10 text-white border-white/10 hover:bg-white/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-blue-300 font-medium mb-3">
                        Connect
                      </h4>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full gap-2 border-white/20 text-white hover:bg-white/10"
                        >
                          <Mail className="h-4 w-4" />
                          {member.email}
                        </Button>

                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 rounded-full border-white/20 text-white hover:bg-white/10"
                          >
                            <Linkedin className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 rounded-full border-white/20 text-white hover:bg-white/10"
                          >
                            <Twitter className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 rounded-full border-white/20 text-white hover:bg-white/10"
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-blue-300 font-medium mb-1">
                          Next Team Member
                        </h4>
                        <p className="text-white font-medium">
                          {
                            teamMembers[(activeMember + 1) % teamMembers.length]
                              .name
                          }
                        </p>
                      </div>
                      <Button
                        onClick={nextMember}
                        variant="outline"
                        className="rounded-full border-white/20 text-white hover:bg-white/10"
                      >
                        View Profile
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Team member thumbnails */}
            <div className="mt-8 grid grid-cols-6 gap-3">
              {teamMembers.map((teamMember, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setDirection(index > activeMember ? 1 : -1);
                    setActiveMember(index);
                  }}
                  className={`relative rounded-xl overflow-hidden aspect-square transition-all ${
                    index === activeMember
                      ? "ring-2 ring-blue-300 ring-offset-2 ring-offset-blue-900"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={teamMember.image || "/placeholder.svg"}
                    alt={teamMember.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                  <div className="absolute bottom-1 left-0 right-0 text-center">
                    <p className="text-xs text-white font-medium truncate px-1">
                      {teamMember.name.split(" ")[0]}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
