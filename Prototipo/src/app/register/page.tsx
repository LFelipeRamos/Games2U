"use client";

import Link from "next/link";
import styles from "../login/page.module.scss";

import {
  User,
  Mail,
  Phone,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function RegisterPage() {
  return (
    <main className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.content}>
          <span className={styles.badge}>
            🎲 Games2U
          </span>

          <h1>
            Crie sua conta e comece a jogar.
          </h1>

          <p>
            Tenha acesso ao catálogo completo
            de jogos disponíveis para aluguel.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formCard}>
          <div className={styles.header}>
            <h2>Criar Conta</h2>

            <p>
              Preencha seus dados
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Nome</label>

              <div className={styles.input}>
                <User size={20} />

                <input
                  type="text"
                  placeholder="Nome completo"
                />
              </div>
            </div>

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
              <label>Telefone</label>

              <div className={styles.input}>
                <Phone size={20} />

                <input
                  type="text"
                  placeholder="(43) 99999-9999"
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

            <div className={styles.inputGroup}>
              <label>Confirmar senha</label>

              <div className={styles.input}>
                <Lock size={20} />

                <input
                  type="password"
                  placeholder="Confirme sua senha"
                />
              </div>
            </div>

            <button onClick={(e) => {
              e.preventDefault();
              alert("Conta criada com sucesso!");
              window.location.href = "/login";
            }}>
              Criar Conta
              <ArrowRight size={18} />
            </button>
          </form>

          <p className={styles.login}>
            Já possui uma conta?
            <Link href="/login">
              Entrar
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}