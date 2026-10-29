import React from 'react';
import { ArrowDown, Sparkles, Shield, Droplets, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Subtle organic background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EBF3ED]/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-amber-50/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#2E6F40] animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide text-stone-700 uppercase">
                {siteConfig.brand.name} &bull; Everyday Essentials
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1917] leading-[1.12]">
              A Cleaner Home.{' '}
              <span className="block text-[#2E6F40] sm:inline">
                A Fresher Everyday.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {siteConfig.brand.heroDescription}
            </p>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                href="#products"
                size="lg"
                variant="primary"
                className="w-full sm:w-auto"
                rightIcon={<ArrowDown className="w-4 h-4" />}
              >
                Explore Our Products
              </Button>

              <Button
                href="#contact"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/80"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Contact Us
              </Button>
            </div>

            {/* Trust Highlights Grid */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#2E6F40]">
                  <Droplets className="w-4 h-4" />
                  <span className="text-xs font-bold text-stone-900">
                    2 Pillars
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 leading-tight">
                  Home Liquids &amp; Body Soaps
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#2E6F40]">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-bold text-stone-900">
                    Local Unit
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 leading-tight">
                  Direct from manufacturer
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#2E6F40]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold text-stone-900">
                    Everyday
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 leading-tight">
                  Honest, practical care
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Card: Split showcase of cleaning liquid bottle & soap bar */}
              <div className="relative rounded-3xl bg-white p-3 shadow-2xl border border-stone-200/90 overflow-hidden group">
                <div className="relative aspect-4/3 sm:aspect-5/4 rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1000&q=80"
                    alt="Nirmal Household Cleaning Essentials and Soap Collection"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

                  {/* Overlaid Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="subtle" size="md">
                      Household &amp; Personal Care
                    </Badge>
                  </div>

                  {/* Overlaid Bottom Title */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-300">
                      Signature Range
                    </span>
                    <h3 className="text-lg font-bold">
                      Floor Cleaners, Descalers &amp; Herbal Bars
                    </h3>
                  </div>
                </div>

                {/* Sub-strip with soap imagery */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="relative rounded-xl overflow-hidden aspect-16/10 bg-stone-100">
                    <img
                      src="https://images.unsplash.com/photo-1607006314144-8d933390c370?auto=format&fit=crop&w=600&q=80"
                      alt="Handcrafted Neem &amp; Glycerin Soaps"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/30 flex items-end p-2">
                      <span className="text-[10px] font-semibold text-white">
                        Artisan Soaps
                      </span>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden aspect-16/10 bg-stone-100">
                    <img
                      src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80"
                      alt="Bathroom and Toilet Surface Care"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/30 flex items-end p-2">
                      <span className="text-[10px] font-semibold text-white">
                        Hygiene Liquids
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white p-3 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] flex items-center justify-center text-[#2E6F40]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">
                    Thoughtfully Made
                  </div>
                  <div className="text-[10px] text-stone-500">
                    Everyday Reliability
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white p-3 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">
                    Dual Collection
                  </div>
                  <div className="text-[10px] text-stone-500">
                    Home &amp; Body Cleansing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
