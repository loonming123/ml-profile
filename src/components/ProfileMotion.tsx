"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function ProfileMotion({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        intro
          .from(".hero-copy", { y: 28, autoAlpha: 0, duration: 0.8 })
          .from(".hero-card", { y: 28, autoAlpha: 0, duration: 0.7 }, "-=0.55")
          .from(".hero-kicker > *", { y: 12, autoAlpha: 0, duration: 0.45, stagger: 0.08 }, "-=0.35")
          .from(".cta-row > *", { y: 10, autoAlpha: 0, duration: 0.4, stagger: 0.08 }, "-=0.25")
          .from(".micro-metrics > *", { y: 12, autoAlpha: 0, duration: 0.4, stagger: 0.08 }, "-=0.2")
          .from(".stat-card, .impact-card", { y: 20, autoAlpha: 0, duration: 0.55, stagger: 0.08 }, "-=0.15")
          .from(".panel", { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.1 }, "-=0.25")
          .from(".chip", { scale: 0.92, autoAlpha: 0, duration: 0.3, stagger: 0.025 }, "-=0.25");
      });

      return () => media.revert();
    },
    { scope },
  );

  return <main ref={scope}>{children}</main>;
}
