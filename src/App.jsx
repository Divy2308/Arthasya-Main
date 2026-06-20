import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ExpertModal from './components/ExpertModal';
import Home from './pages/Home';
import AccountingBookkeeping from './pages/services/usa/AccountingBookkeeping';
import WhiteLabelAccounting from './pages/services/usa/WhiteLabelAccounting';
import UsaArApManagement from './pages/services/usa/ArApManagement';
import PayrollManagement from './pages/services/usa/PayrollManagement';
import XeroQuickBooks from './pages/services/usa/XeroQuickBooks';
import YearEndServices from './pages/services/usa/YearEndServices';
import FinancialStatementPreparation from './pages/services/usa/FinancialStatementPreparation';
import Filing1099 from './pages/services/usa/Filing1099';
import SalesTax from './pages/services/usa/SalesTax';

import AccountingTaxation from './pages/services/australia/AccountingTaxation';
import ParaplanningBrokerSupport from './pages/services/australia/ParaplanningBrokerSupport';

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
          {/* USA Services */}
          <Route path="/services/usa/accounting-bookkeeping" element={<AccountingBookkeeping />} />
          <Route path="/services/usa/white-label-accounting" element={<WhiteLabelAccounting />} />
          <Route path="/services/usa/ar-ap-management" element={<UsaArApManagement />} />
          <Route path="/services/usa/payroll-management" element={<PayrollManagement />} />
          <Route path="/services/usa/xero-quickbooks" element={<XeroQuickBooks />} />
          <Route path="/services/usa/year-end-services" element={<YearEndServices />} />
          <Route path="/services/usa/financial-statement-preparation" element={<FinancialStatementPreparation />} />
          <Route path="/services/usa/filing-1099" element={<Filing1099 />} />
          <Route path="/services/usa/sales-tax" element={<SalesTax />} />

          {/* Australia Services */}
          <Route path="/services/australia/accounting-taxation" element={<AccountingTaxation />} />
          <Route path="/services/australia/paraplanning-broker-support" element={<ParaplanningBrokerSupport />} />
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
