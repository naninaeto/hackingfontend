import React from "react";

const Resources: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-green-500 mb-4">Ethical Hacking Resources</h2>
      <p className="text-gray-400 mb-6">
        Access free courses, books, and tools to enhance your hacking and cybersecurity skills.
      </p>

      {/* YouTube Courses */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-green-400 mb-2">📺 YouTube Courses</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <a
              href="https://www.youtube.com/watch?v=3Kq1MIfTWCE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Ethical Hacking Full Course - 10 Hours (Simplilearn)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=fNzpcB7ODxQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Complete Ethical Hacking Course - 15 Hours (FreeCodeCamp)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=9aMYOJbFY9c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Introduction to Ethical Hacking - CEH v11 (Simplilearn)
            </a>
          </li>
        </ul>
      </div>

      {/* Free Hacking Books & PDFs */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-green-400 mb-2">📚 Free Hacking Books (PDFs)</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <a
              href="https://www.exploit-db.com/docs/english/42556-the-web-application-hackers-handbook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              The Web Application Hacker’s Handbook (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://nostarch.com/download/webhacking.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Web Hacking 101 (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://www.ethicalhackingbooks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              More Free Ethical Hacking Books (Collection)
            </a>
          </li>
        </ul>
      </div>

      {/* Online Cybersecurity Labs */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-green-400 mb-2">🛠️ Online Cybersecurity Labs</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <a
              href="https://www.hackthebox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Hack The Box - Real World Hacking Labs
            </a>
          </li>
          <li>
            <a
              href="https://www.tryhackme.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              TryHackMe - Beginner to Advanced Labs
            </a>
          </li>
          <li>
            <a
              href="https://overthewire.org/wargames/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              OverTheWire Wargames - Cybersecurity Challenges
            </a>
          </li>
        </ul>
      </div>

      {/* Recommended Tools */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-green-400 mb-2">🛠️ Recommended Hacking Tools</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <a
              href="https://www.kali.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Kali Linux - Ethical Hacking OS
            </a>
          </li>
          <li>
            <a
              href="https://www.parrotsec.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Parrot OS - Security-Focused Linux Distro
            </a>
          </li>
          <li>
            <a
              href="https://nmap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Nmap - Network Scanning Tool
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sqlmapproject/sqlmap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              SQLMap - SQL Injection Testing Tool
            </a>
          </li>
          <li>
            <a
              href="https://portswigger.net/burp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Burp Suite - Web Security Testing
            </a>
          </li>
        </ul>
      </div>

      {/* Final Note */}
      <div className="text-gray-400 text-sm mt-6 border-t pt-4">
        <p>
          🔒 Always use these resources responsibly and ethically. Cybersecurity skills should be used for defensive purposes only.
        </p>
      </div>
    </div>
  );
};

export default Resources;
