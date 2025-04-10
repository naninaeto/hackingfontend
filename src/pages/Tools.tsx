import React from "react";
import { motion } from "framer-motion";

interface Tool {
  name: string;
  description: string;
  link: string;
}

interface Category {
  title: string;
  tools: Tool[];
}

const hackingCategories: Category[] = [
  {
    title: "Operating Systems",
    tools: [
      {
        name: "Kali Linux",
        description:
          "A Debian-based Linux distribution designed for digital forensics and penetration testing, offering a vast array of pre-installed security tools.",
        link: "https://www.kali.org/",
      },
    ],
  },
  {
    title: "Network Security",
    tools: [
      {
        name: "Nmap",
        description:
          "A versatile network scanner used to discover hosts and services on a computer network, thus creating a 'map' of the network.",
        link: "https://nmap.org/",
      },
      {
        name: "Wireshark",
        description:
          "A network protocol analyzer that enables you to capture and interactively browse the traffic running on a computer network.",
        link: "https://www.wireshark.org/",
      },
    ],
  },
  {
    title: "Web Security",
    tools: [
      {
        name: "Burp Suite",
        description:
          "An integrated platform for performing security testing of web applications, providing a range of tools with numerous interfaces between them.",
        link: "https://portswigger.net/burp",
      },
      {
        name: "Nikto",
        description:
          "An open-source web server scanner that performs comprehensive tests against web servers for multiple items, including over 6700 potentially dangerous files/programs.",
        link: "https://cirt.net/Nikto2",
      },
      {
        name: "SQLmap",
        description:
          "An open-source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over database servers.",
        link: "http://sqlmap.org/",
      },
    ],
  },
  {
    title: "Password Cracking",
    tools: [
      {
        name: "John the Ripper",
        description:
          "A fast password cracker, currently available for many flavors of Unix, macOS, Windows, DOS, BeOS, and OpenVMS.",
        link: "https://www.openwall.com/john/",
      },
    ],
  },
  {
    title: "Wireless Security",
    tools: [
      {
        name: "Aircrack-ng",
        description:
          "A suite of tools for assessing WiFi network security, focusing on monitoring, attacking, testing, and cracking.",
        link: "https://www.aircrack-ng.org/",
      },
    ],
  },
  {
    title: "Social Engineering",
    tools: [
      {
        name: "Social-Engineer Toolkit (SET)",
        description:
          "An open-source Python-driven tool aimed at penetration testing around social engineering, featuring a number of custom attack vectors.",
        link: "https://github.com/trustedsec/social-engineer-toolkit",
      },
    ],
  },
  {
    title: "Exploitation Frameworks",
    tools: [
      {
        name: "Metasploit Framework",
        description:
          "A powerful platform for developing, testing, and executing exploits against various systems, aiding in vulnerability assessment and penetration testing.",
        link: "https://www.metasploit.com/",
      },
    ],
  },
];

const Tools: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Hacking Tools</h2>
      <p className="mb-4">
        Discover some of the most effective tools used for ethical hacking and
        penetration testing. Click on each tool to learn more.
      </p>
      {hackingCategories.map((category) => (
        <div key={category.title} className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-400">
            {category.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.tools.map((tool) => (
              <motion.div
                key={tool.name}
                className="bg-gray-800 text-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4 className="text-lg font-semibold mb-2">{tool.name}</h4>
                <p className="mb-4">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;