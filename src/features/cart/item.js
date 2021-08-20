import { Button, Col, Row } from "reactstrap";
import React from 'react'

const CartItem = (Props) => {
const { item, onClickDelete, onClickSetCart, onClickReduce } = Props;
  return (
    <div className="cart-item">
      <Row>
        <Col md={1}>
          <div>
            <img
              className="cart-itemImage"
              src={item.image}
              alt="products"
            ></img>
          </div>
        </Col>
        <Col md={4}>
          <h6>{item.name}</h6>
        </Col>
        <Col sm={{ offset: 2 }}>
          <div>
            <p className="cart-priceItem">Price:{item.cost} ₫</p>
          </div>
        </Col>
        <Col>
          <div className="cart-itemGroup">
           
              <button  className="cart-itemGroupDecrease" onClick={onClickReduce}>
                -
              </button>
        
            <div className="cart-itemGroupCount">
              <p>{item.count}</p>
            </div>
        
              <button className="cart-itemGroupIncrease" onClick={onClickSetCart}>
                +
              </button>
              
        
          </div>
        </Col>
        <Col>
          <div>
            <p className="cart-priceItem">{item.count * item.cost} ₫</p>
          </div>
        </Col>
        <Col>
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
    </div>
  );
};

export default CartItem;
