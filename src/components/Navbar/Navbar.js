import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

/**
 * ActionButton component: navbar action buttons
 * @param {string} text
 * @param {Function} onClick
 * not used as this buttons are static 
 * @returns 
 */
const ActionButton = ({ text, onClick }) => {

    return (
        <button className={styles.action_button}>{text}</button>
    );
};


/**
 * Navbar component
 * @returns 
 */
const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;

    function handleMyBookingClick() {
        navigate("/bookings");
    }

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
                        onClick={handleMyBookingClick}
                    >
                        My Bookings
                    </Button>
                </div>   
            </div>
        </div>
    );
}

export default Navbar;