import styles from "./NewsSection.module.css";

const Card = ({ category, date, heading, image, auth_name, auth_image }) => {

    return (
        <div>
        
        </div>
    );
}

export default function NewsSection() {

    return (
        <div className={styles.section_wrapper}>
            <h5 className={styles.top_subheading}>Blog & News</h5>
            <h1 className={styles.heading}>Read Our Latest News</h1>
            <div className={styles.cards_wrapper}>
                <Card 
                    category="Medical"
                    date="March 31, 2022"
                    heading="6 Tips To Protect Your Mental Health When You’re Sick"
                    image={""}
                    auth_image={""}
                    auth_name="Rebecca Lee"
                />
            </div>
        </div>
    );
}