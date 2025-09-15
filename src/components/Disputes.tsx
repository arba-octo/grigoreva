import Image from "next/image";

type TDisputesProps = {
    onApplicationClick: () => void;
}

function Disputes({ onApplicationClick }: TDisputesProps) {
    return (

                <section id="disputes" className="section">

                    <div className="section-title">
                        <h1>Споры, в которых мы поможем</h1>
                            < Image
                                width={150}
                                height={193}
                                alt="Судебные споры"
                                src="/images/disputes.png"
                                className="section__title-img"
                            />
                    </div>

                    <div className="section__content">
                        <ul className="section__list">
                            <li>Застройщик нарушил сроки передачи квартиры?</li>
                            <li>Застройщик передал вам квартиру со строительными недостатками?</li>
                            <li>Ваш застройщик – банкрот?</li>
                            <li>Фонд развития территорий отказал в выплате возмещения?</li>
                            <li>Фонд развития территорий произвел выплату возмещения в размере, не позволяющем вам
                                реализовать свои жилищные
                                права?
                            </li>
                            <li>Фонд развития территорий нарушил сроки достройки?</li>
                            <li>Региональный фонд отказал в передаче квартиры?</li>
                        </ul>

                        <p className="section__motivation">
                            Не нашел свой вопрос? <br/>
                            <a className="link-decoration" onClick={onApplicationClick}>Напиши нам</a> и мы ответим, сможем ли помочь с его
                            решением!
                        </p>
                    </div>

                </section>
    )
}

export default Disputes;