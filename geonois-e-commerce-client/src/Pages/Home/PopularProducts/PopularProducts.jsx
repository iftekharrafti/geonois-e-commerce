import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import SingleProduct from "../../../Components/SingleProduct/SingleProduct";
import { useSelector } from "react-redux";
import Loading from "../../../Components/Loading/Loading";

const PopularProducts = () => {
  const { filterProducts, isLoading, isError, error } = useSelector(
    (state) => state.product
  );

  return (
    <div className="">
      <Container>
        <h2 className="header text-center mt-2 mb-5">Popular Products</h2>
        <Row>
          {isLoading && <Loading />}
          {isError && <p>{error}</p>}
          {filterProducts.slice(0, 8).map((product) => (
            <SingleProduct product={product} />
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <Link to="/products">
            <PrimaryButton>More Product</PrimaryButton>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PopularProducts;
