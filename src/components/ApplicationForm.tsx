// Компонент формы для отправки заявки с сайта на базе Formik
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "@/components/ApplicationForm.module.css"

const contactOptions = [
    { value: "Звонок", label: "Звонок" },
    { value: "Whatsup", label: "Whatsup" },
    { value: "Telegram", label: "Telegram" },
    { value: "Email", label: "Email" },
];

export function ApplicationForm() {
    return (
        <div className={styles["application-form__main"]}>
            <div className={styles["application-form__title"]}>
                Заявка на консультацию
            </div>
            <Formik
                initialValues={{
                    question: "",
                    contactType: "Звонок",
                    file: null,
                    phone: "",
                    email: ""
                }}
                validate={values => {
                    const errors: Record<string, string> = {};
                    if (!values.question) errors.question = "Пожалуйста, опишите ваш вопрос";
                    // Только если выбран телефонные способы связи — требовать телефон
                    if (
                        ["Звонок", "Whatsup", "Telegram"].includes(values.contactType) &&
                        !values.phone
                    ) {
                        errors.phone = "Укажите телефон";
                    }
                    // Только если выбран Email — требовать email
                    if (values.contactType === "Email" && !values.email) {
                        errors.email = "Укажите email";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    // Формируем данные для отправки
                    const formData = new FormData();
                    formData.append("question", values.question);
                    formData.append("contactType", values.contactType);
                    formData.append("phone", values.phone);
                    formData.append("email", values.email);
                    if (values.file) formData.append("file", values.file);

                    fetch("/api/application", {
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
                        <div className={styles["application-form__item"]}>
                            <label htmlFor="question" className={styles["application-form__label"]}>Напишите свой вопрос</label>
                            <Field as="textarea" name="question" rows="5" className={styles["application-form__value"]} />
                            <ErrorMessage name="question" component="div" className={styles["application-form__error"]} />
                        </div>

                        <div className={styles["application-form__item"]}>
                            <label htmlFor="contactType" className={styles["application-form__label"]}>Как с вами лучше связаться? Выберите нужный вариант</label>
                            <Field as="select" name="contactType" className={styles["application-form__value"]}>
                                {contactOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </Field>
                        </div>

                        <div className={styles["application-form__item"]}>
                            <label htmlFor="file" className={styles["application-form__label"]}>Если есть сканы документов то можете их прикрепить здесь</label>
                            <input
                                id="file"
                                name="file"
                                type="file"
                                className={styles["application-form__value-file"]}
                                onChange={event => setFieldValue("file", event.currentTarget.files?.[0])}
                            />
                        </div>

                        <div className={styles["application-form__item"]}>
                            <label htmlFor="phone" className={styles["application-form__label"]}>Ваш телефон (в формате +79991112233)</label>
                            <Field
                                type="text"
                                name="phone"
                                className={styles["application-form__value"]}
                            />
                            <ErrorMessage name="phone" component="div" className={styles["application-form__error"]} />
                        </div>

                        <div className={styles["application-form__item"]}>
                            <label htmlFor="email" className={styles["application-form__label"]}>Ваш email (если связь через эл. почту)</label>
                            <Field
                                type="email"
                                name="email"
                                className={styles["application-form__value"]}
                            />
                        </div>

                        <button type="submit" disabled={isSubmitting} className={styles["application-form__button"]}>
                            Отправить
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}