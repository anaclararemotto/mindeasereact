import { useState } from "react";
import { CardMatters } from "@presentation/components/card-matters/card-matters";
import { Header } from "@presentation/components/header/header";
import { ArrowLeft } from "lucide-react";
import { MATTERS_MOCK } from "./matters.mock";
import styles from "./matters.styles.module.scss";
import { LessonDetails } from "@presentation/components/lesson-details/lesson-details";

function Matters() {
    const [selectedMatter, setSelectedMatter] = useState<any>(null);
    const [selectedLesson, setSelectedLesson] = useState<any>(null);

    // Função para voltar um nível
    const handleBack = () => {
        if (selectedLesson) {
            setSelectedLesson(null);
        } else {
            setSelectedMatter(null);
        }
    };

    // Se houver uma aula selecionada, renderiza o detalhe
    if (selectedLesson) {
        return <LessonDetails data={selectedLesson} onBack={handleBack} />;
    }

    // Define se exibe a lista principal ou as submatérias
    const currentItems = selectedMatter ? selectedMatter.submatters : MATTERS_MOCK;

    return (
        <>
            <Header />
            <main className={styles["container"]}>
                <div >
                    {selectedMatter && (
                        <button onClick={handleBack} className={styles["container__back-button"]}>
                            <ArrowLeft size={20} /> Voltar para {selectedMatter.title}
                        </button>
                    )}
                </div>

                <div className={styles["grid"]}>
                    {currentItems.map((item: any) => (
                        <div 
                            key={item.id} 
                            className={styles["container__card-wrapper"]}
                            onClick={() => {
                                if (!selectedMatter) {
                                    setSelectedMatter(item);
                                } else {
                                    setSelectedLesson(item);
                                }
                            }}
                        >
                            <CardMatters 
                                bgColor={item.bgColor} 
                                icon={item.icon} 
                                title={item.title} 
                            />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Matters;