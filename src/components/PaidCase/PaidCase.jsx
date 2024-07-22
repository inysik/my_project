import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

import "./forSwiper.css";
import cls from "./PaidCase.module.css";
import FormCase from "./FormCase";

// 
import { IMAGES } from "../Image/imageMap";



const arr = [
  {
    id: "1",
    imageSrc: IMAGES.people,
    name: "Манипуляции на работе",
    text: "Преуспей на рабочем месте: распознай и нейтрализуй манипуляции!",
  },
  {
    id: "2",
    imageSrc: IMAGES.ads,
    name: "Манипуляции в маркетинге",
    text: "Знай свои желания: не дай рекламе управлять тобой!",
  },
  {
    id: "3",
    imageSrc: IMAGES.love,
    name: "Манипуляции в отношениях",
    text: "Люби и уважай себя: защити свои границы!",
  },
  {
    id: "4",
    imageSrc: IMAGES.men,
    name: "Манипуляции в политике",
    text: "Разгадай политические игры: будь на шаг впереди!",
  },
];

export default function PaidCase() {
  return (
    <div className={cls.kek}>
      <div className={cls.swiperContainer}>
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
          {arr.map((elem) => (
            <SwiperSlide className={cls["swiper-slide"]} key={elem.id}>
              <FormCase {...elem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
