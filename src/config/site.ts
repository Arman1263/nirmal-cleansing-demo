/**
 * NIRMAL - Website & Brand Configuration
 *
 * NOTE FOR BUSINESS OWNER / DEVELOPER:
 * All business details, contact information, and brand copy in this file are
 * configurable placeholders for this frontend demonstration.
 * Replace these values with verified business information before production deployment.
 */

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    shortDescription: string;
    heroHeadline: string;
    heroDescription: string;
    establishedYear?: number;
    manufacturerNote: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
    workingHours: string;
    whatsapp: {
      number: string; // E.164 format without '+' e.g. "919876543210" or empty
      displayNumber: string;
      defaultMessage: string;
      isConfigured: boolean; // Set to true when actual business WhatsApp is connected
    };
    social: {
      instagram?: string;
      facebook?: string;
      youtube?: string;
      linkedin?: string;
    };
    isPlaceholder: boolean; // Flag indicating contact details are demo placeholders
  };
  theme: {
    primaryColor: string; // Restrained green
    primaryDark: string;
    accentColor: string;
    surfaceWarm: string;
    typography: {
      sans: string;
      serif: string;
    };
  };
  navigation: Array<{
    name: string;
    href: string;
  }>;
  demoNotice: {
    formDisclaimer: string;
    businessDisclaimer: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: 'NIRMAL',
    tagline: 'Everyday Care. Thoughtfully Made.',
    shortDescription:
      'Locally manufactured household cleaning liquids and handcrafted body soaps formulated for honest everyday cleanliness and personal care.',
    heroHeadline: 'A Cleaner Home. A Fresher Everyday.',
    heroDescription:
      'Thoughtfully formulated household cleaning essentials and gentle body soaps manufactured locally with care. Designed to bring effortless hygiene and refreshing purity to Indian homes.',
    manufacturerNote:
      'Locally manufactured in small batches with strict quality oversight.',
  },

  contact: {
    // PLACEHOLDER: Replace with actual business telephone
    phone: '+91 98765 43210',
    phoneDisplay: '+91 98765 43210',

    // PLACEHOLDER: Replace with actual verified business email
    email: 'contact@nirmalcare.example.com',

    // PLACEHOLDER: Replace with actual factory / registered unit address
    address: {
      line1: 'Plot No. 42, Sector 18, Industrial Estate',
      line2: 'GIDC Phase II',
      city: 'Vadodara',
      state: 'Gujarat',
      pincode: '390010',
      country: 'India',
    },

    workingHours: 'Monday – Saturday: 9:00 AM – 6:30 PM IST',

    whatsapp: {
      // Set isConfigured to false to show the demo fallback banner/action,
      // or set to true once an actual WhatsApp number is provided.
      isConfigured: true,
      number: '919876543210',
      displayNumber: '+91 98765 43210',
      defaultMessage:
        'Hello Nirmal Team, I visited your website and would like to enquire about your products.',
    },

    social: {
      // Social links are initially unconfigured to avoid fake links
      instagram: '',
      facebook: '',
      linkedin: '',
    },

    isPlaceholder: true, // Clearly marks these as mock details for review
  },

  theme: {
    primaryColor: '#2E6F40',
    primaryDark: '#1B4326',
    accentColor: '#3B8253',
    surfaceWarm: '#FAF9F6',
    typography: {
      sans: 'Plus Jakarta Sans, sans-serif',
      serif: 'Playfair Display, serif',
    },
  },

  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'About', href: '#about' },
    { name: 'Feedback', href: '#feedback' },
    { name: 'Contact', href: '#contact' },
  ],

  demoNotice: {
    formDisclaimer:
      'Demo form: feedback submission is simulated. Messaging and storage will be connected in the production version.',
    businessDisclaimer:
      'This website is a frontend design demonstration for Nirmal. Product specifications, prices, and business details are sample placeholders subject to owner confirmation.',
  },
};
