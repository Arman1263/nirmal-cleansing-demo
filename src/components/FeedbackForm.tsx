import React, { useState } from 'react';
import { Star, CheckCircle, AlertCircle, Send, RotateCcw, Sparkles } from 'lucide-react';
import type {
  FeedbackFormData,
  FeedbackFormErrors,
} from '../lib/validation';
import { validateFeedbackForm } from '../lib/validation';
import { submitCustomerFeedback } from '../lib/feedbackService';
import { Button } from './Button';
import { siteConfig } from '../config/site';

const INITIAL_FORM_DATA: FeedbackFormData = {
  customerName: '',
  category: '',
  productName: '',
  rating: 5,
  message: '',
  phone: '',
  email: '',
};

export const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState<FeedbackFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FeedbackFormErrors>({});
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (field: keyof FeedbackFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const result = validateFeedbackForm(formData);
    if (result.errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: result.errors[field] }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleChange = (
    field: keyof FeedbackFormData,
    value: string | number
  ) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    // If field was already touched, validate on change
    if (touched[field]) {
      const result = validateFeedbackForm(updated);
      setErrors(result.errors);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all required fields as touched
    setTouched({
      customerName: true,
      category: true,
      rating: true,
      message: true,
      phone: true,
      email: true,
    });

    const validation = validateFeedbackForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const result = await submitCustomerFeedback(formData);
      if (result.success) {
        setIsSuccess(true);
        setFormData(INITIAL_FORM_DATA);
        setTouched({});
      }
    } catch {
      setErrors({
        message: 'A simulated network error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setTouched({});
  };

  const ratingDescriptions: Record<number, string> = {
    1: 'Needs Improvement',
    2: 'Fair Experience',
    3: 'Satisfactory / Good',
    4: 'Very Good Quality',
    5: 'Excellent Product & Experience',
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden p-6 sm:p-10">
      {/* Demo Notice Banner */}
      <div className="mb-8 p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm">
          <span className="font-semibold block text-amber-950">
            Interactive Frontend Demo Notice
          </span>
          <p className="text-amber-800/90 mt-0.5 leading-relaxed">
            {siteConfig.demoNotice.formDisclaimer}
          </p>
        </div>
      </div>

      {isSuccess ? (
        /* Success Confirmation View */
        <div className="py-10 text-center animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#EBF3ED] text-[#2E6F40] mx-auto flex items-center justify-center mb-5 ring-8 ring-[#EBF3ED]/50">
            <CheckCircle className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-bold text-stone-900">
            Thank you for sharing your feedback with Nirmal!
          </h3>
          <p className="mt-2 text-stone-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            We appreciate your time and perspective. As Nirmal expands its product
            lines, customer insights help us refine our formulas and bottle designs.
          </p>

          <div className="mt-4 p-4 max-w-sm mx-auto bg-stone-50 rounded-2xl border border-stone-200/80 text-xs text-stone-500">
            <span className="font-semibold block text-stone-700 mb-1">
              Demo Simulation Status
            </span>
            Frontend validation passed successfully. In production, this trigger will
            dispatch via Telegram Bot, WhatsApp notification, or email service.
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              variant="primary"
              size="md"
              leftIcon={<RotateCcw className="w-4 h-4" />}
              onClick={handleReset}
            >
              Submit Another Response
            </Button>
          </div>
        </div>
      ) : (
        /* The Feedback Form */
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Customer Name */}
            <div>
              <label
                htmlFor="customerName"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
              >
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="customerName"
                type="text"
                value={formData.customerName}
                onChange={(e) => handleChange('customerName', e.target.value)}
                onBlur={() => handleBlur('customerName')}
                placeholder="e.g. Ramesh Patel"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.customerName
                    ? 'border-rose-300 bg-rose-50/30 text-rose-900 focus:ring-rose-500/20'
                    : 'border-stone-200 bg-stone-50/50 hover:border-stone-300 focus:border-[#2E6F40] focus:ring-[#2E6F40]/15'
                }`}
                aria-required="true"
                aria-invalid={Boolean(errors.customerName)}
                aria-describedby={errors.customerName ? 'name-error' : undefined}
              />
              {errors.customerName && (
                <p
                  id="name-error"
                  className="mt-1.5 text-xs text-rose-600 flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.customerName}
                </p>
              )}
            </div>

            {/* Product Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
              >
                Product Category <span className="text-rose-500">*</span>
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
                onBlur={() => handleBlur('category')}
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 bg-white ${
                  errors.category
                    ? 'border-rose-300 bg-rose-50/30 text-rose-900 focus:ring-rose-500/20'
                    : 'border-stone-200 hover:border-stone-300 focus:border-[#2E6F40] focus:ring-[#2E6F40]/15'
                }`}
                aria-required="true"
                aria-invalid={Boolean(errors.category)}
                aria-describedby={errors.category ? 'category-error' : undefined}
              >
                <option value="">Select a category</option>
                <option value="floor-cleaner">Floor Cleaner</option>
                <option value="bathroom-cleaner">Bathroom Cleaner</option>
                <option value="toilet-cleaner">Toilet Cleaner</option>
                <option value="body-soap">Body Soap / Bathing Bar</option>
                <option value="general-brand">General Brand Experience</option>
              </select>
              {errors.category && (
                <p
                  id="category-error"
                  className="mt-1.5 text-xs text-rose-600 flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.category}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Optional Product Name */}
            <div>
              <label
                htmlFor="productName"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
              >
                Specific Product <span className="text-stone-400 font-normal">(Optional)</span>
              </label>
              <input
                id="productName"
                type="text"
                value={formData.productName}
                onChange={(e) => handleChange('productName', e.target.value)}
                placeholder="e.g. Pine Floor Cleaner (1L) or Neem Soap"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 hover:border-stone-300 focus:border-[#2E6F40] focus:ring-2 focus:ring-[#2E6F40]/15 text-sm transition-all focus:outline-none"
              />
            </div>

            {/* Optional Phone (Indian format validation) */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
              >
                Phone Number <span className="text-stone-400 font-normal">(Optional, India)</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                  errors.phone
                    ? 'border-rose-300 bg-rose-50/30 text-rose-900 focus:ring-rose-500/20'
                    : 'border-stone-200 bg-stone-50/50 hover:border-stone-300 focus:border-[#2E6F40] focus:ring-[#2E6F40]/15'
                }`}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p
                  id="phone-error"
                  className="mt-1.5 text-xs text-rose-600 flex items-center gap-1"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Optional Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2"
            >
              Email Address <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              placeholder="e.g. yourname@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-rose-300 bg-rose-50/30 text-rose-900 focus:ring-rose-500/20'
                  : 'border-stone-200 bg-stone-50/50 hover:border-stone-300 focus:border-[#2E6F40] focus:ring-[#2E6F40]/15'
              }`}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1.5 text-xs text-rose-600 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Interactive Star Rating */}
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-50/70 border border-stone-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                Your Rating <span className="text-rose-500">*</span>
              </label>
              <span className="text-xs font-medium text-[#2E6F40]">
                {ratingDescriptions[hoverRating || formData.rating]}
              </span>
            </div>

            <div
              className="flex items-center gap-2"
              role="radiogroup"
              aria-label="Star rating from 1 to 5 stars"
            >
              {[1, 2, 3, 4, 5].map((star) => {
                const isFilled = (hoverRating || formData.rating) >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    role="radio"
                    aria-checked={formData.rating === star}
                    aria-label={`${star} star${star > 1 ? 's' : ''}`}
                    onClick={() => handleChange('rating', star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(null)}
                    className="p-1 rounded-lg hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6F40] transition-all"
                  >
                    <Star
                      className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                        isFilled
                          ? 'fill-amber-400 text-amber-500'
                          : 'fill-stone-200 text-stone-300'
                      }`}
                    />
                  </button>
                );
              })}
              <span className="ml-2 text-sm font-semibold text-stone-800">
                {formData.rating} / 5 Stars
              </span>
            </div>
            {errors.rating && (
              <p className="mt-2 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.rating}
              </p>
            )}
          </div>

          {/* Feedback Message */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700"
              >
                Your Feedback / Experience <span className="text-rose-500">*</span>
              </label>
              <span
                className={`text-xs ${
                  formData.message.length > 500
                    ? 'text-rose-600 font-semibold'
                    : 'text-stone-400'
                }`}
              >
                {formData.message.length} / 500 characters
              </span>
            </div>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              placeholder="Tell us what you liked about the fragrance, cleaning performance, lather, or packaging, and any suggestions for improvement..."
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 resize-y ${
                errors.message
                  ? 'border-rose-300 bg-rose-50/30 text-rose-900 focus:ring-rose-500/20'
                  : 'border-stone-200 bg-stone-50/50 hover:border-stone-300 focus:border-[#2E6F40] focus:ring-[#2E6F40]/15'
              }`}
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1.5 text-xs text-rose-600 flex items-center gap-1"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isSubmitting}
              leftIcon={<Send className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Submit Demo Feedback
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
