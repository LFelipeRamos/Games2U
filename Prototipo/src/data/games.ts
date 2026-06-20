import { Game } from "@/types/game";

export const games: Game[] = [
  {
    id: "catan",
    title: "Catan",
    category: "Estratégia",

    description:
      "Expanda sua colônia, negocie recursos e domine a ilha de Catan.",

    image:
      "https://gamerview.com.br/wp-content/uploads/2023/03/review_catan_console_edition_gamerview_img02-1024x576.jpg",

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
      "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/store/software/switch/70010000077436/326d4b297eccf8fe878ccd5bf37fa4fb1ccaf580fdd3e40b3c6cca57496bf966",

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
      "https://lojaleiturinha.vtexassets.com/arquivos/ids/160974-800-800?v=638585560943670000&width=800&height=800&aspect=true",

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
      "https://static.fatimacrianca.com.br/public/fatimacrianca/imagens/produtos/media/jogo-de-cartas-uno-original-mattel-664c9bd44a140.png",

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
      "https://m.media-amazon.com/images/I/51WxZyayBfL._AC_SX569_.jpg",

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