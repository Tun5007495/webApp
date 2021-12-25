import { useSelector } from "react-redux";
import { Button, Col, Row } from "reactstrap";
import React from 'react'
import { withRouter} from 'react-router-dom';
const CartOrder = (Props) => {
  const items = useSelector((state) => state.cart.cartItems);
  const total = items.reduce(function(prev, cur) {
    return prev + cur.GiaSP*cur.SoLuong;
  }, 0);

const handleOrder = ()=>{
  Props.history.push('/signin?redirect=shipping');
  
}
  return (
    <div className="cart-order">
      <Row>
        <Col  xs="3" sm={{  offset: 2 }} md={{  offset: 4 }}   lg={{  offset: 5 }}  
            
              
            >
          <div>
            <p>Tổng thanh toán ({items.length} Sản phẩm):</p>
          </div>
        </Col>
        <Col>
          <div>
            <p className="cart-priceOrder">₫{total}</p>
          </div>
        </Col>
        <Col>
          <div>
            <Button className="cart-buttonBuy" color="danger" onClick={handleOrder}>
              Mua Hàng
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter( CartOrder);
