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
                "url(https://images.unsplash.com/photo-1527283646354-d874f249ea2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide className='mt-5'>
            <div className="slide">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
              <hr />

              <div className="btn btn-outline-light" onClick={() => navigate('/Product')}>Browse cosmetics</div>

            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit debitis repudiandae quas molestias. Maxime quisquam ipsa, velit reiciendis quae hic odit commodi? Voluptas harum nam totam suscipit praesentium doloribus natus, ab aliquam eum explicabo eos consequatur tenetur, dolorem magnam repudiandae velit repellat! Doloremque, non mollitia rem voluptate atque autem consequatur assumenda qui totam, culpa consequuntur et sapiente natus fugit rerum aut? Vel repellat voluptatem beatae! Quos quae saepe deserunt, commodi veniam nihil voluptas nam consectetur ut officia aliquam dolor eos iste, corrupti blanditiis, nemo velit porro quo nesciunt illum. Natus iusto excepturi provident architecto? Harum, reiciendis ratione tenetur, suscipit dicta voluptatum odit voluptas molestiae possimus a rem corrupti libero minima laboriosam repudiandae et dolorem ea provident repellat soluta repellendus? Eum dolores soluta possimus incidunt doloremque quae eaque necessitatibus accusamus aspernatur, cum, a, nulla eos et quod cupiditate quibusdam ut sunt maiores! Nam accusantium veritatis possimus natus debitis ratione perferendis odio recusandae, itaque soluta repudiandae amet atque dolore magnam repellendus aliquid ea nobis, tenetur quasi ab hic unde rem sint placeat. Quaerat optio accusantium molestias cum, nisi error temporibus odio similique cumque omnis totam ipsa assumenda? Accusamus expedita culpa aspernatur? Sequi, repudiandae saepe aspernatur facilis tenetur suscipit, laboriosam tempora cum illum autem eos repellendus voluptatem libero quo qui eligendi. Quod accusamus dolorem deserunt quis, dicta explicabo repellendus ad vitae enim hic cum aspernatur, similique iste nulla inventore quam id omnis repudiandae amet quaerat, quia odio expedita. Laudantium non dolorem laborum labore ut sed obcaecati repudiandae in aut. Odit enim aliquam beatae eveniet, magnam quidem, soluta officia excepturi cum itaque ullam placeat vel animi. Eius quam consequuntur adipisci nobis soluta dolores quisquam? Vitae, itaque. Velit tempora doloribus quibusdam dolore commodi. Vel consectetur nostrum sequi consequatur unde alias modi ad expedita fugiat corporis deserunt, ab ipsa distinctio laboriosam eveniet? Fugit, voluptatem! Ullam inventore magnam quod dolorum deleniti a suscipit! Eaque maxime accusamus error dicta, est magnam itaque natus qui. Ab officia provident enim est id commodi incidunt, recusandae magni nihil aliquam tenetur libero animi assumenda vero atque! Deleniti maiores tempora sint odit adipisci excepturi earum doloremque ex reprehenderit ab voluptatibus est laborum fugiat provident ipsam similique, officiis tempore quas iusto doloribus. Tempora voluptatem quidem labore delectus inventore, suscipit, placeat recusandae porro cupiditate animi voluptate magnam explicabo distinctio fugit iure voluptates, veritatis minus! Velit ab sit nihil numquam vel aliquam hic distinctio. Officiis dignissimos quis numquam sint, provident saepe suscipit ex tempore mollitia voluptates quasi? Consectetur impedit deserunt rem rerum. Eius dicta impedit obcaecati, reprehenderit quibusdam magni sunt corrupti excepturi quis debitis voluptatibus aut mollitia corporis sint odit quo in suscipit accusantium fuga aliquid quasi architecto autem accusamus doloremque. Quibusdam, enim? Sequi dignissimos velit repellat ipsum! Beatae dolorum esse assumenda quibusdam laudantium laborum et? Repellat quia facere deserunt similique provident eum illum. Molestias quae sequi nihil, ad, distinctio at odio reprehenderit nemo consectetur nam tenetur ipsum magni? Similique iure beatae aliquam atque velit, est numquam natus obcaecati pariatur accusantium nostrum ratione. Perferendis et aut numquam quas distinctio quod delectus quibusdam nemo ratione ipsam?

    </>
  )
}

export default Home
