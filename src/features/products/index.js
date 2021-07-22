import Items from "./items";
import "../../css/content.css";
import axios from "axios";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./itemDetail";
import { setData } from "../../redux/products";
import { loadData } from "../../redux/cart";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import productApi from "../../api/productApi";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  
    const fetchProductList = async () => {
      try {
        // const params = { _page: 1, _limit: 10 };
        const response = await productApi.getAll();
        
        dispatch(setData(response));
       // console.log("Fetch products successfully: ", response.data);
     
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, [dispatch]);

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Items></Items>
          </Route>
          <Route exact path="/detail">
            <Detail></Detail>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default Home;
