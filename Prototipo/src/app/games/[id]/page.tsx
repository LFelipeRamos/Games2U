import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Users,
  Clock3,
  Cake,
  ArrowLeft,
  Star,
  ShoppingBag,
} from "lucide-react";

import styles from "./page.module.scss";
import { games } from "@/data/games";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function GameDetails({
  params,
}: Props) {
  const { id } = await params;

  const game = games.find(
    (item) => item.id === id
  );

  if (!game) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        {/* Navegação */}

        <div className={styles.navigation}>
          <Link href="/" className={styles.backButton}>
            <ArrowLeft size={18} />
            Voltar ao catálogo
          </Link>
        </div>

        {/* Conteúdo */}

        <section className={styles.content}>
          {/* Imagem */}

          <div className={styles.imageContainer}>
            <img
              src={game.image}
              alt={game.title}
            />
          </div>

          {/* Informações */}

          <div className={styles.info}>
            <span className={styles.category}>
              {game.category}
            </span>

            <h1>{game.title}</h1>

            <div className={styles.rating}>
              <Star
                size={18}
                fill="currentColor"
              />

              {game.rating}
            </div>

            <p className={styles.description}>
              {game.description}
            </p>

            {/* Características */}

            <div className={styles.attributes}>
              <div className={styles.attribute}>
                <Users size={22} />

                <div>
                  <span>Jogadores</span>
                  <strong>
                    {game.players}
                  </strong>
                </div>
              </div>

              <div className={styles.attribute}>
                <Clock3 size={22} />

                <div>
                  <span>Duração</span>
                  <strong>
                    {game.duration}
                  </strong>
                </div>
              </div>

              <div className={styles.attribute}>
                <Cake size={22} />

                <div>
                  <span>Idade</span>
                  <strong>{game.age}</strong>
                </div>
              </div>
            </div>

            {/* Preço */}

            <div className={styles.priceCard}>
              <span>A partir de</span>

              <h2>
                R$
                {game.rentalPrices.day}
                <small>/dia</small>
              </h2>
            </div>

            {/* Botões */}

            <div className={styles.actions}>
              <Link
                href={`/rent/${game.id}`}
                className={styles.primaryButton}
              >
                <ShoppingBag size={18} />
                Alugar Agora
              </Link>

              <Link
                href="/login"
                className={styles.secondaryButton}
              >
                Entrar
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}