import Link from "next/link";
import {
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 w-full max-w-full overflow-x-hidden">
      <div className="container py-16 mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-white">Meleket</span>
            </Link>
            <p className="text-slate-400 mb-6">
              A leading Ethiopian company in the information technology and
              advertising industry, providing comprehensive contact directories
              and digital solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5 text-slate-300" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5 text-slate-300" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5 text-slate-300" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-slate-300" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#app-development"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3 w-3" />
                  Application Software
                </Link>
              </li>
              <li>
                <Link
                  href="#web-design"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3 w-3" />
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  href="#digital-marketing"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3 w-3" />
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#event-organizing"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3 w-3" />
                  Event Organizing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3 w-3" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3 w-3" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3 w-3" />
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3 w-3" />
                  Press & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3 w-3" />
                  Our Location
                </Link>
              </li>
              <li>
                <a
                  href="mailto:Melekettechnology@gmail.com"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ArrowRight className="h-3 w-3" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Subscribe</h3>
            <p className="text-slate-400 mb-4">
              Subscribe to our newsletter to receive updates and exclusive
              offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Meleket Technology PLC. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
