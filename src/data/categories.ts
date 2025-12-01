import type { Category } from "../types/category.type";

export const categories: Category[] = [
  { name: 'Grains & Flours', items: 400, color: 'bg-[#fdf4e6]', icon: '🌾' },
  { name: 'Legumes & Pulses', items: 250, color: 'bg-[#e8f7f2]', icon: '🌱' },
  { name: 'Roots & Tubers', items: 180, color: 'bg-[#ffece4]', icon: '🥔' },
  { name: 'Oils & Fats', items: 120, color: 'bg-[#fff1e6]', icon: '🛢️' },
  { name: 'Spices & Seasonings', items: 320, color: 'bg-[#f6f0ff]', icon: '🧂' },
  { name: 'Dried Fish & Meat', items: 90, color: 'bg-[#f9efe9]', icon: '🐟' },
  { name: 'Fresh & Dried Herbs', items: 60, color: 'bg-[#e8f4e6]', icon: '🌿' },
  { name: 'Beverages & Teas', items: 150, color: 'bg-[#f9f9d9]', icon: '🧃' },
  { name: 'Snacks & Sweets', items: 200, color: 'bg-[#ecf0ff]', icon: '🍬' },
  { name: 'Traditional Staples', items: 140, color: 'bg-[#fde1f5]', icon: '🥣' }
];

export const tabs: string[] = ["All", ...categories.map(category => category.name)];