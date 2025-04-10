import React from "react";
import { motion } from "framer-motion";

const tutorials = [
  {
    title: "Ethical Hacking in 12 Hours - Full Course",
    description: "A comprehensive 12-hour course covering various aspects of ethical hacking.",
    url: "https://www.youtube.com/watch?v=fNzpcB7ODxQ",
  },
  {
    title: "Ethical Hacking Full Course 2025",
    description: "An updated full-length course on ethical hacking for 2025.",
    url: "https://www.youtube.com/watch?v=9LurNU-SEl8",
  },
  {
    title: "OFFENSIVE ETHICAL HACKING TUTORIALS",
    description: "A playlist focusing on offensive cybersecurity strategies and tactics.",
    url: "https://www.youtube.com/playlist?list=PLC7T9tZLj0SGIBOqLflaj3n_Uoj3vdzyh",
  },
  {
    title: "Ethical Hacking Full Course (Step-by-Step)",
    description: "A step-by-step guide to ethical hacking, suitable for beginners.",
    url: "https://www.youtube.com/watch?v=8z7wGVOv-SU",
  },
  {
    title: "Full-Length Hacking Courses",
    description: "A collection of full-length courses on ethical hacking.",
    url: "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47",
  },
];

const Tutorials: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Hacking Tutorials</h2>
      <p className="mb-4">
        Explore various tutorials on ethical hacking, penetration testing, and more. Click on a tutorial to start learning.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <motion.div
            key={tutorial.title}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
            <p className="mb-4">{tutorial.description}</p>
            <a
              href={tutorial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Watch Now
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
