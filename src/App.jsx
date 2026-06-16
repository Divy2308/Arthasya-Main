import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ExpertModal from './components/ExpertModal';
import Home from './pages/Home';
import AccountingOutsourcing from './pages/services/AccountingOutsourcing';
import ArApManagement from './pages/services/ArApManagement';
import Bookkeeping from './pages/services/Bookkeeping';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Scroll to top or specific hash element on location changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small timeout to ensure element is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FAF9F6]">
      
      {/* Clean flat background structure */}

      {/* Navigation Header */}
      <Header onOpenModal={() => setIsModalOpen(true)} />

      {/* Page Content Routes */}
      <main className="flex-grow w-full relative z-10">
        <Routes>
          <Route path="/" element={<Home onOpenModal={() => setIsModalOpen(true)} />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/services/accounting-outsourcing" element={<AccountingOutsourcing />} />
          <Route path="/services/ar-ap-management" element={<ArApManagement />} />
          <Route path="/services/bookkeeping" element={<Bookkeeping />} />
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
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
