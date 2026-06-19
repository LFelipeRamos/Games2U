"use client"

import { useMemo, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

import {
  ArrowLeft,
  Check,
  CalendarDays,
} from "lucide-react";

import { games } from "@/data/games";

import styles from "./page.module.scss";

 
export default function RentPage() {
  const deliveryPrice = 10;
  
  const [selectedPeriod, setSelectedPeriod] = useState<string>("day")
  
  const [customDays, setCustomDays] = useState<number>(1);
  
  const { id } = useParams()
  
  const game = games.find(
    (game) => game.id === id
  );
  
  if (!game) {
    notFound();
  }
   
  const rentalPrice = useMemo(() => {
    switch (selectedPeriod) {
      case "day":
      return game.rentalPrices.day;
      
      case "weekend":
      return game.rentalPrices.weekend;
      
      case "week":
      return game.rentalPrices.week;
      
      case "custom":
      return (
        game.rentalPrices.day * customDays
      );
      
      default:
      return game.rentalPrices.day;
    }
  }, [
    selectedPeriod,
    customDays,
    game.rentalPrices,
  ]);
  
  const totalPrice = rentalPrice + deliveryPrice;
  
  return (
    <main className={styles.container}>
    <div className={styles.wrapper}>
    <Link
    href={`/games/${game.id}`}
    className={styles.backButton}
    >
    <ArrowLeft size={18} />
    Voltar
    </Link>
    
    <div className={styles.content}>
    {/* JOGO */}
    
    <section className={styles.gameSection}>
    <div className={styles.gameCard}>
    <div className={styles.imageWrapper}>
    <img
    src={game.image}
    alt={game.title}
    />
    </div>
    
    <div className={styles.gameInfo}>
    <span>{game.category}</span>
    
    <h1>{game.title}</h1>
    
    <p>{game.description}</p>
    </div>
    </div>
    </section>
    
    {/* ALUGUEL */}
    
    <section className={styles.rentSection}>
    <div className={styles.header}>
    <CalendarDays size={22} />
    
    <h2>
    Escolha o período de aluguel
    </h2>
    </div>
    
    <div className={styles.options}>
      <label className={styles.option}>
        <input
          type="radio"
          checked={selectedPeriod === "day"}
          onChange={() =>
            setSelectedPeriod("day")
          }
        />

        <div>
          <h3>1 Dia</h3>
          <p>Ideal para uma partida rápida</p>
        </div>

        <strong>
          R${game.rentalPrices.day}
        </strong>
      </label>

      <label className={styles.option}>
        <input
          type="radio"
          checked={
            selectedPeriod === "weekend"
          }
          onChange={() =>
            setSelectedPeriod("weekend")
          }
        />

        <div>
          <h3>Fim de Semana</h3>
          <p>Sexta até Domingo</p>
        </div>

        <strong>
          R${game.rentalPrices.weekend}
        </strong>
      </label>

      <label className={styles.option}>
        <input
          type="radio"
          checked={selectedPeriod === "week"}
          onChange={() =>
            setSelectedPeriod("week")
          }
        />

        <div>
          <h3>7 Dias</h3>
          <p>Semana completa</p>
        </div>

        <strong>
          R${game.rentalPrices.week}
        </strong>
      </label>

      <label className={styles.option}>
        <input
          type="radio"
          checked={
            selectedPeriod === "custom"
          }
          onChange={() =>
            setSelectedPeriod("custom")
          }
        />

        <div>
          <h3>Período Personalizado</h3>
          <p>
            Escolha a quantidade de dias
          </p>

          {selectedPeriod === "custom" && (
            <input
              className={styles.customInput}
              type="number"
              min={1}
              value={customDays}
              onChange={(e) =>
                setCustomDays(
                  Number(e.target.value)
                )
              }
            />
          )}
        </div>

        <strong>
          R$
          {game.rentalPrices.day *
            customDays}
        </strong>
      </label>
    </div>
    
    <div className={styles.summary}>
    <h3>Resumo</h3>
    
    <div>
    <span>Jogo</span>
    <strong>{game.title}</strong>
    </div>
    
    <div>
    <span>Entrega</span>
    <strong>R$ 10,00</strong>
    </div>
    
    <div>
    <span>Aluguel</span>
    <strong>
    R$ {rentalPrice}
    </strong>
    </div>
    
    <hr />
    
    <div className={styles.total}>
    <span>Total</span>
    
    <strong>
    R$ {rentalPrice + 10}
    </strong>
    </div>
    </div>
    
    <Link
    href={`/checkout/address/${game.id}?period=${selectedPeriod}&days=${customDays}`}
    className={styles.continueButton}
    >
    <Check size={18} />
    Continuar
    </Link>
    </section>
    </div>
    </div>
    </main>
  );
}