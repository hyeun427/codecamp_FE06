import Slider from "react-slick";
import { Wrapper, SliderItem } from "./LayoutBanner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
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
          <SliderItem src="/banner/banner.jpg" />
        </div>
        <div>
          <SliderItem src="/banner/banner.jpg" />
        </div>
        <div>
          <SliderItem src="/banner/banner.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
