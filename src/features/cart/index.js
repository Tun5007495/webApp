import React,{useEffect} from "react";

import { Container} from "reactstrap";
import "../../css/cart.css";
import CartEmpty from "./cartEmpty";

import Items from "./items";
import { useSelector, useDispatch } from "react-redux";
import cartApi from '../../api/cartApi'
import {setCartData} from "../../redux/cart"
const CartIndex = () => {
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  useEffect(() => {
  
    const fetchCartList = async () => {
      try {
        // const params = { _page: 1, _limit: 10 };
        const response = await cartApi.getAll();
        
        dispatch(setCartData(response));
       console.log("Fetch products successfully: ", response);
     
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchCartList();
  }, [dispatch]);

  return (
    <Container className="content">
      {count > 0 ? <Items/> : <CartEmpty />}
    </Container>
  );
};

export default CartIndex;
