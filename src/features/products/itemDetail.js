import React from "react";
import { Row, Col, Button } from "reactstrap";
import { useLocation } from "react-router-dom";
import "../../css/products.css";
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { setCartCount } from "../../redux/cart";
const DetailProduct = ({ state }) => {
  const location = useLocation();
  const item = location.state;
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const addItem = () => {
    item.count = count;
    dispatch(setCartCount(item));
    setCount(0);
  };
  return (
    <div className="content">
      <Row className="product-detail">
        <Col>
          <img
            className="product-detailImage"
            src={item.image}
            alt="item"
          ></img>
        </Col>
        <Col>
          <div className="product-detailProduct">
            <h2>{item.name}</h2>
            <p>Cost: ${item.cost}</p>
            <Row className="product-detailBorderCount">
          
              <Col
                xs={{ size: 1, offset: 4 }}
                md={{ size: 1, offset: 4 }}
                className="p-reduce"
              >
               
               <button  className="p-Button" onClick={count>0?()=>setCount(count-1):true}>-</button>
              </Col>
              <Col xs="2" md="2" className="p">
                {count}
              </Col>
              <Col xs="1" md="1" className="p-increase" >
                <button onClick={()=>setCount(count+1)} className="p-Button">+</button>
               
              </Col>
            </Row>

            <div>
              <Button onClick={()=>addItem()} className="products-detailAddToCart">Add to cart</Button>
              <Button className="products-detailBuy">Buy</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="product-describe">
        <h5>Describe:</h5>
        <p>
         {item.description}
        </p>
      </Row>
    </div>
  );
};

export default DetailProduct;
