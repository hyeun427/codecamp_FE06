import Slider from "react-slick";
import { Wrapper, SliderItem } from "./LayoutBanner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
      >
        <div>
          <SliderItem src="/img/butter.png" />
        </div>
        <div>
          <SliderItem src="/img/dynamite.png" />
        </div>
        <div>
          <SliderItem src="/img/seventeen2.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
