"use client";

import React, { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  alignRight?: boolean;
  badges?: string[];
  progress?: {
    value: number;
    label: string;
  };
  button?: {
    label: string;
    icon?: ReactNode;
  };
  avatars?: {
    count: number;
    countLabel: string;
  };
}

export function InfoCard({
  icon,
  title,
  description,
  alignRight = false,
  badges,
  progress,
  button,
  avatars,
}: InfoCardProps) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/10 ${
        alignRight ? "mt-0 sm:mt-4 md:mt-6" : ""
      }`}
    >
      <div className="flex items-center gap-1 mb-1">
        <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-white text-xs">
          {icon}
        </div>
        <div>
          <p className="font-medium text-white text-xs">{title}</p>
        </div>
      </div>

      <p className="text-[10px] text-white/80 mb-2">{description}</p>

      {badges && badges.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              className="bg-white/10 text-white hover:bg-white/20 text-[10px] px-1.5 py-0.5"
            >
              {badge}
            </Badge>
          ))}
        </div>
      )}

      {progress && (
        <>
          <div className="w-full bg-white/10 rounded-full h-1 mb-1">
            <div
              className="bg-blue-400 h-1 rounded-full"
              style={{ width: `${progress.value}%` }}
            ></div>
          </div>
          <p className="text-[10px] text-white/80 text-right">{progress.label}</p>
        </>
      )}

      {button && (
        <Button
          variant="outline"
          size="sm"
          className="w-full rounded-full border-white/20 text-white hover:bg-white/10 py-0.5 h-auto text-[11px] mt-2"
        >
          {button.label}
          {button.icon || (
            <ChevronRight className="h-3 w-3 ml-1" />
          )}
        </Button>
      )}

      {avatars && (
        <div className="flex items-center justify-between mt-2">
          <div className="flex -space-x-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-5 w-5 rounded-full border-2 border-white overflow-hidden"
              >
                <img
                  src={`/images/team-member-${i + 1}.jpg`}
                  alt={`User ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            <div className="h-5 w-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-[9px] font-medium border-2 border-white">
              {avatars.countLabel}
            </div>
          </div>
          <Badge className="bg-white/10 text-white hover:bg-white/20 text-[10px] px-1.5 py-0.5">
            Join Now
          </Badge>
        </div>
      )}
    </div>
  );
}