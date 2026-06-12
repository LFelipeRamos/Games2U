import { Game } from "@/types/game";

export const games: Game[] = [
  {
    id: "catan",
    title: "Catan",
    category: "Estratégia",

    description:
      "Expanda sua colônia, negocie recursos e domine a ilha de Catan.",

    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200",

    players: "3-4",
    duration: "90 min",
    age: "10+",

    rating: 4.9,

    rentalPrices: {
      day: 18,
      weekend: 30,
      week: 60,
    },
  },

  {
    id: "ticket-to-ride",
    title: "Ticket To Ride",
    category: "Estratégia",

    description:
      "Construa rotas ferroviárias e conecte cidades pelo mapa.",

    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?w=1200",

    players: "2-5",
    duration: "60 min",
    age: "8+",

    rating: 4.8,

    rentalPrices: {
      day: 20,
      weekend: 35,
      week: 65,
    },
  },

  {
    id: "dixit",
    title: "Dixit",
    category: "Party Game",

    description:
      "Use sua criatividade para interpretar cartas ilustradas.",

    image:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1200",

    players: "3-6",
    duration: "30 min",
    age: "8+",

    rating: 4.8,

    rentalPrices: {
      day: 15,
      weekend: 25,
      week: 50,
    },
  },

  {
    id: "uno",
    title: "Uno",
    category: "Cartas",

    description:
      "O clássico jogo de cartas para toda a família.",

    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200",

    players: "2-10",
    duration: "20 min",
    age: "7+",

    rating: 4.7,

    rentalPrices: {
      day: 8,
      weekend: 15,
      week: 25,
    },
  },

  {
    id: "pandemic",
    title: "Pandemic",
    category: "Cooperativo",

    description:
      "Trabalhe em equipe para salvar o mundo de epidemias.",

    image:
      "https://images.unsplash.com/photo-1606503153255-59d8b8b4c0f5?w=1200",

    players: "2-4",
    duration: "45 min",
    age: "8+",

    rating: 4.9,

    rentalPrices: {
      day: 22,
      weekend: 40,
      week: 75,
    },
  },
];