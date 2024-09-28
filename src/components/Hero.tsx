import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-8 py-40 flex flex-col md:flex-row items-center">
        <div className="lg:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl text-text font-bold mb-6">
            Ride, Return, Repeat with{" "}
            <span className="text-accent">re</span>
            <span className="text-primary">Bike</span>
          </h1>
          <p className="text-xl mb-8">
            A sustainable solution for short-term bike needs. Rent a second-hand
            bike and return it when you&apos;re done.
          </p>
          <div className="space-x-4 md:flex md:justify-center">
            <Link
              href="/bikes"
              className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Find a Bike
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/rebike.svg"
            alt="Rebike hero"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
