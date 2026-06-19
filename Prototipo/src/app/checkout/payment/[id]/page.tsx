"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { games } from "@/data/games";

import styles from "./page.module.scss";

export default function PaymentPage() {
  const params = useParams();

  const id = params.id as string;

  const game = games.find(
    (item) => item.id === id
  );

  const [method, setMethod] =
    useState("card");

  if (!game) {
    return <div>Jogo não encontrado</div>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.paymentCard}>
          <h1>Pagamento</h1>

          <div className={styles.methods}>
            <button
              className={
                method === "card"
                  ? styles.active
                  : ""
              }
              onClick={() =>
                setMethod("card")
              }
            >
              Cartão
            </button>

            <button
              className={
                method === "pix"
                  ? styles.active
                  : ""
              }
              onClick={() =>
                setMethod("pix")
              }
            >
              PIX
            </button>

            <button
              className={
                method === "boleto"
                  ? styles.active
                  : ""
              }
              onClick={() =>
                setMethod("boleto")
              }
            >
              Boleto
            </button>
          </div>

          {method === "card" && (
            <div className={styles.form}>
              <input
                placeholder="Número do cartão"
              />

              <input
                placeholder="Nome impresso"
              />

              <div className={styles.grid}>
                <input
                  placeholder="Validade"
                />

                <input placeholder="CVV" />
              </div>
            </div>
          )}

          {method === "pix" && (
            <div className={styles.pix}>
              <div className={styles.qr}>
                QR CODE
              </div>

              <p>
                Chave PIX:
                games2u@pix.com.br
              </p>
            </div>
          )}

          {method === "boleto" && (
            <div className={styles.boleto}>
              <p>
                O boleto será gerado após a
                confirmação do pedido.
              </p>
            </div>
          )}

          <Link
            href="/checkout/success"
            className={styles.button}
          >
            Finalizar Pedido
          </Link>
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