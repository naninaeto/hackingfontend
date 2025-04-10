import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
          Welcome to the Hacking Academy
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          Your ultimate source for ethical hacking tutorials, tools, and resources.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/tutorials"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-lg"
          >
            Explore Tutorials
          </a>
          <a
            href="/tools"
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-lg"
          >
            Browse Tools
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
