import React from "react";
import { Container, Row, Col, Image, Accordion, Table } from "react-bootstrap";
import Rating from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import "./ProductDetails.css";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { AiOutlineHeart } from "react-icons/ai";
import { DiGitCompare } from "react-icons/di";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../features/products/productsApi";

const ProductDetails = () => {
  const { productId } = useParams();

  const { isLoading, data, isError } = useGetProductByIdQuery(productId);

  return (
    <div className="background_color py-5">
      <Container>
        <Row>
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
              <span>Type</span>: {data?.subCategory}
            </p>
            <p>
              <span>Vendor</span>: {data?.brand}
            </p>
            <p>
              <span>Availibility</span>:{" "}
              {data?.stock > 0 ? "In Stock" : "Stock out"}
            </p>
            <p>
              <span>Tags</span>:{" "}
              {data?.tags.map((tag) => (
                <span>{tag}, </span>
              ))}
            </p>
            <p>
              <span>Size</span>: S, L, M
            </p>

            <div className="d-flex align-items-center">
              <h5>Quantity</h5>
              <div className="ms-4">
                <button className="increase">+</button>
                <input
                  className="quantity-input"
                  type="text"
                  name=""
                  id=""
                  value={0}
                />
                <button className="decrease">-</button>
              </div>
            </div>

            <div className="d-flex mt-4">
              <div>
                <PrimaryButton>ADD TO CART</PrimaryButton>
              </div>
              <div className="ms-4">
                <PrimaryButton>BUY IT NOW</PrimaryButton>
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
                  US domestic orders within <span>5-10 business days!</span>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="remove_focus" eventKey="1">
                {(data?.category === 'mens' &&data?.subCategory === "cloth") && (
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
