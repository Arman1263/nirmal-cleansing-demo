/**
 * Form validation utilities for NIRMAL feedback and inquiry forms
 */

export interface FeedbackFormData {
  customerName: string;
  category: string;
  productName: string;
  rating: number;
  message: string;
  phone: string;
  email: string;
}

export interface FeedbackFormErrors {
  customerName?: string;
  category?: string;
  productName?: string;
  rating?: string;
  message?: string;
  phone?: string;
  email?: string;
}

/**
 * Validates Indian mobile number format:
 * - 10 digits starting with 6, 7, 8, or 9
 * - Allows optional prefix (+91, 91, 0) and spacing/hyphens
 */
export function isValidIndianPhone(phone: string): boolean {
  if (!phone || !phone.trim()) return true; // Optional field
  const cleanPhone = phone.replace(/[\s\-()]/g, '');
  // Matches +91XXXXXXXXXX, 91XXXXXXXXXX, 0XXXXXXXXXX, or XXXXXXXXXX where X is 10 digits starting with 6-9
  const indianPhoneRegex = /^(?:(?:\+91|91|0)?)?[6-9]\d{9}$/;
  return indianPhoneRegex.test(cleanPhone);
}

/**
 * Validates email address format
 */
export function isValidEmail(email: string): boolean {
  if (!email || !email.trim()) return true; // Optional field
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates the entire Feedback Form
 */
export function validateFeedbackForm(data: FeedbackFormData): {
  isValid: boolean;
  errors: FeedbackFormErrors;
} {
  const errors: FeedbackFormErrors = {};

  // Customer Name (Required)
  const trimmedName = data.customerName.trim();
  if (!trimmedName) {
    errors.customerName = 'Please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.customerName = 'Name must be at least 2 characters.';
  } else if (trimmedName.length > 70) {
    errors.customerName = 'Name must not exceed 70 characters.';
  }

  // Product Category (Required)
  if (!data.category || data.category === '') {
    errors.category = 'Please select a product category.';
  }

  // Star Rating (Required: 1 to 5)
  if (!data.rating || data.rating < 1 || data.rating > 5) {
    errors.rating = 'Please select a star rating between 1 and 5 stars.';
  }

  // Feedback Message (Required: 10 to 500 characters)
  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = 'Please share your feedback or experience.';
  } else if (trimmedMessage.length < 10) {
    errors.message = `Please write at least 10 characters (currently ${trimmedMessage.length}).`;
  } else if (trimmedMessage.length > 500) {
    errors.message = `Message must not exceed 500 characters (currently ${trimmedMessage.length}).`;
  }

  // Optional Phone (Must be valid if provided)
  if (data.phone && data.phone.trim() !== '') {
    if (!isValidIndianPhone(data.phone)) {
      errors.phone =
        'Please enter a valid 10-digit Indian phone number (e.g. 98765 43210 or +91 9876543210).';
    }
  }

  // Optional Email (Must be valid if provided)
  if (data.email && data.email.trim() !== '') {
    if (!isValidEmail(data.email)) {
      errors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
