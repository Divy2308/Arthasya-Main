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
      
      {/* Clean flat background structure */}

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
