import { useState } from 'react';
import { 
  Search, SlidersHorizontal,
  Utensils, ShoppingBasket, Star, Clock
} from 'lucide-react';
import { cn } from '../../utils/helpers';
import { products } from '../../data/products';
import ProductCard from '../../modules/public/common/products/ProductCard';

const UnifiedSearchPageLayout = () => {
  const query = "Rice";
  const [activeTab, setActiveTab] = useState<'all' | 'restaurants' | 'grocery'>('all');


  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">
      <main className="container mx-auto px-4 py-8">
        
        {/* Tabs */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-1">
          <div className="flex gap-6">
            {[
              { id: 'all', label: 'All Results' },
              { id: 'restaurants', label: 'Restaurants' },
              { id: 'grocery', label: 'Grocery Items' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "pb-3 text-sm font-bold transition-all relative",
                  activeTab === tab.id ? "text-brand-orange" : "text-[#777] hover:text-[#4b5966]"
                )}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange rounded-t-full" />
                )}
              </button>
            ))}
          </div>
          
          <button className="flex items-center gap-2 text-sm font-bold text-[#4b5966] bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-brand-orange transition-all">
            <SlidersHorizontal size={16} /> Filters
          </button>
        </div>

        {/* Results */}
        <div className="space-y-12">
          
          {/* Restaurant Results Section */}
          {(activeTab === 'all' || activeTab === 'restaurants') && (
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-[#4b5966]">
                <Utensils size={20} className="text-brand-orange" /> 
                Restaurants matching "{query}"
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Mock Restaurant Cards (Inline for brevity) */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 hover:shadow-lg transition-all flex gap-4 cursor-pointer group">
                    <img src={`https://placehold.co/100x100/e17055/fff?text=Rest+${i}`} className="w-20 h-20 rounded-xl object-cover" alt="Res" />
                    <div className="flex-1">
                      <h4 className="font-bold text-[#4b5966] group-hover:text-brand-orange">Mama Put Kitchen</h4>
                      <p className="text-xs text-[#777] mb-2">African • Rice • Spicy</p>
                      <div className="flex gap-3 text-xs font-medium text-[#4b5966]">
                        <span className="flex items-center gap-1"><Star size={12} className="fill-orange-400 text-orange-400"/> 4.8</span>
                        <span className="flex items-center gap-1"><Clock size={12}/> 35m</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Grocery Results Section */}
          {(activeTab === 'all' || activeTab === 'grocery') && (
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold mb-4 text-[#4b5966]">
                <ShoppingBasket size={20} className="text-[#5caf90]" /> 
                Grocery Items matching "{query}"
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.slice(0, 4).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Empty State (Example) */}
        {!query && (
          <div className="text-center py-20 opacity-50">
            <Search size={48} className="mx-auto mb-4" />
            <p>Start typing to find delicious food.</p>
          </div>
        )}

      </main>
    </div>
  );
};

export default UnifiedSearchPageLayout;