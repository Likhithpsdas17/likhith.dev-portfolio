import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import FeaturedProjects from "./sections/FeaturedProject"; // Fixed file name to singular match your file tree
import Projects from "./sections/Projects.jsx";            // Points directly to your sections folder
import GitHubStats from "./sections/GitHubStats";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0B1120] min-h-screen antialiased selection:bg-[#6366F1]/30 selection:text-[#F8FAFC]">
      {/* Global Navigation Layer */}
      <Navbar />
      
      <main>
        {/* Intro & Narrative Foundation */}
        <Hero />
        <About />
        
        {/* Technical Stack Matrix */}
        <Skills />
        
        {/* Core Case Studies (Flagship Work) */}
        <FeaturedProjects />
        
        {/* Secondary Repositories Index */}
        <Projects />
        
        {/* Live Remote Code Tracking Metrics */}
        <GitHubStats />
        
        {/* Timeline Records & Verifications */}
        <Experience />
        <Certifications />
        <Achievements />
        
        {/* Conversion Node */}
        <Contact />
      </main>
      
      {/* Global Footer Layer */}
      <Footer />
    </div>
  );
}