import styles from "./SearchResultSection.module.css";
import { Button } from "@mui/material";
import { ReactComponent as TrueMark } from "../../assets/true_mark.svg";
import { ReactComponent as CardIcon } from "../../assets/result_card_icon.svg";
import { ReactComponent as TrueMarkBlue } from "../../assets/true_icon.svg";
import { ReactComponent as LikeThumb } from "../../assets/like_thumb.svg";
import add_baner from "../../assets/results_add_baner.png";
import { ReactComponent as LeftArrow } from "../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/rightArrow.svg";
import { useRef, useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { useLocation } from "react-router";


/**
 * SlotButton Component: Button of booking forms time slot
 * @param {string} time
 * 
 * @param {Function} setBookingData
 * for setting booking data if any slot is choose
 * 
 * @param {object} bookingData
 * @returns 
 */
function SlotButton({ time, setBookingData, bookingData }) {
    function handleChange(name, value) {
        setBookingData({
            ...bookingData,
            [name]: value
        });
    }
    
    return (
        <button 
            className={styles.slot_button}
            onClick={() => handleChange('time', time)}
        >
            {time}
        </button>
    );
}


/**
 * BookingCard Component: for booking details, dates and available slots
 * @param {Object} bookingData
 * object for storing data of booking, feilds: hospital data, time slot, date
 * 
 * @param {Function} setBookingData
 * for updating booking data if date and time choose
 * @returns 
 */
const BookingCard = ({ bookingData, setBookingData }) => {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    const morningSlots = ['10:30 AM', '11:00 AM', '11:30 AM'];
    const afternoonSlots = ['12:00 PM', '12:30 PM', '01:30 PM', '02:00 PM', '02:30 PM'];
    const eveningSlots = ['06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM']

    // creating array of one week
    const dateList = new Array(7);  
    for(let i = 0; i < 7; i++) {
        let currentDay = new Date();
        currentDay.setDate(currentDay.getDate() + i);
        
        const month = currentDay.getMonth();
        const date = currentDay.getDate();
        const day = currentDay.getDay();
        dateList[i] = {
            date: currentDay,
            dateFormated: `${days[day]}, ${date} ${months[month]}`,
            ind: i,
        };
    }

    const maxDates = 3;
    let start = useRef(0);
    const [currentDateDisplayList, setCurrentDateDisplayList] = useState(dateList.slice(0, 3));
    
    function handleNext() {
        if(start.current < 4) {
            start.current++;
            setCurrentDateDisplayList(dateList.slice(start.current, start.current + 3));
        } else {
            return;
        }
    }

    function handlePrev() {
        if(start.current > 0) {
            start.current--;
            setCurrentDateDisplayList(dateList.slice(start.current, start.current + 3));
        } else {
            return;
        }
    }

    function handleChange(name, value) {
        setBookingData({
            ...bookingData,
            [name]: value
        });
    }
    
    return (
        <div className={styles.booking_wrapper}>
            <div className={styles.pagination}>
                <button 
                    className={styles.pagination_btn}
                    onClick={handlePrev}
                    disabled={currentDateDisplayList[0].ind === 0}
                >
                    <LeftArrow />
                </button>
                <div className={styles.pagination_date_row}>
                    {
                        currentDateDisplayList.map((day) => {
                            return (
                                <button 
                                    key={day.ind}
                                    className={styles.pagination_date_wrapper} 
                                    onClick={() => handleChange('date', day.date)}
                                >
                                    <h3>{day.ind > 1 ? day.dateFormated : (day.ind === 0 ? "Today" : "Tomorrow")}</h3>
                                    <h4>{11} Slots Available</h4>
                                </button>
                            );
                        })
                    }
                </div>
                <button 
                    className={styles.pagination_btn}
                    onClick={handleNext}
                    disabled={currentDateDisplayList[2].ind === 6}
                >
                    <RightArrow />
                </button>
            </div>
            <div className={styles.slot_row}>
                <p>Morning</p>
                <div className={styles.slot_row_times}>
                    {
                        morningSlots.map((time) => {
                            return <SlotButton 
                                key={time}
                                time={time} 
                                bookingData={bookingData} 
                                setBookingData={setBookingData} 
                            />
                        })
                    }
                </div>
            </div>
            <hr />
            <div className={styles.slot_row}>
                <p>Afternoon</p>
                <div className={styles.slot_row_times}>
                    {
                        afternoonSlots.map((time) => {
                            return <SlotButton 
                                key={time}
                                time={time} 
                                bookingData={bookingData} 
                                setBookingData={setBookingData} 
                            />
                        })
                    }
                </div>
            </div>
            <hr />
            <div className={styles.slot_row}>
                <p>Evening</p>
                <div className={styles.slot_row_times}>
                    {
                        eveningSlots.map((time) => {
                            return <SlotButton 
                                key={time}
                                time={time} 
                                bookingData={bookingData} 
                                setBookingData={setBookingData} 
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
}


/**
 * ResultCard Component: Hospital card, use for all pages
 * @param {Function} setBookingsList 
 * function for updating booking list, if booking done
 * 
 * @param {Array<Object>} bookingsList
 * 
 * @param {Object} hospitalData
 * object of all data associated with single hospital
 * 
 * @param {string} bookedDate
 * for booking page, to displaying a booked date for visit 
 * 
 * @param {string} bookedTime
 * for booking page, to displaying a booked time for visit 
 * @returns 
 */
const ResultCard = ({ setBookingsList, bookingsList, hospitalData, bookedDate, bookedTime }) => {
    const { pathname } = useLocation();
    const { enqueueSnackbar } = useSnackbar();
    const {
        "Hospital Name": hosName,
        Address: hosAdd,
        City: city,
        State: state,
        "ZIP Code": zipCode,
        "Hospital overall rating": rating
    } = hospitalData;
    
    // to open booking section
    const [isSlotBookingOpen, setIsSlotBookingOpen] = useState(false);

    //for storing booking date and time, if booking done for this hospital card
    const [bookingData, setBookingData] = useState({
        hospitalData: hospitalData,
        date: '',
        time: ''
    }); 

    // making booking
    function handleBooking() {
        if(bookingData.date === '' && bookingData.time === '') {
            enqueueSnackbar("Select the date & time", { variant: "warning" });
            return;
        } else if(bookingData.date === '') {
            enqueueSnackbar("Select the date", { variant: "warning" });
            return;
        } else if(bookingData.time === '') {
            enqueueSnackbar("Select the time", { variant: "warning" });
            return;
        }

        enqueueSnackbar(
            `Booking done for ${bookingData.date.getDate()}/${bookingData.date.getMonth()+1}/
            ${bookingData.date.getFullYear()}`, 
            { variant: "success" }
        );

        setBookingsList([
            ...bookingsList,
            bookingData
        ]);

        setIsSlotBookingOpen(false);
    }

    function formatDate(date) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const currDate = new Date(date);
        const month = currDate.getMonth();

        return `${currDate.getDate()} ${months[month]} ${currDate.getFullYear()}`;
    }

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
                    
                    {
                        pathname === '/searchresults' &&
                        <p className={styles.card_para_consulation}>
                            <span className={styles.free_span}>FREE </span>
                            <span className={styles.amount_span}><s>₹500</s> </span>
                            Consultation fee at clinic
                        </p>
                    }

                    <div className={styles.rating}>
                        <LikeThumb />
                        <span>{rating}</span>
                    </div>
                </div>
                
                { 
                    pathname === '/searchresults' &&
                    <div className={styles.card_buttons}>
                        <p className={styles.availabity}>Available Today</p>
                        <Button 
                            className={styles.button_mui}
                            variant="contained"
                            sx={{ 
                                background: "var(--color-blue-secondary)", 
                                textTransform: 'none'
                            }}
                            onClick={() => setIsSlotBookingOpen(prev => !prev)}
                        >
                            { isSlotBookingOpen ? "Cancle Visit" : "Book FREE Center Visit" }
                        </Button>
                        {
                            isSlotBookingOpen &&
                            <Button 
                                className={styles.button_mui}
                                variant="contained"
                                sx={{ 
                                    background: "var(--color-blue-secondary)", 
                                    textTransform: 'none',
                                    marginTop: "16px"
                                }}
                                onClick={handleBooking}
                            >
                                Confirm Booking
                            </Button>
                        }
                    </div>
                }
                
                {
                    pathname === "/bookings" && 
                    <div className={styles.booked_time_date_wrapper}>
                        <div className={styles.time_chip}>{bookedTime}</div>
                        <div className={styles.date_chip}>{formatDate(bookedDate)}</div>
                    </div>
                }
            </div>
            {
                isSlotBookingOpen && 
                <BookingCard 
                    className={styles.card_wrapper} 
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                />
            }
        </div>
    );
};


/**
 * SearchResultSection Component: component contains all hospital card list
 * @param {Array<Object>} resultsList 
 * array containing data of all availbale hospitals in selected location
 * 
 * @param {string} cityName
 * 
 * @param {Function} setBookingsList
 * for updating bookings list
 * 
 * @param {Array<Object>} bookingsList
 * list of bookings done
 * @returns 
 */
const SearchResultSection = ({ resultsList, cityName, setBookingsList, bookingsList }) => {
    const { pathname } = useLocation();
    
    // for Booking page
    if(pathname === '/bookings') {
        return (
            <div className={styles.section_wrapper}>
                <div className={styles.top_blue_container}>
                    My Bookings
                </div>
                <div className={styles.content_wrapper}>
                    <div className={styles.card_list_and_add_wrapper}>
                        <div className={styles.list_wrapper}>
                            {
                                resultsList.length > 0 ? (
                                    resultsList.map((item) => {
                                        return (
                                            <ResultCard 
                                                key={item.hospitalData["Provider ID"]}
                                                hospitalData={item.hospitalData}
                                                bookedDate={item.date}
                                                bookedTime={item.time}
                                            />
                                        );
                                    })
                                ) : (
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: '24px'
                                    }}>
                                        No Any Booking Done.
                                    </div>
                                )
                            }
                            
                        </div>
                        <div className={styles.add_baner}>
                            <img src={add_baner} alt="advertisement" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // for Search Result page
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
                            resultsList.length > 0 ? (
                                resultsList.map((item) => {
                                    return (
                                        <ResultCard 
                                            key={item["Provider ID"]}
                                            setBookingsList={setBookingsList}
                                            bookingsList={bookingsList}
                                            hospitalData={item}
                                        />
                                    );
                                })
                            ) : (
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: '24px',
                                    height: '70%'
                                }}>
                                    No Any Hospital Available.
                                </div>
                            )
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