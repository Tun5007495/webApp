import React from "react";
import { Row, Col } from "reactstrap";
import Avatar from "react-avatar";
import "../../css/products.css";
const Comment = (Props) => {
  const { item } = Props;
  console.log(item);
  return (

  <Row className="comment-display" sm="1">
      <Col sm="2">
        <Avatar
          name={item.username}
         // src="https://image.thanhnien.vn/1024/uploaded/haoph/2021_03_06/img_0467_lsvb.jpg"
          round={true}
          size="50"
        />
       
      </Col>
      <Col sm="10">
        <Row className="word-wrap">
          <p  className="word-wrap"><b>{item.username}:</b>{item.content}</p>
        </Row>
        <Row>
         
          <p> {"   "}</p>
          <span>{item.date} </span>
        </Row>
      </Col>
    </Row>
    
  
  );
};
export default Comment;
