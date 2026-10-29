import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  Send,
  CheckCircle2,
  Copy,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { getWhatsAppInquiryLink } from '../lib/whatsapp';
import { useToast } from '../context/ToastContext';

export const ContactSection: React.FC = () => {
  const { showToast } = useToast();
  const [quickName, setQuickName] = useState('');
  const [quickMessage, setQuickMessage] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const waInquiry = getWhatsAppInquiryLink();

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!waInquiry.isConfigured) {
      e.preventDefault();
      showToast(
        'WhatsApp number is in demo mode. Please contact using email or phone.',
        'warning',
        'Demo Mode'
      );
    } else {
      showToast('Opening pre-filled WhatsApp chat...', 'info', 'WhatsApp');
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    showToast(`Copied ${label} to clipboard`, 'success');
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim() || !quickMessage.trim()) {
      showToast('Please fill in your name and message.', 'warning');
      return;
    }

    setQuickSubmitted(true);
    showToast(
      'Demo inquiry simulated. Live inquiries will connect via email or WhatsApp in production.',
      'success',
      'Demo Sent'
    );
    setTimeout(() => {
      setQuickSubmitted(false);
      setQuickName('');
      setQuickMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="brand" className="mb-3">
            Get in Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
            Connect With Nirmal
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Interested in stocking Nirmal household cleaners, placing retail orders,
            or discussing custom batch manufacturing? Reach out directly.
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-semibold block text-amber-950">
              Demo Placeholder Information
            </span>
            <p className="text-amber-800/90 mt-0.5 leading-relaxed">
              Contact numbers, factory address, and email addresses below are sample
              placeholders. Verified business details will be updated once approved by the
              owner.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards Grid (Spans 7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs hover:border-[#2E6F40]/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] flex items-center justify-center text-[#2E6F40] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Call Us Directly
              </h4>
              <p className="text-base font-bold text-stone-900 mt-1">
                {siteConfig.contact.phoneDisplay}
              </p>
              <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium inline-block mt-1">
                Sample Placeholder
              </span>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-xs font-semibold text-[#2E6F40] hover:underline"
                >
                  Call Now
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(siteConfig.contact.phone, 'Phone number')}
                  className="text-stone-400 hover:text-stone-600 text-xs flex items-center gap-1"
                  aria-label="Copy phone number"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs hover:border-[#2E6F40]/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] flex items-center justify-center text-[#2E6F40] mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Email Inquiries
              </h4>
              <p className="text-sm sm:text-base font-bold text-stone-900 mt-1 truncate">
                {siteConfig.contact.email}
              </p>
              <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium inline-block mt-1">
                Sample Placeholder
              </span>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs font-semibold text-[#2E6F40] hover:underline"
                >
                  Send Email
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(siteConfig.contact.email, 'Email address')}
                  className="text-stone-400 hover:text-stone-600 text-xs flex items-center gap-1"
                  aria-label="Copy email address"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy
                </button>
              </div>
            </div>

            {/* Factory Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs sm:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] flex items-center justify-center text-[#2E6F40] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Production Unit &amp; Office
                  </h4>
                  <p className="text-sm font-semibold text-stone-900 mt-1 leading-snug">
                    {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
                  </p>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {siteConfig.contact.address.city},{' '}
                    {siteConfig.contact.address.state} —{' '}
                    {siteConfig.contact.address.pincode},{' '}
                    {siteConfig.contact.address.country}
                  </p>
                  <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium inline-block mt-2">
                    Sample Placeholder Address
                  </span>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200/90 shadow-2xs sm:col-span-2 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Operating Hours
                </h4>
                <p className="text-xs sm:text-sm font-medium text-stone-800 mt-0.5">
                  {siteConfig.contact.workingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp & Quick Message Card (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dedicated WhatsApp Card */}
            <div className="bg-[#1C1917] text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-semibold mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Quickest Way to Inquire
                </div>

                <h3 className="text-2xl font-bold tracking-tight">
                  Chat on WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                  Have a question about bottle sizes, bulk carton orders, or product
                  specifications? Open a pre-filled WhatsApp conversation.
                </p>

                <div className="mt-4 p-3 rounded-xl bg-stone-800/80 border border-stone-700 text-xs text-stone-300">
                  <span className="text-stone-400 block font-semibold mb-1">
                    Pre-filled Inquiry Template:
                  </span>
                  &quot;{siteConfig.contact.whatsapp.defaultMessage}&quot;
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-800">
                <Button
                  href={waInquiry.url}
                  target="_blank"
                  variant="whatsapp"
                  size="lg"
                  className="w-full justify-center"
                  leftIcon={<MessageCircle className="w-5 h-5" />}
                  onClick={handleWhatsAppClick}
                >
                  Start WhatsApp Inquiry
                </Button>
                <p className="text-[11px] text-stone-400 text-center mt-2.5">
                  Opens standard WhatsApp chat window. No registration required.
                </p>
              </div>
            </div>

            {/* Simulated Quick Inquiry Box */}
            <div className="bg-white p-6 rounded-3xl border border-stone-200/90 shadow-xs">
              <h4 className="text-sm font-bold text-stone-900 mb-1">
                Quick Message / Callback Request
              </h4>
              <p className="text-xs text-stone-500 mb-4">
                Leave a short note and we will get back to you.
              </p>

              {quickSubmitted ? (
                <div className="p-4 rounded-xl bg-[#EBF3ED] text-[#2E6F40] text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Simulated note sent! In production, this forwards directly to
                    Nirmal&apos;s email or phone.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      placeholder="Your Name / Business Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50/50 focus:outline-none focus:ring-2 focus:ring-[#2E6F40]/15 focus:border-[#2E6F40]"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={2}
                      value={quickMessage}
                      onChange={(e) => setQuickMessage(e.target.value)}
                      placeholder="What products or order sizes are you inquiring about?"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs bg-stone-50/50 focus:outline-none focus:ring-2 focus:ring-[#2E6F40]/15 focus:border-[#2E6F40] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="secondary"
                    size="sm"
                    className="w-full justify-center"
                    leftIcon={<Send className="w-3.5 h-3.5" />}
                  >
                    Send Quick Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
