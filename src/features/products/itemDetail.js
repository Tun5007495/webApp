import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
//import { useLocation } from "react-router-dom";
import { Button, Col, Row, Container } from "reactstrap";
import "../../css/products.css";
import { addToCart } from "../../redux/cart";
import productApi from "../../api/productApi";
import Avatar from "react-avatar";
const DetailProduct = (Props) => {
  const dispatch = useDispatch();
  const productId = Props.match.params.id;

  const [item, setItem] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await productApi.getId({ _id: productId });

        setItem(product);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProduct();
  }, []);
  // const location = useLocation();
  // let item = { ...location.state };
  const [count, setCount] = useState(0);

  let addItem = () => {
    if (count) {
      item.count = count;

      dispatch(addToCart({ ...item }));
      setCount(0);
    }
  };
  const checkoutHandler = () => {
    if (count) {
      item.count = count;

      dispatch(addToCart({ ...item }));
      setCount(0);
      Props.history.push("/signin?redirect=cart");
    }
  };
  return (
    <Container className="content">
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
                <button
                  className="p-Button"
                  onClick={count > 0 ? () => setCount(count - 1) : () => {}}
                >
                  -
                </button>
              </Col>
              <Col xs="2" md="2" className="p">
                {count}
              </Col>
              <Col xs="1" md="1" className="p-increase">
                <button
                  onClick={() => setCount(count + 1)}
                  className="p-Button"
                >
                  +
                </button>
              </Col>
            </Row>

            <div>
              <Button
                onClick={() => addItem()}
                className="products-detailAddToCart"
              >
                Add to cart
              </Button>
              <Button onClick={checkoutHandler} className="products-detailBuy">
                Buy
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="product-describe">
        <h5>Describe:</h5>
        <p>{item.description}</p>
      </Row>
      <Row></Row>
      <Row className="product-comment">
        <div>
          <b>Comment()</b>
        </div>

        <form className="comment-form">
          <Row>
            <Col sm="1">
              <Avatar
                className="usercomment-avatar"
                size="50"
                name="Nhat Phan"
                src="https://image.thanhnien.vn/1024/uploaded/haoph/2021_03_06/img_0467_lsvb.jpg"
                round={true}
              />
              <b>MyTam</b>
            </Col>
            <Col sm="11">
              <textarea
                className="comment-input"
                placeholder="Enter your comment"
                name="Text1"
              ></textarea>
            </Col>
          </Row>

          <Row>
            <Col sm={{ offset: 1 }}>
              <button className="comment-buttonSubmit" type="submit">
                post
              </button>
            </Col>
          </Row>
        </form>

        <Row className="comment-guest">
          <Col sm="2" className="comment-infor">
            <Row>
              <Avatar
                name="Nhat Phan"
                src="https://image.thanhnien.vn/1024/uploaded/haoph/2021_03_06/img_0467_lsvb.jpg"
                round={true}
              />
            </Row>
          </Col>
          <Col>
            <Row>
              <p>
                <b>My Tam: </b>
                {item.description}
              </p>
            </Row>
            <Row>
              <span> Chủ Nhật, 15 tháng 8, 2021 </span>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm="2">
            <Avatar
              name="Nhat Phan"
              src="https://image.thanhnien.vn/1024/uploaded/haoph/2021_03_06/img_0467_lsvb.jpg"
              round={true}
            />
          </Col>
          <Col>
            <Row>
              <p>{item.description}</p>
            </Row>
            <Row>
              <b>6</b> <i className="fas fa-thumbs-up"></i>
              <p> {"   "}</p>
              <span> Chủ Nhật, 15 tháng 8, 2021 </span>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default DetailProduct;
