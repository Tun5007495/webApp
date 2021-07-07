import Login from "./login";
import Profile from "./profile";

import { loadData } from "../../redux/auth";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import "../../css/me.css";
const Me = () => {
  const dispatch = useDispatch();
  const sign = useSelector((state) => state.auth.signin);
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return <div>{sign === false ? <Login></Login> : <Profile></Profile>}</div>;
};

export default Me;
