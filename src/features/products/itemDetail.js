import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useLocation } from "react-router-dom";
import { Button, Col, Row, Container } from "reactstrap";
import "../../css/products.css";
import { addToCart } from "../../redux/cart";
import productApi from "../../api/productApi";
import Avatar from "react-avatar";
import Comment from "./comment";
const DetailProduct = (Props) => {
  const dispatch = useDispatch();
  const productId = Props.match.params.id;
  const [item, setItem] = useState({});
  const [comment, setComment] = useState();
  // const [commentList, setCommentList] = useState();
  const userInfor = useSelector((state) => state.auth.userInfor);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await productApi.getId({ _id: productId });

        setItem({ ...product });
        console.log(item.comments);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProduct();
  }, [item.comment]);
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
  const handleChange = (event) => {
    setComment(event.target.value);
  };
  const handleSubmitComment = (e) => {
    e.preventDefault();
    const callApi = async () => {
      await productApi.postComment({
        content: comment,
        userId: userInfor._id,
        username: userInfor.username,
        _id: productId,
      });
    };
    callApi();
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

      <Row className="product-comment">
        <Col sm="1" className="comment-title"> <b>Comment()</b></Col>
      
        {userInfor ? (
          <form className="comment-form">
            <Row>
              <Col sm="1" style={{ textAlign: "center" }}>
                <Avatar
                  className="usercomment-avatar"
                  size="50"
                  name={userInfor.username}
                  round={true}
                />
                <b>{userInfor.username}</b>
              </Col>
              <Col sm="11">
                <textarea
                  className="comment-input"
                  placeholder="Enter your comment"
                  name="Text1"
                  onChange={handleChange}
                ></textarea>
              </Col>
            </Row>

            <Row>
              <Col sm={{ offset: 1 }}>
                <button
                  className="comment-buttonSubmit"
                  onClick={handleSubmitComment}
                >
                  post
                </button>
              </Col>
            </Row>
          </form>
        ) : (
          ""
        )}

        {item.comments === [] || item.comments
          ? item.comments.map((product) => (
              <Comment key="" item={product}></Comment>
            ))
          : ""}
      </Row>
    </Container>
  );
};

export default DetailProduct;
