export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    oldPrice: number;
    rating: number;
    img: string;
    tag: string;
    tagColor: string;
} | {
    id: number;
    name: string;
    category: string;
    price: number;
    oldPrice: number;
    rating: number;
    img: string;
    tag?: undefined;
    tagColor?: undefined;
};