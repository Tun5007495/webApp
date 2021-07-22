import Item from "./item";
import "../../css/content.css";
import {  Col, Row } from "reactstrap";


import {useSelector, useDispatch} from "react-redux";




const Items = () => {

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
