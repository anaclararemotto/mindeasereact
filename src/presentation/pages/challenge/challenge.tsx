import { useState } from "react";
import { Header } from "@presentation/components/header/header";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./challenge.styles.module.scss";
import MoleculaImg from "../../../assets/molecula-desafio.svg";

const mockQuestion = {
  title: "Qual é a estrutura da molécula abaixo?",
  image: MoleculaImg,
  options: [
    { id: "a", text: "Opção A" },
    { id: "b", text: "Opção B" },
    { id: "c", text: "Opção C" },
    { id: "d", text: "Opção D" },
  ],
  correctAnswer: "b",
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
          <ChevronLeft size={20} /> Voltar
        </button>

        <section className={styles.card}>
          <h2 className={styles.card__title}>{mockQuestion.title}</h2>

          <div className={styles.card__imagePlaceholder}>
            <img src={mockQuestion.image} alt="Desafio Químico" />
          </div>

          <div className={styles.card__options}>
            {mockQuestion.options.map((opt, index) => {
              // Lógica para definir a classe de cor baseada no estado
              let stateClass = "";
              if (selected === opt.id)
                stateClass = styles["card__optionBtn--selected"];

              if (isAnswered) {
                if (opt.id === mockQuestion.correctAnswer) {
                  stateClass = styles["card__optionBtn--correct"];
                } else if (selected === opt.id) {
                  stateClass = styles["card__optionBtn--wrong"];
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={isAnswered}
                  className={`${styles.card__optionBtn} ${stateClass}`}
                  onClick={() => setSelected(opt.id)}
                >
                  <span className={styles.card__optionLetter}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  {opt.text}
                </button>
              );
            })}
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
            <div className={styles.feedback}>
              <p
                className={
                  selected === mockQuestion.correctAnswer
                    ? styles.feedback__success
                    : styles.feedback__error
                }
              >
                {selected === mockQuestion.correctAnswer
                  ? "✨ Parabéns! Você acertou."
                  : "❌ Não foi dessa vez. Estude mais um pouco!"}
              </p>
              <button
                onClick={() => navigate("/home")}
                className={styles.card__submitBtn}
              >
                Continuar
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Challenge;
