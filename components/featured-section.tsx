"use client";

import { ArrowRight, CheckCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturedSection() {
  return (
    <section
      id="featured"
      className="bg-gradient-to-r from-blue-950 to-indigo-950 overflow-hidden"
    >
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 mb-10 text-sm font-medium text-primary bg-blue-900 rounded-full">
              Why Choose Meleket
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Ethiopia's Premier Contact Directory & Digital Solutions Provider
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Meleket Technology PLC specializes in providing telephone numbers
              and emergency contact services to businesses and individuals. Our
              platform serves as a comprehensive directory of contact
              information, ensuring that essential numbers are readily
              available.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Comprehensive Directory
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Access to over 10,000 business and emergency contacts across
                    Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">
                    Digital Marketing Excellence
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Strategic promotion solutions to help businesses reach their
                    target audience
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Local Expertise</h3>
                  <p className="text-lg text-muted-foreground">
                    Deep understanding of the Ethiopian market and business
                    landscape
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="gap-2 px-8 py-6 h-auto text-lg">
              Learn More
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="lg:h-auto relative">
            <div className="w-full max-w-full">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Ethiopian business meeting"
                className="rounded-lg shadow-xl object-cover w-full max-h-[500px]"
              />

              {/* Testimonial card overlay */}
              <div className="bg-slate-800 p-4 rounded-lg shadow-xl max-w-xs absolute bottom-0 right-0 translate-y-1/3 lg:translate-y-1/4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-700 text-white h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold">
                    M
                  </div>
                  <div>
                    <p className="font-medium text-white">Meleket App</p>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="text-sm text-yellow-400 ml-1">4.9</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-blue-100 mb-1">
                  "Essential app for anyone in Ethiopia. Saved me countless
                  times when I needed emergency contacts!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
