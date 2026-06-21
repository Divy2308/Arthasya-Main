import React from 'react';
import {
  Calculator,
  Car,
  ShoppingBag,
  Store,
  Utensils,
  Hammer,
  Heart,
  Factory,
  Stethoscope,
  Home,
  Hotel,
  Activity
} from 'lucide-react';

const industries = [
  { name: 'Accounting Firms', icon: Calculator },
  { name: 'Auto Care', icon: Car },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Franchises', icon: Store },
  { name: 'Restaurant', icon: Utensils },
  { name: 'Construction', icon: Hammer },
  { name: 'Nonprofits', icon: Heart },
  { name: 'Distribution and Manufacturing', icon: Factory },
  { name: 'Healthcare', icon: Stethoscope },
  { name: 'Property', icon: Home },
  { name: 'Hospitality', icon: Hotel },
  { name: 'Health and Wellness', icon: Activity }
];

const IndustriesGrid = () => {
  return (
    <section className="py-20 bg-transparent w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* Centered Heading with blue/teal horizontal accent line */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800">
          Industries
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* 4-column responsive grid box-matrix */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-gray-200 bg-white shadow-sm overflow-hidden rounded-xl">
        {industries.map((industry, index) => {
          const IconComponent = industry.icon;
          return (
            <div
              key={index}
              className="border-b border-r border-gray-200 p-6 flex flex-col items-center justify-center text-center bg-white hover:bg-slate-50/50 transition-colors duration-200 group"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                <IconComponent 
                  className="w-8 h-8 text-teal-600 fill-teal-100/50" 
                  strokeWidth={1.5} 
                />
              </div>
              <span className="text-gray-900 font-semibold mt-3 text-sm md:text-base leading-snug">
                {industry.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustriesGrid;
