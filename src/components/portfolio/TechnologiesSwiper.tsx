import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Grid, Autoplay, Navigation } from "swiper/modules";
import { techs } from "./interfaces/TechIcons.ts";

const TechnologiesSwiper = () => {
    return (
        <Swiper
            effect="fade"
            slidesPerView={4}
            grid={{ rows: 4, fill: 'row' }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            navigation={true}
            breakpoints={{
                0: {
                    slidesPerView: 3,
                    grid: { rows: 3, fill: 'row' },
                },
                768: {
                    slidesPerView: 4,
                    grid: { rows: 4, fill: 'row' },
                },
                1024: {
                    slidesPerView: 5,
                    grid: { rows: 4, fill: 'row' },
                },
            }}
            modules={[Grid, Autoplay, Navigation]}
            className="border border-black dark:border-white cursor-grab rounded-xl"
        >
            {techs.map(({ name, icon: Icon, color, className }, i) => (
                <SwiperSlide key={i}>
                    <div
                        className="flex flex-col items-center justify-center gap-2 py-6
                                bg-white dark:bg-zinc-900
                                border-sm border-slate-800 dark:border-white
                                text-slate-700 dark:text-white"
                    >
                        <Icon
                            size={40}
                            {...(className ? { className } : { color })}
                        />
                        <span className="text-sm font-medium">{name}</span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TechnologiesSwiper;
