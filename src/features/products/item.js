import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "../../css/products.css";
import Rating from "./rating";
const Example = (Props) => {
  const { item } = Props;
  return (
    <div className="products-item">
      <img
        className="products-itemImage"
        src={item.HinhSanPham?.Url}
        alt="item"
      ></img>
      <div className="icon-heart">
        <i className="fab fa-gratipay"></i>
      </div>
      <h4>{item.Ten}</h4>
      <Rating number={(item.cost % 10) / 2}></Rating>
      <p>Cost: ${item.GiaSP}</p>
      <div>
        {/* <Link
          to={{
            pathname: "/product",
            state: item, // your data array of objects
          }}
        >
          <Button className="products-itemButton">Buy</Button>
        </Link> */}
        <Link to={`/product/${item.Id}`}>
          <Button className="products-itemButton">Buy</Button>
        </Link>
      </div>
    </div>
  );
};

export default Example;
