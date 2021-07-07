import { Container, Row, Col, Button } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import {useSelector} from "react-redux";
const Cart = () => {
  const count = useSelector((state) => state.cart.count);
  const total = useSelector((state) => state.cart.total);
  
  return (
    <div className="cart-order">
      <Row>
        <Col md={{ span: 4, offset: 6 }}>
          <div>
            <p>Tổng thanh toán ({count} Sản phẩm):</p>
          </div>
        </Col>
        <Col>
          <div>
            <p className="cart-priceOrder">₫{total}</p>
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
