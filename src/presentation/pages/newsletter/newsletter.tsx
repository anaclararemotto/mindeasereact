import { Header } from "@presentation/components/header/header";
import { BookOpen, Lightbulb, Map, PenTool, Brain, Quote } from "lucide-react";
import styles from "./newsletter.styles.module.scss";

export function Newsletter() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <header className={styles.hero}>
                    <h1 className={styles.hero__title}>Newsletter MindEase</h1>
                    <p className={styles.hero__subtitle}>Edição Especial: Rumo ao ENEM 2026</p>
                </header>

                {/* Frase do Dia */}
                <section className={`${styles.section} ${styles.section_quote}`}>
                    <Quote size={32} className={styles.icon} />
                    <blockquote className={styles.quote}>
                        "O sucesso é a soma de pequenos esforços repetidos dia após dia."
                        <span>– Robert Collier</span>
                    </blockquote>
                </section>

                <div className={styles.grid}>
                    {/* Atualidades */}
                    <article className={styles.card}>
                        <div className={styles.card__header}>
                            <Map size={24} />
                            <h3>Atualidades da Semana</h3>
                        </div>
                        <ul>
                            <li><b>IA na Saúde:</b> Ética e diagnósticos precoces.</li>
                            <li><b>Crise Climática:</b> O drama dos refugiados ambientais.</li>
                            <li><b>Economia Prateada:</b> O envelhecimento populacional no Brasil.</li>
                        </ul>
                    </article>

                    {/* Temas Redação */}
                    <article className={styles.card}>
                        <div className={styles.card__header}>
                            <PenTool size={24} />
                            <h3>Apostas para Redação</h3>
                        </div>
                        <ul>
                            <li>Inclusão Neurodiversa no Mercado de Trabalho.</li>
                            <li>Segurança Alimentar vs. Desperdício.</li>
                            <li>Cidadania Digital e Algoritmos.</li>
                        </ul>
                    </article>

                    {/* Repertório Cultural */}
                    <article className={styles.card}>
                        <div className={styles.card__header}>
                            <BookOpen size={24} />
                            <h3>Repertório Cultural</h3>
                        </div>
                        <p><b>Livro:</b> Quarto de Despejo (Carolina Maria de Jesus)</p>
                        <p><b>Filme:</b> O Jogo da Imitação (Ética e Tecnologia)</p>
                        <p><b>Pensador:</b> Zygmunt Bauman (Modernidade Líquida)</p>
                    </article>

                    {/* Técnica de Memorização */}
                    <article className={styles.card}>
                        <div className={styles.card__header}>
                            <Brain size={24} />
                            <h3>Dica de Memorização</h3>
                        </div>
                        <p><b>Palácio da Memória:</b> Associe fórmulas ou conceitos a móveis da sua casa. Ao caminhar mentalmente pelo espaço, você resgata a informação.</p>
                    </article>
                </div>

                {/* Curiosidade */}
                <section className={styles.curiosity}>
                    <div className={styles.curiosity__content}>
                        <Lightbulb size={24} />
                        <p>O cérebro consome 20% da sua energia diária. Estudar é, literalmente, um treino intenso!</p>
                    </div>
                </section>
            </main>
        </>
    );
}