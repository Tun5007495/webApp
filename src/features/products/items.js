import Item from "./item";
import "../../css/content.css";
import { Container, Col, Row } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./itemDetail";
import {useSelector, useDispatch} from "react-redux";


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Items = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
 
 
  return (
    <div className="content">
      <Row>
        {products.map((item) => (
          <Col md={6} lg={4}>
            <Item item={item}></Item>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Items;
