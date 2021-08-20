import React from "react";
import {  Col, Row } from "reactstrap";
//import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { Link } from "react-router-dom";
import "../css/header.css";
import Logo from "../assets/logo192.png";
const Example = () => {
  return (
    <div className="header">
      <Row>
        <Col md={{ size: 1, offset: 1 }}>
          <img className="header-logo" src={Logo} alt="logo"></img>
        </Col>
        <Col md={{ size: 1, offset: 2 }}>
          <div className="header-item">
            <div>
              <i className="fas fa-home"></i>
            </div>
            <div>
              <Link to="/">Home</Link>
            </div>
          </div>
        </Col>
        <Col md={{ size: 1 }}>
          <div className="header-item">
            <div>
              <i className="fas fa-heart"></i>
            </div>

            <Link to="wishlist">Wishlist</Link>
          </div>
        </Col>
        <Col md={{ size: 1 }}>
          <div className="header-item">
            <div>
              <i className="fas fa-shopping-cart"></i>
            </div>
            <Link to="/cart">Cart</Link>
          </div>
        </Col>
        <Col md={{ size: 1 }}>
          <div className="header-item">
            <div>
              <i className="fas fa-user-alt"></i>
            </div>
            <Link to="/signin">Me</Link>
          </div>
        </Col>
        <hr></hr>
      </Row>
    </div>
  );
};

export default Example;
