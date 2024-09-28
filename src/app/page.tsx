"use client";

import { useState } from "react";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import Roadmap from "@/components/Roadmap";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <Hero />
      <div className="flex justify-center my-2 w-full">
        <Image
          src="/road.svg"
          alt="Description of the image"
          width={500}
          height={500}
          className="w-full h-auto fill-primary"
        />
      </div>
      <Roadmap />
      <div className="flex justify-center my-2 w-full">
        <Image
          src="/road-green.svg"
          alt="Description of the image"
          width={500}
          height={500}
          className="w-full h-auto transform scale-x-[-1]"
        />
      </div>
      <FAQ openFaq={openFaq} toggleFaq={toggleFaq} />
      <Footer />
    </div>
  );
}
