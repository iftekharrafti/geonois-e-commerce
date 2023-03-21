import React from "react";
import { Container, Image } from "react-bootstrap";
import offer from "../../../assets/offer-banner-1.webp";
import './BestOffer.css';

const BestOffer = () => {
  return (
    <div className="offer mb-5">
      <Container>
        <div className="offer-img">
          <Image src={offer} style={{width: '100%'}} />
        </div>
        <div className="offer-desc">
            <h4>Exclusively High Quality Products</h4>
            <h2>Nikon Normal 55mm F/1.2 Manual Focus Lens</h2>
        </div>
      </Container>
    </div>
  );
};

export default BestOffer;
