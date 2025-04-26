"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formState);
    // Reset form
    setFormState({ name: "", email: "", message: "" });
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <Badge
            variant="outline"
            className="px-3 py-1.5 mb-4 md:mb-6 text-sm font-medium border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300"
          >
            Get In Touch
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Ready to <span className="text-gradient">Connect</span>?
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
            Have questions or need more information? Reach out to us.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-blue-200 dark:border-blue-800 focus:border-blue-400 dark:focus:border-blue-600"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="rounded-lg border-blue-200 dark:border-blue-800 focus:border-blue-400 dark:focus:border-blue-600"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[120px] sm:min-h-[150px] rounded-lg border-blue-200 dark:border-blue-800 focus:border-blue-400 dark:focus:border-blue-600"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full rounded-lg">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="text-center mt-3">
                    <a
                      href="mailto:Melekettechnology@gmail.com"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Or email us directly
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="bg-gradient-to-b text-white p-5 sm:p-6 md:p-8">
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Contact Information
              </h4>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-blue-100">+251 912 05 34 79</p>
                    <p className="text-blue-100">+251 923 58 17 41 </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:Melekettechnology@gmail.com"
                      className="text-blue-100 hover:text-blue-200 transition-colors break-words"
                    >
                      Melekettechnology@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-blue-100">
                      Bole Road, Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Our Location
              </h3>
              <div className="rounded-xl overflow-hidden h-48 sm:h-56 md:h-64 mb-4 sm:mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19840.840184950604!2d38.74689!3d9.03006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853bf04df2e1%3A0xd79f4e6844c25857!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1713777650246!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Our headquarters is located in the heart of Addis Ababa,
                Ethiopia's vibrant capital city. We're easily accessible and
                always ready to welcome you for a face-to-face conversation.
              </p>
              <Button
                variant="outline"
                className="rounded-full border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/dir/?api=1&destination=Bole+Road+Addis+Ababa+Ethiopia",
                    "_blank"
                  )
                }
              >
                Get Directions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-700">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-700">
                  <span className="font-medium">Saturday</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
