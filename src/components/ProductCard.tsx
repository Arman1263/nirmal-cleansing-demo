import React, { useState } from 'react';
import { Eye, MessageCircle, Sparkles, Package } from 'lucide-react';
import type { Product } from '../data/products';
import { Badge } from './Badge';
import { Button } from './Button';
import { getProductInquiryMessage, getWhatsAppInquiryLink } from '../lib/whatsapp';
import { useToast } from '../context/ToastContext';

export interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const [imageError, setImageError] = useState(false);
  const { showToast } = useToast();

  const handleEnquire = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = getProductInquiryMessage(
      product.name,
      product.size,
      product.samplePrice
    );
    const wa = getWhatsAppInquiryLink(message);

    if (wa.isConfigured) {
      window.open(wa.url, '_blank', 'noopener,noreferrer');
      showToast(`Opening inquiry for ${product.name}`, 'info', 'Inquiry');
    } else {
      showToast(
        `WhatsApp contact is in demo mode. Contact Nirmal via phone or inquiry form below.`,
        'warning',
        'Demo Notice'
      );
      // Smooth scroll to contact
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isSoap = product.category === 'body-soap';

  return (
    <article
      onClick={() => onViewDetails(product)}
      className="group flex flex-col bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
    >
      {/* Product Image Container */}
      <div className="relative aspect-4/3 sm:aspect-square bg-[#F5F4EE] overflow-hidden flex items-center justify-center">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Graceful Fallback if image fails to load */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-stone-100 to-stone-200 text-stone-500">
            {isSoap ? (
              <Package className="w-16 h-16 text-[#2E6F40]/60 mb-2 stroke-[1.5]" />
            ) : (
              <Sparkles className="w-16 h-16 text-[#2E6F40]/60 mb-2 stroke-[1.5]" />
            )}
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              {product.categoryLabel}
            </span>
            <span className="text-sm font-medium text-stone-700 text-center mt-1">
              {product.name}
            </span>
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <Badge variant="brand" size="sm">
            {product.categoryLabel}
          </Badge>
          {product.badge && (
            <Badge variant="subtle" size="sm">
              {product.badge}
            </Badge>
          )}
        </div>

        {/* Size Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2 py-1 rounded-md bg-stone-900/80 text-white backdrop-blur-xs">
            {product.size}
          </span>
        </div>

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-stone-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-stone-900 text-xs font-semibold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            View Details
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="flex-1 flex flex-col p-5">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-stone-900 leading-snug group-hover:text-[#2E6F40] transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Size Info */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-stone-900">
                {product.samplePrice}
              </span>
              <span className="text-[10px] text-stone-400 font-medium">
                (Sample Price)
              </span>
            </div>
            <span className="text-[11px] text-stone-500">
              Pack: {product.size}
            </span>
          </div>

          <span className="text-xs font-medium text-[#2E6F40] bg-[#EBF3ED] px-2 py-0.5 rounded-md">
            Direct Care
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-3 flex gap-2">
          <Button
            type="button"
            size="sm"
            variant="outline"
            className="flex-1"
            leftIcon={<Eye className="w-3.5 h-3.5" />}
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
          >
            Details
          </Button>

          <Button
            type="button"
            size="sm"
            variant="primary"
            className="flex-1"
            leftIcon={<MessageCircle className="w-3.5 h-3.5" />}
            onClick={handleEnquire}
          >
            Enquire
          </Button>
        </div>
      </div>
    </article>
  );
};
