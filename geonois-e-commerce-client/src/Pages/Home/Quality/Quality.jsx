import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCarSide } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";

const Quality = () => {
  return (
      <div className="pt-5">
        <Container>
      <h2 className="header">We Provide High Quality Goods</h2>
      <p className="text-center mb-4">
        A client that's unhappy for a reason is a problem, a client that's
        unhappy though he or her can't
      </p>

        <Row className="text-center">
          <Col md={4} sm={6}>
            <div>
              <FaCarSide style={{fontSize: '40px', color: '#0d6efd'}} />
              <h4 className="my-2">Fast Delivery</h4>
              <p>
                Chances are there wasn't collaboration and checkpoints, there
                wasn't a process
              </p>
            </div>
          </Col>
          <Col md={4} sm={6}>
            <div>
              <BiLike style={{fontSize: '40px', color: '#0d6efd'}} />
              <h4 className="my-2">Best Quality</h4>
              <p>
                It's content strategy gone awry right from the start Forswearing
                the use of lorem ipsum
              </p>
            </div>
          </Col>
          <Col md={4} sm={6}>
            <div>
              <TbTruckReturn style={{fontSize: '40px', color: '#0d6efd'}} />
              <h4 className="my-2">Free Return</h4>
              <p>
                True enough, but that's not all that it takes to get things back
                on track out there for a text
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Quality;
