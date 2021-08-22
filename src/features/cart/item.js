import { Button, Col, Row } from "reactstrap";
import React from "react";

const CartItem = (Props) => {
  const { item, onClickDelete, onClickSetCart, onClickReduce } = Props;
  return (
    <div className="cart-item">
      <Row>
        <Col  xs="12" md="12" sm="12" lg="6">
          <Row>
            <Col  xs="3" md="3" sm="3" lg="3">
              <div>
                <img
                  className="cart-itemImage"
                  src={item.image}
                  alt="products"
                ></img>
              </div>
            </Col>
            <Col xs="2" md="9" sm="2" lg="2">
              <h5>{item.name}</h5>
            </Col>
          </Row>
        </Col>
        <Col  xs="12" md="12" sm="12" lg="6">
          <Row>
            <Col
              xs="3"
              md="3"
              sm="3"
              lg="3"
            >
              <div>
                <p className="cart-priceItem">Price:{item.cost} ₫</p>
              </div>
            </Col>
            <Col xs="4" md="4" sm="4" lg="4">
              <div className="cart-itemGroup">
                <button
                  className="cart-itemGroupDecrease"
                  onClick={onClickReduce}
                >
                  -
                </button>

                <div className="cart-itemGroupCount">
                  <p>{item.count}</p>
                </div>

                <button
                  className="cart-itemGroupIncrease"
                  onClick={onClickSetCart}
                >
                  +
                </button>
              </div>
            </Col>
            <Col xs="2" md="2" sm="2" lg="2">
              <div>
                <p className="cart-priceItem">{item.count * item.cost} ₫</p>
              </div>
            </Col>
            <Col xs="3" md="3" sm="3" lg="3">
              <div>
                <Button
                  className="cart-buttonItem"
                  color="danger"
                  onClick={onClickDelete}
                >
                  Xóa
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
