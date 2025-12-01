import { ArrowRight, Sparkles } from 'lucide-react';

const OfferBanner = () => {
  return (
    <section className="py-12 container mx-auto px-4">
      <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] w-full group shadow-2xl">
        
        {/* Background Image with Zoom Effect */}
        <img 
          src="/ui-concepts/img/banner/1.jpg" // Assuming this path exists, otherwise replace with placeholder
          // src="https://placehold.co/1600x900/2d3436/636e72?text=Fresh+African+Produce" // Placeholder fallback
          alt="Fresh African Food Banner" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        />

        {/* Gradient Overlay: Dark on the right, fading to clear on the left (or vice versa depending on image) */}
        {/* This gradient ensures text readability regardless of the image behind it */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#4b5966]/95 via-[#4b5966]/60 to-transparent" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-end text-center md:text-right p-8 md:p-20">
          <div className="max-w-2xl">
            
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-orange/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 shadow-lg shadow-brand-orange/20 animate-pulse">
              <Sparkles size={16} className="fill-white" />
              <span>Limited Time Offer</span>
            </div>

            {/* Hero Heading */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-white font-manrope mb-4 leading-tight drop-shadow-sm">
              Fresh & Healthy <br/>
              <span className="text-[#5caf90]">African Grocery</span>
            </h2>

            {/* Description with Emphasis */}
            <p className="text-gray-200 text-lg md:text-xl mb-8 font-medium leading-relaxed">
              Experience the authentic taste of home delivered to your door.
              <br className="hidden md:block" />
              Get <span className="text-brand-orange font-extrabold text-2xl">30% OFF</span> on your first order.
            </p>

            {/* Primary Action Button */}
            <button className="inline-flex items-center gap-2 bg-white text-[#4b5966] px-8 py-4 rounded-full font-bold text-base hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Shop Now <ArrowRight size={20} strokeWidth={2.5} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;