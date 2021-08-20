import React from "react";
import { Row, Col } from "reactstrap";
const OrderItems = (Props) => {
  const { item } = Props;

  return (
    <Row className="orderItems">
      <Col sm="2">
        <b>{item.name}</b>
      </Col>

      <Col  sm="6">
        <img className="orderItems-image" src={item.image}></img>
      </Col>
      <Col  sm="1">
        <p>{item.cost}$</p>
      </Col>
      <Col sm="1">
      <p>{item.count}</p>
      </Col>
      <Col  sm="2">
        <p>total:{item.cost * item.count}$</p>
      </Col>
    </Row>
  );
};
export default OrderItems;
