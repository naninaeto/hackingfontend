
import './App.css'

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import Tools from "./pages/Tools";
import Resources from "./pages/Resources";
import News from "./pages/News";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import IntroPage from "./component/IntroPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
        <Route path="/" element={<IntroPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news" element={<News />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

