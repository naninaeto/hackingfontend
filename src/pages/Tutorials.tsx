import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiYoutube, FiExternalLink } from "react-icons/fi";

const Tutorials: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const tutorials = [
    {
      title: "Ethical Hacking in 12 Hours",
      description: "Comprehensive course covering all aspects of ethical hacking",
      url: "https://www.youtube.com/watch?v=fNzpcB7ODxQ",
      command: "youtube-dl --extract --format mp4 --quality hd"
    },
    {
      title: "Ethical Hacking 2025",
      description: "Updated full-length course for modern techniques",
      url: "https://www.youtube.com/watch?v=9LurNU-SEl8",
      command: "stream_capture --resolution 4k --codec h265"
    },
    {
      title: "Offensive Hacking Tutorials",
      description: "Playlist focusing on offensive cybersecurity",
      url: "https://www.youtube.com/playlist?list=PLC7T9tZLj0SGIBOqLflaj3n_Uoj3vdzyh",
      command: "playlist_download --parallel 8 --skip-existing"
    },
    {
      title: "Step-by-Step Hacking",
      description: "Beginner-friendly guide to ethical hacking",
      url: "https://www.youtube.com/watch?v=8z7wGVOv-SU",
      command: "tutorial_stream --speed 1.5x --subtitles en"
    },
    {
      title: "Full-Length Hacking Courses",
      description: "Collection of professional hacking courses",
      url: "https://www.youtube.com/playlist?list=PLLKT__MCUeixqHJ1TRqrHsEd6_EdEvo47",
      command: "course_download --batch --organize-by topic"
    }
  ];

  // Terminal typing effect
  useEffect(() => {
    const text = "load_tutorials --all --format=youtube";
    let i = 0;
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Blinking cursor effect
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 p-6 font-mono relative overflow-hidden">
      {/* Animated binary background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
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

      {/* Terminal header */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center mb-2">
          <div className="bg-red-500 w-3 h-3 rounded-full mr-2"></div>
          <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
          <div className="bg-green-500 w-3 h-3 rounded-full mr-4"></div>
          <div className="text-sm text-gray-500">terminal - hack-academy-tutorials</div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-700 p-6 shadow-lg">
          {/* Terminal prompt */}
          <div className="flex items-center mb-6">
            <span className="text-green-500">user@hack-academy:~$</span>
            <span className="ml-2">{typedText}</span>
            <span className={`h-5 w-3 bg-green-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
          </div>

          {/* Tutorial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-green-500 transition-colors"
              >
                <div className="p-4">
                  <div className="flex items-start mb-3">
                    <FiYoutube className="text-red-500 text-2xl mr-3 mt-1" />
                    <div>
                      <h3 className="font-bold text-green-400 mb-1">{tutorial.title}</h3>
                      <p className="text-gray-500 text-xs mb-2">
                        <span className="text-gray-600">#</span> {tutorial.description}
                      </p>
                      <p className="text-gray-600 text-xs font-mono truncate">
                        {tutorial.command}
                      </p>
                    </div>
                  </div>
                  <a
                    href={tutorial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-green-500 hover:text-green-300 transition-colors font-mono"
                  >
                    <FiExternalLink className="mr-1" />
                    $ execute_tutorial()
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal footer */}
          <div className="mt-8 pt-4 border-t border-gray-700 text-xs text-gray-500 font-mono">
            <p className="mb-1"># Type 'help' for available commands | CTRL+C to abort</p>
            <p>
              <span className="text-red-400">⚠</span> WARNING: For educational purposes only. 
              Obtain proper authorization before testing systems.
            </p>
            <p className="mt-2 text-green-500">user@hack-academy:~$ <span className="animate-pulse">_</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;