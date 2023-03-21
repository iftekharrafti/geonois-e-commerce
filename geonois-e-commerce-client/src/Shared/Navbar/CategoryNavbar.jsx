import React, { useState } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryNavbar = () => {
  const [mensDropdown, setMensDropdown] = useState(false);
  const [womensDropdown, setWomensDropdown] = useState(false);
  const [watchDropdown, setWatchDropdown] = useState(false);
  const [electronicsDropdown, setElectronicsDropdown] = useState(false);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="remove_underline_white" to="/">Geonois</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link>
                <Link className="remove_underline_white" to="/products">
                  All Products
                </Link>
              </Nav.Link>
              <Dropdown
                onMouseEnter={() => setMensDropdown(true)}
                onMouseLeave={() => setMensDropdown(false)}
              >
                <Dropdown.Toggle as={Nav.Link}>
                  <Link className="remove_underline_white" to="/">
                    Men's Fashion
                  </Link>
                </Dropdown.Toggle>
                <Dropdown.Menu show={mensDropdown}>
                  <Dropdown.Item>
                    <Link className="remove_underline_black" to="/mens/cloth">
                      Clothing
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="remove_underline_black" to="/mens/shoes">
                      Shoes
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="remove_underline_black" to="/mens/bags">
                      Bags
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                onMouseEnter={() => setWomensDropdown(true)}
                onMouseLeave={() => setWomensDropdown(false)}
              >
                <Dropdown.Toggle as={Nav.Link}>
                  <Link className="remove_underline_white" to="/">
                    Women's Fashion
                  </Link>
                </Dropdown.Toggle>
                <Dropdown.Menu show={womensDropdown}>
                  <Dropdown.Item>
                    <Link className="remove_underline_black" to="/womens/cloth">
                      Clothing
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="remove_underline_black" to="/womens/shoes">
                      Shoes
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="remove_underline_black" to="/womens/bags">
                      Bags
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                onMouseEnter={() => setWatchDropdown(true)}
                onMouseLeave={() => setWatchDropdown(false)}
              >
                <Dropdown.Toggle as={Nav.Link}>
                  <Link className="remove_underline_white" to="/">
                    Watches
                  </Link>
                </Dropdown.Toggle>
                <Dropdown.Menu show={watchDropdown}>
                  <Dropdown.Item>
                    <Link className="remove_underline_black" to="/watch/mens">
                      Men's watches
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="remove_underline_black" to="/watch/womens">
                      Women's watches
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="remove_underline_black" to="/watch/kids">
                      Kid's watches
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                onMouseEnter={() => setElectronicsDropdown(true)}
                onMouseLeave={() => setElectronicsDropdown(false)}
              >
                <Dropdown.Toggle as={Nav.Link}>
                  <Link className="remove_underline_white" to="/">
                    Electronics
                  </Link>
                </Dropdown.Toggle>
                <Dropdown.Menu show={electronicsDropdown}>
                  <Dropdown.Item>
                    <Link
                      className="remove_underline_black"
                      to="/electronics/smartphones"
                    >
                      Smartphones
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      className="remove_underline_black"
                      to="/electronics/cameras"
                    >
                      Cameras
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      className="remove_underline_black"
                      to="/electronics/laptops"
                    >
                      Laptops
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      className="remove_underline_black"
                      to="/electronics/tablets"
                    >
                      Tablets
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link>
                <Link className="remove_underline_white" to="/sports">
                  Sports
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="remove_underline_white" to="/contact">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CategoryNavbar;
