import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Calculator, ArrowLeftRight, BookOpen, Users, Coins, FileSpreadsheet, FileCheck, Percent, Briefcase } from 'lucide-react';
import arthasyaBgImage from '../assets/arthasya bg image.jpg';
import About from './About';
import Contact from './Contact';

export default function Home({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('usa');

  const usaServices = [
    {
      title: 'Accounting and Bookkeeping Services',
      desc: 'Streamlined ledger maintenance, daily transaction logging, and real-time bank reconciliation.',
      link: '/services/usa/accounting-bookkeeping',
      icon: Calculator
    },
    {
      title: 'White Label Accounting Services',
      desc: 'Expand your firm\'s capacity with seamless, under-your-brand back-office accounting solutions.',
      link: '/services/usa/white-label-accounting',
      icon: Users
    },
    {
      title: 'AR & AP Management Services',
      desc: 'Optimize working capital, automate invoicing, and accelerate receivables collection.',
      link: '/services/usa/ar-ap-management',
      icon: ArrowLeftRight
    },
    {
      title: 'Payroll Management',
      desc: 'Accurate payroll processing, compliance reporting, benefits administration, and direct deposits.',
      link: '/services/usa/payroll-management',
      icon: Coins
    },
    {
      title: 'Xero & QuickBooks Accounting services',
      desc: 'Certified software experts managing, cleaning, and optimizing your cloud accounting files.',
      link: '/services/usa/xero-quickbooks',
      icon: Sparkles
    },
    {
      title: 'Year End Services',
      desc: 'Thorough ledger closing, tax-ready adjustments, and audit trail preparation.',
      link: '/services/usa/year-end-services',
      icon: BookOpen
    },
    {
      title: 'Preparation of Financial Statement',
      desc: 'Accurate balance sheets, income statements, and cash flow reports in compliance with US GAAP.',
      link: '/services/usa/financial-statement-preparation',
      icon: FileSpreadsheet
    },
    {
      title: 'Filing 1099 and issue forms',
      desc: 'Hassle-free contractor form distribution, verification, and IRS submission.',
      link: '/services/usa/filing-1099',
      icon: FileCheck
    },
    {
      title: 'Sales Tax Services',
      desc: 'Multi-state sales tax registration, calculation, filing, and nexus tracking.',
      link: '/services/usa/sales-tax',
      icon: Percent
    }
  ];

  const australiaServices = [
    {
      title: 'Accounting & Taxation Services',
      desc: 'End-to-end accounting, BAS preparation, and ATO compliance for Australian enterprises.',
      link: '/services/australia/accounting-taxation',
      icon: Calculator
    },
    {
      title: 'Paraplanning & Broker Support Services',
      desc: 'SOA drafting, product research, compliance monitoring, and administrative support for financial planners.',
      link: '/services/australia/paraplanning-broker-support',
      icon: Briefcase
    }
  ];

  const currentServices = activeTab === 'usa' ? usaServices : australiaServices;

  return (
    <div className="relative z-10 w-full flex flex-col items-center">
      
      {/* Hero Section - Full Bleed Background Image */}
      <section id="home" className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-8 overflow-hidden select-none">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={arthasyaBgImage}
            alt="Arthasya Corporate Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Black Vignette Overlay (Clear center, dark corners) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
          {/* Subtle dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        </div>

        {/* Content Container (Layered on top of background) */}
        <div className="relative z-10 max-w-6xl text-center flex flex-col items-center pt-40 pb-16 w-full">
         

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.12] tracking-tight text-white mb-8 max-w-5xl">
            Strategic Capacity Partners<br />
            For Outsourcing
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl text-slate-200 text-lg md:text-xl font-normal leading-relaxed mb-12">
            Offshore Staffing 2.0: Global Accounting & Enterprise Engineering Solutions. Arthasya engineers elite remote software development, customer support, and financial operations squads.
          </p>

          {/* Action CTAs - Minimalist style */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
            <Link
              to="/#contact"
              className="w-full sm:w-auto px-10 py-4.5 rounded-full text-base font-semibold tracking-wide text-center text-slate-900 bg-white hover:bg-slate-100 transition-all duration-200 border border-white shadow-md"
            >
              Partner With Us
            </Link>
            <Link
              to="/#about"
              className="w-full sm:w-auto px-10 py-4.5 rounded-full text-base font-semibold tracking-wide text-center text-white bg-transparent hover:bg-white/10 border border-white/30 transition-all duration-200"
            >
              Explore Our Model
            </Link>
          </div>

          {/* Statistics Grid - Minimalist glass styling */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mt-24">
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-center transition-all duration-200 shadow-md">
              <div className="text-3xl md:text-5xl font-bold font-display text-white mb-2">150+</div>
              <div className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold font-display">Engineers Placed</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-center transition-all duration-200 shadow-md">
              <div className="text-3xl md:text-5xl font-bold font-display text-white mb-2">98%</div>
              <div className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold font-display">Client Retention</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-center transition-all duration-200 shadow-md">
              <div className="text-3xl md:text-5xl font-bold font-display text-white mb-2">45%</div>
              <div className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold font-display">Cost Reduction</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-center transition-all duration-200 shadow-md">
              <div className="text-3xl md:text-5xl font-bold font-display text-white mb-2">24/7</div>
              <div className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold font-display">Global Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Value highlights - Clean and Minimal */}
      <section className="py-28 px-4 md:px-8 border-t border-slate-200/50 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-6">
            <div className="inline-block text-slate-500 text-sm font-bold tracking-widest uppercase">
              Dynamic Operations
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 leading-tight">
              Scaling resource capacity in sync with your product cycles.
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed">
              We manage recruitment compliance, legal complexities, equipment allocation, and localized payroll, leaving you completely free to direct your operational pipeline.
            </p>
          </div>
          
          <div className="bg-white border border-slate-200/60 rounded-3xl p-10 md:p-12 shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-slate-700 flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-left space-y-2">
                <h3 className="text-xl md:text-2xl font-bold font-display text-slate-800">Custom blueprints</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                  Every squad integration is structured with custom SLAs. We analyze your tech stack, coordinate specific code-style compliance guides, and structure team nodes with dedicated technical leads.
                </p>
                <Link to="/#contact" className="inline-flex items-center gap-2 text-sm text-slate-900 font-bold pt-4 hover:text-slate-600 transition-all">
                  Request audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-28 px-4 md:px-8 border-t border-slate-200/50 w-full max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-slate-500 text-sm font-bold tracking-widest uppercase mb-3">
            Technical Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-800">
            Our Custom Services
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg font-normal leading-relaxed">
            Outsource your core financial and accounting operations to our expert offshore teams.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100/80 backdrop-blur-sm border border-slate-200/50 p-1.5 rounded-full flex gap-1 shadow-inner">
            <button
              onClick={() => setActiveTab('usa')}
              className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeTab === 'usa'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/40'
              }`}
            >
              USA Services
            </button>
            <button
              onClick={() => setActiveTab('australia')}
              className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeTab === 'australia'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/40'
              }`}
            >
              Australia Services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full transition-all duration-500">
          {currentServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.link}
                to={service.link}
                className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700">
                    <IconComponent className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-slate-800 text-left leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal text-left">
                    {service.desc}
                  </p>
                </div>
                <div className="flex justify-end pt-8 relative z-10">
                  <span className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/60 text-slate-600 group-hover:text-slate-900 group-hover:bg-slate-100 flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full bg-[#FAF9F6] border-t border-slate-200/50">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-[#FAF9F6] border-t border-slate-200/50">
        <Contact onOpenModal={onOpenModal} />
      </section>

    </div>
  );
}
