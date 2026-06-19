"use client"

import styles from "./page.module.scss";
import {
  Search,
  User,
  ShoppingCart,
  Star,
} from "lucide-react";

import { games } from "@/data/games";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          🎲 Games2U
        </div>

        <div className={styles.searchBox}>
          <Search size={18} />

          <input
            type="text"
            placeholder="Buscar jogos..."
          />
        </div>

        <div className={styles.actions}>
          <ShoppingCart size={22} />
          <Link href="/login">
            <User size={22} />
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span>DELIVERY DE BOARD GAMES</span>

          <h1>
            Os melhores jogos
            <br />
            na sua casa
          </h1>

          <p>
            Alugue jogos de tabuleiro de forma simples,
            rápida e acessível.
          </p>

          <button>Explorar Catálogo</button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200"
          alt="Board Games"
        />
      </section>

      <section className={styles.categories}>
        <button>Todos</button>
        <button>Estratégia</button>
        <button>Família</button>
        <button>Cartas</button>
        <button>Party Game</button>
        <button>Cooperativo</button>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>🔥 Jogos em Destaque</h2>
        </div>

        <div className={styles.gamesGrid}>
          {games.map((game) => (
            <div
              key={game.id}
              className={styles.gameCard}
              onClick={() => window.location.href = `/games/${game.id}`}
            >
              <img
                src={game.image}
                alt={game.title}
              />

              <div className={styles.gameInfo}>
                <span>{game.category}</span>

                <h3>{game.title}</h3>

                <div className={styles.rating}>
                  <Star size={14} fill="currentColor" />
                  {game.rating}
                </div>

                <div className={styles.footer}>
                  <strong>{game.rentalPrices.day.toFixed(2)}</strong>

                  <button onClick={() => window.location.href = `/rent/${game.id}`}>Alugar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.banner}>
        <div>
          <h2>📦 Entrega rápida</h2>

          <p>
            Receba seus jogos em casa e aproveite
            momentos incríveis com amigos e família.
          </p>
        </div>
      </section>
    </main>
  );
}