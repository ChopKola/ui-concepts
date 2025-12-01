import { motion } from 'framer-motion';
import { 
  Heart, Star, Plus
} from 'lucide-react';
import type { Product } from '../../../../types/product.type';
import { cn, slugify } from '../../../../utils/helpers';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full"
      onClick={() => navigate(`/ui-concepts/marketplace/${slugify(product.name)}`)}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden bg-gray-50">
        
        {/* Tag Badge */}
        {product.tag && (
          <span className={cn(
            "absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full z-10 shadow-sm", 
            product.tagColor || "bg-[#5caf90]"
          )}>
            {product.tag}
          </span>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-400 hover:bg-[#ec716d] hover:text-white transition-colors z-10 opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 duration-300">
          <Heart size={16} />
        </button>

        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
          loading="lazy" 
        />
        
        {/* Quick Add Button - Floating on the edge */}
        <button 
          className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-[#4b5966] hover:bg-[#5caf90] hover:text-white transition-all duration-300 group-hover:scale-110 z-10"
          title="Add to Cart"
        >
          <Plus size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        
        {/* Category & Rating Row */}
        <div className="flex justify-between items-start mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#999] group-hover:text-[#5caf90] transition-colors">
            {product.category}
          </span>
          <div className="flex items-center gap-1 bg-orange-50 px-2 py-0.5 rounded-md">
            <Star size={10} className="fill-orange-400 text-orange-400" />
            <span className="text-xs font-bold text-orange-500">{product.rating}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[#4b5966] font-manrope font-bold text-lg mb-2 leading-tight line-clamp-2 group-hover:text-[#5caf90] transition-colors cursor-pointer">
          {product.name}
        </h3>

        {/* Price Footer */}
        <div className="mt-auto pt-3 border-t border-dashed border-gray-100 flex items-center gap-3">
          <span className="text-lg font-extrabold text-[#4b5966]">
            ${product.price.toFixed(2)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through font-medium">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;