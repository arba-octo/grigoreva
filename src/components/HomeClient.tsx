// Вся главная страница со структурой сайта
'use client';

import {useRef, useState} from "react";
import {TResult, TFeedBack} from "@/libs/types";
import styles from "@/components/HomeClient.module.css";
import Main from "@/components/Main";
import Disputes from "@/components/Disputes";
import Benefits from "@/components/Benefits";
import Results from "@/components/Results";
import Feedbacks from "@/components/Feedbacks";
import Header from "@/components/Header";
import {RequestModal} from "@/components/RequestModal";
import {ApplicationForm} from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

type THomeClientProps = {
    results: TResult[];
    feedbacks: TFeedBack[];
};

export default function HomeClient({ results, feedbacks }: THomeClientProps) {
    const mainPageRef = useRef<HTMLDivElement>(null); // Нужен для отображения контактов в меню Header
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <main className={styles.main}>

            <Header mainPageRef={mainPageRef} onApplicationClick={() => setModalOpen(true)} />
            < Main ref={mainPageRef} onApplicationClick={() => setModalOpen(true)} />
            < Disputes onApplicationClick={() => setModalOpen(true)} />
            < Benefits />
            < Results results={results} />
            <Feedbacks feedbacks={feedbacks} />
            <Footer />

            <RequestModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                < ApplicationForm />
            </RequestModal>

        </main>
    );
}