// Вся главная страница со структурой сайта
'use client';

import {TResult, TFeedBack} from "@/libs/types";
import styles from "@/components/HomeClient.module.css";
import MainContent from "@/components/MainContent";
import MainPhoto from "@/components/MainPhoto";
import Disputs from "@/components/Disputes";
import Benefits from "@/components/Benefits";
import Results from "@/components/Results";
import Feedbacks from "@/components/Feedbacks";
import HeaderMain from "@/components/Header/HeaderMain";

type HomeClientProps = {
    results: TResult[];
    feedbacks: TFeedBack[];
};

export default function HomeClient({ results, feedbacks }: HomeClientProps) {
    return (
        <main className={styles.main}>

            <HeaderMain />
            < MainContent />
            < MainPhoto />
            < Disputs />
            < Benefits />
            < Results results={results} />
            <Feedbacks feedbacks={feedbacks} />

        </main>
    );
}