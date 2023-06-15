import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import slide from '../Images/laptop-black.jpg'
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate()

  return (
    <div className=''>
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          autoplay={true}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image":
                "url(https://images.unsplash.com/photo-1614853316695-60bb46998d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="title text-info" data-swiper-parallax="-300">
              Mobile Phones
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              at 0% interest
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className='fw-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>

              <div className="btn btn-outline-light" onClick={()=>navigate('/Product')}>Browse mobile phones</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title text-danger" data-swiper-parallax="-300">
              Laptops
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Dell, HP, Lenovo, ASUS, LG Gram, Galaxy Book, etc.
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className='fw-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <div className="btn btn-outline-light" onClick={() => navigate('/Product')}>Browse laptops</div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title text-warning" data-swiper-parallax="-300">
              Cosmetics
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              with best discounts
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className='fw-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <div className="btn btn-outline-light" onClick={() => navigate('/Product')}>Browse cosmetics</div>

            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  )
}

export default Home
