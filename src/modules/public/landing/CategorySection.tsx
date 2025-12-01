import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { ArrowRight, ShoppingBasket } from 'lucide-react';

import { categories } from '../../../data/categories';
import { cn } from '../../../utils/helpers';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const CategorySection = () => {
  return (
    <section className="py-16 bg-[#f8f8fb]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#5caf90] font-medium text-sm mb-2 uppercase tracking-wider">
              <ShoppingBasket size={16} />
              <span>Marketplace</span>
            </div>
            <h2 className="text-3xl font-bold text-[#4b5966] font-manrope">
              Shop by <span className="text-[#5caf90]">Category</span>
            </h2>
            <p className="text-[#777] text-sm mt-2 max-w-md">
              Find everything from fresh produce to pantry staples delivered in minutes.
            </p>
          </div>
          
          <a href="/market" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#4b5966] hover:text-[#5caf90] transition-colors group">
            View All Categories 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </a>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          freeMode={true}
          loop={true}
          className="pb-10 px-2" // Padding for shadows
        >
          {categories.map((cat, idx) => (
            <SwiperSlide key={idx} className="h-auto">
              <motion.div 
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="group h-full bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer shadow-sm hover:shadow-xl hover:border-[#5caf90]/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Decoration */}
                <div className={cn("absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#5caf90] to-transparent opacity-0 group-hover:opacity-100 transition-opacity")} />

                {/* Icon Container */}
                <div className={cn(
                  "w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                  cat.color // Assuming cat.color provides a bg class like 'bg-red-100'
                )}>
                  <span className="drop-shadow-sm">{cat.icon}</span>
                </div>

                {/* Content */}
                <h4 className="font-bold text-[#4b5966] text-lg mb-1 group-hover:text-[#5caf90] transition-colors">
                  {cat.name}
                </h4>
                <span className="text-xs font-medium text-[#999] bg-gray-50 px-3 py-1 rounded-full border border-gray-100 group-hover:bg-[#5caf90] group-hover:text-white group-hover:border-[#5caf90] transition-colors">
                  {cat.items} Items
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile View All Button */}
        <div className="mt-6 text-center md:hidden">
           <a href="/market" className="inline-flex items-center gap-2 text-sm font-bold text-[#4b5966] hover:text-[#5caf90] transition-colors">
            View All Categories <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;