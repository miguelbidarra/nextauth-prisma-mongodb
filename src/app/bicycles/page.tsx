"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BicycleDrawer from "@/components/BicycleDrawer";
import BicycleModal from "@/components/BicycleModal";

export default function Bicycles() {
  interface Bicycle {
    id: number;
    name: string;
    image: string;
    gears: number;
    wheelSize: number;
    frameSize: number;
  }

  const [bicycles, setBicycles] = useState<Bicycle[]>([]);
  const [selectedBicycle, setSelectedBicycle] = useState<Bicycle | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    async function fetchBicycles() {
      const response = await fetch("/api/bicycle");
      const data = await response.json();
      setBicycles(data);
    }
    fetchBicycles();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBicycleClick = (bicycle: Bicycle) => {
    setSelectedBicycle(bicycle);
    if (isLargeScreen) {
      setIsModalOpen(true);
    } else {
      setIsDrawerOpen(true);
    }
  };

  const handleDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedBicycle(null);
  };

  const handleModal = () => {
    setIsModalOpen(false);
    setSelectedBicycle(null);
  };

  return (
    <>
      <div className="min-h-screen bg-background text-text">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4 text-center text-primary">
            Available bicycles
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bicycles.map((bicycle) => (
              <motion.div
                key={bicycle.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBicycleClick(bicycle)}
              >
                <div className="flex flex-col bg-background relative rounded-2xl border text-gray-900 shadow">
                  <div className="flex-grow p-6 pt-0">
                    <div className="w-full h-48 mb-4 rounded-2xl overflow-hidden">
                      <Image
                        src={bicycle.image}
                        alt={bicycle.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <BicycleDrawer
        isDrawerOpen={isDrawerOpen}
        selectedBicycle={selectedBicycle}
        handleDrawer={handleDrawer}
      />
      <BicycleModal
        isModalOpen={isModalOpen}
        selectedBicycle={selectedBicycle}
        handleModal={handleModal}
      />
    </>
  );
}
