"use client";
import GradientBox from "@/components/GradinetBox";
import HomePage from "@/components/HomePageSection";
import AboutSection from "@/components/HomePageSection/AboutSection";
import Marquee from "@/components/marquee/marquee";
import { CldVideoPlayer } from "next-cloudinary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  text-blackish overflow-hidden relative ">
      <HomePage />
      <Marquee />
      <AboutSection />
    </main>
  );
}
