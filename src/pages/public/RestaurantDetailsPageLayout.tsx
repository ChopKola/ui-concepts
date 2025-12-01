import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, Clock, Bike, MapPin, Search, 
  Heart, Share2, Info, Plus, Minus, 
  Flame, Leaf, ChevronRight 
} from 'lucide-react';
import { cn } from '../../utils/helpers';
// --- Mock Data ---
const RESTAURANT = {
  id: 1,
  name: "Mama Put Kitchen",
  tags: ["African", "Nigerian", "Grill"],
  rating: 4.8,
  reviewCount: "1.2k+",
  deliveryTime: "35-45 min",
  deliveryFee: 2.99,
  minOrder: 10,
  distance: "2.4 km",
  banner: "https://placehold.co/1600x600/2d3436/e17055?text=Mama+Put+Banner",
  logo: "https://placehold.co/100x100/e17055/ffffff?text=MP",
  isOpen: true,
  address: "14 Victoria Island, Lagos"
};

const MENU_CATEGORIES = [
  { id: "popular", name: "Popular" },
  { id: "jollof", name: "Rice Dishes" },
  { id: "soups", name: "Soups & Swallows" },
  { id: "grill", name: "Grill & Suya" },
  { id: "sides", name: "Sides" },
  { id: "drinks", name: "Drinks" },
];

const MENU_ITEMS = [
  {
    id: 101,
    categoryId: "popular",
    name: "Signature Jollof Combo",
    desc: "Smoky party jollof rice served with fried plantain, moi-moi, and your choice of protein.",
    price: 14.50,
    image: "https://placehold.co/200x200/e17055/fff?text=Jollof",
    isPopular: true,
    isSpicy: true,
  },
  {
    id: 102,
    categoryId: "popular",
    name: "Egusi Soup Special",
    desc: "Rich melon seed soup cooked with stockfish, beef, and pumpkin leaves. Served with Pounded Yam.",
    price: 16.00,
    image: "https://placehold.co/200x200/5caf90/fff?text=Egusi",
    isPopular: true,
    isVeg: false,
  },
  {
    id: 201,
    categoryId: "jollof",
    name: "Fried Rice",
    desc: "Stir-fried rice with mixed vegetables, liver, and prawns.",
    price: 12.00,
    image: "https://placehold.co/200x200/f1c40f/fff?text=Fried+Rice",
  },
  {
    id: 401,
    categoryId: "grill",
    name: "Beef Suya (Spicy)",
    desc: "Thinly sliced beef marinated in yaji spice and grilled to perfection. Served with onions and cabbage.",
    price: 8.50,
    image: "https://placehold.co/200x200/e74c3c/fff?text=Suya",
    isSpicy: true,
  },
];

// --- Components ---

const MenuItem = ({ item }: { item: typeof MENU_ITEMS[0] }) => {
  const [qty, setQty] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-4 rounded-2xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-md transition-all flex gap-4 md:gap-6 group"
    >
      {/* Text Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-1">
          {item.isPopular && (
            <span className="text-[10px] font-bold bg-brand-orange/10 text-brand-orange px-2 py-0.5 rounded-full uppercase tracking-wide">
              Bestseller
            </span>
          )}
          {item.isSpicy && <Flame size={14} className="text-red-500" />}
          {item.isVeg && <Leaf size={14} className="text-green-500" />}
        </div>
        
        <h3 className="font-manrope font-bold text-[#4b5966] text-lg mb-1 group-hover:text-brand-orange transition-colors">
          {item.name}
        </h3>
        <p className="text-[#777] text-sm leading-relaxed line-clamp-2 mb-3">
          {item.desc}
        </p>
        <span className="font-extrabold text-[#4b5966] text-base mt-auto">
          ${item.price.toFixed(2)}
        </span>
      </div>

      {/* Image & Action */}
      <div className="relative w-28 h-28 md:w-32 md:h-32 flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover rounded-xl bg-gray-100"
        />
        
        {/* Add Button Overlay */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 shadow-lg rounded-lg overflow-hidden bg-white flex items-center border border-gray-100">
          {qty === 0 ? (
            <button 
              onClick={() => setQty(1)}
              className="px-6 py-2 text-sm font-bold text-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center">
              <button onClick={() => setQty(qty - 1)} className="p-2 hover:bg-gray-100 text-[#4b5966]">
                <Minus size={14} />
              </button>
              <span className="text-xs font-bold w-4 text-center text-[#4b5966]">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-2 hover:bg-gray-100 text-brand-green">
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CartPreview = () => (
  <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 sticky top-32">
    <div className="text-center mb-6">
      <h3 className="font-bold text-xl text-[#4b5966] font-manrope">Your Order</h3>
      <p className="text-xs text-[#777]">from {RESTAURANT.name}</p>
    </div>

    {/* Empty State (Visual only for template) */}
    {/* <div className="flex flex-col items-center py-8 opacity-50">
      <ShoppingBag size={48} className="mb-2 text-gray-300" />
      <p className="text-sm">Your basket is empty</p>
    </div> */}

    {/* Mock Populated State */}
    <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto no-scrollbar">
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-brand-orange bg-orange-50 px-1.5 rounded">1x</span>
          <span className="text-[#4b5966]">Jollof Combo</span>
        </div>
        <span className="font-medium text-[#777]">$14.50</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-brand-orange bg-orange-50 px-1.5 rounded">2x</span>
          <span className="text-[#4b5966]">Moi Moi</span>
        </div>
        <span className="font-medium text-[#777]">$8.00</span>
      </div>
    </div>

    <div className="space-y-3 pt-4 border-t border-dashed border-gray-200">
      <div className="flex justify-between text-sm text-[#777]">
        <span>Subtotal</span>
        <span>$22.50</span>
      </div>
      <div className="flex justify-between text-sm text-[#777]">
        <span>Delivery</span>
        <span>${RESTAURANT.deliveryFee}</span>
      </div>
      <div className="flex justify-between text-lg font-extrabold text-[#4b5966]">
        <span>Total</span>
        <span>$25.49</span>
      </div>
    </div>

    <button className="w-full mt-6 bg-brand-orange text-white py-3.5 rounded-xl font-bold hover:bg-[#e17055] transition-all shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2">
      Checkout <ChevronRight size={18} />
    </button>
  </div>
);

// --- Main Page ---

const RestaurantDetailsPageLayout = () => {
  const [activeCategory, setActiveCategory] = useState("popular");

  // Scroll spy logic would go here to update activeCategory based on scroll position

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins">
      {/* 1. Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <img 
          src={RESTAURANT.banner} 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Restaurant Info Card (Overlapping) */}
        <div className="absolute bottom-0 left-0 w-full container mx-auto px-4 translate-y-1/2 z-10">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center gap-6 border border-gray-100">
            
            {/* Logo */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border-4 border-white shadow-md overflow-hidden flex-shrink-0 -mt-12 md:mt-0 bg-white">
              <img src={RESTAURANT.logo} alt="Logo" className="w-full h-full object-cover" />
            </div>

            {/* Text Info */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-extrabold text-[#4b5966] font-manrope">
                  {RESTAURANT.name}
                </h1>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                  <Clock size={12} /> Open Now
                </span>
              </div>
              
              <p className="text-[#777] text-sm mb-4 flex flex-wrap gap-2 items-center">
                {RESTAURANT.tags.join(" • ")} 
                <span className="w-1 h-1 bg-gray-300 rounded-full" /> 
                <MapPin size={14} className="text-brand-orange" /> {RESTAURANT.address}
              </p>

              {/* Metrics Pill */}
              <div className="flex flex-wrap gap-4 md:gap-8 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2">
                  <Star size={18} className="fill-[#e67e22] text-[#e67e22]" />
                  <span className="font-bold text-[#4b5966]">{RESTAURANT.rating}</span>
                  <span className="text-xs text-[#777] underline cursor-pointer">({RESTAURANT.reviewCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-[#5caf90]" />
                  <span className="font-bold text-[#4b5966]">{RESTAURANT.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bike size={18} className="text-[#4b5966]" />
                  <span className="font-bold text-[#4b5966]">${RESTAURANT.deliveryFee}</span>
                  <span className="text-xs text-[#777]">Delivery</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 self-end md:self-start mt-4 md:mt-0">
              <button className="p-3 rounded-full border border-gray-200 text-[#777] hover:text-red-500 hover:bg-red-50 transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-3 rounded-full border border-gray-200 text-[#777] hover:text-blue-500 hover:bg-blue-50 transition-colors">
                <Share2 size={20} />
              </button>
              <button className="p-3 rounded-full border border-gray-200 text-[#777] hover:text-[#4b5966] hover:bg-gray-50 transition-colors">
                <Info size={20} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Spacer for Overlapping Card */}
      <div className="h-32 md:h-24" />

      <main className="container mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Menu */}
          <div className="lg:w-2/3">
            
            {/* Sticky Menu Categories */}
            <div className="sticky top-[85px] z-30 bg-[#f8f8fb]/95 backdrop-blur-sm py-4 -mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto no-scrollbar border-b border-gray-200/50 mb-8">
              <div className="flex gap-3 min-w-max">
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "px-5 py-2 rounded-full text-sm font-bold transition-all",
                      activeCategory === cat.id
                        ? "bg-[#4b5966] text-white shadow-md"
                        : "bg-white text-[#777] border border-gray-200 hover:border-[#4b5966] hover:text-[#4b5966]"
                    )}
                  >
                    {cat.name}
                  </button>
                ))}
                {/* Search in Menu */}
                <div className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-2 ml-4">
                  <Search size={16} className="text-gray-400" />
                  <input type="text" placeholder="Search menu..." className="bg-transparent outline-none text-xs ml-2 w-24 text-[#4b5966]" />
                </div>
              </div>
            </div>

            {/* Menu Items Section */}
            <div className="space-y-10">
              {/* Popular Section */}
              <div id="popular">
                <h2 className="text-xl font-bold text-[#4b5966] font-manrope mb-4 flex items-center gap-2">
                  <Flame size={20} className="text-brand-orange" /> Popular Items
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {MENU_ITEMS.filter(i => i.categoryId === 'popular').map(item => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Rice Section */}
              <div id="jollof">
                <h2 className="text-xl font-bold text-[#4b5966] font-manrope mb-4">Rice Dishes</h2>
                <div className="grid grid-cols-1 gap-4">
                  {MENU_ITEMS.filter(i => i.categoryId === 'jollof').map(item => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Grill Section */}
              <div id="grill">
                <h2 className="text-xl font-bold text-[#4b5966] font-manrope mb-4">Grill & Suya</h2>
                <div className="grid grid-cols-1 gap-4">
                  {MENU_ITEMS.filter(i => i.categoryId === 'grill').map(item => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Cart (Desktop Sticky) */}
          <aside className="hidden lg:block lg:w-1/3">
            <CartPreview />
          </aside>

        </div>
      </main>

      {/* Mobile Floating Cart Button */}
      <div className="fixed bottom-6 left-4 right-4 z-40 lg:hidden">
        <button className="w-full bg-brand-orange text-white py-4 rounded-2xl font-bold shadow-xl flex justify-between items-center px-6">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 px-3 py-1 rounded-lg text-sm">3</div>
            <span className="text-sm">View Order</span>
          </div>
          <span className="text-lg">$25.49</span>
        </button>
      </div>
    </div>
  );
};

export default RestaurantDetailsPageLayout;