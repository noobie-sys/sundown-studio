'use client'
import Navbar from "@/components/Navbar";
import Lenis from '@studio-freight/lenis'
import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);
  return (
    <div className="h-full bg-cream ">
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
