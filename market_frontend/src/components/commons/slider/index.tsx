import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div``;
const SliderItem = styled.div``;

export default function SliderPage(props) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function (i: any) {
      return (
        props.images[i] && (
          <a>
            <img src={`https://storage.googleapis.com/${props.images[i]}`} />
          </a>
        )
      );
    },
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {props.images
          ?.filter((e: any) => e)
          .map((el: any) => (
            <SliderItem key={uuidv4()}>
              <img src={`https://storage.googleapis.com/${el}`} />
            </SliderItem>
          ))}
      </Slider>
    </Wrapper>
  );
}
