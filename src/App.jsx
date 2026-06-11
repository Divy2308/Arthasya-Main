import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ExpertModal from './components/ExpertModal';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAF9F6]">
      
      {/* ================= BACKGROUND PASTEL BLOB LAYER ================= */}
      {/* Contained pointer-events-none layer to prevent layout jank or mobile scrolling leaks */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Soft Warm Rose/Amber Blob */}
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-br from-rose-200/40 to-amber-200/45 blur-[120px] animate-blob-1"></div>
        {/* Soft Lavender/Indigo Blob */}
        <div className="absolute -bottom-[10%] -right-[10%] w-[65vw] h-[65vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-tr from-purple-200/35 to-indigo-200/35 blur-[120px] animate-blob-2"></div>
        {/* Soft Mint/Teal Blob */}
        <div className="absolute top-[35%] left-[12%] w-[45vw] h-[45vw] max-w-[450px] max-h-[450px] rounded-full bg-gradient-to-r from-teal-200/30 to-cyan-200/30 blur-[100px] animate-blob-3"></div>
      </div>

      {/* Navigation Header */}
      <Header onOpenModal={() => setIsModalOpen(true)} />

      {/* Page Content Routes */}
      <main className="flex-grow w-full relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact onOpenModal={() => setIsModalOpen(true)} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Expert Modal Form */}
      <ExpertModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
    </div>
  );
}

export default App;
