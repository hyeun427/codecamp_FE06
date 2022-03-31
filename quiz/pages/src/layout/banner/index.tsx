import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 200px;
  background-color: pink;
`;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 2,
  speed: 500,
  autoplay: true,
};

const Container = styled.div`
  height: auto;
`;

export default function LayoutBanner() {
  return (
    <Wrapper>
      <div>
        <Slider {...settings}>
          <div>
            <img src="/carousel/beori2.jpg" />
          </div>
          <div>
            <img src="/carousel/bori1.jpg" />
          </div>
          <div>
            <h3>Third Carousel</h3>
          </div>
          <div>
            <img src="/carousel/beoribori.jpg" />
          </div>
          <div>
            <h3>Fifth Carousel</h3>
          </div>
          <div>
            <h3>Sixth Carousel</h3>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}
