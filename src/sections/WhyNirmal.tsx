import React from 'react';
import { Factory, Sparkles, PackageCheck, Layers, Info } from 'lucide-react';
import { Badge } from '../components/Badge';

export const WhyNirmal: React.FC = () => {
  const pillars = [
    {
      icon: <Factory className="w-6 h-6 text-[#2E6F40]" />,
      title: 'Locally Manufactured',
      subtitle: 'Direct producer accountability',
      description:
        'Manufactured locally in small batches under strict quality supervision, ensuring consistent liquid viscosity and authentic bar formulations.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#2E6F40]" />,
      title: 'Everyday Cleaning Essentials',
      subtitle: 'Formulated for real homes',
      description:
        'Engineered to tackle everyday Indian household challenges including hard water stains, dusty tiled verandas, and oily kitchen residues.',
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-[#2E6F40]" />,
      title: 'Carefully Packaged',
      subtitle: 'Durable & leak-tested containers',
      description:
        'Bottled in ergonomic, sturdy HDPE containers with precision squirt nozzles, plus protective moisture-barrier wrappers for our bathing soaps.',
    },
    {
      icon: <Layers className="w-6 h-6 text-[#2E6F40]" />,
      title: 'Complete Dual Range',
      subtitle: 'Single trusted local supplier',
      description:
        'A harmonised product catalogue spanning floor, tile, and toilet cleaners alongside wholesome botanical bathing bars for personal care.',
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-stone-100/70 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="brand" className="mb-3">
            Proposed Brand Principles
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
            Why Choose Nirmal?
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Every bottle and soap bar is produced with a focus on straightforward
            effectiveness, sturdy packaging, and dependable everyday value.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3ED] flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                  {pillar.subtitle}
                </span>
                <h3 className="text-lg font-bold text-stone-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-medium text-[#2E6F40]">
                <span>Pillar 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Marketing Disclaimer Note */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-stone-200/90 flex items-center gap-3 text-xs text-stone-500">
          <Info className="w-4 h-4 text-stone-400 shrink-0" />
          <p>
            <strong>Note for Brand Owner:</strong> The points above represent
            proposed messaging. Unverified certifications (such as organic or
            clinical badges) are deliberately excluded to maintain integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

