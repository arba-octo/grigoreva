import {TResult} from "@/libs/types";
import styles from "@/components/Results.module.css";
import Image from "next/image";
import AutoScrollSection from "@/libs/autoScrollSection";

type TResultsProps = {
    results: TResult[];
};

function Results({ results }: TResultsProps ) {
    return (
        <AutoScrollSection id="results">
            <div className="section-title">
                <h1>Наши результаты</h1>
                <div className="section__title-img">
                    < Image
                        width={200}
                        height={193}
                        alt="Судебные споры"
                        src="/images/results.png"
                    />
                </div>
            </div>

            <div className="section__content-gallery">
                {results.map((result: TResult) => (
                    <div key={result.id} className={`section__gallery-item ${styles["results__gallery-item"]}`}>
                        <div
                            className={`${styles["results__column-unite"]} section__gallery-title`}>Дело {`${result.case}`}</div>
                        <div>Сумма возмещения по оценке ППК Фонд развития территорий:</div>
                        <div className={styles["results__result-value"]}>{result.sumFirst} ₽</div>
                        <div>Сумма возмещения по нашей оценке:</div>
                        <div className={styles["results__result-value"]}>{result.sumNew} ₽</div>
                        <div>Результат: взыскали в пользу доверителя:</div>
                        <div className={styles["results__result-value"]}>{result.sumResult} ₽</div>
                        <div
                            className={`${styles["results__column-unite"]} ${styles["results__result-comment"]}`}>Постановление
                            Арбитражного суда Северо-Западного округа от 16.09.2024
                        </div>
                    </div>
                ))}
            </div>
        </AutoScrollSection>
    )
};
export default Results;