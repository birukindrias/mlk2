"use client";

import React from "react";
import { PageTransition } from "@/components/page-transition";

export function withPageTransition<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> {
  return function WithPageTransitionComponent(props: P) {
    return (
      <PageTransition>
        <Component {...props} />
      </PageTransition>
    );
  };
} 