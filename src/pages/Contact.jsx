import React, { useState } from 'react';
import { MapPin, Globe, Phone, Mail, Sparkles, Check, Send, CheckCircle2, MessagesSquare } from 'lucide-react';

export default function Contact({ onOpenModal }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    companyName: '',
    message: '',
  });
  const [selectedServices, setSelectedServices] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (serviceName) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Simulate submission structure
    const submissionData = {
      ...formData,
      companyName: formData.companyName || 'Not Specified',
      selectedServices: selectedServices,
      submittedAt: new Date().toISOString()
    };

    console.log('--- Expert Consultancy Form Submission Received ---');
    console.log(submissionData);
    
    setIsSubmitted(true);
  };

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-36">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <div className="inline-block text-slate-500 text-sm font-bold tracking-widest uppercase mb-3">
          Connect with Us
        </div>
        <h2 className="text-4xl md:text-6xl font-bold font-display text-slate-800">
          Contact Us
        </h2>
        <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed font-normal">
          Ready to integrate top-tier remote specialists into your core business cycle? Reach out directly or schedule a consultation window.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 text-left">
        
        {/* Left Column: Office details */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold font-display text-slate-800">
              Let's Build Together
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
              Our support centers are online 24/7. Solutions architects are available for same-day engineering capacity audits and cost-benefit breakdowns.
            </p>
          </div>
          
          <div className="space-y-6 pt-8 lg:pt-0">
            {/* Headquarters */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
              <MapPin className="w-6 h-6 text-slate-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">Headquarters</h4>
                <p className="text-sm md:text-base text-slate-600 mt-1.5 leading-relaxed">456 Montgomery St, San Francisco, CA 94104</p>
              </div>
            </div>
            
            {/* Engineering Hub */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
              <Globe className="w-6 h-6 text-slate-700 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">Engineering Hub</h4>
                <p className="text-sm md:text-base text-slate-600 mt-1.5 leading-relaxed">Brigade Tech Gardens, Whitefield, Bangalore 560066</p>
              </div>
            </div>
            
            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200/60 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                <Phone className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Call Us</h4>
                  <p className="text-sm md:text-base text-slate-800 mt-1 font-semibold">+1 (415) 555-0198</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200/60 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
                <Mail className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase">Write Securely</h4>
                  <p className="text-sm md:text-base text-slate-800 mt-1 font-semibold">partner@arthasya.co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center shadow-xl relative overflow-hidden">
            {isSubmitted ? (
              /* Dynamic Glass Success Screen */
              <div className="flex flex-col items-center text-center py-8 space-y-6">
                <div className="relative flex items-center justify-center">
                  {/* Outer pulsing layer */}
                  <div className="absolute w-20 h-20 rounded-full bg-emerald-400/20 animate-ping"></div>
                  {/* Core Check circle */}
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-display text-slate-800">
                    Request Sent Successfully
                  </h3>
                  <p className="text-sm text-slate-600 px-4 leading-relaxed font-normal">
                    Thank you, <span className="text-slate-800 font-semibold">{formData.fullName}</span>. Your details have been transmitted. One of our solutions advisors will contact you at <span className="text-slate-800 font-medium">{formData.emailAddress}</span> within 4 hours.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', emailAddress: '', companyName: '', message: '' });
                    setSelectedServices([]);
                  }}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 rounded-full transition-all duration-200"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              /* Main Interactive Form */
              <div className="space-y-6 relative z-10">
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold tracking-wider uppercase">
                    <MessagesSquare className="w-4 h-4" /> Consult an Expert
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-800">
                    Begin Scaling Your Team
                  </h3>
                  <p className="text-sm text-slate-500 font-normal">
                    Submit your outsourcing specifications and an operations advisor will contact you shortly.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all duration-200"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="emailAddress"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="emailAddress"
                      name="emailAddress"
                      required
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all duration-200"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="companyName"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Acme Corporation"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all duration-200"
                    />
                  </div>

                  {/* Services Checkboxes */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Services of Interest (Optional)
                    </label>
                    <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 max-h-[160px] overflow-y-auto space-y-4">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">USA Services</div>
                        <div className="grid grid-cols-1 gap-2.5">
                          {[
                            'Accounting and Bookkeeping Services',
                            'White Label Accounting Services',
                            'AR & AP Management Services',
                            'Payroll Management',
                            'Xero & QuickBooks Accounting services',
                            'Year End Services',
                            'Preparation of Financial Statement',
                            'Filing 1099 and issue forms',
                            'Sales Tax Services'
                          ].map((service) => (
                            <label key={service} className="flex items-start gap-2.5 cursor-pointer text-slate-700 hover:text-slate-900 transition-colors">
                              <input
                                type="checkbox"
                                value={service}
                                checked={selectedServices.includes(service)}
                                onChange={() => handleServiceChange(service)}
                                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900/10 focus:ring-opacity-25"
                              />
                              <span className="text-xs font-medium leading-tight">{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Australia Services</div>
                        <div className="grid grid-cols-1 gap-2.5">
                          {[
                            'Accounting & Taxation Services',
                            'Paraplanning & Broker Support Services'
                          ].map((service) => (
                            <label key={service} className="flex items-start gap-2.5 cursor-pointer text-slate-700 hover:text-slate-900 transition-colors">
                              <input
                                type="checkbox"
                                value={service}
                                checked={selectedServices.includes(service)}
                                onChange={() => handleServiceChange(service)}
                                className="mt-0.5 w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900/10 focus:ring-opacity-25"
                              />
                              <span className="text-xs font-medium leading-tight">{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider"
                    >
                      Requirements / Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your required roles, technologies (React, Node, etc.), and scaling urgency..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all duration-200 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 rounded-xl text-sm font-semibold tracking-wide uppercase text-white transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Submit Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
