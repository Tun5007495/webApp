import { Container, Row, Col, Button } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const CartItem = () => {
  return (
    <div className="cart-item">
      <Row>
        <Col md={1}>
          <div>
            <img
              className="cart-itemImage"
              src="https://i.ibb.co/JpWst3h/trousers.png"
              alt="products"
            ></img>
          </div>
        </Col>
        <Col md={4}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </Col>
        <Col sm={{offset:2}}>
          <div>
            <p className="cart-priceItem">₫6.030.000</p>
          </div>
        </Col>
        <Col>
          <div className="cart-itemGroup">
            <div className="cart-itemGroupDecrease">-</div>
            <div className="cart-itemGroupCount">
              <p>1</p>
            </div>
            <div className="cart-itemGroupIncrease">+</div>
          </div>
        </Col>
        <Col >
          <div>
            <p className="cart-priceItem">₫6.030.000</p>
          </div>
        </Col>
        <Col>
          <div>
            <Button className="cart-buttonItem" color="danger">
              Xóa
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
