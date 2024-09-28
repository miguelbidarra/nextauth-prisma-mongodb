import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Bicycle {
  id: number;
  name: string;
  image: string;
  gears: number;
  wheelSize: number;
  frameSize: number;
}

interface BicycleDrawerProps {
  isDrawerOpen: boolean;
  selectedBicycle: Bicycle | null;
  handleDrawer: () => void;
}

const BicycleDrawer: React.FC<BicycleDrawerProps> = ({
  isDrawerOpen,
  selectedBicycle,
  handleDrawer,
}) => {
  return (
    <AnimatePresence>
      {isDrawerOpen && selectedBicycle && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg rounded-t-2xl h-3/4"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{selectedBicycle.name}</h2>
            <button
              onClick={handleDrawer}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
          <div className="flex items-center">
            <div className="h-64 mb-4 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={selectedBicycle.image}
                alt={selectedBicycle.name}
                width={400}
                height={200}
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="text-2xl text-text">
            <p>Gears: {selectedBicycle.gears}</p>
            <p>Wheel Size: {selectedBicycle.wheelSize}</p>
            <p>Frame Size: {selectedBicycle.frameSize} </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BicycleDrawer;
