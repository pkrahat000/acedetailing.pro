import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteContent';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    streetAddress: '',
    addressLine2: '',
    city: 'Orange Beach',
    state: 'AL',
    zipCode: '',
    serviceCategory: 'auto',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const usStates = [
    'AL', 'FL', 'MS', 'GA', 'LA', 'TN', 'TX'
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Location info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-sky-400">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Get in Touch with Ace</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
                Contact Us
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Ready to schedule your detailing session or need a personalized quote for your vehicle, yacht, RV, or aircraft? Our technicians come directly to you.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-sky-500/40 flex items-center gap-4 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-mono text-slate-400">Direct Phone Booking</p>
                  <p className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors tabular-nums">
                    {COMPANY_INFO.phone}
                  </p>
                </div>
              </a>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-mono text-slate-400">Mobile Service Coverage</p>
                  <p className="text-sm font-semibold text-white">
                    Orange Beach, AL & Baldwin County
                  </p>
                  <p className="text-xs text-slate-400">Gulf Shores, Foley, Fairhope, Daphne & marinas</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase font-mono text-slate-400">Operating Hours</p>
                  <p className="text-sm font-semibold text-white">Monday – Saturday: 7:30 AM – 6:30 PM</p>
                  <p className="text-xs text-slate-400">Sunday by appointment for marine/aviation</p>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
              <span>Full commercial liability policy covering exotic vehicles, aircraft, and super-yachts.</span>
            </div>
          </div>

          {/* Right Column: Original Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-slate-900/90 border border-white/10 shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">Message Sent Successfully</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'valued customer'}. Ace Detailing Pro has received your inquiry. We will contact you at {formData.phone || formData.email} within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        streetAddress: '',
                        addressLine2: '',
                        city: 'Orange Beach',
                        state: 'AL',
                        zipCode: '',
                        serviceCategory: 'auto',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-2">
                    <h3 className="text-xl font-bold font-display text-white">Request an Appointment / Message</h3>
                    <p className="text-xs text-slate-400">Fill in the original form fields below for a rapid response.</p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(205) 908-0949"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="pt-2 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Service Address
                    </p>

                    <div>
                      <input
                        type="text"
                        placeholder="Street Address"
                        value={formData.streetAddress}
                        onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Address Line 2 (Apt, Suite, Slip #, Hangar #)"
                        value={formData.addressLine2}
                        onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <input
                          type="text"
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                        />
                      </div>

                      <div>
                        <select
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                        >
                          {usStates.map((st) => (
                            <option key={st} value={st} className="bg-slate-900 text-white">
                              {st}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="ZIP Code"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="pt-2">
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Message <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your vehicle model, condition, desired package, and preferred timeframe..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 rounded-lg text-sm font-semibold text-white bg-sky-500 hover:bg-sky-400 shadow-lg shadow-sky-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <span>Submit Appointment Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
