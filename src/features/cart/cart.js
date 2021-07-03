import { Container, Row, Col, Button } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
const Cart = () => {
  return (
    <div className="cart-order">
      <Row>
        <Col md={{ span: 4, offset: 6 }}>
          <div>
            <p>Tổng thanh toán (1 Sản phẩm):</p>
          </div>
        </Col>
        <Col>
          <div>
            <p className="cart-priceOrder">₫6.030.000</p>
          </div>
        </Col>
        <Col>
          <div >
            <Button className="cart-buttonBuy" color="danger">Mua Hàng</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
