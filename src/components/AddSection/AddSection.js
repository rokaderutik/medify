import styles from "./AddSection.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import add1 from "../../assets/add1.png";
import add2 from "../../assets/add2.png";

// Import Swiper styles
import 'swiper/css';

export default function AddSection() {
    const addList = [add1, add2, add1];

    return (
        <div className={styles.add_section_wrapper}>
            <Swiper
                spaceBetween={60}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    addList.map((add, ind) => {
                        return (
                            <SwiperSlide key={ind} className={styles.swiper_slide}>
                                <img src={add} alt="add" />
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
            <div className={styles.swiper_buttons}>
                    swiper buttons
            </div>
        </div>
    );
}