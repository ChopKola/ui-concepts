import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, ChevronDown, Grid, List, 
  Star, X, Leaf, Check
} from 'lucide-react';
import { cn } from '../../utils/helpers';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import ProductCard from '../../modules/public/common/products/ProductCard';


const MarketHero = () => (
  <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl group">
    <img 
      src="https://placehold.co/1600x600/2d3436/5caf90?text=Fresh+Market+Banner" 
      alt="Market" 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-linear scale-100 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#4b5966]/90 to-transparent" />
    
    <div className="absolute inset-0 flex items-center px-8 md:px-16">
      <div className="max-w-lg">
        <div className="flex items-center gap-2 text-[#5caf90] bg-white/10 backdrop-blur-md border border-white/20 w-fit px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
          <Leaf size={14} />
          <span>100% Organic Produce</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white font-manrope mb-4 leading-tight">
          Market<span className="text-[#5caf90]">Place</span>
        </h1>
        <p className="text-gray-200 text-lg mb-8">
          Source authentic African ingredients, spices, and fresh produce directly from trusted farmers.
        </p>
      </div>
    </div>
  </div>
);

const SidebarFilter = ({ className }: { className?: string }) => {
  return (
    <div className={cn("bg-white border border-gray-100 rounded-3xl p-6 h-fit sticky top-24", className)}>
      
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <h3 className="text-lg font-bold text-[#4b5966] font-manrope">Filters</h3>
        <button className="text-xs font-bold text-[#5caf90] hover:underline">Clear All</button>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="text-sm font-bold text-[#4b5966] mb-4 uppercase tracking-wider">Categories</h4>
        <ul className="space-y-3">
          {categories.map((cat, i) => (
            <li key={i} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-white group-hover:border-[#5caf90] group-hover:bg-[#5caf90] transition-all">
                  {i === 0 && <Check size={14} />}
                </div>
                <span className={cn("text-sm text-[#777] group-hover:text-[#5caf90] transition-colors", i === 0 && "font-bold text-[#4b5966]")}>
                  {cat.name}
                </span>
              </div>
              <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{cat.items}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="text-sm font-bold text-[#4b5966] mb-4 uppercase tracking-wider">Price Range</h4>
        <div className="h-1.5 bg-gray-100 rounded-full mb-4 relative">
          <div className="absolute left-0 w-1/2 h-full bg-[#5caf90] rounded-full"></div>
          <div className="absolute left-1/2 w-4 h-4 bg-white border-2 border-[#5caf90] rounded-full -top-1.5 shadow-md cursor-pointer"></div>
        </div>
        <div className="flex justify-between text-xs text-[#777] font-medium">
          <span>$0</span>
          <span>$100+</span>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-8">
        <h4 className="text-sm font-bold text-[#4b5966] mb-4 uppercase tracking-wider">Rating</h4>
        {[5, 4, 3, 2, 1].map((stars) => (
          <div key={stars} className="flex items-center gap-2 mb-2 cursor-pointer group">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={cn(
                    i < stars ? "fill-orange-400 text-orange-400" : "text-gray-200",
                    "transition-colors"
                  )} 
                />
              ))}
            </div>
            <span className="text-xs text-[#777] group-hover:text-[#4b5966]">& Up</span>
          </div>
        ))}
      </div>

    </div>
  );
};

const SortDropdown = () => (
  <div className="relative group">
    <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-full text-sm font-bold text-[#4b5966] hover:border-[#5caf90] hover:text-[#5caf90] transition-all shadow-sm">
      Sort by: <span className="font-normal text-[#777]">Popularity</span>
      <ChevronDown size={16} />
    </button>
    {/* Dropdown Content */}
    <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden hidden group-hover:block z-20">
      {['Popularity', 'Newest Arrivals', 'Price: Low to High', 'Price: High to Low'].map(opt => (
        <div key={opt} className="px-4 py-2.5 text-sm text-[#777] hover:bg-[#f8f8fb] hover:text-[#5caf90] cursor-pointer transition-colors">
          {opt}
        </div>
      ))}
    </div>
  </div>
);

// --- Main Page Component ---

const MarketplacePage = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins">

      <main className="container mx-auto px-4 py-8">
        
        <MarketHero />

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-1/4 flex-shrink-0">
            <SidebarFilter />
          </aside>

          {/* Mobile Filter Drawer Overlay */}
          <AnimatePresence>
            {isMobileFilterOpen && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-[#4b5966]/50 backdrop-blur-sm z-50 lg:hidden"
                  onClick={() => setIsMobileFilterOpen(false)}
                />
                <motion.div 
                  initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed top-0 left-0 h-full w-[300px] bg-white z-[60] p-4 overflow-y-auto lg:hidden"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg text-[#4b5966]">Filters</h3>
                    <button onClick={() => setIsMobileFilterOpen(false)}><X size={24} /></button>
                  </div>
                  <SidebarFilter className="border-none p-0 shadow-none" />
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex items-center gap-4 w-full md:w-auto">
                {/* Mobile Filter Toggle */}
                <button 
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 bg-[#4b5966] text-white px-4 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#4b5966]/20"
                >
                  <Filter size={16} /> Filter
                </button>

                <p className="text-[#777] text-sm font-medium">
                  Showing <span className="font-bold text-[#4b5966]">1-8</span> of <span className="font-bold text-[#4b5966]">124</span> results
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <SortDropdown />
                
                {/* View Toggles */}
                <div className="bg-white border border-gray-200 p-1 rounded-full flex items-center shadow-sm">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={cn(
                      "p-2 rounded-full transition-all",
                      viewMode === 'grid' ? "bg-[#5caf90] text-white shadow-md" : "text-[#777] hover:text-[#5caf90]"
                    )}
                  >
                    <Grid size={18} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={cn(
                      "p-2 rounded-full transition-all",
                      viewMode === 'list' ? "bg-[#5caf90] text-white shadow-md" : "text-[#777] hover:text-[#5caf90]"
                    )}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Fresh Vegetables', 'Price: $0-$50', '4 Stars & Up'].map((filter) => (
                <div key={filter} className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-bold text-[#4b5966] shadow-sm">
                  {filter}
                  <button className="hover:text-red-500 transition-colors"><X size={14} /></button>
                </div>
              ))}
              <button className="text-xs font-bold text-[#5caf90] ml-2 hover:underline">Clear All</button>
            </div>

            {/* Product Grid */}
            <motion.div 
              layout
              className={cn(
                "grid gap-6",
                viewMode === 'grid' 
                  ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" 
                  : "grid-cols-1"
              )}
            >
              <AnimatePresence>
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* 
                      If viewMode is 'list', we would conditionally render a ListViewCard here.
                      For brevity, we reuse ProductCard but could wrap it differently.
                    */}
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center">
              <div className="flex gap-2 bg-white p-2 rounded-full shadow-sm border border-gray-100">
                {[1, 2, 3, 4].map((page) => (
                  <button 
                    key={page}
                    className={cn(
                      "w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold transition-all",
                      page === 1 
                        ? "bg-[#4b5966] text-white shadow-md" 
                        : "text-[#777] hover:bg-[#f8f8fb] hover:text-[#5caf90]"
                    )}
                  >
                    {page}
                  </button>
                ))}
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#777] hover:bg-[#f8f8fb] hover:text-[#5caf90]">
                  <span className="sr-only">Next</span> &gt;
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default MarketplacePage;