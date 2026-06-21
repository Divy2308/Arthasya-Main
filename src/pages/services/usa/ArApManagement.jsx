import React from 'react';
import { Link } from 'react-router-dom';
import IndustriesGrid from '../../../components/IndustriesGrid';
import WhatYouCanDoNext from '../../../components/WhatYouCanDoNext';
import SoftwareTicker from '../../../components/SoftwareTicker';
import {
  RefreshCw,
  ShieldCheck,
  Calculator,
  FileSpreadsheet,
  Receipt,
  Workflow,
  TrendingUp,
  Users,
  Clock,
  UserCheck,
  Settings,
  ClipboardList,
  ChevronRight
} from 'lucide-react';

export default function ArApManagement() {
  const coreServices = [
    {
      title: 'Automate AR & AP Cycle',
      desc: 'Leverage automation to simplify your accounts receivable & payable processes for efficient cash flow management.',
      icon: RefreshCw
    },
    {
      title: 'Assess & Verify Payments',
      desc: 'Whether it is verifying bills from vendors or clearing invoices, our team will ensure legitimacy in payment processing.',
      icon: ShieldCheck
    },
    {
      title: 'Check Computational Errors',
      desc: 'Eliminate discrepancies by identifying & correcting computational mistakes in your transactions, & get error free AR/AP sheet.',
      icon: Calculator
    },
    {
      title: 'Keep Precise AR/AP Record',
      desc: 'Our team will maintain precise records of all financial activities, ensuring transparency & accountability in the entire AR/AP list.',
      icon: FileSpreadsheet
    },
    {
      title: 'Manage Invoices',
      desc: 'Handle invoice creation, distribution & tracking seamlessly to maintain business efficiency by choosing outsourced services.',
      icon: Receipt
    },
    {
      title: 'Automate Vendor Billing Process',
      desc: 'Optimize vendor payment workflows with automated billing solutions tailored to your needs & streamline entire payment cycle.',
      icon: Workflow
    }
  ];

  const benefits = [
    {
      title: 'Boost Collection',
      desc: 'Our offshore team will regulate the AR/AP cycle, improving cash flow with timely & efficient collection processes.',
      icon: TrendingUp
    },
    {
      title: 'Save On Hiring A Team',
      desc: 'Instead of opting for a team to handle AR/AP, choose expert outsourcing solutions & reduce operational costs.',
      icon: Users
    },
    {
      title: 'Get On-Time Payment',
      desc: 'When you have a team to handle payments, you get accurate & prompt payments & hassle-free transactions.',
      icon: Clock
    },
    {
      title: 'Get Dedicated AR/AP Team',
      desc: 'Work with professionals focused exclusively on managing your financial operations & smoothly manage AR/AP.',
      icon: UserCheck
    },
    {
      title: 'Streamline AR/AP Process',
      desc: 'Outsourcing AR/AP management will simplify & optimize your accounts receivable & payable workflows.',
      icon: Settings
    },
    {
      title: 'Get Complete Assistance',
      desc: 'Receive end-to-end support for all your AR & AP needs, by an offshore team to support you till the end.',
      icon: ClipboardList
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
            AR & AP Management Services
          </h1>
          <p className="text-slate-650 text-base md:text-lg leading-relaxed font-normal">
            Optimize your company's working capital, automate vendor invoices, and accelerate receivables collection.
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

      {/* Core AR/AP Services Grid (Layout style matching image_1833a0.png) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-28">
        <div className="text-left mb-16 max-w-3xl">
          <div className="inline-block text-slate-550 text-xs font-bold tracking-widest uppercase mb-3">
            Core Operations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-800 tracking-tight">
            Our Accounts Receivable & Payable Services
          </h2>
          <p className="text-slate-500 mt-2 text-sm md:text-base font-normal">
            A comprehensive suite of transaction processing and verification solutions to keep your balances balanced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white border border-slate-200/60 rounded-3xl p-10 hover:shadow-md transition-all duration-350 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 mb-8 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 mb-4 font-display">
                    {service.title}
                  </h4>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section (Layout style matching image_1833b7.png) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-28">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-800 tracking-tight mb-4">
            Benefits Of Outsourcing AR & AP Management
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl leading-relaxed">
            Outsource your AR & AP management to Arthasya & enjoy enhanced efficiency, cost savings, and expert support for seamless financial operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div key={idx} className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-slate-300 bg-emerald-50/50 text-slate-800 flex items-center justify-center flex-shrink-0 mr-5 shadow-sm">
                  <Icon className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2 font-display">
                    {benefit.title}
                  </h4>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Software Tool Ticker section */}
      <SoftwareTicker />

      {/* Industries Matrix section */}
      <IndustriesGrid />

      {/* CTA Section */}
      <WhatYouCanDoNext />
    </div>
  );
}
