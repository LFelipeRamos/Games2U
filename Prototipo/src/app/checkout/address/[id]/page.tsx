"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

import { games } from "@/data/games";

import styles from "./page.module.scss";

export default function AddressPage() {
  const params = useParams();

  const id = params.id as string;

  const game = games.find(
    (item) => item.id === id
  );

  if (!game) {
    return <div>Jogo não encontrado</div>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.formCard}>
          <h1>Endereço de Entrega</h1>

          <p>
            Informe onde deseja receber o jogo.
          </p>

          <form className={styles.form}>
            <div className={styles.grid}>
              <input
                type="text"
                placeholder="CEP"
              />

              <input
                type="text"
                placeholder="Número"
              />
            </div>

            <input
              type="text"
              placeholder="Rua"
            />

            <input
              type="text"
              placeholder="Complemento"
            />

            <input
              type="text"
              placeholder="Bairro"
            />

            <div className={styles.grid}>
              <input
                type="text"
                placeholder="Cidade"
              />

              <input
                type="text"
                placeholder="Estado"
              />
            </div>

            <Link
              href={`/checkout/payment/${game.id}`}
              className={styles.button}
            >
              Continuar para pagamento
            </Link>
          </form>
        </section>

        <aside className={styles.summary}>
          <h2>Resumo</h2>

          <div>
            <span>Jogo</span>
            <strong>{game.title}</strong>
          </div>

          <div>
            <span>Aluguel</span>
            <strong>
              R$ {game.rentalPrices.day}
            </strong>
          </div>

          <div>
            <span>Entrega</span>
            <strong>R$ 10</strong>
          </div>

          <hr />

          <div className={styles.total}>
            <span>Total</span>

            <strong>
              R$
              {game.rentalPrices.day + 10}
            </strong>
          </div>
        </aside>
      </div>
    </main>
  );
}