import {TFeedBack} from "@/libs/types";
import Image from "next/image";
import AutoScrollSection from "@/libs/autoScrollSection";

type TFeedbacksProps = {
    feedbacks: TFeedBack[];
}

function Feedbacks({ feedbacks }: TFeedbacksProps) {
    return (
        <AutoScrollSection id="feedbacks">
            <div className="section-title">
                <h1>Отзывы клиентов</h1>
                <div className="section__title-img">
                    < Image
                        width={173}
                        height={193}
                        alt="Судебные споры"
                        src="/images/feedbacks.png"
                    />
                </div>
            </div>

            <div className='section__content-gallery'>
                {feedbacks.map((feedback: TFeedBack) => (
                    <div key={feedback.id} className="section__gallery-item">
                        <div className="section__gallery-title">{`${feedback.author}`}</div>
                        <div>{feedback.content}</div>
                        <div>{feedback.city}</div>
                        <div>{feedback.date.toLocaleDateString()}</div>
                    </div>

                ))}
            </div>
            <div className="section__motivation">Написать отзыв</div>
        </AutoScrollSection>
    )
};
export default Feedbacks;