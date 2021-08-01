import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import "../../css/content.css";
import Item from "./item";

const Items = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="content">
      <Row>
        {products.map((item) => (
          <Col key={item.id} md={6} lg={4}>
            <Item item={item}></Item>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Items;
