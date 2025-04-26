"use client";

import { Globe, Shield, Clock, Users } from "lucide-react";
import { InfoCard } from "@/components/info-card";

export function InfoCardsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
      {/* Nationwide Coverage Card */}
      <InfoCard
        icon={<Globe className="h-4 w-4 md:h-5 md:w-5" />}
        title="Nationwide Coverage"
        description="Our directory covers all regions of Ethiopia, providing essential contacts for every city and town."
        badges={["11 Regions", "All Major Cities"]}
      />

      {/* Emergency Services Card */}
      <InfoCard
        icon={<Shield className="h-4 w-4 md:h-5 md:w-5" />}
        title="Emergency Services"
        description="Quick access to emergency contacts including police, ambulance, and fire services."
        button={{ label: "Emergency Contacts" }}
        alignRight={true}
      />

      {/* 24/7 Availability Card */}
      <InfoCard
        icon={<Clock className="h-4 w-4 md:h-5 md:w-5" />}
        title="24/7 Availability"
        description="Our services are available around the clock, ensuring you always have access when you need it."
        progress={{ value: 99.9, label: "99.9% Uptime" }}
      />

      {/* Growing Community Card */}
      <InfoCard
        icon={<Users className="h-4 w-4 md:h-5 md:w-5" />}
        title="Growing Community"
        description="Join our growing community of users and businesses across Ethiopia."
        avatars={{ count: 4, countLabel: "+250K" }}
        alignRight={true}
      />
    </div>
  );
}
