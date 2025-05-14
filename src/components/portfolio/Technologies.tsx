import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Autoplay } from "swiper/modules";
import { techIcons } from "./TechIcons";

export const Technologies = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                grid={{
                    rows: 3,
                }}
                spaceBetween={10}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                modules={[Grid, Autoplay]}
                className="mySwiper h-[300px]"
            >
                {techIcons.map(({ name, icon: Icon, color, className }, i) => (
                    <SwiperSlide key={i}>
                        <div className="flex flex-col items-center gap-2">
                            <Icon size={40} {...(className ? { className } : { color })} />
                            <span className="text-sm text-black dark:text-white">{name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
