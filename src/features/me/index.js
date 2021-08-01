import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/me.css";
import { loadData } from "../../redux/auth";
import Login from "./login";
import Profile from "./profile";

const Me = () => {
  const dispatch = useDispatch();
  const sign = useSelector((state) => state.auth.signin);
  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return <div>{sign === false ? <Login></Login> : <Profile></Profile>}</div>;
};

export default Me;
