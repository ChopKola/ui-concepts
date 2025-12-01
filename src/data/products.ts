import type { Product } from "../types/product.type";

export const products: Product[] = [
  // -----------------------------------------
  // 1. Grains & Flours
  // -----------------------------------------
  { id: 1, name: 'Premium Garri (Yellow)', category: 'Grains & Flours', price: 12.00, oldPrice: 15.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Garri', tag: 'Best Seller', tagColor: 'bg-orange-400' },
  { id: 2, name: 'Fufu Flour (Cassava)', category: 'Grains & Flours', price: 9.00, oldPrice: 11.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Fufu', tag: 'Hot', tagColor: 'bg-red-500' },
  { id: 3, name: 'Yam Flour (Elubo)', category: 'Grains & Flours', price: 14.00, oldPrice: 18.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Yam+Flour' },
  { id: 4, name: 'Egusi Melon Seeds', category: 'Grains & Flours', price: 16.00, oldPrice: 20.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Egusi' },

  // -----------------------------------------
  // 2. Legumes & Pulses
  // -----------------------------------------
  { id: 5, name: 'Brown Beans (Nigerian Honey Beans)', category: 'Legumes & Pulses', price: 10.00, oldPrice: 13.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Honey+Beans' },
  { id: 6, name: 'Black-Eyed Peas', category: 'Legumes & Pulses', price: 8.00, oldPrice: 10.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Black+Eyed+Peas' },
  { id: 7, name: 'Red Lentils (East African)', category: 'Legumes & Pulses', price: 7.00, oldPrice: 9.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Lentils', tag: 'New', tagColor: 'bg-green-500' },

  // -----------------------------------------
  // 3. Roots & Tubers
  // -----------------------------------------
  { id: 8, name: 'Fresh Yam Tubers', category: 'Roots & Tubers', price: 22.00, oldPrice: 25.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Yam' },
  { id: 9, name: 'Plantains (Ripe)', category: 'Roots & Tubers', price: 6.00, oldPrice: 8.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Plantain', tag: 'Hot', tagColor: 'bg-yellow-500' },
  { id: 10, name: 'Cocoyam (Fresh)', category: 'Roots & Tubers', price: 16.00, oldPrice: 20.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Cocoyam' },

  // -----------------------------------------
  // 4. Oils & Fats
  // -----------------------------------------
  { id: 11, name: 'Red Palm Oil (Zomi)', category: 'Oils & Fats', price: 12.00, oldPrice: 14.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Palm+Oil' },
  { id: 12, name: 'Groundnut Oil', category: 'Oils & Fats', price: 10.00, oldPrice: 13.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Groundnut+Oil' },
  { id: 13, name: 'Shea Butter (Raw Organic)', category: 'Oils & Fats', price: 18.00, oldPrice: 22.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Shea+Butter', tag: 'New', tagColor: 'bg-[#5caf90]' },

  // -----------------------------------------
  // 5. Spices & Seasonings
  // -----------------------------------------
  { id: 14, name: 'Suya Spice Mix', category: 'Spices & Seasonings', price: 7.00, oldPrice: 9.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Suya+Spice' },
  { id: 15, name: 'Jollof Rice Seasoning', category: 'Spices & Seasonings', price: 5.00, oldPrice: 7.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Jollof+Spice', tag: 'Popular', tagColor: 'bg-orange-400' },
  { id: 16, name: 'Cameroon Pepper', category: 'Spices & Seasonings', price: 6.00, oldPrice: 8.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Pepper' },

  // -----------------------------------------
  // 6. Dried Fish & Meat
  // -----------------------------------------
  { id: 17, name: 'Stockfish (Nigerian Grade A)', category: 'Dried Fish & Meat', price: 30.00, oldPrice: 35.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Stockfish' },
  { id: 18, name: 'Smoked Catfish (Whole)', category: 'Dried Fish & Meat', price: 18.00, oldPrice: 22.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Catfish' },
  { id: 19, name: 'Kilishi (Beef Jerky)', category: 'Dried Fish & Meat', price: 12.00, oldPrice: 14.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Kilishi', tag: 'Hot', tagColor: 'bg-red-500' },

  // -----------------------------------------
  // 7. Fresh & Dried Herbs
  // -----------------------------------------
  { id: 20, name: 'Bitterleaf (Washed & Dried)', category: 'Fresh & Dried Herbs', price: 6.00, oldPrice: 8.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Bitterleaf' },
  { id: 21, name: 'Uziza Leaves (Dried)', category: 'Fresh & Dried Herbs', price: 5.00, oldPrice: 7.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Uziza' },
  { id: 22, name: 'Scent Leaf (Organic)', category: 'Fresh & Dried Herbs', price: 4.00, oldPrice: 6.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Scent+Leaf' },

  // -----------------------------------------
  // 8. Beverages & Teas
  // -----------------------------------------
  { id: 23, name: 'Zobo Leaves (Hibiscus)', category: 'Beverages & Teas', price: 6.00, oldPrice: 8.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Zobo' },
  { id: 24, name: 'Ginger Tea Bags', category: 'Beverages & Teas', price: 5.00, oldPrice: 7.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Ginger+Tea' },
  { id: 25, name: 'Malta Guinness (Pack of 6)', category: 'Beverages & Teas', price: 14.00, oldPrice: 18.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Malta' },

  // -----------------------------------------
  // 9. Snacks & Sweets
  // -----------------------------------------
  { id: 26, name: 'Plantain Chips (Sweet)', category: 'Snacks & Sweets', price: 4.00, oldPrice: 6.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Plantain+Chips', tag: 'New', tagColor: 'bg-[#5caf90]' },
  { id: 27, name: 'Chin Chin (Crispy)', category: 'Snacks & Sweets', price: 7.00, oldPrice: 9.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Chin+Chin' },
  { id: 28, name: 'Kuli Kuli (Peanut Snack)', category: 'Snacks & Sweets', price: 5.00, oldPrice: 6.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Kuli+Kuli' },

  // -----------------------------------------
  // 10. Traditional Staples
  // -----------------------------------------
  { id: 29, name: 'Pap / Ogi (Fermented Cereal)', category: 'Traditional Staples', price: 8.00, oldPrice: 10.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Pap' },
  { id: 30, name: 'Ugali Flour (Maize Meal)', category: 'Traditional Staples', price: 9.00, oldPrice: 11.00, rating: 5, img: 'https://placehold.co/400x400/png?text=Ugali' },
  { id: 31, name: 'Banku Mix (Fermented Corn & Cassava)', category: 'Traditional Staples', price: 11.00, oldPrice: 14.00, rating: 4, img: 'https://placehold.co/400x400/png?text=Banku' }
];
