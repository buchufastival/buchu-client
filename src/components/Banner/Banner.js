import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import "./Banner.scss";
import bannerData from "./banner.json";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

function Banner() {
  return (
    <div className="banner">
      <div className="banner-tit">
        <Swiper
          className="banner-swiper"
          loop={true}
          effect={"fade"}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          watchOverflow={true}
          pagination={{ clickable: true }}
        >
          {bannerData?.banners?.map((b) => (
            <SwiperSlide>
              <img className="banner--image" src={b.img} alt="banner" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
