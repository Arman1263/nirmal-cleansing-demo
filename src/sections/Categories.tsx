import React from 'react';
import { ArrowRight, Sparkles, Droplets, CheckCircle2 } from 'lucide-react';
import { CATEGORY_GROUPS } from '../data/products';
import type { CategoryGroup } from '../data/products';
import { Badge } from '../components/Badge';

export interface CategoriesSectionProps {
  onSelectGroup: (group: CategoryGroup) => void;
}

export const Categories: React.FC<CategoriesSectionProps> = ({
  onSelectGroup,
}) => {
  const handleExplore = (group: CategoryGroup) => {
    onSelectGroup(group);
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-stone-100/60 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Badge variant="brand" className="mb-3">
            Two Core Pillars
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
            Designed for Home &amp; Personal Hygiene
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Nirmal unites powerful household cleaning liquids with comforting
            botanical bath soaps. Explore our two primary product divisions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CATEGORY_GROUPS.map((group) => {
            const isHousehold = group.id === 'household-cleaning';
            return (
              <div
                key={group.id}
                className="group relative bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header Image */}
                <div className="relative aspect-16/9 sm:aspect-2/1 bg-stone-100 overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/25 to-transparent" />

                  {/* Overlaid Pill Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-stone-900 shadow-md">
                      {isHousehold ? (
                        <Droplets className="w-3.5 h-3.5 text-[#2E6F40]" />
                      ) : (
                        <Sparkles className="w-3.5 h-3.5 text-[#2E6F40]" />
                      )}
                      {group.itemCountText}
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      {group.title}
                    </h3>
                    <p className="text-xs text-stone-200 mt-0.5 line-clamp-1">
                      {group.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {group.description}
                    </p>

                    {/* Sub-items Included */}
                    <div className="mt-5 pt-4 border-t border-stone-100">
                      <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-2.5">
                        Products in this range:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                        {isHousehold ? (
                          <>
                            <li className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6F40]" />
                              <span>Floor Cleaners (Pine &amp; Citrus)</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6F40]" />
                              <span>Bathroom Tile &amp; Basin Cleaners</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6F40]" />
                              <span>Toilet Cleaners &amp; Descalers</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6F40]" />
                              <span>Custom Pack Sizes (500ml - 5L)</span>
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6F40]" />
                              <span>Gentle Neem &amp; Tulsi Soaps</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6F40]" />
                              <span>Pure Glycerin Moisture Bars</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6F40]" />
                              <span>Sandalwood &amp; Turmeric Bars</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6F40]" />
                              <span>Shea Butter Conditioning Soaps</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Explore Button */}
                  <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-stone-500">
                      Explore full catalogue below
                    </span>
                    <button
                      type="button"
                      onClick={() => handleExplore(group.id)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#2E6F40] group-hover:text-[#1B4326] transition-colors"
                    >
                      <span>Browse {group.title}</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
