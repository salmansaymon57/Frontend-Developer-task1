import { motion } from "framer-motion";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-r from-green-100 to-transparent relative"
    >
      <div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-black">
          Trusted Partner for Your Website Develop.
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto text-gray-600">
          Building the worlds best marketing websites for over a decade. Your
          trusted partner for strategy, design, and dev.
        </p>
        <Button variant="primary">Schedule a Call</Button>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" aria-label="Twitter">
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" aria-label="Instagram">
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" aria-label="Facebook">
            <span className="sr-only">Facebook</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
