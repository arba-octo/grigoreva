import {useState} from "react";
import Image from "next/image";
import {Button} from "@mui/material";
import {TFeedBack} from "@/libs/types";
import {RequestModal} from "@/components/RequestModal";
import {FeedbackForm} from "@/components/FeedbackForm";

type TFeedbacksProps = {
    feedbacks: TFeedBack[];
}

function Feedbacks({ feedbacks }: TFeedbacksProps) {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <section id="feedbacks" className="section">

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

            <div className="section__content">
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
                <Button className="section__motivation" onClick={() => setModalOpen(true)}>Написать отзыв</Button>
                <RequestModal open={modalOpen} onClose={() => setModalOpen(false)}>
                    < FeedbackForm />
                </RequestModal>
            </div>

        </section>
    )
};
export default Feedbacks;