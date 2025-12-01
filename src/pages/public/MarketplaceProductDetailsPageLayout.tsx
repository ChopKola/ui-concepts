import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, Minus, Plus, Heart, Share2, 
  ShoppingCart, Truck, ShieldCheck, Info, 
  ChevronRight, Leaf, Scale, MapPin, ShoppingBasket
} from 'lucide-react';
import { cn } from '../../utils/helpers';
import { products } from '../../data/products';
import ProductCard from '../../modules/public/common/products/ProductCard';

// --- Mock Product Data ---
const PRODUCT = {
  id: "grocery-001",
  name: "Premium Long Grain Basmati Rice (5kg)",
  category: "Grains & Rice",
  price: 45.00,
  oldPrice: 55.00,
  rating: 4.8,
  reviews: 342,
  stock: 15,
  description: "Our premium Basmati rice is aged for 12 months to deliver a fluffy texture and aromatic flavor. Perfect for Jollof rice, Fried rice, or plain white rice accompaniments. Sourced directly from organic farms.",
  seller: {
    name: "Green Leaf Farms",
    rating: 4.9,
    verified: true,
    joined: "2021"
  },
  specs: {
    weight: "5kg Bag",
    origin: "Nigeria",
    type: "Organic",
    shelfLife: "24 Months"
  },
  images: [
    "https://placehold.co/600x600/fff6ec/e17055?text=Rice+Bag+Front",
    "https://placehold.co/600x600/f8f8fb/4b5966?text=Rice+Texture",
    "https://placehold.co/600x600/e2fde2/5caf90?text=Cooking+Shot"
  ]
};

// --- Components ---

const Gallery = ({ images }: { images: string[] }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square bg-white rounded-3xl border border-gray-100 overflow-hidden p-8 flex items-center justify-center group">
        <img 
          src={images[activeImg]} 
          alt="Product Main" 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#5caf90] text-white text-xs font-bold px-3 py-1 rounded-full">
            Organic
          </span>
        </div>
        <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors border border-gray-100 shadow-sm">
          <Heart size={20} />
        </button>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar">
        {images.map((img, i) => (
          <button 
            key={i}
            onClick={() => setActiveImg(i)}
            className={cn(
              "w-20 h-20 rounded-xl border-2 flex-shrink-0 overflow-hidden p-1 bg-white",
              activeImg === i ? "border-brand-orange" : "border-gray-100 hover:border-gray-300"
            )}
          >
            <img src={img} className="w-full h-full object-contain" alt="Thumbnail" />
          </button>
        ))}
      </div>
    </div>
  );
};

const QuantitySelector = () => {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex items-center border border-gray-200 rounded-xl bg-white p-1">
      <button 
        onClick={() => setQty(Math.max(1, qty - 1))}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg text-[#4b5966] transition-colors"
      >
        <Minus size={16} />
      </button>
      <input 
        type="text" 
        value={qty} 
        readOnly 
        className="w-12 text-center font-bold text-[#4b5966] outline-none bg-transparent"
      />
      <button 
        onClick={() => setQty(qty + 1)}
        className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg text-[#4b5966] transition-colors"
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

const MarketplaceProductDetailsPageLayout = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-xs text-[#777]">
            <a href="/" className="hover:text-brand-orange">Home</a>
            <ChevronRight size={12} />
            <a href="/market" className="hover:text-brand-orange">Marketplace</a>
            <ChevronRight size={12} />
            <a href="#" className="hover:text-brand-orange">{PRODUCT.category}</a>
            <ChevronRight size={12} />
            <span className="text-[#4b5966] font-bold truncate max-w-[200px]">{PRODUCT.name}</span>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        
        {/* Top Section: Gallery & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left: Images */}
          <Gallery images={PRODUCT.images} />

          {/* Right: Product Details */}
          <div className="flex flex-col h-full">
            
            {/* Header Info */}
            <div className="mb-6 border-b border-dashed border-gray-200 pb-6">
              <h1 className="text-2xl md:text-4xl font-extrabold font-manrope mb-3 text-[#4b5966] leading-tight">
                {PRODUCT.name}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                <div className="flex items-center gap-1 text-orange-400">
                  <Star size={16} className="fill-orange-400" />
                  <span className="font-bold text-[#4b5966] text-base">{PRODUCT.rating}</span>
                  <span className="text-[#777] underline">({PRODUCT.reviews} reviews)</span>
                </div>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded text-xs">
                  In Stock ({PRODUCT.stock} left)
                </span>
              </div>

              <div className="flex items-end gap-3">
                <span className="text-3xl font-extrabold text-[#5caf90]">${PRODUCT.price.toFixed(2)}</span>
                <span className="text-lg text-gray-400 line-through mb-1">${PRODUCT.oldPrice.toFixed(2)}</span>
                <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded mb-1">18% OFF</span>
              </div>
            </div>

            {/* Seller Info Card */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between mb-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f8f8fb] rounded-xl flex items-center justify-center text-brand-orange font-bold text-xl">
                  {PRODUCT.seller.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs text-[#777]">Sold by</p>
                  <h4 className="font-bold text-[#4b5966] flex items-center gap-1">
                    {PRODUCT.seller.name} 
                    {PRODUCT.seller.verified && <ShieldCheck size={14} className="text-[#5caf90]" />}
                  </h4>
                </div>
              </div>
              <button className="text-xs font-bold text-brand-orange hover:bg-[#fff6ec] px-3 py-2 rounded-lg transition-colors">
                Visit Store
              </button>
            </div>

            {/* Variants / Options (Example) */}
            {/* <div className="mb-8">
              <label className="text-sm font-bold text-[#4b5966] mb-3 block">Pack Size</label>
              <div className="flex gap-3">
                {['1kg', '5kg', '10kg'].map(size => (
                  <button key={size} className={cn("px-4 py-2 rounded-lg border text-sm font-medium transition-all", size === '5kg' ? "border-brand-orange text-brand-orange bg-[#fff6ec]" : "border-gray-200 text-[#777] hover:border-gray-300")}>
                    {size}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <div className="flex-shrink-0">
                <QuantitySelector />
              </div>
              <button className="flex-1 bg-brand-orange text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#e17055] transition-all shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2">
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button className="p-3.5 rounded-xl border border-gray-200 text-[#777] hover:border-[#4b5966] hover:text-[#4b5966] transition-colors">
                <Share2 size={20} />
              </button>
            </div>

            {/* Delivery Promise */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-[#f8f8fb] rounded-xl">
                <Truck size={20} className="text-[#5caf90]" />
                <div className="text-xs">
                  <p className="font-bold text-[#4b5966]">Fast Delivery</p>
                  <p className="text-[#777]">Get it by tomorrow</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-[#f8f8fb] rounded-xl">
                <ShieldCheck size={20} className="text-[#5caf90]" />
                <div className="text-xs">
                  <p className="font-bold text-[#4b5966]">Quality Check</p>
                  <p className="text-[#777]">Verified Freshness</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Middle Section: Tabs (Details, Specs, Reviews) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              {/* Tab Headers */}
              <div className="flex gap-8 border-b border-gray-100 mb-6 overflow-x-auto no-scrollbar">
                {['Description', 'Nutrition & Specs', 'Reviews'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
                    className={cn(
                      "pb-3 text-sm font-bold whitespace-nowrap transition-all border-b-2",
                      activeTab === tab.toLowerCase().split(' ')[0]
                        ? "border-brand-orange text-brand-orange"
                        : "border-transparent text-[#777] hover:text-[#4b5966]"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[200px] text-[#777] leading-relaxed text-sm">
                {activeTab === 'description' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="mb-4">{PRODUCT.description}</p>
                    <p>
                      Grown in the nutrient-rich soils of Northern Nigeria, this rice is carefully harvested and processed to ensure every grain remains whole and distinct when cooked. It is free from artificial preservatives and polishing agents.
                    </p>
                  </motion.div>
                )}
                
                {activeTab === 'nutrition' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex justify-between p-3 bg-[#f8f8fb] rounded-lg">
                        <span className="flex items-center gap-2"><Scale size={16} /> Net Weight</span>
                        <span className="font-bold text-[#4b5966]">{PRODUCT.specs.weight}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-[#f8f8fb] rounded-lg">
                        <span className="flex items-center gap-2"><MapPin size={16} /> Origin</span>
                        <span className="font-bold text-[#4b5966]">{PRODUCT.specs.origin}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-[#f8f8fb] rounded-lg">
                        <span className="flex items-center gap-2"><Leaf size={16} /> Type</span>
                        <span className="font-bold text-[#4b5966]">{PRODUCT.specs.type}</span>
                      </div>
                      <div className="flex justify-between p-3 bg-[#f8f8fb] rounded-lg">
                        <span className="flex items-center gap-2"><Info size={16} /> Shelf Life</span>
                        <span className="font-bold text-[#4b5966]">{PRODUCT.specs.shelfLife}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'reviews' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="space-y-6">
                      {[1, 2].map(i => (
                        <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gray-200 rounded-full" />
                              <span className="font-bold text-[#4b5966] text-xs">Happy Customer</span>
                            </div>
                            <div className="flex text-orange-400">
                              {[...Array(5)].map((_, idx) => <Star key={idx} size={12} fill="currentColor" />)}
                            </div>
                          </div>
                          <p className="text-xs">Great quality rice! Cooks perfectly and tastes amazing.</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Bulk Buy Promo */}
          <div className="lg:col-span-1">
            <div className="bg-[#4b5966] rounded-3xl p-8 text-white relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <ShoppingBasket size={120} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-manrope font-bold mb-2">Buy in Bulk & Save</h3>
                <p className="text-gray-300 text-sm mb-6">Running a restaurant or feeding a large family? Get wholesale prices.</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <span>Buy 5+</span>
                    <span className="font-bold text-[#5caf90]">Save 5%</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <span>Buy 10+</span>
                    <span className="font-bold text-[#5caf90]">Save 10%</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-white text-[#4b5966] font-bold rounded-xl text-sm hover:bg-[#5caf90] hover:text-white transition-colors">
                  View Wholesale Options
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Related Products */}
        <div className="mt-20 mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#4b5966] font-manrope">You might also like</h2>
            <a href="#" className="text-sm font-bold text-brand-orange hover:underline">View all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </main>

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 lg:hidden z-40 flex gap-4 items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex-1">
          <span className="text-xs text-[#777] block">Total Price</span>
          <span className="text-xl font-extrabold text-[#4b5966]">${PRODUCT.price.toFixed(2)}</span>
        </div>
        <button className="flex-[2] bg-brand-orange text-white py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MarketplaceProductDetailsPageLayout;