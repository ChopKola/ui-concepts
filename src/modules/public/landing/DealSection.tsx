import { Timer, Zap } from 'lucide-react';
import { products } from '../../../data/products';
import ProductCard from '../common/products/ProductCard';

const DealSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header with Countdown */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6 border-b border-dashed border-gray-100 pb-8">
          
          {/* Text Content */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[#ff7070] font-bold text-xs uppercase tracking-widest mb-2">
              <Zap size={16} className="fill-[#ff7070]" />
              <span>Flash Offers</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b5966] font-manrope mb-3">
              Deal of the <span className="text-[#5caf90]">Day</span>
            </h2>
            <p className="text-[#777] text-sm leading-relaxed">
              Grab these limited-time tasty offers before they expire. Discounts up to 50% on selected fresh items.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-4 bg-[#fff6ec] px-6 py-3 rounded-2xl border border-[#ffeae9]">
            <div className="flex items-center gap-2 text-[#4b5966] font-bold text-sm mr-2">
              <Timer size={18} className="text-[#ff7070]" />
              <span className="hidden sm:inline">Ends in:</span>
            </div>
            
            <div className="flex gap-3">
              {['02', '12', '45', '30'].map((time, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-[#ff7070] text-white w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center font-bold text-lg shadow-sm shadow-[#ff7070]/30">
                    {time}
                  </div>
                  <span className="text-[10px] font-medium text-[#777] mt-1 uppercase tracking-wide">
                    {['Day', 'Hrs', 'Min', 'Sec'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map(product => (
            // Overriding the tag to ensure it looks like a deal
            <ProductCard 
              key={product.id} 
              product={{
                ...product, 
                tag: 'Save 20%', 
                tagColor: 'bg-[#ff7070]'
              }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealSection;