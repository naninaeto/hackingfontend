import React, { useState, useEffect } from "react";
import { FiYoutube, FiBook, FiCode, FiTerminal, FiGitBranch, FiDownload, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof resources>("youtube");
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Terminal typing effect
  useEffect(() => {
    const text = "hack-academy-resources --load";
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

  const resources = {
    youtube: [
      {
        title: "Ethical Hacking Full Course",
        source: "Simplilearn",
        url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
        icon: <FiYoutube className="text-red-500" />,
        command: "youtube-dl --extract-audio --format mp4"
      },
      {
        title: "Complete Ethical Hacking Course",
        source: "FreeCodeCamp",
        url: "https://www.youtube.com/watch?v=fNzpcB7ODxQ",
        icon: <FiYoutube className="text-red-500" />,
        command: "stream_capture --quality=hd"
      },
      {
        title: "CEH v11 Introduction",
        source: "Simplilearn",
        url: "https://www.youtube.com/watch?v=9aMYOJbFY9c",
        icon: <FiYoutube className="text-red-500" />,
        command: "video_lectures --playlist CEHv11"
      }
    ],
    books: [
      {
        title: "Web App Hacker's Handbook",
        source: "Exploit-DB",
        url: "https://www.exploit-db.com/docs/english/42556-the-web-application-hackers-handbook.pdf",
        icon: <FiBook className="text-yellow-500" />,
        command: "wget --pdf --no-check-certificate"
      },
      {
        title: "Web Hacking 101",
        source: "No Starch Press",
        url: "https://nostarch.com/download/webhacking.pdf",
        icon: <FiBook className="text-yellow-500" />,
        command: "curl -O --insecure"
      },
      {
        title: "Metasploit Guide",
        source: "Offensive Security",
        url: "https://repo.zenk-security.com/Metasploit/The%20Metasploit%20Guide%20-%20David%20Kennedy.pdf",
        icon: <FiBook className="text-yellow-500" />,
        command: "pdf_download --override-security"
      }
    ],
    labs: [
      {
        title: "Hack The Box",
        source: "HTB",
        url: "https://www.hackthebox.com/",
        icon: <FiTerminal className="text-green-500" />,
        command: "ssh root@hackthebox -p 1337"
      },
      {
        title: "TryHackMe",
        source: "TryHackMe",
        url: "https://www.tryhackme.com/",
        icon: <FiTerminal className="text-green-500" />,
        command: "vpn_connect --server tryhackme.com"
      },
      {
        title: "OverTheWire",
        source: "OTW",
        url: "https://overthewire.org/wargames/",
        icon: <FiTerminal className="text-green-500" />,
        command: "telnet bandit.labs.overthewire.org"
      }
    ],
    tools: [
      {
        title: "Kali Linux",
        source: "Offensive Security",
        url: "https://www.kali.org/downloads/",
        icon: <FiDownload className="text-purple-500" />,
        command: "sudo apt-get install kali-linux-full"
      },
      {
        title: "Burp Suite",
        source: "PortSwigger",
        url: "https://portswigger.net/burp",
        icon: <FiCode className="text-purple-500" />,
        command: "java -jar burpsuite_pro.jar"
      },
      {
        title: "SQLMap",
        source: "GitHub",
        url: "https://github.com/sqlmapproject/sqlmap",
        icon: <FiGitBranch className="text-purple-500" />,
        command: "python sqlmap.py -u target.com --dbs"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-6 font-mono relative overflow-hidden mt-10">
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
          <div className="text-sm text-gray-500">terminal - hack-academy-resources</div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-700 p-6 shadow-lg">
          {/* Terminal prompt */}
          <div className="flex items-center mb-6">
            <span className="text-green-500">user@hack-academy:~$</span>
            <span className="ml-2">{typedText}</span>
            <span className={`h-5 w-3 bg-green-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
          </div>

          {/* Tab navigation - styled as CLI options */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.keys(resources).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as keyof typeof resources)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors border ${
                  activeTab === tab
                    ? "bg-green-900 text-green-400 border-green-500"
                    : "bg-gray-800 text-gray-500 border-gray-700 hover:border-green-500"
                }`}
              >
                {tab === "youtube" && <FiYoutube className="inline mr-2" />}
                {tab === "books" && <FiBook className="inline mr-2" />}
                {tab === "labs" && <FiTerminal className="inline mr-2" />}
                {tab === "tools" && <FiCode className="inline mr-2" />}
                --{tab}
              </button>
            ))}
          </div>

          {/* Resource cards - styled as terminal output */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources[activeTab].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-green-500 transition-colors"
              >
                <div className="p-4">
                  <div className="flex items-start mb-3">
                    <div className="text-2xl mr-3 mt-1">{resource.icon}</div>
                    <div>
                      <h3 className="font-bold text-green-400 mb-1">{resource.title}</h3>
                      <p className="text-gray-500 text-xs mb-2">
                        <span className="text-gray-600">#</span> {resource.source}
                      </p>
                      <p className="text-gray-600 text-xs font-mono truncate">
                        {resource.command}
                      </p>
                    </div>
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-green-500 hover:text-green-300 transition-colors font-mono"
                  >
                    <FiExternalLink className="mr-1" />
                    $ open_resource()
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal footer */}
          <div className="mt-8 pt-4 border-t border-gray-700 text-xs text-gray-500 font-mono">
            <p className="mb-1"># Available commands: --youtube, --books, --labs, --tools</p>
            <p>
              <span className="text-red-400">⚠</span> WARNING: These resources are for educational purposes only. 
              Unauthorized access is illegal.
            </p>
            <p className="mt-2 text-green-500">user@hack-academy:~$ <span className="animate-pulse">_</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;