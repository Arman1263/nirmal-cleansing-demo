import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  FileText,
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { LegalModal } from './LegalModal';

export interface FooterProps {
  onSelectCategory?: (category: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleCategoryClick = (category: string) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-[#1C1917] text-stone-300 pt-16 pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
            {/* Col 1: Brand Info (Spans 2 cols on desktop) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#2E6F40] flex items-center justify-center text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white">
                  {siteConfig.brand.name}
                </span>
              </div>

              <p className="text-sm text-stone-400 font-medium">
                {siteConfig.brand.tagline}
              </p>

              <p className="text-xs sm:text-sm text-stone-400/90 leading-relaxed max-w-sm">
                {siteConfig.brand.shortDescription}
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800/80 text-[11px] font-medium text-emerald-400 border border-stone-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Local Manufacturing Initiative
                </span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
                Explore Website
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Product Catalogue
                  </a>
                </li>
                <li>
                  <a
                    href="#why-us"
                    className="hover:text-white transition-colors"
                  >
                    Why Choose Nirmal
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Brand Story
                  </a>
                </li>
                <li>
                  <a
                    href="#feedback"
                    className="hover:text-white transition-colors"
                  >
                    Customer Feedback
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact &amp; Inquiries
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Product Categories */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
                Our Categories
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick('floor-cleaner')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Floor Cleaners
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick('bathroom-cleaner')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Bathroom Cleaners
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick('toilet-cleaner')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Toilet Cleaners
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick('body-soap')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Handcrafted Body Soaps
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick('all')}
                    className="hover:text-white transition-colors text-left text-[#3B8253] font-medium"
                  >
                    View All 10 Products →
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Overview */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200 mb-4">
                Factory &amp; Inquiries
              </h4>
              <div className="space-y-2.5 text-xs text-stone-400">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.contact.address.line1}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Send Direct Inquiry <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
            <p>
              &copy; {CURRENT_YEAR} {siteConfig.brand.name}. All rights reserved.
              Frontend showcase demonstration.
            </p>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-stone-300 transition-colors flex items-center gap-1"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Privacy Notice
              </button>
              <button
                type="button"
                onClick={() => setLegalModal('terms')}
                className="hover:text-stone-300 transition-colors flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                Terms of Showcase
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <LegalModal
        type={legalModal}
        isOpen={Boolean(legalModal)}
        onClose={() => setLegalModal(null)}
      />
    </>
  );
};
