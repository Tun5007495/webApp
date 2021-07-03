import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "../../css/products.css";
const Example = (props) => {
  const num = props.number;
  return (
    <div className="products-item">
      <img
        className="products-itemImage"
        src="https://picsum.photos/400/400"
        alt="item"
      ></img>
      <div className="icon-heart">
        <i class="fab fa-gratipay"></i>
      </div>

      <p>Cost: $5</p>
      <div >
        <Button className="products-itemButton" >Buy</Button>
      </div>
    </div>
  );
};

export default Example;
