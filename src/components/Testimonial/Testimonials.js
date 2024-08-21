
import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import useFetch from '../../hooks/useFetch';
import Heading from '../Heading';
import Testimonial from './Testimonial';
import '../Testimonial/swiper-custon.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Testimonials = () => {
    const [data] = useFetch('testimonial');
    return (
        <section className="max-w-screen-xl mx-auto px-6 pb-24">
            <Heading title="Testimonials" />
            <Swiper
                loop={true}
                className="mySwiper py-6"
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                pagination={true} 
                grabCursor={true}
                slidesPerView={1}
                speed={600}
                spaceBetween={20}
            >
                {data.map(item => (
                    <SwiperSlide key={item.id}>
                        <Bounce>
                            <Testimonial {...item} />
                        </Bounce>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Testimonials;
