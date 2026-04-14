export type FragranceFamily = 'Woody' | 'Floral' | 'Citrus' | 'Oriental' | 'Fresh' | 'Spicy';
export type Gender = 'Men' | 'Women' | 'Unisex';
export type Occasion = 'Daily' | 'Office' | 'Party' | 'Date' | 'Evening';

export interface FragranceNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  family: FragranceFamily;
  gender: Gender;
  occasion: Occasion[];
  notes: FragranceNotes;
  rating: number;
  reviews: number;
  sizes: string[]; // e.g. ["50ml", "100ml"]
}

export interface QuizResult {
  recommendedProductIds: string[];
  personalityType: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}
