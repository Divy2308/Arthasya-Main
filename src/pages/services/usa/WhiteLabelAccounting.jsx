import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IndustriesGrid from '../../../components/IndustriesGrid';
import WhatYouCanDoNext from '../../../components/WhatYouCanDoNext';
import SoftwareTicker from '../../../components/SoftwareTicker';
import {
  ShieldCheck,
  Clock,
  Zap,
  CheckCircle2,
  Users,
  Cpu,
  Sliders,
  Lock,
  FileText,
  TrendingUp,
  Coins,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export default function WhiteLabelAccounting() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whyChooseFeatures = [
    {
      title: 'Experienced Accounting Professionals',
      desc: 'Our qualified team of experts specializes in GAAP compliance and delivering audit-ready financial details.',
      icon: Users
    },
    {
      title: 'Faster Turnaround Times',
      desc: 'Prompt task delivery ensures you meet tight filing deadlines and keep your client expectations high.',
      icon: Clock
    },
    {
      title: 'Expertise in Leading Platforms',
      desc: 'Highly proficient across all top accounting tools including QuickBooks, Xero, Sage, Drake, and more.',
      icon: Cpu
    },
    {
      title: 'Flexible Engagement Models',
      desc: 'We tailor our collaboration to fit your firm\'s seasonal workloads, scaling up or down as required.',
      icon: Sliders
    },
    {
      title: 'Secure & Confidential Operations',
      desc: 'We follow robust data security protocols and confidentiality agreements to keep client information secure.',
      icon: Lock
    },
    {
      title: 'End-to-End Accounting Support',
      desc: 'Comprehensive services from general ledger entries, AP/AR, and payroll up to advanced reports.',
      icon: FileText
    },
    {
      title: 'Scalable Growth Partnership',
      desc: 'Expand your client capacity and service portfolio seamlessly without any operational headaches.',
      icon: TrendingUp
    },
    {
      title: 'Cost-Effective Solutions',
      desc: 'Slash overheads, training, and recruitment costs while tapping into professional accounting talent.',
      icon: Coins
    }
  ];

  const faqs = [
    {
      question: 'What are white label accounting services?',
      answer: 'White label accounting services enable accounting firms to outsource bookkeeping and accounting functions to an external team while delivering these services under their own brand. This allows firms to expand their capabilities without increasing internal headcount.'
    },
    {
      question: 'How do white label accounting services help firms grow?',
      answer: 'White label solutions allow firms to manage higher workloads without hiring additional staff. By leveraging external expertise, firms can scale operations, improve turnaround times, enhance client satisfaction, and increase profitability while maintaining complete brand ownership.'
    },
    {
      question: 'What services are included in your white label accounting support?',
      answer: 'Our white label solutions include a comprehensive range of services, including:',
      bullets: [
        'Bookkeeping and accounting',
        'Tax preparation and compliance support',
        'Payroll processing',
        'Accounts payable and receivable management',
        'Financial reporting and analysis',
        'Year-end accounting support'
      ]
    },
    {
      question: 'Will my clients know that the work is outsourced?',
      answer: 'No. All services are delivered seamlessly under your firm\'s brand identity. Our team operates as an extension of your business while maintaining strict confidentiality and discretion.'
    },
    {
      question: 'Can your team work with our existing accounting systems?',
      answer: 'Yes. Our professionals are experienced in working with leading accounting platforms, including QuickBooks, Xero, Sage, Double and other cloud-based accounting solutions used by firms globally.'
    },
    {
      question: 'How do you ensure quality and accuracy?',
      answer: 'We maintain high service standards through experienced professionals, standardized workflows, multi-level review processes, and robust quality control measures to ensure accurate and timely delivery.'
    },
    {
      question: 'How do you protect client data and maintain information security?',
      answer: 'Protecting sensitive client information is our highest priority. We implement stringent security measures and maintain a robust IT infrastructure to safeguard your data, including:',
      bullets: [
        'Role-based access controls',
        'Secure VPN and RDP connectivity',
        'Advanced firewall and antivirus protection',
        'Disk-level data encryption',
        'Restricted USB and mobile device access',
        'CCTV-monitored and secure office facilities',
        'Regular data backups and continuous system monitoring'
      ],
      conclusion: 'These measures help ensure that your financial and business information remains secure, confidential, and protected at all times.'
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
            White Label Accounting Services
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-650 tracking-wide">
            For CPA Firms
          </h2>
          <p className="text-slate-655 text-base md:text-lg leading-relaxed font-normal">
            Arthasya provides scalable white label accounting and bookkeeping solutions that help CPA firms improve efficiency, expand service capacity, and drive growth.
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
            <div className="lg:col-span-7 space-y-8 text-left">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-800 leading-tight">
                An Extension of Your Practice
              </h3>
              <p className="text-slate-600 leading-relaxed font-normal text-base md:text-lg">
                From transaction processing and reconciliations to financial reporting and compliance support, our experienced professionals deliver accurate, GAAP-compliant, and audit-ready financial information.
              </p>
              <p className="text-slate-600 leading-relaxed font-normal text-base md:text-lg">
                As an extension of your firm, we help you manage day-to-day operations and seasonal workloads without increasing headcount—allowing you to reduce costs, improve turnaround times, and maintain complete control of your client relationships and brand.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3.5">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-slate-800 font-bold">Confidential & Brand Secure</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-slate-800 font-bold">Rapid Scaling Capability</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full">
              <div className="bg-slate-50/50 border border-slate-200/50 rounded-2xl p-8 text-center hover:bg-slate-50 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold font-display">White-Label Control</div>
              </div>
              <div className="bg-slate-50/50 border border-slate-200/50 rounded-2xl p-8 text-center hover:bg-slate-50 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">0%</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold font-display">Headcount Expansion Need</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-28">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block text-slate-550 text-xs font-bold tracking-widest uppercase mb-3">
            Why Partner With Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-800 tracking-tight">
            Why Choose Arthasya for White Label Accounting Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-md transition-all duration-350 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 mb-5 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 mb-3 font-display">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {feature.desc}
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

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 mb-28">
        <div className="text-center mb-16">
          <div className="inline-block text-slate-550 text-xs font-bold tracking-widest uppercase mb-3">
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-800 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 mt-2 text-sm md:text-base font-normal">
            Everything you need to know about our White Label Accounting Services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden hover:shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex justify-between items-center w-full py-5 px-6 text-left font-bold text-slate-850 hover:text-slate-900 transition-colors duration-200"
                >
                  <span className="text-base md:text-lg font-display pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-slate-800' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[1000px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                  } px-6 text-slate-600 text-sm md:text-base leading-relaxed`}
                >
                  <p>{faq.answer}</p>
                  {faq.bullets && (
                    <ul className="mt-3.5 space-y-2 list-disc list-inside pl-2 text-slate-550">
                      {faq.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="pl-1">{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {faq.conclusion && (
                    <p className="mt-4 pt-4 border-t border-slate-100 text-slate-650 font-normal">
                      {faq.conclusion}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <WhatYouCanDoNext />
    </div>
  );
}
