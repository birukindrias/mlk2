"use client";

import { InfoCardsGrid } from "@/components/info-cards-grid";
import { Footer } from "@/components/footer";

export default function InfoCardsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      <main className="flex-1 py-12 md:py-20">
        <section className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 text-center">
              Connecting
              <br className="sm:hidden" /> Ethiopia
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-center mb-10 md:mb-16">
              Meleket Technology provides comprehensive contact directories and
              innovative digital solutions for businesses and individuals across
              Ethiopia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="col-span-full lg:col-span-2">
                <InfoCardsGrid />
              </div>

              <div className="hidden lg:block relative">
                <div className="sticky top-24">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-semibold mb-4">Get Started</h2>
                    <p className="text-gray-300 mb-6">
                      Download our app or contact us to learn more about our
                      services.
                    </p>
                    <div className="space-y-3">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition">
                        Download App
                      </button>
                      <button className="w-full bg-transparent border border-white/20 hover:bg-white/10 text-white py-2 px-4 rounded-lg transition">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:hidden">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h2 className="text-xl font-semibold mb-4">Get Started</h2>
                <p className="text-gray-300 mb-6">
                  Download our app or contact us to learn more about our
                  services.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition">
                    Download App
                  </button>
                  <button className="w-full bg-transparent border border-white/20 hover:bg-white/10 text-white py-2 px-4 rounded-lg transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
