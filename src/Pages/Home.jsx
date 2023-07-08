import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import { useNavigate } from 'react-router';
import hero from "../Images/sony-cam.jpg"

function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ position: "relative" }} className='home-container'>
      <div className='main-slide'>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          autoplay={true}
          parallax={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper  "
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
            style={{
              backgroundImage: `url(${hero})`,
              // backgroundPosition: "center"
            }}
          >
            <img src="" alt="" width="100%" />
          </div>
          <SwiperSlide className='mt-5'>
            <div className="slide ">
              <div className="title" data-swiper-parallax="-300">
                Mobile Phones
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                at 0% interest
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p className='fw-light'>
                  Discover the latest collection of cutting-edge mobile phones at our ecommerce store.  Whether you're an avid photographer, a multitasker, or a gaming enthusiast, we have the perfect mobile phone to suit your needs.
                </p>
                <hr />
                <div className="btn btn-light rounded-5  btn-lg" onClick={() => navigate('/mobiles')}>Browse mobiles</div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='mt-5'>
            <div className="slide ">
              <div className="title " data-swiper-parallax="-300">
                Cocktail Drinks
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                with mouth watering flavours and unique blends
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p className='fw-light'>
                  Indulge in the art of mixology with our handcrafted cocktails, blending premium spirits with fresh ingredients for a taste sensation.
                </p>
                <hr />
                <div className="btn btn-light rounded-5 btn-lg" onClick={() => navigate('/cocktail')}>Browse cocktails</div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='mt-5'>
            <div className="title" data-swiper-parallax="-300">
              Laptops
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Dell, HP, Lenovo, ASUS, LG Gram, Galaxy Book, etc.
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className='fw-light'>
                Immerse yourself in stunning visuals with vibrant displays that bring your favorite movies, games, and presentations to life. Enjoy razor-sharp clarity, accurate color reproduction, and wide viewing angles for an immersive viewing experience.
              </p>
              <hr />

              <div className="btn btn-light rounded-5 btn-lg" onClick={() => navigate("/mobiles")}>Browse laptops</div>

            </div>
          </SwiperSlide>
          <SwiperSlide className='mt-5'>
            <div className="title" data-swiper-parallax="-300">
              Clothing
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              with best discounts
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className='fw-light'>
                Explore our selection of professional-grade brushes, sponges, and tools that facilitate effortless application and precision, allowing you to achieve a flawless makeup look. From blending brushes to precision liners, our tools are designed for both makeup enthusiasts and professionals alike.
              </p>
              <hr />

              <div className="btn btn-light rounded-5 btn-lg" onClick={() => navigate('/Product')}>Browse clothing</div>

            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      {/* <div className="svg-black">
        <svg style={{ transform: "rotateX(180deg) translateY(180px)", position: "absolute", zIndex: "-1" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div> */}
      {/* <div style={{ transform: "rotateX(180deg)" }} class="shape">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
          <path fill-opacity="1">
            <animate attributeName="d" dur="20000ms" repeatCount="indefinite" values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                                M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;"></animate>

          </path>
        </svg>
      </div> */}
      <div className="gradient-bg">

        <section id="scroll" className=''>
          <div className="container highlights px-5 px-sm-0">
            <div className="row  align-items-center mx-0">
              <div className="col-lg-6 order-lg-2 p-0">
                <div className="p-5"><img class="img-fluid rounded-circle" src="assets/img/01.jpg" alt="..." /></div>
              </div>
              <div className="col-lg-6 order-lg-1 p-0">
                <div className="p-5 highlight-text">
                  <h2 className="display-4">Headphones for those about to rock...</h2>
                  <p className='text-dark'>Unleash the power of immersive sound with our premium speakers. Elevate your online shopping experience and indulge in crystal-clear audio like never before.</p>
                  <button className='learnMoreBtn mt-3' onClick={() => navigate("/mobiles")}>SHOP NOW &nbsp; <i class="fa-solid fa-arrow-right-long arrow"></i></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <section className='highlight-2'>
            <div className="container highlights  px-5">
              <div className="row align-items-center mx-0">
                <div className="col-lg-6 p-0">
                  <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/02.jpg" alt="..." /></div>
                </div>
                <div className="col-lg-6 p-0">
                  <div className="p-5 highlight-text">
                    <h2 className="display-4">Features you adore!</h2>
                    <p className='text-dark'>Discover the perfect companion for your digital lifestyle with our cutting-edge mobile phones. Experience seamless performance and stunning features that redefine mobile technology.</p>
                    <button className='learnMoreBtn mt-3' onClick={() => navigate("/mobiles")}>SHOP NOW &nbsp; <i class="fa-solid fa-arrow-right-long arrow"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Content section 3*/}
          <section>
            <div className="container highlights  px-5">
              <div className="row align-items-center mx-0">
                <div className="col-lg-6 order-lg-2 p-0">
                  <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/03.jpg" alt="..." /></div>
                </div>
                <div className="col-lg-6 order-lg-1 p-0">
                  <div className="p-5  highlight-text">
                    <h2 className="display-4">Tees that glorify you!</h2>
                    <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                    <button className='learnMoreBtn mt-3' onClick={() => navigate("/product")}>SHOP NOW &nbsp; <i class="fa-solid fa-arrow-right-long arrow"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>

      {/* ===============================footer============================================ */}
 
    </div>
  )
}

export default Home
