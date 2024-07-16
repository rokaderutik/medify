import styles from "./HeroSection.module.css";
import HeroImage from "../../assets/hero_image_Dr.png";
import { Button } from "@mui/material";

/**
 * HeroSection component
 * @returns 
 */
export default function HeroSection() {

    return (
        <div className={styles.hero_section_wrapper}>
            <div className={styles.text_button_wrapper}>
                <h3 className={styles.h3}>
                    Skip the travel! Find Online
                </h3>
                <h1 className={styles.h1}>
                    <span>Medical</span> Centers
                </h1>
                <p className={styles.p}>
                    Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                </p>
                <Button
                    className={styles.button_mui}
                    variant="contained"
                    sx={{
                        background: "var(--color-blue-secondary)",
                        textTransform: "none",
                        padding: "6px 24px"
                    }}
                >
                    Find Centers
                </Button>
            </div>
            <div className={styles.hero_image}>
                <img src={HeroImage} alt="Doctors" />
            </div>
        </div>
    );
}