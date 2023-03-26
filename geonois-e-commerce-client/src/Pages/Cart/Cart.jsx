import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import emptyCart from "../../assets/empty-shopping-cart.jpg";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/products/productsSlice";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    state.cart.forEach((product) => {
      const newTotal = product.price * product.quantity;
      total += newTotal;
    });
    setSubTotal(total);
  }, [state.cart]);

  const handleRemove = (id) =>{
    const deleteProduct = window.confirm("Are you sure you want to delete this product?");

    if(deleteProduct){
        dispatch(removeFromCart(id))
        toast.success("Course Remove to Cart");
    }
  }

  return (
    <div style={{ padding: "0 0 50px 0", background: '#fff' }}>
      <Container>
        <Row>
          {/* Cart header & product information show */}
          <Col md={8} sm={12}>
            <h2
              className="text-center my-3 fs-2 fw-bold"
              style={{ fontFamily: "Merriweather" }}
            >
              Shopping Cart
            </h2>
            <p>{state.cart.length} product in Cart</p>

            {/* product show as a table */}
            {state.cart.length ? (
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                {state.cart.map((product) => (
                  <tbody key={product._id}>
                    <tr>
                      <td className="text-center">
                        <Link to={`/productDetails/${product._id}`}>
                          <Image
                            src={product.img}
                            alt="product img"
                            style={{ width: "100px" }}
                          />
                        </Link>
                      </td>
                      <td className="text-center">
                        <Link
                          to={`/productDetails/${product._id}`}
                          className="text-black text-decoration-none"
                        >
                          {product.title}
                        </Link>
                      </td>
                      <td className="text-center">${product.price}</td>
                      <td className="text-center">{product.quantity}</td>
                      <td className="text-center">
                        <Button onClick={() => handleRemove(product._id)}>Remove</Button>{" "}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            ) : (
              // If product are not in the cart then show empty box
              <div className="d-flex flex-column justify-content-center align-items-center mt-2 mb-5 shadow p-4">
                <Image src={emptyCart} alt="cart" style={{ width: "250px" }} />
                <p>Your cart is empty. Keep shopping to find a course!</p>
                <Link to="/products">
                  <PrimaryButton
                    background="#377DFF"
                    color="#FFFFFF"
                    className="mt-4"
                  >
                    Keep Shopping
                  </PrimaryButton>
                </Link>
              </div>
            )}
          </Col>
          <Col md={4} sm={12}>
            {/* Total cost and Add to cart */}
            <div className="bg-white mt-5 p-5 mb-4 shadow rounded">
              <h3 style={{ fontFamily: "Merriweather" }}>Total</h3>
              <h4>${subTotal}</h4>
              {state.cart?.length ? (
                <Button
                  style={{ width: "100%", marginTop: "20px" }}
                  variant="primary"
                >
                  <Link
                    className="text-white text-decoration-none fs-5"
                    to="/dashboard"
                  >
                    Checkout
                  </Link>
                </Button>
              ) : (
                // when click the checkout then cart are empty and hit the reducer function and product send to dashboard
                <Button
                  disabled
                  style={{ width: "100%", marginTop: "20px" }}
                  variant="primary"
                >
                  <Link
                    className="text-white text-decoration-none fs-5"
                    to="/dashboard"
                  >
                    Checkout
                  </Link>
                </Button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
