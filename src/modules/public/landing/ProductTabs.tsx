import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Sparkles } from 'lucide-react';

import { products } from '../../../data/products';
import { tabs } from '../../../data/categories';
import ProductCard from '../common/products/ProductCard';
import { cn } from '../../../utils/helpers';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProducts = activeTab === 'All' 
    ? products 
    : products.filter(p => p.category.includes(activeTab));

  return (
    <section className="py-16 bg-[#f8f8fb]">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#5caf90] font-bold text-xs uppercase tracking-widest mb-2">
              <Sparkles size={14} />
              <span>Fresh From Farm</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b5966] font-manrope mb-3">
              New <span className="text-[#5caf90]">Arrivals</span>
            </h2>
            <p className="text-[#777] text-sm leading-relaxed max-w-md">
              Shop online for new arrivals and get free shipping! Fresh organic ingredients delivered directly to your door.
            </p>
          </div>

          {/* Filter Tabs - Scrollable on mobile */}
          <div className="w-full lg:w-auto overflow-x-auto no-scrollbar pb-2">
            <div className="flex gap-2 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border flex-shrink-0",
                    activeTab === tab
                      ? "bg-[#5caf90] text-white border-[#5caf90] shadow-md shadow-[#5caf90]/20"
                      : "bg-white text-[#777] border-gray-200 hover:border-[#5caf90] hover:text-[#5caf90]"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center flex flex-col items-center justify-center text-[#777]"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-[#5caf90]">
                  <ShoppingBag size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#4b5966]">No products found</h3>
                <p className="text-sm">We couldn't find any items in this category today.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductTabs;