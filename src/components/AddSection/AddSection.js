import styles from "./AddSection.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import add1 from "../../assets/add1.png";
import add2 from "../../assets/add2.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

/**
 * AddSection Component: displaying add/offer carousel
 * @returns 
 */
export default function AddSection() {
    const addList = [add1, add2, add1, add2];

    return (
        <div className={styles.add_section_wrapper}>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                // navigation={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                // scrollbar={{ draggable: true }}
                modules={[Pagination, Navigation, Autoplay]}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
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
        </div>
    );
}