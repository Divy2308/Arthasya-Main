import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessagesSquare } from 'lucide-react';

export default function ExpertModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    companyName: '',
    message: '',
  });
  const [selectedServices, setSelectedServices] = useState([]);

  // Handle ESC key press (accessibility feature)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen, onClose]);

  // Reset form status when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        emailAddress: '',
        companyName: '',
        message: '',
      });
      setSelectedServices([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop blur overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      {/* Modal Card (Solid White Professional Styling) */}
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xl transform transition-all duration-300 z-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Contact Form Modal"
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

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
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-700 hover:text-slate-900 rounded-full transition-all duration-200"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Main Interactive Form */
          <div className="space-y-6">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-slate-700 text-xs font-semibold tracking-wider uppercase">
                <MessagesSquare className="w-4 h-4" /> Consult an Expert
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-800">
                Begin Scaling Your Team
              </h3>
              <p className="text-xs text-slate-500 font-normal">
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
                  className="w-full bg-slate-55 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all duration-200"
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
                  className="w-full bg-slate-55 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all duration-200"
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
                  className="w-full bg-slate-55 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all duration-200"
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
                  className="w-full bg-slate-55 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all duration-200 resize-none"
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
  );
}
