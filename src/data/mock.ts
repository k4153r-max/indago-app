export interface StorePrice {
  store: string;
  price: number;
  oldPrice?: number;
  url: string;
  inStock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  category: string;
  lowestPrice: number;
  highestPrice: number;
  discountPercent: number;
  stores: StorePrice[];
  priceHistory: { date: string; price: number }[];
  rating?: number;
  reviews?: number;
}

export const categories = [
  { id: "tecnologia", name: "Tecnología", icon: "💻", color: "bg-blue-100 text-blue-700" },
  { id: "moda", name: "Moda", icon: "👗", color: "bg-pink-100 text-pink-700" },
  { id: "hogar", name: "Hogar", icon: "🏠", color: "bg-amber-100 text-amber-700" },
  { id: "gaming", name: "Gaming", icon: "🎮", color: "bg-purple-100 text-purple-700" },
  { id: "supermercado", name: "Supermercado", icon: "🛒", color: "bg-green-100 text-green-700" },
  { id: "salud", name: "Salud", icon: "💊", color: "bg-red-100 text-red-700" },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "pantuflas-mujer-lesage",
    name: "Pantuflas Mujer Lesage",
    image: "https://via.placeholder.com/400x400/f1f5f9/64748b?text=Pantuflas",
    category: "moda",
    lowestPrice: 4990,
    highestPrice: 9990,
    discountPercent: 50,
    stores: [
      { store: "Hites", price: 4990, oldPrice: 9990, url: "#", inStock: true },
      { store: "Falabella", price: 5990, oldPrice: 9990, url: "#", inStock: true },
      { store: "Paris", price: 6490, url: "#", inStock: false },
    ],
    priceHistory: [
      { date: "2026-01-01", price: 9990 },
      { date: "2026-02-01", price: 8990 },
      { date: "2026-03-01", price: 8490 },
      { date: "2026-04-01", price: 7990 },
      { date: "2026-05-01", price: 6990 },
      { date: "2026-06-01", price: 5990 },
      { date: "2026-07-01", price: 4990 },
      { date: "2026-07-20", price: 4990 },
    ],
    rating: 4.3,
    reviews: 128,
  },
  {
    id: "2",
    slug: "zapatilla-ergonomico-sport-boston",
    name: "Zapatilla Ergonómico Sport Boston Unisex Negra 28-38",
    image: "https://via.placeholder.com/400x400/f1f5f9/64748b?text=Zapatilla",
    category: "moda",
    lowestPrice: 11196,
    highestPrice: 38990,
    discountPercent: 71,
    stores: [
      { store: "Colloky", price: 11196, oldPrice: 38990, url: "#", inStock: true },
      { store: "Hites", price: 14990, oldPrice: 38990, url: "#", inStock: true },
      { store: "Ripley", price: 17990, url: "#", inStock: true },
    ],
    priceHistory: [
      { date: "2026-01-01", price: 38990 },
      { date: "2026-03-01", price: 29990 },
      { date: "2026-05-01", price: 19990 },
      { date: "2026-06-15", price: 14990 },
      { date: "2026-07-10", price: 11196 },
      { date: "2026-07-22", price: 11196 },
    ],
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "3",
    slug: "notebook-tuf-gaming-f16",
    name: "Notebook TUF Gaming F16 Intel Core 5 16GB RAM 512GB SSD RTX 3050 16\"",
    image: "https://via.placeholder.com/400x400/f1f5f9/64748b?text=Notebook",
    category: "tecnologia",
    lowestPrice: 699990,
    highestPrice: 1399990,
    discountPercent: 50,
    stores: [
      { store: "Ripley", price: 699990, oldPrice: 1399990, url: "#", inStock: true },
      { store: "Falabella", price: 749990, oldPrice: 1299990, url: "#", inStock: true },
      { store: "PC Factory", price: 789990, url: "#", inStock: true },
      { store: "Lider", price: 819990, url: "#", inStock: false },
    ],
    priceHistory: [
      { date: "2026-01-01", price: 1399990 },
      { date: "2026-03-01", price: 1199990 },
      { date: "2026-05-01", price: 999990 },
      { date: "2026-06-20", price: 849990 },
      { date: "2026-07-15", price: 699990 },
      { date: "2026-07-22", price: 699990 },
    ],
    rating: 4.8,
    reviews: 214,
  },
  {
    id: "4",
    slug: "polar-flores-vuelos-nina",
    name: "Polar flores vuelos niña beige 6/9M a 4/5A",
    image: "https://via.placeholder.com/400x400/f1f5f9/64748b?text=Polar",
    category: "moda",
    lowestPrice: 7196,
    highestPrice: 34990,
    discountPercent: 79,
    stores: [
      { store: "Colloky", price: 7196, oldPrice: 34990, url: "#", inStock: true },
      { store: "Hites", price: 9990, url: "#", inStock: true },
    ],
    priceHistory: [
      { date: "2026-02-01", price: 34990 },
      { date: "2026-04-01", price: 24990 },
      { date: "2026-06-01", price: 14990 },
      { date: "2026-07-05", price: 9990 },
      { date: "2026-07-18", price: 7196 },
    ],
    rating: 4.5,
    reviews: 56,
  },
  {
    id: "5",
    slug: "royal-canin-mini-adult",
    name: "Royal Canin adulto Mini Adult alimento para perro",
    image: "https://via.placeholder.com/400x400/f1f5f9/64748b?text=Royal+Canin",
    category: "supermercado",
    lowestPrice: 14990,
    highestPrice: 40990,
    discountPercent: 63,
    stores: [
      { store: "SuperZoo", price: 14990, oldPrice: 40990, url: "#", inStock: true },
      { store: "Petco", price: 17990, url: "#", inStock: true },
      { store: "Lider", price: 18990, url: "#", inStock: true },
    ],
    priceHistory: [
      { date: "2026-01-01", price: 40990 },
      { date: "2026-04-01", price: 29990 },
      { date: "2026-06-01", price: 21990 },
      { date: "2026-07-12", price: 14990 },
    ],
    rating: 4.7,
    reviews: 342,
  },
  {
    id: "6",
    slug: "huawei-nova-y73",
    name: "SMARTPHONE HUAWEI NOVA Y73 256GB 8GB RAM 50MP 6.6”",
    image: "https://via.placeholder.com/400x400/f1f5f9/64748b?text=Huawei",
    category: "tecnologia",
    lowestPrice: 199990,
    highestPrice: 299990,
    discountPercent: 33,
    stores: [
      { store: "Ripley", price: 199990, oldPrice: 299990, url: "#", inStock: true },
      { store: "Falabella", price: 209990, url: "#", inStock: true },
      { store: "Paris", price: 219990, url: "#", inStock: true },
    ],
    priceHistory: [
      { date: "2026-03-01", price: 299990 },
      { date: "2026-05-01", price: 249990 },
      { date: "2026-07-01", price: 199990 },
    ],
    rating: 4.4,
    reviews: 178,
  },
  {
    id: "7",
    slug: "pantalon-balloon-mujer",
    name: "Pantalón Balloon Mujer",
    image: "https://via.placeholder.com/400x400/f1f5f9/64748b?text=Pantalon",
    category: "moda",
    lowestPrice: 9990,
    highestPrice: 39990,
    discountPercent: 75,
    stores: [
      { store: "Americanino", price: 9990, oldPrice: 39990, url: "#", inStock: true },
      { store: "Falabella", price: 12990, url: "#", inStock: true },
    ],
    priceHistory: [
      { date: "2026-02-01", price: 39990 },
      { date: "2026-05-01", price: 24990 },
      { date: "2026-07-08", price: 9990 },
    ],
    rating: 4.2,
    reviews: 67,
  },
  {
    id: "8",
    slug: "switch-hdmi-4k",
    name: "Switch Hdmi 4k 3x1 Splitter Video Alta Calidad Control Remoto",
    image: "https://via.placeholder.com/400x400/f1f5f9/64748b?text=HDMI",
    category: "tecnologia",
    lowestPrice: 4190,
    highestPrice: 12990,
    discountPercent: 68,
    stores: [
      { store: "Lider", price: 4190, oldPrice: 12990, url: "#", inStock: true },
      { store: "Ripley", price: 5990, url: "#", inStock: true },
    ],
    priceHistory: [
      { date: "2026-04-01", price: 12990 },
      { date: "2026-06-01", price: 7990 },
      { date: "2026-07-15", price: 4190 },
    ],
    rating: 4.1,
    reviews: 45,
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function searchProducts(query: string): Product[] {
  if (!query.trim()) return products;
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.stores.some((s) => s.store.toLowerCase().includes(q))
  );
}
