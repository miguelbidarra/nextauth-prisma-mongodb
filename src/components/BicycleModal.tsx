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

interface BicycleModalProps {
  isModalOpen: boolean;
  selectedBicycle: Bicycle | null;
  handleModal: () => void;
}

const BicycleModal: React.FC<BicycleModalProps> = ({
  isModalOpen,
  selectedBicycle,
  handleModal,
}) => {
  return (
    <AnimatePresence>
      {isModalOpen && selectedBicycle && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0"
        >
          <div className="bg-white p-4 shadow-lg rounded-2xl w-4/5 max-w-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-center w-full">{selectedBicycle.name}</h2>
              <button
                onClick={handleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
              <div className="h-32 w-full sm:w-1/2 mb-4 sm:mb-0 rounded-2xl overflow-hidden">
                <Image
                  src={selectedBicycle.image}
                  alt={selectedBicycle.name}
                  width={400}
                  height={200}
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="text-2xl text-text sm:w-1/2 sm:pl-4">
                <p>Gears: {selectedBicycle.gears}</p>
                <p>Wheel Size: {selectedBicycle.wheelSize}</p>
                <p>Frame Size: {selectedBicycle.frameSize}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BicycleModal;