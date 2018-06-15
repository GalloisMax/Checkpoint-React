import React from "react";
import { Button, ListGroupItem, Col, Row } from "reactstrap";

const Targets = ({ name, status, picture }) => (
  <ListGroupItem>
    <Row>
      <Col xs={3}>
        <Button> Kill this character </Button>
      </Col>
      <Col xs={3}>
        <img alt={name} src={picture} />
      </Col>
      <Col xs={3}>
        <h3> {name} </h3>
      </Col>
      <Col xs={3}>
        <p>{status}</p>
      </Col>
    </Row>
  </ListGroupItem>
);
export default Targets;
