import React, { useState } from "react";
import cartEmpty from "../../assets/cartEmpty.png";
import { Container, Row, Col, Button } from "reactstrap";
import "../../css/cart.css";
import CartEmpty from "./cartEmpty";
import Cart from "./cart";
import CartItem from "./cartItem";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const CartIndex = () => {
  const [show, setShow] = useState(true);
  return (
    <Container className="content">
      {show === true ? (
        <div>
          {arr.map((item) => (
            <CartItem></CartItem>
          ))}
          <Cart></Cart>
        </div>
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
};

export default CartIndex;
