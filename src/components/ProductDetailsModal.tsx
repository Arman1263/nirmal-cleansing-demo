import React, { useEffect, useState } from 'react';
import {
  X,
  MessageCircle,
  CheckCircle2,
  Package,
  Info,
  Droplets,
  Sparkles,
} from 'lucide-react';
import type { Product } from '../data/products';
import { Badge } from './Badge';
import { Button } from './Button';
import { getProductInquiryMessage, getWhatsAppInquiryLink } from '../lib/whatsapp';
import { useToast } from '../context/ToastContext';

export interface ProductDetailsModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product?.size ?? '');
  const [imageError, setImageError] = useState(false);
  const { showToast } = useToast();

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const handleWhatsAppInquiry = () => {
    const message = getProductInquiryMessage(
      product.name,
      selectedSize,
      product.samplePrice
    );
    const wa = getWhatsAppInquiryLink(message);

    if (wa.isConfigured) {
      window.open(wa.url, '_blank', 'noopener,noreferrer');
      showToast(`Redirecting to WhatsApp inquiry for ${product.name}`, 'info');
    } else {
      showToast(
        `WhatsApp contact is in demo mode. Please use phone or inquiry form below.`,
        'warning',
        'Demo Notice'
      );
      onClose();
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isSoap = product.category === 'body-soap';

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF9F6] w-full max-w-3xl rounded-3xl shadow-2xl border border-stone-200/90 overflow-hidden flex flex-col my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-stone-700 hover:text-stone-900 hover:bg-stone-100 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6F40]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Modal Image Section */}
          <div className="relative aspect-4/3 md:aspect-auto md:min-h-full bg-stone-100 overflow-hidden flex items-center justify-center">
            {!imageError ? (
              <img
                src={product.image}
                alt={product.imageAlt}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-stone-100 to-stone-200 text-stone-500">
                {isSoap ? (
                  <Package className="w-20 h-20 text-[#2E6F40]/60 mb-3" />
                ) : (
                  <Droplets className="w-20 h-20 text-[#2E6F40]/60 mb-3" />
                )}
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                  {product.categoryLabel}
                </span>
                <span className="text-base font-medium text-stone-800 text-center mt-1">
                  {product.name}
                </span>
              </div>
            )}

            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <Badge variant="brand">{product.categoryLabel}</Badge>
              {product.badge && <Badge variant="subtle">{product.badge}</Badge>}
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-stone-900/75 backdrop-blur-xs text-white p-2.5 rounded-xl text-xs flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>Sample product showcase. Batch sizes customizable.</span>
            </div>
          </div>

          {/* Modal Details Section */}
          <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[80vh] overflow-y-auto">
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span>SKU: {product.id.toUpperCase()}</span>
                <span className="font-medium text-[#2E6F40]">Nirmal Quality</span>
              </div>

              <h2
                id="modal-product-title"
                className="text-2xl font-bold text-stone-900 leading-tight"
              >
                {product.name}
              </h2>

              {/* Sample Price Notice */}
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-stone-900">
                  {product.samplePrice}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  (Estimated Demo Price / Unit)
                </span>
              </div>

              {/* Description */}
              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                  About This Formulation
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Available Sizes / Packaging Options */}
              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Available Sizes / Pack Variants
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((sz) => {
                    const isCurrent = selectedSize === sz;
                    return (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                          isCurrent
                            ? 'bg-[#2E6F40] text-white shadow-xs'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Highlights & Features */}
              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Key Characteristics
                </h4>
                <ul className="space-y-1.5">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-stone-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2E6F40] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Packaging Specification */}
              <div className="mt-4 p-3 bg-stone-100/70 rounded-xl text-xs text-stone-700 flex items-start gap-2.5">
                <Package className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-stone-800">
                    Packaging:
                  </span>
                  <span>{product.packagingType}</span>
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="mt-4 p-3 bg-[#EBF3ED]/70 rounded-xl text-xs text-stone-800 flex items-start gap-2.5 border border-[#C6DEC9]/60">
                <Sparkles className="w-4 h-4 text-[#2E6F40] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#1B4326]">
                    Suggested Usage:
                  </span>
                  <span className="text-stone-700 leading-normal">
                    {product.usageInstructions}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                variant="whatsapp"
                size="md"
                className="flex-1"
                leftIcon={<MessageCircle className="w-4 h-4" />}
                onClick={handleWhatsAppInquiry}
              >
                Enquire via WhatsApp
              </Button>
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
