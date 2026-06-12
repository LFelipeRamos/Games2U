"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.content}>
          <span className={styles.badge}>
            🎲 Games2U
          </span>

          <h1>
            Seus jogos favoritos,
            entregues na sua casa.
          </h1>

          <p>
            Faça login para acessar seus
            aluguéis e descobrir novos jogos.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formCard}>
          <div className={styles.header}>
            <h2>Entrar</h2>

            <p>
              Acesse sua conta Games2U
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>E-mail</label>

              <div className={styles.input}>
                <Mail size={20} />

                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Senha</label>

              <div className={styles.input}>
                <Lock size={20} />

                <input
                  type="password"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>

            <Link
              href="#"
              className={styles.forgotPassword}
            >
              Esqueceu sua senha?
            </Link>

            <button onClick={(e) => {
              e.preventDefault();
              alert("Login bem-sucedido!");
              window.location.href = "/";
            }}>
              Entrar
              <ArrowRight size={18} />
            </button>
          </form>

          <p className={styles.register}>
            Não possui conta?
            <Link href="/register">
              Criar conta
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}