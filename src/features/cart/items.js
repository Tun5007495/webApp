import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/cart.css";
import { deleteItem, raiseCart, reduceItem } from "../../redux/cart";
import CartItem from "./item";
import Order from "./order";

const CartIndex = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  useEffect(() => {}, [items]);
  const deleteI = (id) => {
    dispatch(deleteItem(id));
  };
  const addItem = (item) => {
    dispatch(raiseCart(item));
  };
  const reduce = (id) => {
    dispatch(reduceItem(id));
  };

  return (
    <div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onClickDelete={() => deleteI(item.id)}
          onClickSetCart={() => addItem(item)}
          onClickReduce={() => reduce(item.id)}
        ></CartItem>
      ))}
      <Order></Order>
    </div>
  );
};

export default CartIndex;
