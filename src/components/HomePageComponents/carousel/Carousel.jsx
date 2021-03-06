import React from "react";
import "./carousel.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

let data = [
  {
    id: 1,
    image:
      "https://cdn.fcglcdn.com/brainbees/banners/test/HP_MKTG_P01_FUSSY_Flat50_Desk_2022420329.gif",
    discription: "flat 50",
  },
  {
    id: 2,

    image:
      "https://cdn.fcglcdn.com/brainbees/banners/test/HP-Banner-994-x-399_2022411104450.webp",
    discription: "brainbees",
  },
  {
    id: 3,
    image:
      "https://cdn.fcglcdn.com/brainbees/banners/test/ClickIttoWinIt_Desktop_2022415193251.gif",
  },
  {
    id: 4,
    image:
      "https://cdn.fcglcdn.com/brainbees/banners/test/BabyhugSSSS_Upto60_DPHP_994x399_20224110535.gif",
    description: "baby hug",
  },
  {
    id: 5,
    image:
      "https://cdn.fcglcdn.com/brainbees/banners/test/desktop_summer_bathing_essentials_14042022_2022414155110.webp",
    description: "bathing essentials",
  },
  {
    id: 6,
    image:
      "https://cdn.fcglcdn.com/brainbees/banners/test/merchf_roi_hp_MUBARAK35_default_eid_mubarak_2022416143239.webp",
    discription: "Eid Mubarak",
  },
  {
    id: 7,
    image:
      "https://cdn.fcglcdn.com/brainbees/banners/test/MKTGN_HP_BHUG_GN_18APR_2022416151547.webp",
    discription: "baby hug",
  },
  {
    id: 8,
    image:
      "https://cdn.fcglcdn.com/brainbees/banners/test/HP_MKTG_SMR_Superhit_P01_Desk_2022416141329.webp",
    discription: "super hit",
  },
];

function Carousel() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="carousel__img_container"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {/* <img src={item.image} alt={item.description} /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
