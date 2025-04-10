
import { motion } from 'framer-motion';
import bg from "../assets/bg.png"; 

const IntroPage = () => {

  const generateBinaryCode = (length: number) => {
    let binary = '';
    for (let i = 0; i < length; i++) {
      binary += Math.round(Math.random());
    }
    return binary;
  };


  const binaryCode = Array(100)
    .fill(null)
    .map(() => generateBinaryCode(80))
    .join('\n');

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center">
      
      <motion.div
        className="absolute top-0 left-0 h-screen w-screen text-green-500 font-mono text-sm whitespace-pre-wrap user-select-none opacity-60"
        animate={{ y: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
      >
        {binaryCode}
      </motion.div>

      
      <motion.div
        className="absolute flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img src={bg} alt="Skull and Crossbones" className="w-48 md:w-64 lg:w-80" />
      </motion.div>

     
      <motion.div
  className="absolute flex items-center justify-center text-red-700 text-4xl md:text-5xl font-bold mix-blend-overlay"
  animate={{
    opacity: [1, 0.5, 1], 
    rotate: [0, 360], 
  }}
  transition={{
    repeat: Infinity,
    duration: 3, 
    ease: "linear", 
  }}
>
  WARNING
</motion.div>

    </div>
  );
};

export default IntroPage;
