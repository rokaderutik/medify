import styles from "./SearchResultSection.module.css";
import { Button } from "@mui/material";
import { ReactComponent as TrueMark } from "../../assets/true_mark.svg";
import { ReactComponent as CardIcon } from "../../assets/result_card_icon.svg";
import { ReactComponent as TrueMarkBlue } from "../../assets/true_icon.svg";
import { ReactComponent as LikeThumb } from "../../assets/like_thumb.svg";
import add_baner from "../../assets/results_add_baner.png";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";

function SlotButton({ time }) {

    return (
        <button className={styles.slot_button}>
            {time}
        </button>
    );
}

const BookingCard = () => {
    
    const dateList = new Array(7);  
    for(let i = 0; i < 7; i++) {
        let currentDay = new Date();
        currentDay.setDate(currentDay.getDate() + i);
        dateList[i] = currentDay;
    }


    return (
        <div className={styles.booking_wrapper}>
            <div className={styles.pagination}>
                <div className={styles.pagination_btn}>
                    <LeftArrow />
                </div>
                <div className={styles.pagination_date_row}>

                    <div className={styles.pagination_date_wrapper}>
                        <h3>Today</h3>
                        <h4>11 Slots Available</h4>
                    </div>
                    
                </div>
                <div className={styles.pagination_btn}>
                    <RightArrow />
                </div>
            </div>
            <div className={styles.slot_row}>
                <p>Morning</p>
                <div className={styles.slot_row_times}>
                    <SlotButton time="11:00 AM"/>
                    <SlotButton time="11:30 AM"/>
                </div>
            </div>
            <hr />
            <div className={styles.slot_row}>
                <p>Afternoon</p>
                <div className={styles.slot_row_times}>
                    <SlotButton time="12:00 PM"/>
                    <SlotButton time="12:30 PM"/>
                    <SlotButton time="01:30 PM"/>
                    <SlotButton time="02:00 PM"/>
                    <SlotButton time="02:30 PM"/>
                </div>
            </div>
            <hr />
            <div className={styles.slot_row}>
                <p>Evening</p>
                <div className={styles.slot_row_times}>
                    <SlotButton time="06:00 PM"/>
                    <SlotButton time="06:30 PM"/>
                    <SlotButton time="07:00 PM"/>
                    <SlotButton time="07:30 PM"/>
                </div>
            </div>
        </div>
    );
}

const ResultCard = ({ hosName, hosAdd, city, state, zipCode, rating }) => {

    return (
        <div>
        <div className={styles.card_wrapper}>
            <div className={styles.card_image}>
                <CardIcon />
                <TrueMarkBlue className={styles.card_true_mark}/>
            </div>
            <div>
                <h3 className={styles.card_name}>{hosName}</h3>
                <h4 className={styles.card_address}>{hosAdd}, {city}, {state}-{zipCode}.</h4>
                <p className={styles.card_para}>Smilessence Center for Advanced Dentistry + 1 more</p>
                <p className={styles.card_para_consulation}>
                    <span className={styles.free_span}>FREE </span>
                    <span className={styles.amount_span}>₹500 </span>
                    Consultation fee at clinic
                </p>
                
                <div className={styles.rating}>
                    <LikeThumb />
                    <span>{rating}</span>
                </div>
            </div>
            <div className={styles.card_buttons}>
                <p className={styles.availabity}>Available Today</p>
                <Button 
                    className={styles.button_mui}
                    variant="contained"
                    sx={{ 
                        background: "var(--color-blue-secondary)", 
                        textTransform: 'none'
                    }}
                >
                    Book FREE Center Visit
                </Button>
            </div>
        </div>
        <BookingCard />
        </div>
    );
};

const SearchResultSection = ({ resultsList, stateName, cityName }) => {

    return (
        <div className={styles.section_wrapper}>
            <div className={styles.top_blue_container}></div>
            <div className={styles.content_wrapper}>
                <h3 className={styles.heading}>{resultsList.length} medical centers available in {cityName}</h3>
                <div className={styles.subheading_wrapper}>
                    <TrueMark />
                    <p>Book appointments with minimum wait-time & verified doctor details</p>
                </div>
                <div className={styles.card_list_and_add_wrapper}>
                    <div className={styles.list_wrapper}>
                        {
                            resultsList.map((item) => {
                                return (
                                    <ResultCard 
                                        key={item["Provider ID"]}
                                        hosName={item["Hospital Name"]}
                                        hosAdd={item["Address"]}
                                        city={item["City"]}
                                        state={item["State"]}
                                        zipCode={item["ZIP Code"]}
                                        rating={item["Hospital overall rating"]}
                                    />
                                );
                            })
                        }
                        
                    </div>
                    <div className={styles.add_baner}>
                        <img src={add_baner} alt="advertisement" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultSection;