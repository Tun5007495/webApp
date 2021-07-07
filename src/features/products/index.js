import Items from "./items";
import "../../css/content.css";
import { Container, Col, Row } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Detail from "./itemDetail";
import { fetchData, setStatusProducts } from "../../redux/products";
import { loadData } from "../../redux/cart";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch} from "react-redux";


const Home = () => {
 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    dispatch(loadData());
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
