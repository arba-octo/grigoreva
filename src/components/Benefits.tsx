// Наши преимущества
import Image from "next/image";
import AutoScrollSection from "@/libs/autoScrollSection";

function Benefits() {

    return (
        <AutoScrollSection id="results">
                <div className="section-title">
                    <h1>Преимущества работы с нами</h1>
                    <div className="section__title-img">
                        < Image
                            width={277}
                            height={193}
                            alt="Судебные споры"
                            src="/images/benefits.png"
                        />
                    </div>
                </div>

                <ul className="section__list">
                    <li>0 рублей консультация</li>
                    <li>0 рублей до нашей победы в суде</li>
                </ul>
                <p className="section__motivation">
                    Сначала мы работаем, и потом, в случае положительного результата, вы оплачиваете нашу работу как
                    комиссию от полученной по суду суммы.
                </p>
                <p className="section__list">
                    Размер комиссии составляет от *** до *** % в зависимости от сложности дела.
                </p>
        </AutoScrollSection>
    )
};
export default Benefits;