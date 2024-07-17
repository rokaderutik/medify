import styles from "./MedicalSpecialistSection.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Doctor1 from "../../assets/doctor1.png";
import Doctor2 from "../../assets/doctor2.png";
import Doctor3 from "../../assets/doctor3.png";
import Doctor4 from "../../assets/Doctor4.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

/**
 * Card component: carousel item/card
 * @param {string} image
 * @param {string} name
 * @param {string} specialisation 
 * @returns 
 */
const Card = ({ image, name, specialisation }) => {
    return (
        <div className={styles.card_wrapper}>
            <div className={styles.image_wrapper}>
                <img src={image} alt={name} />
            </div>
            <h4>{name}</h4>
            <p>{specialisation}</p>
        </div>
    );
};


/**
 * MedicalSpecialistSection component: carousel of specialist doctors
 * @returns 
 */
const MedicalSpecialistSection = () => {
    const doctorList = [
        {
            image: Doctor1,
            name: "Dr. Ahmad Khan",
            specialisation: "Neurologist"
        },
        {
            image: Doctor2,
            name: "Dr. Heena Sachdeva",
            specialisation: "Orthopadics"
        },
        {
            image: Doctor3,
            name: "Dr. Ankur Sharma",
            specialisation: "Medicine"
        },
        {
            image: Doctor4,
            name: "Dr. Ashu Rokade",
            specialisation: "Orthopadics"
        },
        {
            image: Doctor3,
            name: "Dr. Runan Wajal",
            specialisation: "Neurologist"
        },
        
    ];

    return (
        <div className={styles.section_wrapper}>
            <h3 className={styles.heading}>Our Medical Specialist</h3>
            <div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        500: {
                          // width: 576,
                          slidesPerView: 2,
                        },
                        800: {
                          // width: 768,
                          slidesPerView: 3,
                        },
                      }}
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
                    modules={[Pagination, Autoplay]}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        doctorList.map((dr, ind) => {
                            return (
                                <SwiperSlide key={ind}>
                                    <Card 
                                        image={dr.image}
                                        name={dr.name}
                                        specialisation={dr.specialisation}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default MedicalSpecialistSection; 