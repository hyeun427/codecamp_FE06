import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
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

const Slide = styled.img`
  width: 150px;
`;

export default function LayoutBanner() {
  return (
    <Wrapper>
      <div>
        <Slider {...settings}>
          <div>
            <Slide src="/carousel/beori2.jpg" />
          </div>
          <div>
            <Slide src="/carousel/bori1.jpg" />
          </div>
          <div>
            <Slide src="/carousel/beori1.jpg" />
          </div>
          <div>
            <Slide src="/carousel/beoribori.jpg" />
          </div>
          <div>
            <Slide src="/carousel/bori2.jpg" />
          </div>
          <div>
            <Slide src="/carousel/beori3.jpg" />{" "}
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}
