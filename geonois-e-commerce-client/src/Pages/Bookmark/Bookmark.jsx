import React from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import emptyCart from "../../assets/empty-shopping-cart.jpg";
import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromBookmark } from "../../features/products/productsSlice";
import { BsCart3 } from "react-icons/bs";

const Bookmark = () => {
  // Get product from the global function
  const state = useSelector(state => state.product)

  const dispatch = useDispatch()

  // When click addCart then goto reducer function and add cart to the state
  const handleCart = (product) => {
    dispatch(addToCart(product))
    dispatch(removeFromBookmark(product._id))
    toast.success("Product Added to Cart");
  };

  const removeBookmark = (id) => {
    const remove = window.confirm("Are you sure, you want to remove the product on Bookmark?")
    if(remove){
      dispatch(removeFromBookmark(id))
      toast.success("product Remove to Bookmark");
    }
  };

  // Bookmark e je course gulo add kora hoiche tar id gulo array akare niye nicci....
  const bookmarkIdArray = state.bookmark.map(bookmark => bookmark._id)

  // Bookmark er id gulor sathe mil ache emn cart and checkout er id gulo array akare niye nicci
  const cartCheckoutIdArray = bookmarkIdArray.filter(id => state.cart.some(course => course._id === id));

  return (
    <div style={{ padding: "0 0 50px 0", background: '#fff' }}>
      <Container>
        <Row>
          <Col md={12} sm={12}>
            {/* Bookmark header & product information show */}
            <h2 className="text-center my-3 fs-2 fw-bold" style={{fontFamily: 'Merriweather'}}>BookMark Product</h2>
            <p>{state.bookmark.length} Courses in Bookmark</p>
            {/* product show as a table */}
            {state.bookmark.length ? (
              <Table
                responsive
                striped
                bordered
                hover
                className="text-center mb-4"
              >
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Add To Cart</th>
                    <th>Remove</th>
                  </tr>
                </thead>

                {state.bookmark.map((course) => (
                  <tbody key={course._id}>
                    <tr>
                      <td>
                        <Link to={`/productDetails/${course._id}`}>
                          <Image
                            src={course.img}
                            alt="course img"
                            style={{ width: "100px" }}
                          />
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/productDetails/${course._id}`}
                          className="text-black text-decoration-none"
                        >
                          {course.title}
                        </Link>
                      </td>
                      <td>${course.price}</td>
                      <td>
                        {/* Course id ta mile gele disabled nahoy abled */}
                        {
                          cartCheckoutIdArray.includes(course._id) ? <Button disabled>
                          <BsCart3
                            className="me-2"
                          />
                          Add To Cart
                        </Button>
                        : 
                        <Button onClick={() => handleCart(course)}>
                          <BsCart3
                            className="me-2"
                          />
                          Add To Cart
                        </Button>
                        }
                        
                      </td>
                      <td>
                        <Button
                          onClick={() => removeBookmark(course._id)}
                        >
                          Remove
                        </Button>{" "}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            ) : (
              // If product are not in the bookmark then show empty box
              <div className="d-flex flex-column justify-content-center align-items-center mt-2 mb-5 shadow p-4">
                <Image src={emptyCart} alt="cart" style={{ width: "250px" }} />
                <p>Your bookmark is empty. Keep shopping to find a course!</p>
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
        </Row>
      </Container>
    </div>
  );
};

export default Bookmark;
