import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import "./Banner.scss";
import bannerData from './banner.json';

SwiperCore.use([Pagination, Autoplay, EffectFade]);


function Banner() {

  return (
    <div className="banner_tit">
      <Swiper
        className="banner"
        loop={true}
        effect={"fade"}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          type: "none",
        }}
        autoplay={{ delay: 5000 }}
        watchOverflow={true}
      >
        {bannerData?.banners?.map((b) => (
          <SwiperSlide>

                <img className="banner--image" src={b.img} alt="banner" />
   
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
