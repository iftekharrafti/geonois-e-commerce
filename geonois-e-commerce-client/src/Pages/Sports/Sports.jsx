import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import { fetchProducts } from "../../features/products/productsSlice";

const Sports = () => {
  const products = useSelector((state) => state.product.filterProducts);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="py-5 background_color">
      <Container>
        <h2 className="text-center pb-4">Sports</h2>
        <Row>
          {products
            ?.filter((product) => product.category === "sports")
            .map((product) => (
              <SingleProduct product={product} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Sports;
