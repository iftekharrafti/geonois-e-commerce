import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Accordion,
  Table,
  Button,
} from "react-bootstrap";
import Rating from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import "./ProductDetails.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBagPlusFill } from "react-icons/bs";
import { DiGitCompare } from "react-icons/di";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../features/products/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/products/productsSlice";
import toast from 'react-hot-toast';
import Loading from "../Loading/Loading";

const ProductDetails = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1)

  const { isLoading, data, isError, error } = useGetProductByIdQuery(productId);

  const dispatch = useDispatch();

  const handleCart = (data) =>{
    const newData = {
      ...data,
      quantity
    }
    dispatch(addToCart(newData))
    toast.success("Product added to cart");
  }


  return (
    <div className="background_color py-5">
      <Container>
        <Row>
          {isLoading && <Loading />}
          {isError && <p>{error}</p>}
          <Col md={5} sm={12}>
            <Image src={data?.img} className="img-fluid" />
          </Col>
          <Col md={7} sm={12} className="px-4">
            <h3>{data?.title}</h3>
            <Rating
              initialRating={data?.rating}
              emptySymbol={<AiOutlineStar style={{ color: "#FFCB45" }} />}
              fullSymbol={<AiFillStar style={{ color: "#FFCB45" }} />}
            />
            <h3>${data?.price}</h3>
            <p>{data?.description.slice(0, 200)}...</p>
            <hr />
            <p>
              <span className="fw-bold">Type</span>: {data?.subCategory}
            </p>
            <p>
              <span className="fw-bold">Vendor</span>: {data?.brand}
            </p>
            <p>
              <span className="fw-bold">Availibility</span>:{" "}
              {data?.stock > 0 ? "In Stock" : "Stock out"}
            </p>
            <p>
              <span className="fw-bold">Tags</span>:{" "}
              {data?.tags.map((tag) => (
                <span className="fw-bold">{tag}, </span>
              ))}
            </p>
            <p>
              <span className="fw-bold">Size</span>: S, L, M
            </p>

            <div className="d-flex align-items-center">
              <h5>Quantity</h5>
              <div className="ms-4">
                <button onClick={() => data?.stock === quantity ? setQuantity(data?.stock) : setQuantity(quantity + 1)} className="increase">+</button>
                <input
                  className="quantity-input"
                  type="text"
                  name=""
                  id=""
                  value={quantity}
                />
                <button onClick={() => quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)} className="decrease">-</button>
              </div>
            </div>

            <div className="d-flex mt-4">
              <div>
                <Button
                  onClick={() => handleCart(data)}
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    borderRadius: "20px",
                  }}
                >
                  <BsFillBagPlusFill
                    style={{ fontSize: "16px", marginRight: "5px" }}
                  />
                  Add To Cart
                </Button>
              </div>
              <div className="ms-4">
                <Button
                className="d-flex justify-content-center align-items-center"
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    borderRadius: "20px",
                  }}
                >
                  <BsFillBagPlusFill
                    style={{ fontSize: "16px", marginRight: "5px" }}
                  />
                  Buy It Now
                </Button>
              </div>
            </div>

            <div className="wishlist-compare d-flex mt-4">
              <div
                className="wishlist d-flex justify-content-center align-items-center"
                style={{ cursor: "pointer" }}
              >
                <AiOutlineHeart style={{ fontSize: "20px" }} />
                <p className="ms-2 mb-0">Add To Wishlist</p>
              </div>
              <div
                className="wishlist ms-3 d-flex justify-content-center align-items-center"
                style={{ cursor: "pointer" }}
              >
                <DiGitCompare style={{ fontSize: "20px" }} />
                <p className="ms-2 mb-0">Add To Compare</p>
              </div>
            </div>

            {/* Accordion */}
            <Accordion defaultActiveKey="0" className="mt-4">
              <Accordion.Item className="remove_focus" eventKey="0">
                <Accordion.Header>SHIPPING & RETURNS</Accordion.Header>
                <Accordion.Body>
                  Free shipping and returns available on all orders! We ship all
                  US domestic orders within <span className="fw-bold">5-10 business days!</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="remove_focus" eventKey="1">
                {data?.category === "mens" && data?.subCategory === "cloth" && (
                  <div>
                    <Accordion.Header>SIZE CHART</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Size</th>
                            <th>Chest</th>
                            <th>Neck</th>
                            <th>Neck</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Small</td>
                            <td>36-38"</td>
                            <td>14-14.5"</td>
                            <td>32.5"</td>
                          </tr>
                          <tr>
                            <td>Medium</td>
                            <td>39-41"</td>
                            <td>15-15.5"</td>
                            <td>33.5"</td>
                          </tr>
                          <tr>
                            <td>Large</td>
                            <td>42-44"</td>
                            <td>16-16.5"</td>
                            <td>33.5"</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </div>
                )}
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <Col md={8}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
