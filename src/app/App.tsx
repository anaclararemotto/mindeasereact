import { Button } from "@presentation/components/button/button";
import styles from "./app.styles.module.scss";

import ImageDashboard from "../assets/studying woman.svg";
import { Globe, LibraryBig, MoveRight, Sigma, Sprout, Trophy } from "lucide-react";
import { Square } from "@presentation/components/square-color/square";
import { CardLeaningSteps } from "@presentation/components/card-learning-steps/card";
import { CardSubjectDashboard } from "@presentation/components/card-subject-dashboard/card";

function App() {
  return (
    <>
      <header className={styles["header"]}>
        <h1 className={styles["header__brand"]}>MindEase</h1>
        <Button label="Login" />
      </header>

      <main className={styles["main"]}>
        <img
          src={ImageDashboard}
          width="70%"
          alt="Mulher estudando com simbolos matematicos, graficos e planetas ao redor"
        />
        <section className={styles["main__section-default"]}>
          <h2 className={styles["main__section-default__title"]}>
            Estudar nunca foi tão leve.
          </h2>
          <p className={styles["main__section-default__paragraph"]}>
            Boas vindas ao{" "}
            <b className={styles["main__section-default__paragraph__bold"]}>
              MindEase
            </b>
            , o lugar onde o aprendizado se adapta ao seu ritmo, e não o
            contrário. Vamos transformar sua forma de absorver?
          </p>
          <Button
            transparent={true}
            label="Vamos comçar com calma"
            icon={MoveRight}
          />
        </section>
        <section className={styles["main__section-default"]}>
          <h2 className={styles["main__section-default__title"]}>
            Tudo do seu jeito, no seu tempo.
          </h2>
          <p className={styles["main__section-default__paragraph"]}>
            No{" "}
            <b className={styles["main__section-default__paragraph__bold"]}>
              MindEase
            </b>
            , você está no controle. Organize suas matérias com uma interface
            limpa, escolha as cores que te ajudam a focar e crie um ambiente de
            estudo livre de distrações.
          </p>
          <h2 className={styles["main__section-default__subtitle"]}>
            Personalização de cores:
          </h2>
          <div className={styles["main__section-default__container"]}>
            <div className={styles["main__section-default__container__line"]}>
              <Square bgColor="#0F4604" />
              <Square bgColor="#499C45" />
              <Square bgColor="#3BCFB1" />
              <Square bgColor="#3BAFCF" />
              <Square bgColor="#006ACD" />
              <Square bgColor="#0736AD" />
            </div>
            <div className={styles["main__section-default__container__line"]}>
              <Square bgColor="#5C26FF" />
              <Square bgColor="#9776DA" />
              <Square bgColor="#D776B0" />
              <Square bgColor="#CF3B94" />
              <Square bgColor="#A6126B" />
              <Square bgColor="#890101" />
            </div>
            <div className={styles["main__section-default__container__line"]}>
              <Square bgColor="#D8B262" />
              <Square bgColor="#EA9306" />
              <Square bgColor="#E35204" />
              <Square bgColor="#893B0A" />
              <Square bgColor="#68432F" />
              <Square bgColor="#582B13" />
            </div>
          </div>
        </section>
        <section className={styles["main__section-default"]}>
          <h2 className={styles["main__section-default__title"]}>
            Informação sem sobrecarga.
          </h2>
          <p className={styles["main__section-default__paragraph"]}>
            Nossa missão é descomplicar. Transformamos conteúdos densos em
            etapas curtas e visuais, facilitando a compreensão para que você se
            sinta confiante em cada pequeno progresso.
          </p>

          <CardLeaningSteps
            number="1"
            title="Dividimos em partes"
            content="Quebra de conteúdo em pequenos blocos de texto"
          />
          <CardLeaningSteps
            number="2"
            title="Resumo visual"
            content="Oferecemos um resumo dividido por imagens, tópicos ou passo a passos."
          />
          <CardLeaningSteps
            number="3"
            title="Revisão rápida"
            content="Revisa os pontos principais antes de seguir adiante."
          />
        </section>
        <section className={styles["main__section-default"]}>
          <h2 className={styles["main__section-default__title"]}>
            Organização por matérias
          </h2>
          <div className={styles["main__section-default__column-subject"]}>
            <div
              className={
                styles["main__section-default__column-subject__line-subject"]
              }
            >
              <CardSubjectDashboard
                icon={LibraryBig}
                label="Literatura"
                bgColor="literatura"
              />
              <CardSubjectDashboard
                icon={Sigma}
                label="Matemática"
                bgColor="matematica"
              />
            </div>

          </div>
          <div className={styles["main__section-default__column-subject"]}>
            <div
              className={
                styles["main__section-default__column-subject__line-subject"]
              }
            >
              <CardSubjectDashboard
                icon={Sprout}
                label="Biologia"
                bgColor="biologia"
              />
              <CardSubjectDashboard
                icon={Globe}
                label="Geografia"
                bgColor="geografia"
              />
            </div>

          </div>
        </section>
        <section className={styles["main__section-default"]}>
          <div className={styles["main__section-default__title-icon"]}>
            <Trophy size={24} className={styles["main__section-default__title-icon__icon"]} />
            <h2 className={styles["main__section-default__title-icon__title"]}>
              Suas conquistas celebradas.
            </h2>
          </div>
          <p className={styles["main__section-default__paragraph"]}>
            Acompanhe sua evolução de forma clara e visual. o MindEase oferece ferramentas que respeitam a forma como sua mente processa o mundo, garantindo que o foco esteja sempre no que importa: você.
          </p>

          <h2 className={styles["main__section-default__subtitle"]}>
            Pronto para começar?
          </h2>
          <p className={styles["main__section-default__paragraph"]}>
            Vamos construir juntos uma rotina de estudos mais tranquila e eficiente.
          </p>
          <Button label="Vamos começar com calma?" />
        </section>
      </main>
      <footer className={styles["footer"]}>
        <h1 className={styles["footer__brand"]}>MindEase</h1>
        <div className={styles["footer__line"]}>
          <div className={styles["footer__line__column"]}>
            <a className={styles["footer__line__column__link"]} href="#">Funcionalidades</a>
            <a className={styles["footer__line__column__link"]} href="#">Sobre nós</a>
            <a className={styles["footer__line__column__link"]} href="#">Ajuda</a>
          </div>
          <div className={styles["footer__line__column"]}>
            <p><b className={styles["footer__line__column__bold"]}>Instagram:</b> @mindease</p>
            <p><b className={styles["footer__line__column__bold"]}>Email:</b> mindease@mail.com</p>
            <p><b className={styles["footer__line__column__bold"]}>SAC:</b> 0800 1235 5678</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
