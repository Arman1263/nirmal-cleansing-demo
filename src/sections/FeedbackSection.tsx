import React from 'react';
import { MessageSquareText, ThumbsUp, ShieldCheck } from 'lucide-react';
import { FeedbackForm } from '../components/FeedbackForm';
import { Badge } from '../components/Badge';

export const FeedbackSection: React.FC = () => {
  return (
    <section id="feedback" className="py-20 sm:py-24 bg-stone-100/60 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Feedback Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <Badge variant="brand" className="mb-3">
                Customer Perspective
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
                Share Your Experience with Nirmal
              </h2>
            </div>

            <p className="text-base text-stone-600 leading-relaxed">
              We continually refine our cleaning formulations and soap textures based
              on genuine customer experiences in Indian kitchens, bathrooms, and homes.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] flex items-center justify-center text-[#2E6F40] shrink-0">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Direct Formula Improvement
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Your remarks guide our laboratory team in adjusting fragrance strength,
                    foam levels, and bottle grips.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] flex items-center justify-center text-[#2E6F40] shrink-0">
                  <MessageSquareText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Transparent Communication
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    We welcome all ratings, suggestions, and packaging feedback to build
                    a brand Indian families can trust for decades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] flex items-center justify-center text-[#2E6F40] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Zero Spam Guarantee
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Providing an email or phone number is entirely optional and only used
                    if you request a direct reply from our founders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </section>
  );
};

