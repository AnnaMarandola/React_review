import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselWidget = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slide1.png"
          alt="slide1"
        />
        <Carousel.Caption>
          <h3>Les meilleures ressources</h3>
          <p>Découvrez et partagez !  </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slide2.jpg"
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>first slide</h3>
          <p>salut salut </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slide3.jpg"
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>3rd slide</h3>
          <p>salut salut </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/slide4.jpg"
          alt="second slide"
        />
        <Carousel.Caption>
          <h3>4th slide</h3>
          <p>salut salut </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselWidget;
