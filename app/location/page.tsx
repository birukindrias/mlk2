import { MapComponent } from "@/components/map-component";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Location | Meleket",
  description:
    "Find our office in Bole, Addis Ababa. Visit us or get in touch with our team.",
};

export default function LocationPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Visit Our Office
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Find us in the heart of Addis Ababa
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map container - takes 2/3 of the space on large screens */}
          <div className="lg:col-span-2">
            <MapComponent className="h-[400px] md:h-[500px] w-full" />
            <div className="mt-2 text-sm text-slate-500">
              Interactive map of our location in Bole, Addis Ababa
            </div>
          </div>

          {/* Contact details - takes 1/3 of the space */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-slate-900">Address</h3>
                  <p className="text-slate-600">
                    Bole Road, Friendship Building
                    <br />
                    5th Floor, Suite 501
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-slate-900">Phone</h3>
                  <p className="text-slate-600">
                    <a
                      href="tel:+251911234567"
                      className="hover:text-blue-600 transition-colors"
                    >
                      +251 911 234 567
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-slate-900">Email</h3>
                  <p className="text-slate-600">
                    <a
                      href="mailto:info@meleket.com"
                      className="hover:text-blue-600 transition-colors"
                    >
                      info@meleket.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-slate-900">Business Hours</h3>
                  <p className="text-slate-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=9.0056,38.7778"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Getting Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-slate-900 mb-2">
                Public Transportation
              </h3>
              <p className="text-slate-600">
                Several bus lines stop near our office. The closest bus stop is
                "Bole Friendship" which is just a 2-minute walk from our
                building.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900 mb-2">Parking</h3>
              <p className="text-slate-600">
                Free customer parking is available in the underground garage.
                Please take your parking ticket to our reception for validation.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900 mb-2">
                From the Airport
              </h3>
              <p className="text-slate-600">
                Our office is approximately 5 km from Bole International
                Airport. A taxi ride typically takes 15-20 minutes depending on
                traffic.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900 mb-2">
                Landmarks Nearby
              </h3>
              <p className="text-slate-600">
                We are located across from Friendship Shopping Center and a
                short walk from Bole Medhanialem Church.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
