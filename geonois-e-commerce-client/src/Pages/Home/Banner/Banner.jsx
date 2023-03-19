import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import slider1 from '../../../assets/slider/slider-1.jpg';
import slider2 from '../../../assets/slider/slider-2.jpg';
import slider3 from '../../../assets/slider/slider-3.jpg';
import slider4 from '../../../assets/slider/slider-4.jpg';
import slider5 from '../../../assets/slider/slider-5.jpg';
import './Banner.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: 0 }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: 0 }}
        onClick={onClick}
      />
    );
  }

const Banner = () => {
  var settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image src={slider1} style={{width: '100%', height: '100%'}} />
        </div>
        <div>
        <Image src={slider2} style={{width: '100%', height: '100%'}} />
        </div>
        <div>
        <Image src={slider3} style={{width: '100%', height: '100%'}} />
        </div>
        <div>
        <Image src={slider4} style={{width: '100%', height: '100%'}} />
        </div>
        <div>
        <Image src={slider5} style={{width: '100%', height: '100%'}} />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;


