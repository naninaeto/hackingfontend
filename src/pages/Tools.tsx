import React, { JSX } from "react";
import { motion } from "framer-motion";
import { FiTerminal, FiCpu, FiWifi, FiLock, FiGlobe, FiCode, FiShield } from "react-icons/fi";

interface Tool {
  name: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

interface Category {
  title: string;
  icon: JSX.Element;
  tools: Tool[];
}

const hackingCategories: Category[] = [
  {
    title: "Operating Systems",
    icon: <FiTerminal className="text-green-500" />,
    tools: [
      {
        name: "Kali Linux",
        description: "Debian-based distro for penetration testing with 600+ pre-installed tools.",
        link: "https://www.kali.org/",
        icon: <FiTerminal className="text-green-400" />
      }
    ]
  },
  {
    title: "Network Security",
    icon: <FiCpu className="text-blue-500" />,
    tools: [
      {
        name: "Nmap",
        description: "Network mapper for host discovery and service detection.",
        link: "https://nmap.org/",
        icon: <FiCpu className="text-blue-400" />
      },
      {
        name: "Wireshark",
        description: "Network protocol analyzer for traffic inspection.",
        link: "https://www.wireshark.org/",
        icon: <FiCpu className="text-blue-400" />
      }
    ]
  },
  {
    title: "Web Security",
    icon: <FiGlobe className="text-yellow-500" />,
    tools: [
      {
        name: "Burp Suite",
        description: "Integrated platform for web application security testing.",
        link: "https://portswigger.net/burp",
        icon: <FiGlobe className="text-yellow-400" />
      },
      {
        name: "Nikto",
        description: "Web server scanner with 6700+ vulnerability tests.",
        link: "https://cirt.net/Nikto2",
        icon: <FiGlobe className="text-yellow-400" />
      },
      {
        name: "SQLmap",
        description: "Automated SQL injection and database takeover tool.",
        link: "http://sqlmap.org/",
        icon: <FiGlobe className="text-yellow-400" />
      }
    ]
  },
  {
    title: "Password Cracking",
    icon: <FiLock className="text-red-500" />,
    tools: [
      {
        name: "John the Ripper",
        description: "Fast password cracker supporting multiple hash types.",
        link: "https://www.openwall.com/john/",
        icon: <FiLock className="text-red-400" />
      }
    ]
  },
  {
    title: "Wireless Security",
    icon: <FiWifi className="text-purple-500" />,
    tools: [
      {
        name: "Aircrack-ng",
        description: "WiFi security assessment suite for monitoring and cracking.",
        link: "https://www.aircrack-ng.org/",
        icon: <FiWifi className="text-purple-400" />
      }
    ]
  },
  {
    title: "Social Engineering",
    icon: <FiShield className="text-pink-500" />,
    tools: [
      {
        name: "Social-Engineer Toolkit (SET)",
        description: "Python-based tool for social engineering penetration tests.",
        link: "https://github.com/trustedsec/social-engineer-toolkit",
        icon: <FiShield className="text-pink-400" />
      }
    ]
  },
  {
    title: "Exploitation Frameworks",
    icon: <FiCode className="text-orange-500" />,
    tools: [
      {
        name: "Metasploit Framework",
        description: "Platform for developing/testing exploits against vulnerable systems.",
        link: "https://www.metasploit.com/",
        icon: <FiCode className="text-orange-400" />
      }
    ]
  }
];

const Tools: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 font-mono">
      {/* Terminal-style header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6 border-b border-gray-700 pb-4">
          <FiTerminal className="text-green-400 mr-2 text-xl" />
          <h1 className="text-2xl font-bold text-green-400">
            root@hack-academy:<span className="text-yellow-400">~/tools</span>
            <span className="text-green-400 animate-pulse">#</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-8 text-sm">
          // Discover essential tools for ethical hacking and penetration testing
        </p>

        {/* Categories */}
        {hackingCategories.map((category, catIndex) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            className="mb-10"
          >
            <div className="flex items-center mb-4">
              <div className="text-xl mr-3">{category.icon}</div>
              <h2 className="text-xl font-bold text-white">
                {category.title.toUpperCase()}
              </h2>
            </div>

            {/* Tools grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-green-500 transition-all"
                >
                  <div className="p-5">
                    <div className="flex items-start mb-3">
                      <div className="text-2xl mr-3">{tool.icon}</div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{tool.name}</h3>
                        <p className="text-gray-400 text-sm">
                          <span className="text-gray-600">//</span> {tool.description}
                        </p>
                      </div>
                    </div>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-green-400 hover:text-green-300 transition-colors"
                    >
                      <span className="mr-1">$</span> visit_tool()
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Ethical disclaimer */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-xs text-gray-500">
          <p>
            <span className="text-gray-600">//</span> 🔒 These tools should only be used for legal security research and ethical hacking purposes.
            Unauthorized access to computer systems is illegal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tools;