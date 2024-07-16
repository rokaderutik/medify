import styles from "./NewsSection.module.css";
import auth_image from "../../assets/author_icon.png";
import blog_image from "../../assets/blog_image.png";

/**
 * Card component: news card
 * @param {string} category
 * @param {string} date
 * @param {string} heading
 * @param {string} image
 * @param {string} auth_name
 * @param {string} auth_image
 * @returns 
 */
const Card = ({ category, date, heading, image, auth_name, auth_image }) => {

    return (
        <div className={styles.card_wrapper}>
            <div className={styles.card_image}>
                <img src={image} alt="blog" />
            </div>
            <div className={styles.card_info}>
                <p className={styles.category_date}>{category} | {date}</p>
                <h4 className={styles.card_heading}>{heading}</h4>
                <div className={styles.author_div}>
                    <img src={auth_image} alt="author" />
                    <p>{auth_name}</p>
                </div>
            </div>
        </div>
    );
}

/**
 * NewsSection component
 * @returns 
 */
export default function NewsSection() {
    const newsList = [
        {
            category:"Medical",
            date:"March 31, 2022",
            heading:"6 Tips To Protect Your Mental Health When You’re Sick",
            image:blog_image,
            auth_image:auth_image,
            auth_name:"Rebecca Lee"
        },
        {
            category:"Medical",
            date:"March 31, 2022",
            heading:"6 Tips To Protect Your Mental Health When You’re Sick",
            image:blog_image,
            auth_image:auth_image,
            auth_name:"Rebecca Lee"
        },
        {
            category:"Medical",
            date:"March 31, 2022",
            heading:"6 Tips To Protect Your Mental Health When You’re Sick",
            image:blog_image,
            auth_image:auth_image,
            auth_name:"Rebecca Lee"
        }
    ];

    return (
        <div className={styles.section_wrapper}>
            <h5 className={styles.top_subheading}>Blog & News</h5>
            <h1 className={styles.heading}>Read Our Latest News</h1>
            <div className={styles.cards_wrapper}>
                {
                    newsList.map((news, ind) => {
                        return (
                            <Card 
                                key={ind}
                                category={news.category}
                                date={news.date}
                                heading={news.heading}
                                image={news.image}
                                auth_image={news.auth_image}
                                auth_name={news.auth_name}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}