import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/cart.css";
import { deleteItem, addToCart, reduceItem } from "../../redux/cart";
import CartItem from "./item";
import Order from "./order";
import CartEmpty from "./cartEmpty";
const CartIndex = (Props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);

  useEffect(() => {}, [items]);
  const deleteI = (_id) => {
    dispatch(deleteItem(_id));
  };
  const add = (item) => {
    let temp = { ...item };
    temp.count = 1;
    dispatch(addToCart(temp));
  };
  const reduce = (_id) => {
    dispatch(reduceItem(_id));
  };

  return (
    <div>
      {items.length ? (
        <div>
          {items.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              onClickDelete={() => deleteI(item._id)}
              onClickSetCart={() => add(item)}
              onClickReduce={() => reduce(item._id)}
            ></CartItem>
          ))}
          <Order {...Props}></Order>
        </div>
      ) : (
        <CartEmpty></CartEmpty>
      )}
    </div>
  );
};

export default CartIndex;
