import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Define custom CSS for the slider bullets to match the theme
const customSwiperStyles = `
  .swiper-pagination-bullet-active {
    background-color: #5caf90 !important;
    width: 24px !important;
    border-radius: 4px !important;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 0.8;
  }
`;

export const heroSlides = [
  {
    id: 1,
    image: "/ui-concepts/img/hero-bg/1.jpg",
    tagLine: "Taste of Home",
    priceText: "Starting at $12.00",
    title: "Your Favourite African Dishes, Fresh & Authentic",
    buttonText: "Order Now",
  },
  {
    id: 2,
    image: "/ui-concepts/img/hero-bg/2.jpg",
    tagLine: "Made With Love",
    priceText: "Chef Specials from $15.00",
    title: "From Traditional Recipes to Modern Plates",
    buttonText: "Explore Restaurants",
  },
  {
    id: 3,
    image: "/ui-concepts/img/hero-bg/3.jpg",
    tagLine: "African Hospitality",
    priceText: "Curated Dishes for You",
    title: "Experience Warmth, Culture & Connection in Every Meal",
    buttonText: "Discover More",
  },
  {
    id: 4,
    image: "/ui-concepts/img/hero-bg/4.jpg",
    tagLine: "Fresh Ingredients",
    priceText: "Starting at $5.00",
    title: "Organic & Authentic African Produce Delivered",
    buttonText: "Shop Ingredients",
  },
  {
    id: 5,
    image: "/ui-concepts/img/hero-bg/5.jpg",
    tagLine: "Pantry Essentials",
    priceText: "Bundles from $18.00",
    title: "Stock Your Kitchen With African Staples",
    buttonText: "Browse Pantry",
  },
  {
    id: 6,
    image: "/ui-concepts/img/hero-bg/6.jpg",
    tagLine: "Culture Meets Convenience",
    priceText: "Weekly Deals Available",
    title: "Your One-Stop African Grocery Marketplace",
    buttonText: "Start Shopping",
  }
];

const HeroSlider = () => {
  return (
    <div className="container mx-auto px-4 my-8">
      <style>{customSwiperStyles}</style>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        className="rounded-3xl overflow-hidden h-[500px] lg:h-[650px] shadow-2xl group"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              
              {/* Background Image with Zoom animation embedded in Swiper logic if needed, or CSS */}
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-linear scale-100 group-hover:scale-105"
              />

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4b5966]/90 via-[#4b5966]/40 to-transparent" />

              {/* Content Content */}
              <div className="absolute inset-0 flex items-center container px-6 lg:px-20">
                <div className="max-w-2xl z-10">
                  
                  {/* Floating Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#5caf90] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
                  >
                    <UtensilsCrossed size={14} />
                    <span>{slide.tagLine}</span>
                    <span className="w-1 h-1 bg-white rounded-full mx-1"></span>
                    <span className="text-white">{slide.priceText}</span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white font-manrope mb-8 leading-tight drop-shadow-sm"
                  >
                    {slide.title}
                  </motion.h1>

                  {/* Call to Action */}
                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="bg-[#5caf90] text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#4b5966] transition-all duration-300 flex items-center gap-3 font-bold text-lg shadow-lg hover:shadow-xl"
                  >
                    {slide.buttonText} <ArrowRight size={20} strokeWidth={2.5} />
                  </motion.button>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;