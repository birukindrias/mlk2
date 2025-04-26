import { InfoCardsGrid } from "@/components/info-cards-grid";
import { Footer } from "@/components/footer";

export default function InfoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      <main className="flex-1">
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-screen-xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Essential Information
              </h1>
              <p className="text-lg text-blue-100">
                Access vital information and emergency contacts for all regions
                of Ethiopia.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <InfoCardsGrid />
            </div>

            <div className="mt-16 max-w-xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Need assistance?
                </h2>
                <p className="text-blue-100 mb-6">
                  Our support team is available 24/7 to help you find the
                  information you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition">
                    Contact Support
                  </button>
                  <button className="flex-1 bg-transparent border border-white/20 hover:bg-white/10 text-white py-2 px-4 rounded-lg transition">
                    Browse Directory
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
