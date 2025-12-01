import type { Restaurant } from "../types/restaurant.type";

export const RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    name: "Mama Put Kitchen",
    category: "Nigerian",
    rating: 4.8,
    deliveryTime: "25–40 min",
    deliveryFee: 2.99,
    img: "https://placehold.co/800x500/png?text=Mama+Put+Kitchen",
    logo: "https://placehold.co/100x100/png?text=MP",
    isFeatured: true,
    tags: ["Jollof", "Efo Riro", "Amala"]
  },
  {
    id: 2,
    name: "Accra Chop House",
    category: "Ghanaian",
    rating: 4.6,
    deliveryTime: "20–35 min",
    deliveryFee: 1.99,
    img: "https://placehold.co/800x500/png?text=Accra+Chop+House",
    logo: "https://placehold.co/100x100/png?text=ACH",
    tags: ["Waakye", "Banku", "Tilapia"]
  },
  {
    id: 3,
    name: "Taste of Addis",
    category: "Ethiopian",
    rating: 4.7,
    deliveryTime: "30–45 min",
    deliveryFee: 3.49,
    img: "https://placehold.co/800x500/png?text=Taste+of+Addis",
    logo: "https://placehold.co/100x100/png?text=TA",
    isFeatured: true,
    tags: ["Injera", "Doro Wat", "Veg Platter"]
  },
  {
    id: 4,
    name: "Kumusha Grill",
    category: "Zimbabwean",
    rating: 4.5,
    deliveryTime: "30–50 min",
    deliveryFee: 2.99,
    img: "https://placehold.co/800x500/png?text=Kumusha+Grill",
    logo: "https://placehold.co/100x100/png?text=KG",
    tags: ["Sadza", "Braai", "Beef Stew"]
  },
  {
    id: 5,
    name: "Safari Bites",
    category: "Kenyan",
    rating: 4.4,
    deliveryTime: "20–30 min",
    deliveryFee: 1.49,
    img: "https://placehold.co/800x500/png?text=Safari+Bites",
    logo: "https://placehold.co/100x100/png?text=SB",
    tags: ["Nyama Choma", "Mukimo", "Pilau"]
  },
  {
    id: 6,
    name: "The Suya Spot",
    category: "Nigerian BBQ",
    rating: 4.9,
    deliveryTime: "15–25 min",
    deliveryFee: 2.49,
    img: "https://placehold.co/800x500/png?text=The+Suya+Spot",
    logo: "https://placehold.co/100x100/png?text=TSS",
    isFeatured: true,
    tags: ["Suya", "Spicy", "Grilled"]
  },
  {
    id: 7,
    name: "Lagos Street Eats",
    category: "Street Food",
    rating: 4.3,
    deliveryTime: "25–35 min",
    deliveryFee: 1.99,
    img: "https://placehold.co/800x500/png?text=Lagos+Street+Eats",
    logo: "https://placehold.co/100x100/png?text=LSE",
    tags: ["Puff Puff", "Shawarma", "Asun"]
  },
  {
    id: 8,
    name: "Jollof Republic",
    category: "West African Fusion",
    rating: 4.7,
    deliveryTime: "20–40 min",
    deliveryFee: 2.49,
    img: "https://placehold.co/800x500/png?text=Jollof+Republic",
    logo: "https://placehold.co/100x100/png?text=JR",
    isFeatured: true,
    tags: ["Jollof Wars Champion", "Grilled Chicken", "Spicy Rice"]
  },
  {
    id: 9,
    name: "Cape Malay Kitchen",
    category: "South African",
    rating: 4.6,
    deliveryTime: "35–50 min",
    deliveryFee: 3.99,
    img: "https://placehold.co/800x500/png?text=Cape+Malay+Kitchen",
    logo: "https://placehold.co/100x100/png?text=CMK",
    tags: ["Bobotie", "Samosas", "Curry"]
  },
  {
    id: 10,
    name: "Taste of Bamako",
    category: "Malian",
    rating: 4.4,
    deliveryTime: "30–45 min",
    deliveryFee: 2.99,
    img: "https://placehold.co/800x500/png?text=Taste+of+Bamako",
    logo: "https://placehold.co/100x100/png?text=TB",
    tags: ["Tigua Dégué", "Fufu", "Grilled Fish"]
  }
];
