import React, { useState } from 'react';
import { ToastProvider } from './components/Toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Hero } from './sections/Hero';
import { Categories } from './sections/Categories';
import { ProductShowcase } from './sections/ProductShowcase';
import { WhyNirmal } from './sections/WhyNirmal';
import { AboutNirmal } from './sections/AboutNirmal';
import { FeedbackSection } from './sections/FeedbackSection';
import { ContactSection } from './sections/ContactSection';
import type { ProductCategoryType, CategoryGroup } from './data/products';

export const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProductCategoryType>('all');

  const handleSelectGroup = (group: CategoryGroup) => {
    if (group === 'household-cleaning') {
      setActiveFilter('floor-cleaner');
    } else if (group === 'personal-care') {
      setActiveFilter('body-soap');
    } else {
      setActiveFilter('all');
    }
  };

  const handleSelectCategoryFromFooter = (category: string) => {
    if (
      category === 'floor-cleaner' ||
      category === 'bathroom-cleaner' ||
      category === 'toilet-cleaner' ||
      category === 'body-soap'
    ) {
      setActiveFilter(category);
    } else {
      setActiveFilter('all');
    }
  };

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1C1917] selection:bg-[#EBF3ED] selection:text-[#1B4326]">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Page Flow */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Product Categories Division */}
          <Categories onSelectGroup={handleSelectGroup} />

          {/* Interactive Product Catalogue */}
          <ProductShowcase
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Why Choose Nirmal */}
          <WhyNirmal />

          {/* About Brand & Story */}
          <AboutNirmal />

          {/* Customer Feedback Form */}
          <FeedbackSection />

          {/* Contact & Inquiries */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onSelectCategory={handleSelectCategoryFromFooter} />

        {/* Scroll To Top */}
        <BackToTop />
      </div>
    </ToastProvider>
  );
};

export default App;
