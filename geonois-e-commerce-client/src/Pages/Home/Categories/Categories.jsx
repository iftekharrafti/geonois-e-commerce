import React from "react";
import { Container, Row } from "react-bootstrap";
import { useGetCategoryQuery } from "../../../features/categories/categoriesApi";
import SingleCategory from "./SingleCategory";

const Categories = () => {

  const {isLoading,data, isError} = useGetCategoryQuery();

  return (
    <div className="mt-5">
      <Container>
      <h2 className="header mb-4">Categories</h2>
        <Row>
          {
            data?.map(category => <SingleCategory category={category} />)
          }
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
