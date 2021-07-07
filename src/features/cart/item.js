import { Container, Row, Col, Button } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const CartItem = ({ item, onClickDelete, onClickSetCart, onClickReduce }) => {
  console.log(item);
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
            <div className="cart-itemGroupDecrease" onClick={onClickReduce}>-</div>
            <div className="cart-itemGroupCount">
              <p>{item.count}</p>
            </div>
            <div className="cart-itemGroupIncrease" onClick={onClickSetCart}>+</div>
          </div>
        </Col>
        <Col>
          <div>
            <p className="cart-priceItem">{item.count * item.cost} ₫</p>
          </div>
        </Col>
        <Col>
          <div>
            <Button className="cart-buttonItem" color="danger" onClick={onClickDelete}>
              Xóa
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
