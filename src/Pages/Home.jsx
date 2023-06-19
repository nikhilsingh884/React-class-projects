import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate()

  return (
    <>
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
            style={{
              "background-image":
                "url(https://wallpaperaccess.com/download/black-headphones-5504500)",
            }}
            data-swiper-parallax="-23%"
          ></div>
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
                <div className="btn btn-outline-light" onClick={() => navigate('/Product')}>Browse mobile phones</div>
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

              <div className="btn btn-outline-light" onClick={() => navigate('/Product')}>Browse laptops</div>

            </div>
          </SwiperSlide>
          <SwiperSlide className='mt-5'>
            <div className="title text-warning" data-swiper-parallax="-300">
              Cosmetics
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              with best discounts
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p className='fw-light'>
                Explore our selection of professional-grade brushes, sponges, and tools that facilitate effortless application and precision, allowing you to achieve a flawless makeup look. From blending brushes to precision liners, our tools are designed for both makeup enthusiasts and professionals alike.
              </p>
              <hr />

              <div className="btn btn-outline-light" onClick={() => navigate('/Product')}>Browse cosmetics</div>

            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      <div className="container py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eveniet? Beatae, non quam explicabo ex sunt temporibus doloribus perferendis! Nostrum officia omnis consequatur beatae quo, voluptates est quos, molestiae error at iure facere deleniti odit? Minima aliquid sit, quasi quis quas architecto necessitatibus obcaecati atque autem nihil at, cum exercitationem recusandae hic, doloribus et unde nostrum? Quisquam eum corrupti quia fuga nemo minima libero inventore possimus? Ratione rerum ea magni, molestias odit voluptates ab. Qui eos laborum cupiditate inventore nulla sed, ducimus ullam. Natus nostrum quasi necessitatibus esse aliquam neque quibusdam fuga quaerat ut, enim commodi similique quam quos dolores autem hic? Reprehenderit voluptas aliquid animi culpa cupiditate porro consectetur nulla cumque hic velit, eius perspiciatis sit a, quod voluptatibus accusamus non impedit possimus! Vero blanditiis consequuntur fuga qui eligendi quis quos magnam aliquid quia, porro repudiandae repellendus itaque neque, architecto omnis dignissimos consectetur reiciendis molestiae soluta, eos nobis labore reprehenderit. Architecto, obcaecati quidem? Fuga asperiores corrupti nobis dicta repellat vero qui possimus, enim iure recusandae ea. Ipsa quae culpa dolor explicabo sed. Ratione odio tempora assumenda voluptate maxime inventore fuga cumque eos qui totam dolor itaque at, impedit veniam, doloribus vitae hic corporis! Cum ab esse maxime cupiditate asperiores tempora nobis, ea et eligendi repellat voluptate dolore unde dolores id libero illum eius pariatur, numquam enim dolor omnis? Illum, dicta ad? Magnam, eligendi aspernatur dolorum officiis deleniti harum, nemo sunt doloremque totam reiciendis soluta asperiores! Modi nulla quasi quaerat officia explicabo eius cupiditate facilis doloremque, quos totam illo iste sit dolor eaque aliquid nam. Nulla eaque inventore molestias dolor officia iusto explicabo nihil. Provident inventore nemo error eos facilis, saepe ut esse atque voluptate iste earum autem in nostrum reprehenderit praesentium tempora obcaecati fuga consequuntur mollitia quae nobis, iure expedita. Ipsum iusto deleniti sed in perferendis, aperiam obcaecati doloribus mollitia. Praesentium animi repudiandae omnis. Laboriosam sequi, autem nam excepturi libero esse saepe rem tempore laudantium totam itaque hic, velit deserunt quos perspiciatis molestias cupiditate vero quas commodi quibusdam. Ex ea aliquam veritatis asperiores sint ab assumenda exercitationem molestias odio odit, laborum animi, quisquam numquam dolorum rem alias quos veniam at. Debitis, sequi? Itaque quos enim, deleniti ea autem, iure quam illo ipsam laborum quae magni nisi quas, animi distinctio expedita dolore impedit obcaecati nobis rem temporibus sapiente. Aut sit unde est, quam harum ad. Nulla, dolorem eligendi laboriosam quasi, blanditiis commodi consequuntur est explicabo eum repellat temporibus iure modi quis corporis deserunt corrupti reiciendis fuga dolore! Quae necessitatibus praesentium ipsum at eaque, ducimus quasi, nemo obcaecati beatae id rerum sapiente possimus nisi illum sint corporis dolor culpa natus esse iusto sequi! Autem, officia tempora, id repudiandae deserunt reprehenderit consequuntur quia maxime facilis inventore impedit cum beatae similique exercitationem nostrum molestias debitis quam ad! Praesentium nulla, alias harum debitis esse sapiente quo cumque omnis corporis officia iste, dolores possimus delectus! Temporibus, vitae iusto. Nam nesciunt qui animi corporis eaque pariatur excepturi laboriosam veniam ullam voluptates, perspiciatis repellendus voluptatum doloribus deserunt laudantium odit. Possimus, quam. Magni unde labore sit optio quod!
      </div>
            

    </>
  )
}

export default Home
