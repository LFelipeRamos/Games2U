export interface Game {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;

  players: string;
  duration: string;
  age: string;

  rating: number;

  rentalPrices: {
    day: number;
    weekend: number;
    week: number;
  };
}