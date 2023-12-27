import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ position: "relative" }} className='home-container'>
      <div className='main-slide mt-1'>
        <div className="hero-mobile h-75">
          <div style={{ padding: "40px 120px 40px 40px", marginTop: "62px" }} className=''>
            <h1 className='' style={{ fontSize: "44px", fontWeight: "600" }}><span style={{ color: "rgb(53, 2, 109)" }}>Shop</span>  drinks, clothes and mobiles </h1>
            <p className='mt-5'>Special discounts for HDFC card holders</p>
            <a href="#highlights"><button className='btn btn-primary mt-2'>Get Started &nbsp; <span className='fa-solid fa-arrow-right'></span> </button></a>
          </div>
        </div>

        <section className='hero-outer p-4 mt-5 pt-5 d-flex justify-content-between align-items-center'>
          <div className="container left  h-100">
            <div className="d-flex justify-content-center align-items-center">
              <div className="slide p-5">
                <div className="title text-dark" >
                  Upto 50% off on sale
                </div>
                <h3 className='my-4'>BigBillion days are here</h3>
                <div className="subtitle text-muted" data-swiper-parallax="-200">
                  Grab electronics at 0% interest <br /> <span className='fw-bold' style={{ color: "rgb(53, 2, 109)" }}>on HDFC cards</span>
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <hr />
                  <div className=" btn btn-primary rounded-1 w-75 " onClick={() => navigate('/mobiles')}>Browse mobiles</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right h-100 d-flex flex-md-column">
            <div className=' drinks p-4 text-light  w-100  fs-5 mb-2 rounded-2 ' onClick={() => navigate("/cocktail")}>Drinks <span className='fa-solid fa-arrow-right-long'></span> </div>
            <div className='mobiles p-4 text-light  w-100  fs-5 mb-2 rounded-2 ' onClick={() => navigate("/mobiles")}>Mobiles <span className='fa-solid fa-arrow-right-long'></span> </div>
            <div className='clothing p-4 text-light  w-100  fs-5 mb-2  rounded-2 ' onClick={() => navigate("/product")}>Clothing <span className='fa-solid fa-arrow-right-long'></span> </div>
            <div className=' drinks p-4 text-light  w-100  fs-5 rounded-2 ' onClick={() => navigate("/cocktail")}>Drinks <span className='fa-solid fa-arrow-right-long'></span> </div>
          </div>
        </section>


      </div>

      <div id='highlights' className="gradient-bg">


        <section id="scroll" className='highlight-1'>
          <div className="container highlights px-5 px-sm-0">
            <div className="row  align-items-center mx-0">
              <div className="col-lg-6 order-lg-2 p-0">
                <div className="p-5"><img class="img-fluid rounded-circle" src="assets/img/01.webp" alt="..." /></div>
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
                  <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/02.webp" alt="..." /></div>
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
          <section className='highlight-3'>
            <div className="container highlights  px-5">
              <div className="row align-items-center mx-0">
                <div className="col-lg-6 order-lg-2 p-0">
                  <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/03.webp" alt="..." /></div>
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


    </div>
  )
}

export default Home
