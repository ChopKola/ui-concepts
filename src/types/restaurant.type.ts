export type Restaurant = {
  id: number;
  name: string;
  category: string;          // e.g., Nigerian, Ghanaian, East African, BBQ, Home Kitchen
  rating: number;            // 1–5
  deliveryTime: string;      // e.g., "25–40 min"
  deliveryFee: number;       // flat fee or dynamic
  img: string;               // banner / hero image
  logo: string;              // small icon or logo
  isFeatured?: boolean;      // for homepage highlights
  tags?: string[];           // e.g., ["Jollof", "Spicy", "New"]
};