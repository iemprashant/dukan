import React from "react";
import { Container, Col } from "reactstrap";
const ContainerComp = (props) => {
  return (
    <Container className="themed-container my-3 px-0 " fluid="sm">
      <Col
        sm="12"
        md={{ size: 8, offset: 2 }}
        lg={{ size: 4, offset: 4 }}
        className="border border-secondary pt-5 pb-2 px-3 d-flex bg-white flex-column justify-content-center"
      >
        {props.children}
      </Col>
    </Container>
  );
};

export default ContainerComp;
