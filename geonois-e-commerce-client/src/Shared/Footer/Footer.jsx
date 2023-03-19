import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsChevronRight } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsSkype } from 'react-icons/bs';
import { BsSnapchat } from 'react-icons/bs';
import payment from '../../assets/payment/payment.png';

const Footer = () => {
    return (
        <footer>
      <div style={{ background: "#021D3A", padding: "70px 0" }}>
        <Container>
          <Row>
            {/* Logo and First part */}
            <Col lg={3} md={6} sm={6} xs={12}>
              {/* <Image src={logo} alt="logo" style={{ color: "white", width: '160px', height: '45px' }} /> */}
              <h2 className="text-white">Geonois</h2>
              <p className="fs-6 text-white mt-3">
              Geonois is perfectly suitable for school, college and university
                website with online education system.
              </p>
            </Col>

            {/* Footer 2nd part */}
            <Col lg={3} md={6} sm={6} xs={12}>
              <h3  style={{fontFamily: 'Lato'}} className="fs-4 fw-bold text-white mb-4">My Account</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                    <BsChevronRight /> My Profile
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                  <BsChevronRight /> My Order History
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                  <BsChevronRight /> My Wish List
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                  <BsChevronRight /> Shipping Info
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                  <BsChevronRight /> Shopping Cart
                  </Link>
                </li>
              </ul>
            </Col>
            {/* Footer 3rd part */}
            <Col lg={3} md={6} sm={6} xs={12}>
              <h3  style={{fontFamily: 'Lato'}} className="fs-4 fw-bold text-white mb-4">Company</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                  <BsChevronRight /> About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                  <BsChevronRight /> Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                  <BsChevronRight /> Affiliate
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-decoration-none text-white">
                  <BsChevronRight /> Contact Us
                  </Link>
                </li>
              </ul>
            </Col>
            {/* Footer 3rd and Address part */}
            <Col lg={3} md={6} sm={6} xs={12}>
              <h3 style={{fontFamily: 'Lato'}} className="fs-4 fw-bold text-white mb-4">Our Address</h3>
              <p className="text-white">Geonois, Dhaka 1211</p>
              <div>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.facebook.com/iftekhar.rafti"
                >
                  <BsFacebook />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.twitter.com"
                >
                  <BsTwitter />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.instagram.com"
                >
                  <BsInstagram />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.linkedin.com"
                >
                  <BsLinkedin />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.youtube.com"
                >
                  <BsYoutube />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.skype.com"
                >
                  <BsSkype />
                </a>
                <a
                  className="text-white me-3 fs-4"
                  href="https://www.snapchat.com"
                >
                  <BsSnapchat />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: "#05274B", padding: "30px" }}>
        {/* Footer bottom side */}
        {/* Copyright & Social Media */}
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <div>
                <p className="text-white fs-5">Copyright &copy; Rafti 2023</p>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="me-5 d-flex justify-content-end">
                <Image src={payment} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
    );
};

export default Footer;