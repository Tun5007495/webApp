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
  // console.log("11111111111111111111", items);
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
              key={item.ID}
              item={item}
              onClickDelete={() => deleteI(item.ID)}
              onClickSetCart={() => add(item)}
              onClickReduce={() => reduce(item.ID)}
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
