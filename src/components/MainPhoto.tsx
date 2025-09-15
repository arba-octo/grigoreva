import Image from "next/image";
import styles from "@/components/MainPhoto.module.css";


function MainPhoto() {
    return (
        <div className={styles["main-photo__container"]}>
            {/*<Image*/}
            {/*    fill*/}
            {/*    alt="Григорьева Дарья Александровна"*/}
            {/*    src="/images/photo.png"*/}
            {/*    className={styles["main-photo"]}*/}
            {/*/>*/}
        </div>
    )
};
export default MainPhoto;