import styles from "./PatientCaringSection.module.css";
import patient_caring_1 from "../../assets/patient_caring_1.png";
import patient_caring_2 from "../../assets/patient_caring_2.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { ReactComponent as TrueIcon } from "../../assets/true_icon.svg";


/**
 * PatientCaringSection component
 * @returns 
 */
export default function PatientCaringSection() {

    return (
        <div className={styles.section_wrapper}>
            <div className={styles.images_wrapper}>
                <img className={styles.patient_caring_2} src={patient_caring_2} alt="patient caring" />
                <img className={styles.patient_caring_1} src={patient_caring_1} alt="patient caring" />
                <div className={styles.note_card}>
                    <div className={styles.note_card_top}>
                        <div className={styles.phone_icon}>
                            <BiSolidPhoneCall />
                        </div>
                        <h4>Free Consultation</h4>
                    </div>
                    <p>Consultation with the best</p>
                </div>
            </div>
            <div className={styles.texts_wrapper}>
                <h4 className={styles.first_sub_heading}>HELPING PATIENTS FROM AROUND THE GLOBE!!</h4>
                <h1 className={styles.heading}>Patient <span>Caring</span></h1>
                <p className={styles.para}>
                    Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. 
                    We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                </p>
                <div className={styles.true_icon_line}>
                    <TrueIcon />
                    <h4>Stay Updated About Your Health</h4>
                </div>
                <div className={styles.true_icon_line}>
                    <TrueIcon />
                    <h4>Check Your Results Online</h4>
                </div>
                <div className={styles.true_icon_line}>
                    <TrueIcon />
                    <h4>Manage Your Appointments</h4>
                </div>
            </div>
        </div>
    );
}