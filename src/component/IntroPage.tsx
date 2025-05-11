import { motion } from 'framer-motion';
import bg from "../assets/bg.png"; 
import { useMemo } from 'react';

const IntroPage = () => {
  // Memoized binary code generation to prevent re-renders
  const generateBinaryCode = (length: number): string => {
    return Array.from({ length }, () => Math.floor(Math.random() * 2)).join('');
  };

  // Pre-generate binary code matrix for better performance
  const binaryCode = useMemo(() => {
    return Array.from({ length: 100 }, () => generateBinaryCode(80)).join('\n');
  }, []);

  // Animation variants for better maintainability
  const backgroundVariants = {
    animate: {
      y: ['-100%', '100%'],
      transition: {
        repeat: Infinity,
        duration: 8,
        ease: 'linear'
      }
    }
  };

  const logoVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 2 }
    }
  };

  const warningVariants = {
    animate: {
      opacity: [1, 0.5, 1],
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "linear"
      }
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Binary background */}
      <motion.div
        className="absolute top-0 left-0 h-screen w-screen text-green-500 font-mono text-sm whitespace-pre-wrap select-none opacity-60 pointer-events-none"
        variants={backgroundVariants}
        animate="animate"
      >
        {binaryCode}
      </motion.div>

      {/* Main logo */}
      <motion.div
        className="absolute flex items-center justify-center"
        variants={logoVariants}
        initial="initial"
        animate="animate"
      >
        <img 
          src={bg} 
          alt="Skull and Crossbones" 
          className="w-48 md:w-64 lg:w-80"
          draggable="false"
        />
      </motion.div>

      {/* Warning text */}
      <motion.div
        className="absolute flex items-center justify-center text-red-700 text-4xl md:text-5xl font-bold mix-blend-overlay pointer-events-none"
        variants={warningVariants}
        animate="animate"
      >
        WARNING
      </motion.div>
    </div>
  );
};

export default IntroPage;