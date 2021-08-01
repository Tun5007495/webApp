import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "../../css/products.css";
const Example = ({ item }) => {
  return (
    <div className="products-item">
      <img className="products-itemImage" src={item.image} alt="item"></img>
      <div className="icon-heart">
        <i className="fab fa-gratipay"></i>
      </div>
      <h4>{item.name}</h4>
      <p>Cost: ${item.cost}</p>
      <div>
        <Link
          to={{
            pathname: "/detail",
            state: item, // your data array of objects
          }}
        >
          <Button className="products-itemButton">Buy</Button>
        </Link>
      </div>
    </div>
  );
};

export default Example;
