import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  EffectFade,
  Autoplay,
  Keyboard, 
  Navigation,
} from "swiper/modules"; 

export default function SwiperComp({ images }) { 
  return (
    <>
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[EffectFade, Autoplay, Keyboard, Navigation]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((item) => (
          <SwiperSlide key={item}>
            <img src={item} alt="Atma Seva gallery" className="mx-auto h-[50vh]" />
          </SwiperSlide>
        ))}

        <div className="prev text-amber-500 absolute top-1/2 -right-2 z-30">
          <iconify-icon icon="ic:round-navigate-next" width="50"></iconify-icon>
        </div>
        <div className="next text-amber-500 absolute top-1/2 -left-2 z-30">
          <iconify-icon
            icon="ic:round-navigate-before"
            width="50"
          ></iconify-icon>
        </div>
      </Swiper>
    </>
  );
}
