import React from "react";
import {
  Badge,
  Container,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { DiGitCompare } from "react-icons/di";
import { BsCart3 } from "react-icons/bs";
import './TopNavbar.css';

const TopNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Form>
            <div class="input-box">
              <i class="uil uil-search"></i>
              <input type="text" placeholder="Search here..." />
              <button class="button">Search</button>
            </div>
          </Form>
          <Nav>
            <div className="d-flex">
              <Link to="/dashboard" className="ms-3">
                <div style={{ position: "relative" }}>
                  <HiOutlineUser style={{ fontSize: "28px", color: "#fff" }} />
                </div>
              </Link>
              <Link to="/" className="ms-3">
                <div style={{ position: "relative" }}>
                  <AiOutlineHeart style={{ fontSize: "28px", color: "#fff" }} />
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      right: "-8px",
                    }}
                  >
                    <Badge style={{ background: "#FDDA06" }}>0</Badge>
                  </div>
                </div>
              </Link>
              <Link to="/" className="ms-3">
                <div style={{ position: "relative" }}>
                  <DiGitCompare style={{ fontSize: "28px", color: "#fff" }} />
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      right: "-8px",
                    }}
                  >
                    <Badge style={{ background: "#FDDA06" }}>0</Badge>
                  </div>
                </div>
              </Link>
              <Link to="/" className="ms-3">
                <div style={{ position: "relative" }}>
                  <BsCart3 style={{ fontSize: "28px", color: "#fff" }} />
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      right: "-8px",
                    }}
                  >
                    <Badge style={{ background: "#FDDA06" }}>0</Badge>
                  </div>
                </div>
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
