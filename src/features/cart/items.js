import React, {useEffect} from "react";


import "../../css/cart.css";

import Order from "./order";
import CartItem from "./item";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, setCart, reduceItem } from "../../redux/cart";
const CartIndex = () => {
    const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  useEffect(() => {}, [items]);
  const deleteI = (id) => {
    dispatch(deleteItem(id));
  };
  const addItem = (item) => {
    dispatch(setCart(item));
  };
  const reduce = (id) => {
    dispatch(reduceItem(id));
  };

  return (
   
      <div>
        {items.map((item) => (
          <CartItem item={item}
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
