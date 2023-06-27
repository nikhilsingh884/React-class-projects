import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import { useNavigate } from 'react-router';
import hero from "../Images/5504500.jpg"

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
              <div className="title text-info" data-swiper-parallax="-300">
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
                <div className="btn btn-outline-light" onClick={() => navigate('/mobiles')}>Browse mobile phones</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mt-5'>
            <div className="title text-danger" data-swiper-parallax="-300">
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

              <div className="btn btn-outline-light" onClick={() => navigate('/mobiles')}>Browse laptops</div>

            </div>
          </SwiperSlide>
          <SwiperSlide className='mt-5'>
            <div className="title text-warning" data-swiper-parallax="-300">
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

              <div className="btn btn-outline-light" onClick={() => navigate('/Product')}>Browse Clothing</div>

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
      <div style={{ paddingTop: "120px" }} className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eveniet? Beatae, non quam explicabo ex sunt temporibus doloribus perferendis! Nostrum officia omnis consequatur beatae quo, voluptates est quos, molestiae error at iure facere deleniti odit? Minima aliquid sit, quasi quis quas architecto necessitatibus obcaecati atque autem nihil at, cum exercitationem recusandae hic, doloribus et unde nostrum? Quisquam eum corrupti quia fuga nemo minima libero inventore possimus? Ratione rerum ea magni, molestias odit voluptates ab. Qui eos laborum cupiditate inventore nulla sed, ducimus ullam. Natus nostrum quasi necessitatibus esse aliquam neque quibusdam fuga quaerat ut, enim commodi similique quam quos dolores autem hic? Reprehenderit voluptas aliquid animi culpa cupiditate porro consectetur nulla cumque hic velit, eius perspiciatis sit a, quod voluptatibus accusamus non impedit possimus! Vero blanditiis consequuntur fuga qui eligendi quis quos magnam aliquid quia, porro repudiandae repellendus itaque neque, architecto omnis dignissimos consectetur reiciendis molestiae soluta, eos nobis labore reprehenderit. Architecto, obcaecati quidem? Fuga asperiores corrupti nobis dicta repellat vero qui possimus, enim iure recusandae ea. Ipsa quae culpa dolor explicabo sed. Ratione odio tempora assumenda voluptate maxime inventore fuga cumque eos qui totam dolor itaque at, impedit veniam, doloribus vitae hic corporis! Cum ab esse maxime cupiditate asperiores tempora nobis, ea et eligendi repellat voluptate dolore unde dolores id libero illum eius pariatur, numquam enim dolor omnis? Illum, dicta ad? Magnam, eligendi aspernatur dolorum officiis deleniti harum, nemo sunt doloremque totam reiciendis soluta asperiores! Modi nulla quasi quaerat officia explicabo eius cupiditate facilis doloremque, quos totam illo iste sit dolor eaque aliquid nam. Nulla eaque inventore molestias dolor officia iusto explicabo nihil. Provident inventore nemo error eos facilis, saepe ut esse atque voluptate iste earum autem in nostrum reprehenderit praesentium tempora obcaecati fuga consequuntur mollitia quae nobis, iure expedita. Ipsum iusto deleniti sed in perferendis, aperiam obcaecati doloribus mollitia. Praesentium animi repudiandae omnis. Laboriosam sequi, autem nam excepturi libero esse saepe rem tempore laudantium totam itaque hic, velit deserunt quos perspiciatis molestias cupiditate vero quas commodi quibusdam. Ex ea aliquam veritatis asperiores sint ab assumenda exercitationem molestias odio odit, laborum animi, quisquam numquam dolorum rem alias quos veniam at. Debitis, sequi? Itaque quos enim, deleniti ea autem, iure quam illo ipsam laborum quae magni nisi quas, animi distinctio expedita dolore impedit obcaecati nobis rem temporibus sapiente. Aut sit unde est, quam harum ad. Nulla, dolorem eligendi laboriosam quasi, blanditiis commodi consequuntur est explicabo eum repellat temporibus iure modi quis corporis deserunt corrupti reiciendis fuga dolore! Quae necessitatibus praesentium ipsum at eaque, ducimus quasi, nemo obcaecati beatae id rerum sapiente possimus nisi illum sint corporis dolor culpa natus esse iusto sequi! Autem, officia tempora, id repudiandae deserunt reprehenderit consequuntur quia maxime facilis inventore impedit cum beatae similique exercitationem nostrum molestias debitis quam ad! Praesentium nulla, alias harum debitis esse sapiente quo cumque omnis corporis officia iste, dolores possimus delectus! Temporibus, vitae iusto. Nam nesciunt qui animi corporis eaque pariatur excepturi laboriosam veniam ullam voluptates, perspiciatis repellendus voluptatum doloribus deserunt laudantium odit. Possimus, quam. Magni unde labore sit optio quod!
      </div>


    </div>
  )
}

export default Home
