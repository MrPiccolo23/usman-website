
// import React from 'react';
// import { Bounce } from 'react-awesome-reveal';
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import useFetch from '../../hooks/useFetch';
// import Heading from '../Heading';
// import Service from './Service';
// SwiperCore.use([Navigation, Pagination, Autoplay]);

// const Services = () => {
//     const [data] = useFetch('services');

//     return (
//         <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
//             <Heading title="Services" />
//             <Swiper
//                 className="mySwiper py-12"
//                 autoplay={{
//                     delay: 5000,
//                     disableOnInteraction: false
//                 }}
//                 pagination={true} grabCursor={true}
//                 slidesPerView={3}
//                 speed={400}
//                 spaceBetween={20}
//                 breakpoints={{
//                     500: {
//                         slidesPerView: 1,

//                     },
//                     700: {
//                         slidesPerView: 2
//                     },
//                     1024: {
//                         slidesPerView: 3
//                     }
//                 }}
//             >
//                 {data.map(service => (
//                     <SwiperSlide key={service.id}>
//                         <Bounce>
//                             <Service  {...service} />
//                         </Bounce>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </section>
//     )
// }

// export default Services;

import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import useFetch from '../../hooks/useFetch';
import Heading from '../Heading';
import Service from './Service';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Services = () => {
    const [data] = useFetch('services');
    const isMobile = window.innerWidth < 768;  // Check if screen width is less than 768px

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
            <Heading title="Services" />
            <Swiper
                className="mySwiper py-12"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                pagination={true} 
                grabCursor={true}
                slidesPerView={isMobile ? 1 : 3} // Use 1 slide per view on mobile and 3 for larger screens
                speed={400}
                spaceBetween={isMobile ? 0 : 20} // No space between slides on mobile
                breakpoints={{
                    500: {
                        slidesPerView: 1,
                        spaceBetween: 0, // Stack items without space on small screens
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }}
            >
                {data.map(service => (
                    <SwiperSlide key={service.id}>
                        {/* Disable Bounce animation on mobile */}
                        {isMobile ? (
                            <Service {...service} />
                        ) : (
                            <Bounce>
                                <Service  {...service} />
                            </Bounce>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Services;
