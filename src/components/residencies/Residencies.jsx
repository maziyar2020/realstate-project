import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./residencies.scss";
import data from "../../utils/slider.json";
import { swiperSetting } from "../../utils/sliderSetting";

export default function Residencies() {
  return (
    <section className="residencies">
      <div className="padding inner-width residence-container">
        <div className="residence-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...swiperSetting}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart residence-card">
                <img src={card.image} alt="" />
                <span className="secondaryText residence-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter residence-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};