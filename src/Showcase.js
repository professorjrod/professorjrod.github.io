import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Showcase = () => {
  return (
    <>
      <h2 className="mt-2 text-2xl font-bold text-center">Project showcase</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={
          window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
        }
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Project
            githubUrl={"https://github.com/biobreak"}
            coverUrl={"https://i.imgur.com/bhQBe41.png"}
            title={"BioBreak"}
            tag={"A biotech equity data visualization tool"}
            demoLink={"https://imgur.com/a/Xr4P6Oj"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            githubUrl={"https://github.com/professorjrod/Jareds-NLP-Client"}
            coverUrl={
              "https://stackify.com/wp-content/uploads/2019/01/Ruby-vs-Python.jpg"
            }
            title={"Jared's NLP Client"}
            tag={"Machine learning tool"}
            demoLink={
              "https://www.loom.com/share/84b4bbc39bbb4e908ca6d4d427ae19c8"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            githubUrl={"https://github.com/professorjrod/Weather-App"}
            coverUrl={
              "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            }
            title={"Weather App"}
            tag={"React Weather Api"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            githubUrl={
              "https://github.com/Garret-Gallant/stackoverflat-mono-repo"
            }
            coverUrl={
              "https://www.hiveage.com/wp-content/uploads/2015/06/reputation-management-small-business.jpg"
            }
            title={"Stackoverflat"}
            tag={"Fullstack Forum"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            githubUrl={"https://github.com/professorjrod/art-gallery-frontend"}
            coverUrl={"https://media.timeout.com/images/100471869/image.jpg"}
            title={"Art Gallery"}
            tag={"Sinatra HTTP server / React frontend"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            githubUrl={"https://github.com/nickwarren47/Beer-Recipe-App"}
            coverUrl={
              "https://www.travelandleisure.com/thmb/wD6IY_2Rn4HlJ29kodSoaOVbCOI=/1200x0/filters:no_upscale():max_bytes(150000):strip_icc()/hopworks-PORTLANDBREW0719-3b273d245a464d429ea8e4a971ad0332.jpg"
            }
            title={"Beer Recipe App"}
            tag={"JavaScript"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const Project = ({ title, githubUrl, coverUrl, tag, demoLink }) => {
  return (
    <ul className="swiper-wrapper">
      <li className="swiper-slide">
        <div className="relative block border-double border-4 rounded-md border-gray-500 mb-8 p-2">
          <h5 className="mt-4 text-lg font-bold">{title}</h5>
          <img
            alt="Hotdug Mug"
            src={coverUrl}
            className="h-56 w-full object-contain lg:h-72 p-2 rounded-full"
          />

          <div className="p-6">
            <span className="my-2 inline-block bg-gray-400 px-3 py-1 text-xs font-medium">
              {tag}
            </span>

            <br />
            {demoLink ? (
              <a
                className="text-sm font-medium bg-[#fde74c] p-2 text-center"
                href={demoLink}
              >
                Demo
              </a>
            ) : null}

            <br />
            <button name="add" type="button" className="btn mt-2 bg-[#db5461]">
              <a className="text-sm font-medium" href={githubUrl}>
                View on GitHub
              </a>
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
};
export default Showcase;
