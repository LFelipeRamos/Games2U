import Link from "next/link";

import {
  CheckCircle2,
  Home,
  Package,
} from "lucide-react";

import styles from "./page.module.scss";

export default function SuccessPage() {
  const orderNumber =
    // eslint-disable-next-line react-hooks/purity
    "G2U-" + Math.floor(Math.random() * Date.now());

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <CheckCircle2 size={90} />
        </div>

        <span className={styles.badge}>
          Pedido Confirmado
        </span>

        <h1>
          Seu pedido foi realizado com sucesso!
        </h1>

        <p>
          Recebemos sua solicitação e já estamos
          preparando a entrega do seu jogo.
        </p>

        <div className={styles.orderInfo}>
          <div>
            <span>Número do Pedido</span>

            <strong>{orderNumber}</strong>
          </div>

          <div>
            <span>Status</span>

            <strong>Pagamento Aprovado</strong>
          </div>

          <div>
            <span>Entrega Estimada</span>

            <strong>1 a 2 dias úteis</strong>
          </div>
        </div>

        <div className={styles.timeline}>
          <div className={styles.step}>
            <div className={styles.activeCircle}>
              ✓
            </div>

            <span>Pedido recebido</span>
          </div>

          <div className={styles.line}></div>

          <div className={styles.step}>
            <div className={styles.circle}>
              📦
            </div>

            <span>Preparação</span>
          </div>

          <div className={styles.line}></div>

          <div className={styles.step}>
            <div className={styles.circle}>
              🚚
            </div>

            <span>Entrega</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Link
            href="/"
            className={styles.primaryButton}
          >
            <Home size={18} />
            Voltar ao Catálogo
          </Link>

          <Link
            href="/orders"
            className={styles.secondaryButton}
          >
            <Package size={18} />
            Meus Pedidos
          </Link>
        </div>
      </div>
    </main>
  );
}