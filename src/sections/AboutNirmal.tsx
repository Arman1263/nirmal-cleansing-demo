import React from 'react';
import { ArrowRight, CheckCircle2, Factory, HelpCircle } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

export const AboutNirmal: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visuals & Packaging Details */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-200/90 bg-stone-100 aspect-4/5 sm:aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80"
                  alt="Bottling and packaging at Nirmal facilities"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Inset Secondary Image Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-48 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 aspect-4/3 hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1607006314144-8d933390c370?auto=format&fit=crop&w=500&q=80"
                  alt="Natural botanical soap packaging"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small Floating Pill */}
              <div className="absolute -top-4 -left-4 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-stone-200 flex items-center gap-2">
                <Factory className="w-4 h-4 text-[#2E6F40]" />
                <span className="text-xs font-bold text-stone-900">
                  Local Production
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Story & Values */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div>
              <Badge variant="brand" className="mb-3">
                About The Brand
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
                Everyday Care.{' '}
                <span className="text-[#2E6F40]">Thoughtfully Made.</span>
              </h2>
            </div>

            <p className="text-base text-stone-600 leading-relaxed">
              <strong>{siteConfig.brand.name}</strong> was born from a straightforward
              conviction: Indian households deserve hardworking cleaning solutions and
              nourishing body soaps crafted with honesty, reliability, and local care.
            </p>

            <div className="p-4 rounded-2xl bg-stone-100/80 border border-stone-200/80 text-xs sm:text-sm text-stone-600 space-y-2">
              <div className="flex items-center gap-2 text-stone-800 font-semibold">
                <HelpCircle className="w-4 h-4 text-[#2E6F40]" />
                <span>Space for Verified Business Story (Owner Review)</span>
              </div>
              <p className="leading-relaxed text-stone-500">
                [Placeholder: Once approved by the business founder, this section will
                feature the founding narrative, manufacturing facility details, regional
                distribution network, and verified operational milestones. No unverified
                claims or dates are stated prior to confirmation.]
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                Our Production Philosophy
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6F40] shrink-0 mt-0.5" />
                  <span>Honest ingredients formulated for Indian water</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6F40] shrink-0 mt-0.5" />
                  <span>Durable, leak-proof bottle construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6F40] shrink-0 mt-0.5" />
                  <span>Small-batch soap saponification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E6F40] shrink-0 mt-0.5" />
                  <span>Fair local pricing without middleman markups</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                href="#products"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Browse Our Complete Catalogue
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="md"
              >
                Contact Business Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
