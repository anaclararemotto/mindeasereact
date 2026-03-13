import { useState } from 'react';
import { Header } from "@presentation/components/header/header";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./challenge.styles.module.scss";

// Simulando o dado que vem do Figma
const mockQuestion = {
  title: "Qual é a estrutura da molécula abaixo?",
  image: "url_da_imagem_da_molecula", // Você pode importar seu SVG/PNG aqui
  options: [
    { id: 'a', text: 'Opção A' },
    { id: 'b', text: 'Opção B' },
    { id: 'c', text: 'Opção C' },
    { id: 'd', text: 'Opção D' },
  ],
  correctAnswer: 'b'
};

function Challenge() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleCheck = () => {
    if (selected) setIsAnswered(true);
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <ChevronLeft size={24} /> Voltar
        </button>

        <section className={styles.card}>
          <h2 className={styles.card__title}>{mockQuestion.title}</h2>
          
          <div className={styles.card__imagePlaceholder}>
             {/* Aqui entrará a imagem da molécula */}
             <img src={mockQuestion.image} alt="Desafio" />
          </div>

          <div className={styles.card__options}>
            {mockQuestion.options.map((opt) => (
              <button
                key={opt.id}
                disabled={isAnswered}
                className={`
                  ${styles.card__optionBtn} 
                  ${selected === opt.id ? styles['card__optionBtn--selected'] : ''}
                  ${isAnswered && opt.id === mockQuestion.correctAnswer ? styles['card__optionBtn--correct'] : ''}
                  ${isAnswered && selected === opt.id && selected !== mockQuestion.correctAnswer ? styles['card__optionBtn--wrong'] : ''}
                `}
                onClick={() => setSelected(opt.id)}
              >
                {opt.text}
              </button>
            ))}
          </div>

          {!isAnswered ? (
            <button 
              className={styles.card__submitBtn}
              disabled={!selected}
              onClick={handleCheck}
            >
              Verificar Resposta
            </button>
          ) : (
            <div className={selected === mockQuestion.correctAnswer ? styles.feedback__success : styles.feedback__error}>
               {selected === mockQuestion.correctAnswer ? "Parabéns! Você acertou." : "Não foi dessa vez. Estude mais um pouco!"}
               <button onClick={() => navigate('/')} className={styles.card__submitBtn}>Continuar</button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Challenge;