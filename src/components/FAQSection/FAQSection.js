import styles from "./FAQSection.module.css";
import doctor_patient from "../../assets/FAQ.png";
import { ReactComponent as HeartIcon } from "../../assets/FAQ_heart.svg";
import { ReactComponent as SmileIcon } from "../../assets/FAQ_smile.svg";
import { ReactComponent as PlusIcon } from "../../assets/FAQ_plus_icon.svg";

/**
 * FAQSection component
 * @returns 
 */
export default function FAQSection() {

    return (
        <div className={styles.section_wrapper}>
            <h5 className={styles.top_subheading}>Get Your Answer</h5>
            <h1 className={styles.heading}>Frequently Asked Questions</h1>
            <div className={styles.content_wrapper}>
                <div className={styles.image_section}>
                    <div className={styles.image_div}>
                        <img src={doctor_patient} alt="doctor_patient" />
                    </div>
                    <div className={styles.smile_card}>
                        <SmileIcon />
                        <div>
                            <h3>84k+</h3>
                            <p>Happy Patients</p>
                        </div>
                    </div>
                    <div className={styles.heart_card}>
                        <HeartIcon />
                    </div>
                </div>
                <div className={styles.question_section}>
                    <div className={styles.question}>
                        <p>Why choose our medical for your family?</p>
                        <div className={styles.question_svg}><PlusIcon /></div>
                    </div>
                    <div className={styles.question}>
                        <p>Why we are different from others?</p>
                        <div className={styles.question_svg}><PlusIcon /></div>
                    </div>
                    <div className={styles.question}>
                        <p>Trusted & experience senior care & love</p>
                        <div className={styles.question_svg}><PlusIcon /></div>
                    </div>
                    <div className={styles.question}>
                        <p>How to get appointment for emergency cases?</p>
                        <div className={styles.question_svg}><PlusIcon /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}