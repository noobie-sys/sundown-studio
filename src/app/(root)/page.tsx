"use client";
import GradientBox from "@/components/GradinetBox";
import HomePage from "@/components/HomePageSection";
import { CldVideoPlayer } from "next-cloudinary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  text-blackish overflow-hidden relative ">
      <HomePage />
    </main>
  );
}
