import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup, Row } from "react-bootstrap";
import { GiMagnifyingGlass } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import { fetchProducts } from "../../features/products/productsSlice";

const Products = () => {
    const [search, setSearch] = useState("");
    const products = useSelector(state => state.product.filterProducts)

    const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchProducts())
}, [dispatch])

  const handleChange = () => {};
  return (
    <div>
      <Container>
        <div className="d-flex flex-wrap justify-content-between mt-5 mb-2">
          <div className="d-flex items-center">
            <InputGroup className="mb-3 d-flex">
              <InputGroup.Text id="basic-addon1">
                <GiMagnifyingGlass />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Search"
                className="remove-focus"
                onChange={(event) => setSearch(event.target.value)}
              />
            </InputGroup>
          </div>

          {/* Selection/ Sorting Bar */}
          <Form.Select
            id="mySelect"
            onChange={(event) => handleChange(event)}
            aria-label="Small select example"
            style={{ width: "250px" }}
            className="remove-focus"
          >
            <option value="lowHigh">Course Price (Low-High)</option>
            <option value="HighLow">Course Price (High-Low)</option>
            <option value="atoz">Course Title (a-z)</option>
            <option value="ztoa">Course Title (z-a)</option>
          </Form.Select>
        </div>

        <div className="py-4">
            <Row>
                {
                    products.map(product => <SingleProduct product={product} />)
                }
            </Row>
        </div>
      </Container>
    </div>
  );
};

export default Products;
