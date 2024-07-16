import styles from "./SpecialisationSection.module.css";
import XRay from "../../assets/X-Ray.png";
import DrugStore from "../../assets/Drugstore (1).png";
import Immune from "../../assets/Immune.png";
import BloodSample from "../../assets/Blood Sample.png";
import HeartRate from "../../assets/Heart Rate.png";
import HeartRateMonitor from "../../assets/Heart Rate Monitor.png";
import Stethoscope from "../../assets/Stethoscope.png";
import { Button } from "@mui/material";


/**
 * Card component
 * @param {string} Icon
 * @param {string} title 
 * @returns 
 */
const Card = ({ Icon, title }) => {

    return (
        <div className={styles.card} onClick={() => {}}>
            <img src={Icon}  alt={title} />
            <h4>{title}</h4>
        </div>
    );
};

/**
 * SpecialisationSection component
 * @returns 
 */
const SpecialisationSection = () => {

    return (
        <div className={styles.specialisation_wrapper}>
            <h3 className={styles.heading}>Find by specialisation</h3>
            <div className={styles.card_wrapper}>
                <Card Icon={DrugStore} title="Dentistry" />
                <Card Icon={Stethoscope} title="Primary Care" />
                <Card Icon={HeartRate} title="Cardiology" />
                <Card Icon={HeartRateMonitor} title="MRI Resonance" />
                <Card Icon={BloodSample} title="Blood Test" />
                <Card Icon={Immune} title="Piscologist" />
                <Card Icon={DrugStore} title="Laboratory" />
                <Card Icon={XRay} title="X-Ray" />
            </div>
            <Button
                className={styles.button_mui}
                variant="contained"
                sx={{
                    background: "var(--color-blue-secondary)",
                    textTransform: "none",
                    padding: "6px 24px"
                }}
            >
                View All
            </Button>
        </div>
    );
};

export default SpecialisationSection;