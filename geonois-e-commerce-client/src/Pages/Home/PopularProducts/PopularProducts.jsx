import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import SingleProduct from "../../../Components/SingleProduct/SingleProduct";

const PopularProducts = () => {
  return (
    <div className="">
      <Container>
      <h2 className="header text-center mt-2 mb-5">Popular Products</h2>
        <Row>
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </Row>
        <div className="d-flex justify-content-center">
          <Link to="/products">
            <PrimaryButton />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PopularProducts;
