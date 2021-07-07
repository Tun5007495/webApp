import React, { useState } from "react";
import cartEmpty from "../../assets/cartEmpty.png";
import { Container, Row, Col, Button } from "reactstrap";
import "../../css/cart.css";
import CartEmpty from "./cartEmpty";
import Cart from "./order";
import Items from "./items";
import { useSelector } from "react-redux";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const CartIndex = () => {
  const count = useSelector((state) => state.cart.count);
  console.log(count);
  return (
    <Container className="content">
      {count > 0 ? <Items/> : <CartEmpty />}
    </Container>
  );
};

export default CartIndex;
