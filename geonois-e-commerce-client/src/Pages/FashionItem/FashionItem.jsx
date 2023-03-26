import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import { fetchProducts } from "../../features/products/productsSlice";
import { GiMagnifyingGlass } from "react-icons/gi";

const FashionItem = () => {
    const [search, setSearch] = useState("");
  const { pathname } = useLocation();

  const newPathname = pathname.split("/");
  const newCategory = newPathname[1];
  const newSubCategory = newPathname[2];

  const products = useSelector((state) => state.product.filterProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = () => {};

  return (
    <div className="py-5 background_color">
      <Container>
        <h2 className="text-center pb-4">
            {
                newCategory === 'watch' ? newSubCategory.charAt(0).toUpperCase() + newSubCategory.slice(1) + " " + newCategory.charAt(0).toUpperCase() + newCategory.slice(1) : 
                newCategory.charAt(0).toUpperCase() + newCategory.slice(1) + " " +
                newSubCategory.charAt(0).toUpperCase() + newSubCategory.slice(1)
            }
        </h2>
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
        <Row>
          {products
            ?.filter((product) => product.category === newCategory)
            .filter(product => product.subCategory === newSubCategory)
            .map((product) => (
              <SingleProduct product={product} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default FashionItem;
