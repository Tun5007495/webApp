import React from "react";
import { Nav, NavItem, NavLink, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "../css/header.css";
import Logo from "../assets/logo192.png";
const Example = (props) => {
  return (
    <div className="header">
      <Row>
        <Col md={{ size: 1, offset: 1 }}>
          <img className="header-logo" src={Logo} alt="logo"></img>
        </Col>
        <Col md={{ size: 1, offset: 2 }}>
          <div className="header-item">
            <div>
              <i class="fas fa-home"></i>
            </div>
            <div>
              <Link to="/">Home</Link>
            </div>
          </div>
        </Col>
        <Col md={{ size: 1 }}>
          <div className="header-item">
            <div>
              <i class="fas fa-heart"></i>
            </div>

            <Link to="wishlist">Wishlist</Link>
          </div>
        </Col>
        <Col md={{ size: 1 }}>
          <div className="header-item">
            <div>
              <i class="fas fa-shopping-cart"></i>
            </div>
            <Link to="/cart">Cart</Link>
          </div>
        </Col>
        <Col md={{ size: 1 }}>
          <div className="header-item">
            <div>
              <i class="fas fa-user-alt"></i>
            </div>
            <Link to="/me">Me</Link>
          </div>
        </Col>
        <hr></hr>
      </Row>
    </div>
  );
};

export default Example;
