import { Button } from "@mui/material";
import { useLocation } from "react-router";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const ActionButton = ({ text, onClick }) => {

    return (
        <button className={styles.action_button}>{text}</button>
    );
};

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div>
            <div className={styles.tagline}>
                The health and well-being of our patients and their health care team will always 
                be our priority, so we follow the best practices for cleanliness.
            </div>
            <div className={ `${styles.navbar_div} ${path === "/" ? "" : styles.navbar_div_result_page }` }>
                <div className={styles.logo}>
                    <img src={logo} alt="medify logo" /><span>Medify</span>
                </div>
                <div className={styles.action_wrapper}>
                    <ActionButton text='Find Doctors' />
                    <ActionButton text='Hospitals' />
                    <ActionButton text='Medicines' />
                    <ActionButton text='Surgeries' />
                    <ActionButton text='Software for Provider' />
                    <ActionButton text='Facilities' />
                    <Button 
                        className={styles.button_mui}
                        variant="contained"
                        sx={{ 
                            background: "var(--color-blue-secondary)", 
                            textTransform: 'none'
                        }}
                    >
                        My Bookings
                    </Button>
                </div>   
            </div>
        </div>
    );
}

export default Navbar;