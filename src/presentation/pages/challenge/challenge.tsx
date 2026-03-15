import { useState } from "react";
import { Header } from "@presentation/components/header/header";
import { ChevronLeft, Eye, ChevronRight, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import styles from "./challenge.styles.module.scss";
import MoleculaImg from "../../../assets/molecula-desafio.svg";

const mockQuestion = {
  textApoio: "A fórmula H2O indica que a água é composta por:",
  image: MoleculaImg,
  options: [
    { id: "a", text: "Dois átomos de hidrogênio e um de oxigênio" },
    { id: "b", text: "Dois átomos de oxigênio e um de hidrogênio" },
    { id: "c", text: "Apenas hidrogênio" },
    { id: "d", text: "Apenas oxigênio" },
  ],
  correctAnswer: "a",
};

function Challenge() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);

  // Estados para controlar a abertura dos conteúdos extras (Acordeões)
  const [showSupportText, setShowSupportText] = useState(false);
  const [showResolution, setShowResolution] = useState(false);
  const [showStudyTips, setShowStudyTips] = useState(false);

  const isCorrect = selected === mockQuestion.correctAnswer;

  const handleTryAgain = () => {
    setSelected(null);
    setIsSubmitted(false);
    setShowFinalResult(false);
    setShowResolution(false);
    setShowStudyTips(false);
    setShowSupportText(false);
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <ChevronLeft size={20} /> Voltar
        </button>

        <section className={styles.card}>
          {!showFinalResult ? (
            <>
              {/* Texto de Apoio Interativo */}
              <div
                className={styles.supportTextContainer}
                onClick={() => setShowSupportText(!showSupportText)}
              >
                <span>Texto de apoio</span>
                <ChevronRight
                  className={
                    showSupportText ? styles.rotateIcon : styles.iconBlue
                  }
                  size={18}
                />
              </div>

              {showSupportText && (
                <div className={styles.supportTextContent}>
                  <p>
                    As fórmulas químicas mostram a composição das substâncias.
                    As letras indicam os elementos e os números (índices)
                    indicam a quantidade de cada átomo. Quando não há número,
                    entende-se que há apenas 1 átomo presente.
                  </p>
                </div>
              )}

              <div className={styles.card__imagePlaceholder}>
                <img src={mockQuestion.image} alt="Molécula" />
              </div>

              <p className={styles.questionText}>{mockQuestion.textApoio}</p>

              <div className={styles.card__options}>
                {mockQuestion.options.map((opt, index) => (
                  <label
                    key={opt.id}
                    className={`${styles.optionLabel} ${selected === opt.id ? styles.selected : ""}`}
                  >
                    <input
                      type="radio"
                      name="quiz"
                      disabled={isSubmitted}
                      onChange={() => setSelected(opt.id)}
                      checked={selected === opt.id}
                      className={styles.radioInput}
                    />
                    <span className={styles.optionContent}>
                      {String.fromCharCode(97 + index)} {opt.text}
                    </span>
                  </label>
                ))}
              </div>

              {!isSubmitted ? (
                <button
                  className={styles.responderBtn}
                  disabled={!selected}
                  onClick={() => setIsSubmitted(true)}
                >
                  Responder
                </button>
              ) : (
                <button
                  className={styles.verResultadoBtn}
                  onClick={() => setShowFinalResult(true)}
                >
                  <Eye size={18} /> Ver Resultado <ChevronRight size={18} />
                </button>
              )}
            </>
          ) : (
            /* TELA DE RESULTADO FINAL */
            <div className={styles.finalResult}>
              <p className={styles.labelHeader}>Você marcou a alternativa:</p>
              <h1 className={styles.bigLetter}>{selected?.toUpperCase()}</h1>

              <div className={styles.statusContainer}>
                <p>Alternativas mais marcadas:</p>
                <div className={styles.letterCircles}>
                  {["a", "b", "c", "d"].map((letter) => (
                    <div
                      key={letter}
                      className={`${styles.circle} ${letter === mockQuestion.correctAnswer ? styles.correctCircle : letter === selected ? styles.wrongCircle : ""}`}
                    >
                      {letter.toUpperCase()}
                    </div>
                  ))}
                </div>
                <div className={styles.legend}>
                  <span>
                    <i className={styles.dotGreen}></i> Alternativa correta
                  </span>
                  <span>
                    <i className={styles.dotRed}></i> Alternativa incorreta
                  </span>
                </div>
              </div>

              {/* Botão de Resolução */}
              <button
                className={styles.accordionBtn}
                onClick={() => setShowResolution(!showResolution)}
              >
                Resolução{" "}
                <ChevronRight
                  className={showResolution ? styles.rotateIcon : ""}
                  size={18}
                />
              </button>
              {showResolution && (
                <div className={styles.accordionContent}>
                  <p>
                    A análise da fórmula química <strong>H₂O</strong> nos mostra
                    que: <br />O <strong>H</strong> (Hidrogênio) tem o número 2,
                    indicando dois átomos. <br />
                    <strong>O</strong> (Oxigênio) não possui número, indicando
                    apenas um átomo.
                  </p>
                </div>
              )}

              {/* Botão de Recomendação de Estudo */}
              <button
                className={styles.accordionBtn}
                onClick={() => setShowStudyTips(!showStudyTips)}
              >
                Recomendação de estudo{" "}
                <ChevronRight
                  className={showStudyTips ? styles.rotateIcon : ""}
                  size={18}
                />
              </button>
              {showStudyTips && (
                <div className={styles.accordionContent}>
                  <h4 className={styles.videoTitle}>
                    Vídeo: Geometria da Água
                  </h4>
                  <div className={styles.videoWrapper}>
                    <iframe
                      src="https://www.youtube.com/embed/kOO40xchDWI"
                      title="Geometria Molecular da Água"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p>
                    Assista para entender visualmente como esses átomos se
                    organizam no espaço!
                  </p>
                </div>
              )}

              {/* Seção de Feedback Visual/Mensagem */}
              <div className={styles.congratsSection}>
                <h3
                  className={
                    isCorrect ? styles.titleSuccess : styles.titleError
                  }
                >
                  {isCorrect ? "Parabéns!" : "Vamos com calma"}
                </h3>
                <p>
                  {isCorrect
                    ? "Isso mostra que você compreendeu bem o conteúdo apresentado. Você conseguiu conectar as ideias com calma e atenção."
                    : "Errar faz parte do processo de aprender. Analise a resolução e a recomendação de estudo acima para entender o conceito e tente novamente!"}
                </p>
              </div>

              {/* Botão Dinâmico: Finalizar ou Tentar Novamente */}
              {isCorrect ? (
                <button
                  onClick={() => navigate("/home")}
                  className={styles.responderBtn}
                >
                  Finalizar
                </button>
              ) : (
                <button onClick={handleTryAgain} className={styles.tryAgainBtn}>
                  <RotateCcw size={18} /> Tentar novamente
                </button>
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Challenge;
