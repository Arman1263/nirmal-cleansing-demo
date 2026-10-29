import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, RefreshCw } from 'lucide-react';
import {
  PRODUCTS,
  FILTER_TABS,
} from '../data/products';
import type {
  Product,
  ProductCategoryType,
} from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductDetailsModal } from '../components/ProductDetailsModal';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';

export interface ProductShowcaseProps {
  activeFilter: 'all' | ProductCategoryType;
  onFilterChange: (filter: 'all' | ProductCategoryType) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Filtered and searched products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      const matchesCategory =
        activeFilter === 'all' || product.category === activeFilter;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q) ||
        product.features.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="products" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <Badge variant="brand" className="mb-2.5">
              Verified Formulation Prototypes
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
              Our Product Showcase
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-xl">
              Browse our complete range of household cleaning liquids and handcrafted
              bathing soaps. Click any card to inspect formulations or enquire directly.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or ingredients..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E6F40]/15 focus:border-[#2E6F40] shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-4 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-stone-100 border border-stone-200/80">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              // Count for this category
              const count =
                tab.id === 'all'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onFilterChange(tab.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6F40] ${
                    isActive
                      ? 'bg-white text-[#2E6F40] shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-white/60'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-[#EBF3ED] text-[#2E6F40]'
                        : 'bg-stone-200/80 text-stone-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Transparency Notice */}
        <div className="mt-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span>
              Showing <strong>{filteredProducts.length}</strong> of{' '}
              <strong>{PRODUCTS.length}</strong> items
            </span>
            {searchQuery && (
              <span className="text-[#2E6F40]">
                &bull; matching &quot;{searchQuery}&quot;
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-stone-400 text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Sample prices for demonstration only &bull; Customizable sizes</span>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleOpenDetails}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-stone-200">
            <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mx-auto mb-3">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900">
              No products found
            </h3>
            <p className="mt-1 text-sm text-stone-500 max-w-sm mx-auto">
              We couldn&apos;t find any products matching your filter criteria or
              search keyword &quot;{searchQuery}&quot;.
            </p>
            <div className="mt-5">
              <Button
                variant="outline"
                size="sm"
                leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
                onClick={() => {
                  onFilterChange('all');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal
        key={selectedProduct?.id ?? 'empty'}
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
