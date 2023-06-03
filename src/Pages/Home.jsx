import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import slide1 from '../Images/slide1.jpg'
import slide4 from '../Images/slide6.jpg'




function Home() {
  return (
    <div className='home-container'>
      <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home
