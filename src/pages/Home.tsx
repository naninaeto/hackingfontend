import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiTerminal, FiCode, FiCpu, FiShield } from "react-icons/fi";

const Home: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const phrases = [
    "ethical_hacking_resources",
    "cyber_security_tools",
    "penetration_testing",
    "reverse_engineering"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    let currentText = "";
    let i = 0;
    const typingSpeed = 100; // ms per character
    const deletingSpeed = 50; // ms per character when deleting
    const pauseBetween = 1500; // ms pause between phrases

    let timeoutId: number;
    const typeWriter = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (i < currentPhrase.length) {
        currentText = currentPhrase.substring(0, i + 1);
        setTypedText(currentText);
        timeoutId = window.setTimeout(typeWriter, typingSpeed);
      } else {
        timeoutId = window.setTimeout(() => {
          const deleteText = () => {
            if (currentText.length > 0) {
              currentText = currentText.substring(0, currentText.length - 1);
              setTypedText(currentText);
              timeoutId = window.setTimeout(deleteText, deletingSpeed);
            } else {
              setCurrentPhraseIndex(
                (prevIndex) => (prevIndex + 1) % phrases.length
              );
              i = 0;
              timeoutId = window.setTimeout(typeWriter, typingSpeed);
            }
          };
          deleteText();
        }, pauseBetween);
      }
    };

    typeWriter();

    return () => clearTimeout(timeoutId);
  }, [currentPhraseIndex, phrases]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden mt-4">
      {/* Animated binary background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="text-green-400 text-xs font-mono whitespace-nowrap absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 30 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: 50 })
              .map(() => Math.round(Math.random()))
              .join("")}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl text-center relative z-10">
        {/* Terminal-style header */}
        <div className="flex items-center justify-center mb-6">
          <FiTerminal className="text-green-400 mr-2 text-2xl" />
          <span className="font-mono text-green-400 text-sm">
            user@hacking-academy:~$
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-white"
        >
          <span className="text-green-400">$</span> Welcome to{" "}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Hacking Academy
          </span>
        </motion.h1>

        {/* Typing effect subtitle */}
        <div className="min-h-[2.5rem] mb-8">
          <p className="font-mono text-gray-300 text-lg md:text-xl">
            {">"} Your source for{" "}
            <span className="text-green-400 border-r-2 border-green-400 animate-pulse">
              {typedText}
            </span>
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {[
            {
              icon: <FiCode className="text-2xl" />,
              title: "Tutorials",
              desc: "Step-by-step ethical hacking guides",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: <FiCpu className="text-2xl" />,
              title: "Tools",
              desc: "Curated collection of security tools",
              color: "from-purple-500 to-purple-600",
            },
            {
              icon: <FiShield className="text-2xl" />,
              title: "Resources",
              desc: "Cheatsheets & documentation",
              color: "from-green-500 to-green-600",
            },
            {
              icon: <FiTerminal className="text-2xl" />,
              title: "Labs",
              desc: "Hands-on vulnerable environments",
              color: "from-yellow-500 to-yellow-600",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${feature.color} p-0.5 rounded-lg`}
            >
              <div className="bg-gray-900 rounded-lg p-4 h-full flex items-start">
                <div className="mr-4 mt-1 text-white">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/tutorials"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-mono flex items-center hover:shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            <FiCode className="mr-2" />
            explore_tutorials()
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/tools"
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-mono flex items-center hover:shadow-lg hover:shadow-green-500/20 transition-all"
          >
            <FiCpu className="mr-2" />
            browse_tools()
          </motion.a>
        </div>

        {/* Footer note */}
        <div className="mt-12 font-mono text-xs text-gray-500 border-t border-gray-800 pt-4">
          <p>// Always practice ethical hacking with proper authorization</p>
        </div>
      </div>
    </div>
  );
};

export default Home;