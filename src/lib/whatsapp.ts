import { siteConfig } from '../config/site';

export interface WhatsAppLinkResult {
  url: string;
  isConfigured: boolean;
  phoneNumber: string;
}

/**
 * Normalizes phone numbers to digits only
 */
export function sanitizePhoneNumber(phone: string): string {
  return phone.replace(/[^\d]/g, '');
}

/**
 * Builds a valid wa.me URL with pre-filled message
 *
 * @param message Pre-filled message text to encode in URL
 * @param customNumber Optional override phone number
 */
export function getWhatsAppInquiryLink(
  message?: string,
  customNumber?: string
): WhatsAppLinkResult {
  const targetNumber = customNumber || siteConfig.contact.whatsapp.number;
  const sanitized = sanitizePhoneNumber(targetNumber);
  const text = message || siteConfig.contact.whatsapp.defaultMessage;
  const isConfigured = Boolean(
    siteConfig.contact.whatsapp.isConfigured && sanitized.length >= 10
  );

  if (!isConfigured) {
    return {
      url: '#contact',
      isConfigured: false,
      phoneNumber: siteConfig.contact.whatsapp.displayNumber,
    };
  }

  const encodedMessage = encodeURIComponent(text.trim());
  const url = `https://wa.me/${sanitized}?text=${encodedMessage}`;

  return {
    url,
    isConfigured: true,
    phoneNumber: siteConfig.contact.whatsapp.displayNumber,
  };
}

/**
 * Generates an inquiry message for a specific product
 */
export function getProductInquiryMessage(
  productName: string,
  size?: string,
  samplePrice?: string
): string {
  const sizeInfo = size ? ` (${size})` : '';
  const priceInfo = samplePrice ? ` [Ref: ${samplePrice}]` : '';
  return `Hello Nirmal Team, I am interested in inquiring about *${productName}*${sizeInfo}${priceInfo}. Could you please share bulk/retail pricing, availability, and delivery details? Thank you!`;
}

