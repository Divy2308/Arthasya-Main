import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Zap, CheckCircle2 } from 'lucide-react';

export default function AccountingBookkeeping() {
  const serviceDetails = [
    {
      title: 'Chart of Accounts Setup',
      desc: 'Structuring accounts for clarity and reporting, aligning account categories with your requirements.'
    },
    {
      title: 'Transactions Recording',
      desc: 'Meticulously recording every transaction, maintaining detailed, up-to-date financial data for your business.'
    },
    {
      title: 'Bank & Credit Card Reconciliation',
      desc: 'Matching records with bank/card statements, identifying discrepancies and unusual entries.'
    },
    {
      title: 'Accounts Payable and Receivable',
      desc: 'Tracking vendor invoices and payments, monitoring customer balances and collections.'
    },
    {
      title: 'Daily Bookkeeping',
      desc: 'Recording transactions consistently, categorizing income and expenses, and keeping books continuously updated.'
    },
    {
      title: 'Cash Flow Tracking',
      desc: 'Monitoring inflows and outflows, identifying patterns and potential gaps.'
    },
    {
      title: 'Financial Reporting',
      desc: 'Preparing balance sheets, income statements, cash flow reports, and AR/AP aging supporting schedules.'
    },
    {
      title: 'Bookkeeping Cleanup Support',
      desc: 'Catch-up bookkeeping for delayed records, correction of inconsistencies/errors, and preparing books for accurate reporting.'
    }
  ];

  const benefits = [
    {
      title: 'Complete Record Keeping',
      desc: 'No details are overlooked in maintaining your day-to-day financial transactions.'
    },
    {
      title: 'Cost Effective',
      desc: 'Save on in-house hiring costs while accessing experienced bookkeeping talent.'
    }
  ];

  return (
    <div className="relative z-10 w-full min-h-screen bg-[#FAF9F6] pt-40 pb-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <div className="inline-block text-slate-800 text-sm font-bold tracking-widest uppercase bg-slate-100 px-4 py-1.5 rounded-full border border-slate-300">
            USA Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-800 leading-tight">
            Accounting and Bookkeeping Services
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Streamlined ledger maintenance, daily transaction logging, and real-time bank reconciliation for US-based companies.
          </p>
          <div className="flex justify-center pt-6">
            <Link
              to="/#contact"
              className="px-10 py-4.5 rounded-full text-base font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-28">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-10 md:p-16 shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8 text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-800 leading-tight">
                Tailored USA Accounting Solutions
              </h2>
              <p className="text-slate-600 leading-relaxed font-normal text-base md:text-lg">
                Ensure precise financial records with our professional bookkeeping services, designed to streamline your business operations and maintain regulatory compliance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3.5">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-slate-800 font-bold">SOC2 Compliant Workspaces</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-slate-800 font-bold">Real-Time Data Updating</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">100%</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Record Accuracy</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">50%+</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed services list */}
        <h3 className="text-3xl md:text-4xl font-bold font-display text-slate-800 text-left mb-10">
          Accounting & Bookkeeping Capabilities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/60 rounded-2xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700">
                  <CheckCircle2 className="w-6 h-6 text-slate-900" />
                </div>
                <h4 className="text-lg md:text-xl font-bold font-display text-slate-800 text-left">
                  {service.title}
                </h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed text-left font-normal">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 border-t border-slate-200/50 pt-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800">
            Benefits of Our Bookkeeping Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4 p-8 md:p-10 bg-white border border-slate-200/40 rounded-3xl shadow-sm hover:border-slate-300 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <h4 className="text-lg md:text-xl font-bold font-display text-slate-800">
                {benefit.title}
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
