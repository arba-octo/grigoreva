// Вся главная страница со структурой сайта
'use client';

import {useRef} from "react";
import {TResult, TFeedBack} from "@/libs/types";
import styles from "@/components/HomeClient.module.css";
import MainContent from "@/components/MainContent";
import MainPhoto from "@/components/MainPhoto";
import Disputes from "@/components/Disputes";
import Benefits from "@/components/Benefits";
import Results from "@/components/Results";
import Feedbacks from "@/components/Feedbacks";
import Header from "@/components/Header/Header";

type HomeClientProps = {
    results: TResult[];
    feedbacks: TFeedBack[];
};

export default function HomeClient({ results, feedbacks }: HomeClientProps) {
    const mainPageRef = useRef<HTMLDivElement>(null); // Нужен для отображения контактов в меню Header

    return (
        <main className={styles.main}>

            <Header mainPageRef={mainPageRef} />
            <div
                className={`${styles["main__main-page"]}`}
                ref={mainPageRef}
            >
                < MainContent />
                < MainPhoto />
            </div>
            < Disputes />
            < Benefits />
            < Results results={results} />
            <Feedbacks feedbacks={feedbacks} />

        </main>
    );
}