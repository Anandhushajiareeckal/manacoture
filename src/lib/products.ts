import hero from "@/assets/hero-saree.jpg";
import bridal from "@/assets/bridal.jpg";
import kasavu from "@/assets/kasavu.jpg";
import setmundu from "@/assets/setmundu.jpg";
import kurti from "@/assets/kurti.jpg";
import salwar from "@/assets/salwar.jpg";
import dupatta from "@/assets/dupatta.jpg";
import accessories from "@/assets/accessories.jpg";
import festival from "@/assets/festival.jpg";

export const assets = { hero, bridal, kasavu, setmundu, kurti, salwar, dupatta, accessories, festival };

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAt?: number;
  image: string;
  hoverImage: string;
  fabric: string;
  color: string;
  occasion: string;
  rating: number;
  reviews: number;
  badge?: string;
  stock: number;
  isNew?: boolean;
};

export const categories = [
  { slug: "kerala-sarees", name: "Kerala Sarees", image: hero, count: 128 },
  { slug: "kasavu", name: "Kasavu Collection", image: kasavu, count: 64 },
  { slug: "bridal", name: "Bridal Collection", image: bridal, count: 42 },
  { slug: "set-mundu", name: "Set Mundu", image: setmundu, count: 38 },
  { slug: "kurtis", name: "Kurtis", image: kurti, count: 96 },
  { slug: "salwar", name: "Salwar Sets", image: salwar, count: 72 },
  { slug: "dupattas", name: "Dupattas", image: dupatta, count: 54 },
  { slug: "accessories", name: "Accessories", image: accessories, count: 88 },
];

const base: Omit<Product, "id" | "name" | "price" | "image" | "hoverImage" | "category">[] = [];
void base;

export const products: Product[] = [
  { id: "aiswarya", name: "Aiswarya Kasavu Saree", category: "Kerala Sarees", price: 8499, compareAt: 10999, image: hero, hoverImage: kasavu, fabric: "Pure Kanchi Cotton", color: "Ivory", occasion: "Festival", rating: 4.9, reviews: 214, badge: "Best Seller", stock: 12, isNew: true },
  { id: "meenakshi", name: "Meenakshi Bridal Silk", category: "Bridal", price: 34999, compareAt: 42000, image: bridal, hoverImage: hero, fabric: "Kanchipuram Silk", color: "Cream & Maroon", occasion: "Wedding", rating: 5.0, reviews: 96, badge: "Bridal", stock: 4 },
  { id: "onam", name: "Onam Traditional Kasavu", category: "Kasavu", price: 5299, image: kasavu, hoverImage: hero, fabric: "Handloom Cotton", color: "Off-White", occasion: "Onam", rating: 4.8, reviews: 187, stock: 20, isNew: true },
  { id: "devika", name: "Devika Set Mundu", category: "Set Mundu", price: 6799, compareAt: 7999, image: setmundu, hoverImage: kasavu, fabric: "Cotton Silk", color: "Ivory & Gold", occasion: "Temple", rating: 4.7, reviews: 143, stock: 15 },
  { id: "riya", name: "Riya Embroidered Kurti", category: "Kurtis", price: 2299, image: kurti, hoverImage: salwar, fabric: "Chanderi Silk", color: "Cream", occasion: "Casual", rating: 4.6, reviews: 258, stock: 30 },
  { id: "nayana", name: "Nayana Anarkali Set", category: "Salwar Sets", price: 4599, compareAt: 5999, image: salwar, hoverImage: kurti, fabric: "Georgette", color: "Ivory Gold", occasion: "Reception", rating: 4.8, reviews: 172, stock: 18 },
  { id: "swarna", name: "Swarna Silk Dupatta", category: "Dupattas", price: 1899, image: dupatta, hoverImage: accessories, fabric: "Mulberry Silk", color: "Gold", occasion: "Festival", rating: 4.7, reviews: 132, stock: 25 },
  { id: "lakshmi", name: "Lakshmi Temple Jewelry", category: "Accessories", price: 3499, compareAt: 4200, image: accessories, hoverImage: dupatta, fabric: "22K Gold Plated", color: "Antique Gold", occasion: "Bridal", rating: 4.9, reviews: 201, stock: 22, isNew: true },
];

export const getProduct = (id: string) => products.find((p) => p.id === id) ?? products[0];

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
