import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, Star, Clock, 
  MapPin, Bike, Heart, Flame, X, Utensils, 
  Soup, Coffee, Pizza, CheckCircle2, SlidersHorizontal 
} from 'lucide-react';
import { cn } from '../../utils/helpers';


// --- Mock Data ---
const CUISINES = [
  { name: "All", icon: <Utensils size={20} /> },
  { name: "African", icon: <Soup size={20} /> },
  { name: "Fast Food", icon: <Pizza size={20} /> },
  { name: "Breakfast", icon: <Coffee size={20} /> },
  { name: "Asian", icon: <Utensils size={20} /> },
  { name: "Healthy", icon: <Heart size={20} /> },
  { name: "Dessert", icon: <Flame size={20} /> }, // Abstract icon for sweet/hot
];

const RESTAURANTS_DATA = [
  {
    id: 1,
    name: "Mama Put Kitchen",
    cuisine: "African",
    rating: 4.8,
    reviews: 1240,
    time: "25-40 min",
    deliveryFee: 0, // Free delivery
    minOrder: 10,
    image: "https://placehold.co/600x400/e17055/ffffff?text=Jollof+Rice",
    logo: "https://placehold.co/100x100/2d3436/ffffff?text=MP",
    promo: "Free Delivery",
    isNew: false
  },
  {
    id: 2,
    name: "Burger King - Lagos",
    cuisine: "Fast Food",
    rating: 4.5,
    reviews: 856,
    time: "15-25 min",
    deliveryFee: 2.99,
    minOrder: 5,
    image: "https://placehold.co/600x400/fab1a0/2d3436?text=Burgers",
    logo: "https://placehold.co/100x100/2d3436/ffffff?text=BK",
    promo: "20% Off Orders > $20",
    isNew: true
  },
  {
    id: 3,
    name: "The Green Bowl",
    cuisine: "Healthy",
    rating: 4.9,
    reviews: 320,
    time: "30-45 min",
    deliveryFee: 1.49,
    minOrder: 15,
    image: "https://placehold.co/600x400/55efc4/2d3436?text=Salad",
    logo: "https://placehold.co/100x100/2d3436/ffffff?text=GB",
    promo: null,
    isNew: false
  },
  {
    id: 4,
    name: "Wok & Roll",
    cuisine: "Asian",
    rating: 4.3,
    reviews: 500,
    time: "40-55 min",
    deliveryFee: 3.99,
    minOrder: 20,
    image: "https://placehold.co/600x400/a29bfe/ffffff?text=Noodles",
    logo: "https://placehold.co/100x100/2d3436/ffffff?text=WR",
    promo: "Buy 1 Get 1 Free",
    isNew: false
  },
  {
    id: 5,
    name: "Sunrise Cafe",
    cuisine: "Breakfast",
    rating: 4.7,
    reviews: 150,
    time: "20-30 min",
    deliveryFee: 0.99,
    minOrder: 0,
    image: "https://placehold.co/600x400/ffeaa7/2d3436?text=Pancakes",
    logo: "https://placehold.co/100x100/2d3436/ffffff?text=SC",
    promo: null,
    isNew: true
  },
  {
    id: 6,
    name: "Suya Spot Original",
    cuisine: "African",
    rating: 4.6,
    reviews: 2100,
    time: "35-50 min",
    deliveryFee: 2.49,
    minOrder: 10,
    image: "https://placehold.co/600x400/ff7675/ffffff?text=Suya",
    logo: "https://placehold.co/100x100/2d3436/ffffff?text=SS",
    promo: "Spend $30, Save $5",
    isNew: false
  },
];

// --- Components ---

const SidebarFilters = ({ isOpen, onClose }: { isOpen?: boolean, onClose?: () => void }) => {

  if (isOpen) {
    console.log("is opened!!!");
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6 lg:hidden">
        <h3 className="text-lg font-bold text-[#4b5966] font-manrope">Filters</h3>
        <button onClick={onClose}><X size={24} className="text-[#777]" /></button>
      </div>

      <div className="space-y-8">
        {/* Sort By */}
        <div>
          <h4 className="text-xs font-bold text-[#4b5966] uppercase tracking-widest mb-3">Sort By</h4>
          <div className="space-y-2">
            {['Recommended', 'Most Popular', 'Rating', 'Delivery Time'].map((opt, i) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                <div className={cn("w-5 h-5 rounded-full border flex items-center justify-center transition-colors", i === 0 ? "border-[#5caf90]" : "border-gray-300 group-hover:border-[#5caf90]")}>
                  {i === 0 && <div className="w-2.5 h-2.5 rounded-full bg-[#5caf90]" />}
                </div>
                <span className={cn("text-sm", i === 0 ? "text-[#4b5966] font-bold" : "text-[#777] group-hover:text-[#5caf90]")}>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="text-xs font-bold text-[#4b5966] uppercase tracking-widest mb-3">Price Range</h4>
          <div className="flex gap-2">
            {['$', '$$', '$$$', '$$$$'].map((price) => (
              <button key={price} className="flex-1 py-2 rounded-lg border border-gray-200 text-sm font-medium text-[#777] hover:border-[#5caf90] hover:text-[#5caf90] focus:bg-[#5caf90] focus:text-white focus:border-[#5caf90] transition-all">
                {price}
              </button>
            ))}
          </div>
        </div>

        {/* Dietary */}
        <div>
          <h4 className="text-xs font-bold text-[#4b5966] uppercase tracking-widest mb-3">Dietary</h4>
          <div className="space-y-2">
            {['Vegetarian', 'Vegan', 'Gluten-free', 'Halal', 'Allergy Friendly'].map((diet) => (
              <label key={diet} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center text-white transition-colors group-hover:border-[#5caf90] peer-checked:bg-[#5caf90] peer-checked:border-[#5caf90]">
                  <CheckCircle2 size={12} className="opacity-0 group-hover:opacity-50" />
                </div>
                <span className="text-sm text-[#777] group-hover:text-[#5caf90]">{diet}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Max Delivery Fee */}
        <div>
          <h4 className="text-xs font-bold text-[#4b5966] uppercase tracking-widest mb-3">Max Delivery Fee</h4>
          <input type="range" className="w-full accent-[#5caf90] h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
          <div className="flex justify-between text-xs text-[#777] mt-2">
            <span>$0</span>
            <span>$10+</span>
          </div>
        </div>
      </div>

      {/* Mobile Footer Actions */}
      <div className="lg:hidden mt-auto pt-6 border-t border-gray-100">
        <button className="w-full bg-[#4b5966] text-white py-3 rounded-xl font-bold" onClick={onClose}>Apply Filters</button>
      </div>
    </div>
  );
};

const RestaurantCard = ({ data }: { data: typeof RESTAURANTS_DATA[0] }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -8 }}
    className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full relative"
  >
    {/* Image Area */}
    <div className="relative h-48 overflow-hidden">
      <img src={data.image} alt={data.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      
      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
        {data.isNew && (
          <span className="bg-[#5caf90] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            NEW
          </span>
        )}
        {data.promo && (
          <span className="bg-[#e67e22] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
            <Flame size={10} /> {data.promo}
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
        <Heart size={18} />
      </button>

      {/* Delivery Time (Bottom Left of Image) */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-xs font-bold text-[#4b5966] flex items-center gap-1.5 shadow-sm">
        <Clock size={14} />
        {data.time}
      </div>
    </div>

    {/* Content Area */}
    <div className="p-5 flex-1 flex flex-col relative">
      {/* Floating Logo */}
      <div className="absolute -top-8 right-5 w-14 h-14 bg-white rounded-2xl border-4 border-white shadow-md overflow-hidden">
        <img src={data.logo} alt={data.name} className="w-full h-full object-cover" />
      </div>

      {/* Info */}
      <div className="pr-16">
        <h3 className="text-lg font-bold text-[#4b5966] font-manrope leading-tight mb-1 group-hover:text-[#e67e22] transition-colors">
          {data.name}
        </h3>
        <p className="text-xs text-[#777] mb-3">{data.cuisine} • ${data.minOrder} Min order</p>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-dashed border-gray-100">
        <div className="flex items-center gap-1.5">
          <div className="bg-[#fff6ec] p-1 rounded-md">
            <Star size={12} className="fill-[#e67e22] text-[#e67e22]" />
          </div>
          <span className="text-sm font-bold text-[#4b5966]">{data.rating}</span>
          <span className="text-xs text-gray-400">({data.reviews})</span>
        </div>
        
        <div className="w-px h-4 bg-gray-200" />

        <div className="flex items-center gap-1.5">
          <div className="bg-[#e2fde2] p-1 rounded-md">
            <Bike size={12} className="text-[#5caf90]" />
          </div>
          <span className="text-sm font-bold text-[#4b5966]">
            {data.deliveryFee === 0 ? 'Free' : `$${data.deliveryFee}`}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

// --- Main Page ---

const RestaurantMarketplacePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredRestaurants = activeCategory === 'All' 
    ? RESTAURANTS_DATA 
    : RESTAURANTS_DATA.filter(r => r.cuisine === activeCategory);

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins">

      {/* Hero / Search Section */}
      <div className="bg-white border-b border-gray-200 pt-8 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#4b5966] font-manrope mb-6">
            Restaurants <span className="text-[#5caf90]">Near You</span>
          </h1>
          
          {/* Big Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <MapPin size={20} className="text-[#e67e22]" />
            </div>
            <input 
              type="text" 
              placeholder="Enter your delivery address..." 
              className="w-full pl-12 pr-32 py-4 bg-[#f8f8fb] border-2 border-transparent rounded-full focus:bg-white focus:border-[#5caf90] focus:outline-none transition-all text-[#4b5966] font-medium shadow-inner"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-[#4b5966] text-white px-6 rounded-full font-bold text-sm hover:bg-[#5caf90] transition-colors">
              Find Food
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-28 h-fit">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <SidebarFilters />
            </div>
          </aside>

          {/* Main Listings */}
          <div className="flex-1">
            
            {/* Cuisine Navigation */}
            <div className="mb-8 overflow-x-auto no-scrollbar pb-2">
              <div className="flex gap-4 min-w-max">
                {CUISINES.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={cn(
                      "flex flex-col items-center gap-3 group min-w-[80px] p-2 rounded-2xl transition-all",
                      activeCategory === cat.name ? "bg-white shadow-md" : "hover:bg-white/50"
                    )}
                  >
                    <div className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm",
                      activeCategory === cat.name 
                        ? "bg-[#5caf90] text-white scale-110" 
                        : "bg-white text-[#4b5966] border border-gray-100 group-hover:border-[#5caf90] group-hover:text-[#5caf90]"
                    )}>
                      {cat.icon}
                    </div>
                    <span className={cn(
                      "text-xs font-bold transition-colors",
                      activeCategory === cat.name ? "text-[#5caf90]" : "text-[#777] group-hover:text-[#4b5966]"
                    )}>
                      {cat.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Filters Toolbar */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#4b5966] font-manrope">
                {filteredRestaurants.length} Restaurants
              </h2>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-bold text-[#4b5966] shadow-sm"
                >
                  <Filter size={16} /> Filters
                </button>
                
                <div className="relative group hidden md:block">
                  <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-bold text-[#4b5966] hover:border-[#5caf90] transition-colors shadow-sm">
                    <SlidersHorizontal size={16} /> Sort
                  </button>
                </div>
              </div>
            </div>

            {/* Restaurants Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              <AnimatePresence mode='popLayout'>
                {filteredRestaurants.map((item) => (
                  <RestaurantCard key={item.id} data={item} />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {filteredRestaurants.length === 0 && (
              <div className="py-20 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#777]">
                  <Soup size={40} />
                </div>
                <h3 className="text-xl font-bold text-[#4b5966] mb-2">No restaurants found</h3>
                <p className="text-[#777]">Try changing your category or adjust filters.</p>
                <button 
                  onClick={() => setActiveCategory('All')}
                  className="mt-6 text-[#5caf90] font-bold hover:underline"
                >
                  View All Restaurants
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#4b5966]/60 backdrop-blur-sm z-[60]"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[320px] bg-white z-[70] p-6 shadow-2xl"
            >
              <SidebarFilters isOpen={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RestaurantMarketplacePage;