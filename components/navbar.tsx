"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [currentPath, setCurrentPath] = useState<string>("");

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      setScrolled(window.scrollY > 20);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set current path and hash on mount and when it changes
      setCurrentPath(window.location.pathname);
      setActiveHash(window.location.hash);

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  // Track active section based on hash
  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window !== "undefined") {
        setActiveHash(window.location.hash);
      }
    };

    if (typeof window !== "undefined") {
      handleHashChange(); // Initial check
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu-container") &&
        !target.closest("[aria-label='Toggle menu']")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isMenuOpen]);

  // Add smooth scrolling for anchor links
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only handle # links
    if (href.startsWith("#") && typeof window !== "undefined") {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);

      if (element) {
        // Close mobile menu
        setIsMenuOpen(false);

        // Smoothly scroll to element
        element.scrollIntoView({
          behavior: "smooth",
        });

        // Update URL hash without scroll jump
        window.history.pushState(null, "", href);
        setActiveHash(href);
      }
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#app", label: "App" },
    { href: "#projects", label: "Projects" },
    { href: "#team", label: "Team" },
    { href: "/location", label: "Location" },
    // { href: "/api/dashboard", label: "API Docs" },
  ];

  const isActive = (href: string) => {
    if (typeof window === "undefined") {
      return false; // Default for server-side rendering
    }

    if (href === "/") {
      return currentPath === "/" && !activeHash;
    }
    return href === activeHash;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 floating-navbar ${
        scrolled
          ? "bg-slate-800/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-slate-800/70 backdrop-blur-md py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between max-w-full py-2">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden">
            <img
              src="/images/meleket-logo.png"
              alt="Meleket Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-lg sm:text-xl font-bold">Meleket</span>
        </Link>

        <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isActive(link.href) ? "text-blue-500" : ""
              }`}
              onClick={(e) => handleAnchorClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4 z-50">
          <Button
            className="hidden md:flex rounded-full px-4 lg:px-6"
            size="sm"
            asChild
          >
            <a href="mailto:Melekettechnology@gmail.com">Contact us</a>
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button md:hidden flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-700 text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 active:scale-95 transition-transform touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-md z-40 pt-24 touch-auto mobile-menu-container overflow-y-auto pb-20 min-h-screen max-w-full"
          >
            <div className="container mx-auto px-2 flex flex-col gap-5 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base sm:text-lg font-medium transition-colors hover:text-blue-500 border-b border-slate-800 pb-3 active:bg-slate-800/50 active:scale-[0.98] transition-all touch-manipulation ${
                    isActive(link.href) ? "text-blue-500" : ""
                  }`}
                  onClick={(e) => {
                    handleAnchorClick(e, link.href);
                    if (!link.href.startsWith("#")) {
                      setIsMenuOpen(false);
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-6 mt-2">
                <Button className="w-full rounded-full" size="lg" asChild>
                  <a href="mailto:Melekettechnology@gmail.com">Contact us</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
