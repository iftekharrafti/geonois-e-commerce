import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import Slider from "react-slick";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="pb-5">
      <Container>
        <h2 className="header mt-5 mb-4">Brands</h2>
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id}>
              <Image
                src={brand.img}
                style={{ width: "250px", height: "100px" }}
              />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Brands;
