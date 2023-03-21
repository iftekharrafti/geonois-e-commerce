import React from "react";
import { Button, Col, Image } from "react-bootstrap";
// import img from "../../assets/cloths/mens/mens-1.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { DiGitCompare } from "react-icons/di";
import { GiMagnifyingGlass } from "react-icons/gi";
import { BsFillBagPlusFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import "./SingleProduct.css";
import { Link } from "react-router-dom";

const SingleProduct = ({product}) => {
  const {_id, title, img, price, rating} = product;

  return (
    <Col md={3} sm={6}>
      <div className="single-product bg-white rounded mb-4">
        <div className="product-img">
          <Image
            src={img}
            className="img-fluid rounded-top rounded-right"
            style={{ height: "240px", width: "100%" }}
          />
        </div>
        <div className="product-icons">
          <div className="product-icon icon-heart-div">
            <AiOutlineHeart
              className="icon-heart"
              style={{ fontSize: "22px" }}
            />
          </div>
          <div className="product-icon icon-compare-div">
            <DiGitCompare
              className="icon-compare"
              style={{ fontSize: "22px" }}
            />
          </div>
          <div className="product-icon icon-glass-div">
            <GiMagnifyingGlass
              className="icon-glass"
              style={{ fontSize: "22px" }}
            />
          </div>
        </div>
        <div className="product-button">
          <Button style={{ width: "100%", fontSize: "16px", borderRadius: '20px' }}>
            <BsFillBagPlusFill
              style={{ fontSize: "16px", marginRight: "5px" }}
            />
            Add To Cart
          </Button>
        </div>
        <div className="p-4">
          <h6>${price}</h6>
          <Link to={`/productDetails/${_id}`} className="remove_underline_black">
            <h5 className="fw-bold">{title.slice(0,30)}...</h5>
          </Link>
          <p>
            {" "}
            <Rating
              initialRating={rating}
              emptySymbol={<AiOutlineStar style={{color: '#FFCB45'}} />}
              fullSymbol={<AiFillStar style={{color: '#FFCB45'}} />}
            />
             5 reviews
          </p>
        </div>
      </div>
    </Col>
  );
};

export default SingleProduct;
