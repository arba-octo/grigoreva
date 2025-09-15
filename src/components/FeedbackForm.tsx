import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "@/components/FeedbackForm.module.css";

export function FeedbackForm() {
    return (
        <div className={styles["fb-form__main"]}>
            <div className={styles["fb-form__title"]}>
                Отправить отзыв
            </div>
            <Formik
                initialValues={{
                    author: "",
                    content: "",
                    city: ""
                }}
                validate={(values) => {
                    const errors: Record<string, string> = {};
                    if (!values.author) errors.author = "Напишите Ваше имя";
                    if (!values.content) {
                        errors.content = "Напишите текст отзыва"
                    } else if (values.content.length < 5) {errors.content = "Длина отзыва должна быть не менее 5 символов"}
                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    // Формируем данные для отправки
                    const formData = new FormData();
                    const generatedKey = Math.floor(Math.random() * 1000000); // генерируем на клиенте key, id появится само на сервере
                    console.log("generatedKey = ", generatedKey);
                    formData.append("key", generatedKey.toString()); // Приводим к строке т.к. этого требует formdata
                    formData.append("author", values.author);
                    formData.append("content", values.content);
                    formData.append("city", values.city);
                    formData.append("date", new Date().toISOString());
                    formData.append("active", "false");


                    fetch("/api/feedback", {
                        method: "POST",
                        body: formData,
                    }).then(() => {
                        setSubmitting(false);
                        resetForm();
                        alert("Ваша заявка отправлена!");
                    }).catch((err) => {
                        setSubmitting(false);
                        alert("Ошибка запроса: " + err.message);
                    });
                }}
            >

                {({ isSubmitting, setFieldValue }) => (
                    <Form>
                        <div className={styles["fb-form__item"]}>
                            <label htmlFor="author" className={styles["fb-form__label"]}>Ваше имя (будет отображаться в
                                отзыве на нашем сайте)</label>
                            <Field name="author" rows="5" className={styles["fb-form__value"]}/>
                            <ErrorMessage name="author" component="div" className={styles["fb-form__error"]}/>
                        </div>
                        <div className={styles["fb-form__item"]}>
                            <label htmlFor="content" className={styles["fb-form__label"]}>Отзыв</label>
                            <Field as="textarea" name="content" className={styles["fb-form__value"]}/>
                            <ErrorMessage name="content" component="div" className={styles["fb-form__error"]}/>
                        </div>
                        <div className={styles["fb-form__item"]}>
                            <label htmlFor="city" className={styles["fb-form__label"]}>Выберите город</label>
                            <Field as="select" name="city" className={styles["fb-form__value"]}>
                                <option value="">--- Выбери город ---</option>
                                <option value="Санкт-Петербург">Санкт-Петербург</option>
                                <option value="Сочи">Сочи</option>
                                <option value="Краснодар">Краснодар</option>
                                <option value="Москва">Москва</option>
                            </Field>
                            <ErrorMessage name="city" component="div" className={styles["fb-form__error"]}/>
                        </div>
                        <button type="submit" disabled={isSubmitting} className={styles["fb-form__button"]}>
                            Отправить
                        </button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}