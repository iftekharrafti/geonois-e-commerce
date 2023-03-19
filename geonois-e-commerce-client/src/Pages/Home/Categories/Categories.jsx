import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleCategory from "./SingleCategory";

const Categories = () => {
  return (
    <div className="mt-5">
      <Container>
      <h2 className="header mb-4">Categories</h2>
        <Row>
          <SingleCategory />
          <SingleCategory />
          <SingleCategory />
          <SingleCategory />
          <SingleCategory />
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
