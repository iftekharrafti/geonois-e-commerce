import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import category1 from "../../../assets/category/mens-fashion.jpg";

const SingleCategory = () => {
  return (
    <Col md={3} sm={6}>
      <div className="mb-4">
        <div className="d-flex justify-content-center">
          <Image src={category1} className="img-fluid" style={{height: '160px', width: '160px', borderRadius: '50%'}} />
        </div>
        <Link to="/" className="remove_underline_black">
        <h4 className="text-center py-3">Men's Fashion</h4>
        </Link>
      </div>
    </Col>
  );
};

export default SingleCategory;
