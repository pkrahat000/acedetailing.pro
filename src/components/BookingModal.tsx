import React, { useState, useEffect } from 'react';
import { X, Calendar, Sparkles, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteContent';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackageId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedPackageId,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [category, setCategory] = useState<string>('auto');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'morning',
    vehicleDetails: '',
    locationNotes: 'Orange Beach, AL',
    packageSelection: preselectedPackageId || 'Platinum Interior/Exterior',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedPackageId) {
      setFormData((prev) => ({ ...prev, packageSelection: preselectedPackageId }));
    }
  }, [preselectedPackageId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <h3 className="text-base font-bold font-display text-white">
              Schedule Your Detailing Session
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-display text-white">Appointment Request Received!</h4>
              <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
                Our master detailer will reach out directly to confirm your booking for {formData.preferredDate || 'your preferred date'} and confirm arrival coordinates.
              </p>
              <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-slate-400 flex items-center justify-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Need immediate dispatch? Call {COMPANY_INFO.phone}</span>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs transition-colors"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category selector */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Select Detailing Discipline
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Auto', 'Boat', 'RV', 'Aircraft', 'Ceramic', 'Fleet'].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat.toLowerCase())}
                      className={`py-2 px-2.5 rounded-lg font-medium border text-center transition-all ${
                        category === cat.toLowerCase()
                          ? 'bg-sky-500/20 border-sky-500 text-sky-300'
                          : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vehicle & Package */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Vehicle / Vessel Year & Model
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2024 Grady-White 330"
                    value={formData.vehicleDetails}
                    onChange={(e) => setFormData({ ...formData, vehicleDetails: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Preferred Package / Service
                  </label>
                  <input
                    type="text"
                    placeholder="Platinum / Wash & Wax / Ceramic"
                    value={formData.packageSelection}
                    onChange={(e) => setFormData({ ...formData, packageSelection: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Requested Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="morning">Morning (8:00 AM – 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="flexible">Flexible / Any Time</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(205) 908-0949"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Service Location (Address / Marina / Slip #)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., The Wharf Marina, Slip 42, Orange Beach, AL"
                    value={formData.locationNotes}
                    onChange={(e) => setFormData({ ...formData, locationNotes: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs shadow-md shadow-sky-500/25 active:scale-[0.98] transition-all"
                >
                  Confirm & Request Appointment
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Zero obligation · No deposit required for estimate</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
