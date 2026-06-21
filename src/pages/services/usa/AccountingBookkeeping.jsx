import React from 'react';
import { Link } from 'react-router-dom';
import IndustriesGrid from '../../../components/IndustriesGrid';
import WhatYouCanDoNext from '../../../components/WhatYouCanDoNext';
import SoftwareTicker from '../../../components/SoftwareTicker';
import {
  ShieldCheck,
  Clock,
  Zap,
  CheckCircle2,
  Layers,
  BookOpen,
  RefreshCw,
  ArrowLeftRight,
  Calendar,
  TrendingUp,
  BarChart3,
  Sparkles,
  Coins,
  ChevronRight,
  PhoneCall
} from 'lucide-react';

export default function AccountingBookkeeping() {
  const servicePillars = [
    {
      title: 'Chart of Accounts Setup',
      icon: Layers,
      details: [
        'Design a customized chart of accounts based on business requirements',
        'Create a structured account hierarchy for accurate reporting',
        'Align account classifications with industry standards and management needs'
      ]
    },
    {
      title: 'Transaction Recording',
      icon: BookOpen,
      details: [
        'Record day-to-day financial transactions accurately and timely',
        'Maintain complete and up-to-date accounting records',
        'Ensure proper classification of all business transactions'
      ]
    },
    {
      title: 'Bank and Credit Card Reconciliation',
      icon: RefreshCw,
      details: [
        'Reconcile bank and credit card statements with accounting records',
        'Identify and resolve discrepancies, duplicate entries, and missing transactions',
        'Ensure accuracy and completeness of financial data'
      ]
    },
    {
      title: 'Accounts Payable and Receivable Management',
      icon: ArrowLeftRight,
      details: [
        'Process vendor invoices and track payment schedules',
        'Monitor customer invoices, outstanding balances, and collections',
        'Maintain efficient cash conversion cycles'
      ]
    },
    {
      title: 'Daily Bookkeeping',
      icon: Calendar,
      details: [
        'Record and categorize income and expenses regularly',
        'Update accounting records on a daily or periodic basis',
        'Maintain organized and accurate books of accounts'
      ]
    },
    {
      title: 'Cash Flow Tracking',
      icon: TrendingUp,
      details: [
        'Monitor cash inflows and outflows effectively',
        'Analyze cash flow trends and identify potential gaps',
        'Support better liquidity management and financial planning'
      ]
    },
    {
      title: 'Financial Reporting',
      icon: BarChart3,
      details: [
        'Prepare balance sheets, profit and loss statements, and cash flow statements',
        'Generate accounts receivable and accounts payable aging reports',
        'Provide accurate financial insights for informed decision-making'
      ]
    },
    {
      title: 'Bookkeeping Cleanup Support',
      icon: Sparkles,
      details: [
        'Update overdue or incomplete accounting records',
        'Correct bookkeeping errors and inconsistencies'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Certified & Experienced Bookkeepers',
      desc: 'Outsourcing to Arthasya means your financial records are handled by certified & experienced bookkeepers.',
      icon: ShieldCheck
    },
    {
      title: 'Complete Record Keeping',
      desc: 'We maintain accurate and organized financial records, ensuring every transaction is properly recorded.',
      icon: CheckCircle2
    },
    {
      title: 'Up-to-Date Financial Data',
      desc: 'Access accurate, real-time financial information to support better business decisions.',
      icon: Clock
    },
    {
      title: 'Customized Reporting',
      desc: 'Get accurate and easy-to-understand reports designed to help you track business performance.',
      icon: BarChart3
    },
    {
      title: 'Technology-Driven Solutions',
      desc: 'We use modern accounting software and tools to improve accuracy and efficiency.',
      icon: Zap
    },
    {
      title: 'Save Hiring Costs',
      desc: 'Avoid the expense of hiring and training in-house staff while benefiting from professional bookkeeping support.',
      icon: Coins
    }
  ];

  return (
    <div className="relative z-10 w-full min-h-screen bg-[#FAF9F6] pt-40 pb-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <div className="inline-block text-slate-800 text-sm font-bold tracking-widest uppercase bg-slate-100/80 px-4 py-1.5 rounded-full border border-slate-300/80 shadow-sm">
            USA Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-800 leading-tight tracking-tight">
            Accounting and Bookkeeping Services
          </h1>
          <p className="text-slate-650 text-base md:text-lg leading-relaxed font-normal">
            We provide reliable and scalable accounting solutions to help businesses maintain accurate financial records, improve decision-making, and ensure compliance.
          </p>
          <div className="flex justify-center pt-4">
            <Link
              to="/#contact"
              className="px-10 py-4.5 rounded-full text-base font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Stats Banner */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-28">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-10 md:p-16 shadow-sm">
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
            
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="bg-slate-50/50 border border-slate-200/50 rounded-2xl p-8 text-center hover:bg-slate-50 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold font-display">Record Accuracy</div>
              </div>
              <div className="bg-slate-50/50 border border-slate-200/50 rounded-2xl p-8 text-center hover:bg-slate-50 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">50%+</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold font-display">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-28">
        <div className="text-left mb-16 max-w-3xl">
          <div className="inline-block text-slate-550 text-xs font-bold tracking-widest uppercase mb-3">
            Service Pillars
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 leading-tight">
            Accounting and Bookkeeping Services
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed font-normal">
            We provide reliable and scalable accounting solutions to help businesses maintain accurate financial records, improve decision-making, and ensure compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicePillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 group"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-800 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-slate-800 text-left leading-snug">
                    {pillar.title}
                  </h3>
                  <ul className="space-y-3.5 pt-6 border-t border-slate-100">
                    {pillar.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-left">
                        <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        </span>
                        <span className="text-sm md:text-base text-slate-650 leading-relaxed font-normal">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-28 border-t border-slate-200/50 pt-24">
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-block text-slate-550 text-xs font-bold tracking-widest uppercase">
            Why Partner With Us
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 leading-tight">
            Benefits Of Outsourcing Bookkeeping To Arthasya
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            Whether you need ongoing daily bookkeeping for CPA firms support, help during peak periods, or assistance with cleanup, Arthasya provides a structured approach to managing your bookkeeping. Let Arthasya handle your bookkeeping with accuracy and efficiency, giving you more time to focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/50 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 group"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/50 flex items-center justify-center text-slate-700 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white">
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-display text-slate-850 text-left leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal text-left">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Software Tool Ticker */}
      <SoftwareTicker />

      {/* Industries Matrix section */}
      <IndustriesGrid />

      {/* CTA Section */}
      <WhatYouCanDoNext />
    </div>
  );
}
