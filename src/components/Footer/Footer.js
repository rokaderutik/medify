import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { ReactComponent as FB } from "../../assets/fb.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/youTube.svg";
import { ReactComponent as Pinterst } from "../../assets/pinterest.svg";

/**
 * Footer component
 * @returns 
 */
export default function Footer() {

    return (
        <div className={styles.setion_wrapper}>
            <div className={styles.all_actions_wrapper}>
                <div className={styles.first_half}>
                    <div className={styles.logo_social_section}>
                        <div className={styles.logo}>
                            <img src={logo} alt="medify logo" /><span>Medify</span>
                        </div>
                        <div className={styles.social_wrapper}>
                            <div className={styles.social_icon}><FB /></div>
                            <div className={styles.social_icon}><Twitter /></div>
                            <div className={styles.social_icon}><Youtube /></div>
                            <div className={styles.social_icon}><Pinterst /></div>
                        </div>
                    </div>
                    <div className={styles.list}>
                        <ul>
                            <li>About Us</li>
                            <li>Our Pricing</li>
                            <li>Our Gallery</li>
                            <li>Appointment</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.second_half}>
                    <div className={styles.list}>
                        <ul>
                            <li>Orthology</li>
                            <li>Neurology</li>
                            <li>Dental Care</li>
                            <li>Opthalmology</li>
                            <li>Cardiology</li>
                        </ul>
                    </div>
                    <div className={styles.list}>
                        <ul>
                            <li>About Us</li>
                            <li>Our Pricing</li>
                            <li>Our Gallery</li>
                            <li>Appointment</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className={styles.copyright}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
        </div>
    );
}