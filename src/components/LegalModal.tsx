import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Button } from './Button';

export interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  type,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
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

  if (!isOpen || !type) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] text-[#2E6F40] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  Privacy Policy (Demo Notice)
                </h3>
                <p className="text-xs text-stone-500">
                  Transparency regarding data handling
                </p>
              </div>
            </div>

            <div className="prose prose-sm text-stone-600 space-y-3.5 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>1. Demonstration Scope:</strong> This website is an interactive
                frontend demonstration created for <strong>{siteConfig.brand.name}</strong>.
                No personal data entered on this site (such as feedback forms or contact
                queries) is persisted to an active backend database, cookies,
                localStorage, or sessionStorage.
              </p>
              <p>
                <strong>2. Feedback Submissions:</strong> Form submissions are handled
                entirely in-memory on the client browser. No customer contact details
                are shared with third parties or stored remotely.
              </p>
              <p>
                <strong>3. WhatsApp Inquiries:</strong> Clicking the WhatsApp button
                simply triggers a standard WhatsApp web/app link (<code className="text-xs bg-stone-100 px-1 py-0.5 rounded">wa.me</code>)
                using your local device. NIRMAL does not intercept or track your private chats.
              </p>
              <p>
                <strong>4. Future Production Policies:</strong> Upon official brand
                launch, a formal privacy policy compliant with Indian data protection
                regulations (DPDP Act) will replace this notice.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3ED] text-[#2E6F40] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  Terms of Demonstration
                </h3>
                <p className="text-xs text-stone-500">
                  Website showcase terms &amp; conditions
                </p>
              </div>
            </div>

            <div className="prose prose-sm text-stone-600 space-y-3.5 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>1. Product Specifications &amp; Pricing:</strong> All product
                images, volume descriptions, fragrances, and prices displayed on this
                website are preliminary sample representations intended to showcase
                the website layout. Final pricing and formulations will be confirmed
                by NIRMAL upon formal commercial availability.
              </p>
              <p>
                <strong>2. Brand Concept:</strong> Brand identity, logo concepts, and
                packaging styles are presented for business evaluation.
              </p>
              <p>
                <strong>3. No E-Commerce Transactions:</strong> This website is an
                informational showcase and lead-generation portal. It does not process
                online financial transactions, credit cards, or checkouts.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
          <Button variant="primary" size="sm" onClick={onClose}>
            Understood
          </Button>
        </div>
      </div>
    </div>
  );
};
