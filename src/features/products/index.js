import Item from "./item";
import '../../css/content.css'
import { Container, Row, Col } from "reactstrap";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const home = () => {
  return (
    <Container>
      <div className="content">
        <Row>
          {arr.map((item) => (
            <Col md={6} lg={4}>
              <Item number={item}></Item>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default home;
