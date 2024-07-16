import styles from "./OurFamiliesSection.module.css";
import happy_icon from "../../assets/happy_icon.png";
import hospital_icon from "../../assets/hospital_icon.png";
import doctor_icon from "../../assets/doctor_icon.png";
import lab_icon from "../../assets/lab_icon.png";

/**
 * Card component
 * @param {string} icon
 * @param {Color} bgColor
 * @param {string} number
 * @param {string} text  
 * @returns 
 */
const Card = ({ icon, bgColor, number, text }) => {

    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card_image} style={{ backgroundColor: bgColor }}>
                <img src={icon} alt={text} />
            </div>
            <h1>{number}</h1>
            <h4>{text}</h4>
        </div>
    );
};


/**
 * OurFamiliesSection component
 * @returns 
 */
export default function OurFamiliesSection() {

    return (
        <div className={styles.section_wrapper}>
            <div className={styles.text_wrapper}>
                <h4 className={styles.subheading}>
                    CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                </h4>
                <h1 className={styles.heading}>Our Families</h1>
                <p className={styles.para}>
                    We will work with you to develop individualised care plans, including management of 
                    chronic diseases. If we cannot assist, we can provide referrals or advice about the 
                    type of practitioner you require. We treat all enquiries sensitively and in the strictest 
                    confidence.
                </p>
            </div>
            <div className={styles.cards_wrapper}>
                <div className={styles.left_side_cards}>
                    <Card 
                        icon={happy_icon}
                        bgColor="#EBF7FF"
                        number="5000+"
                        text="Happy Patients"
                    />
                    <Card 
                        icon={hospital_icon}
                        bgColor="#FFF2F0"
                        number="200+"
                        text="Hospitals"
                    />
                </div>
                <div className={styles.right_side_cards}>
                    <Card 
                        icon={lab_icon}
                        bgColor="#FFF7E6"
                        number="1000+"
                        text="Laboratories"
                    />
                    <Card 
                        icon={doctor_icon}
                        bgColor="#EBFAF1"
                        number="700+"
                        text="Expert Doctors"
                    />
                </div>
            </div>
        </div>
    );
}