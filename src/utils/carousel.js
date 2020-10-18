import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselWidget = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/SLIDE-1.jpg"
          alt="first slide"
        />
        <Carousel.Caption>
          <h3>first slide</h3>
          <p>salut salut </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/SLIDE-2.jpg"
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>first slide</h3>
          <p>salut salut </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselWidget;
