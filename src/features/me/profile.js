import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import avatar from "../../assets/avatar.jpg";
import Avatar, { ConfigProvider } from "react-avatar";
import "../../css/profile.css";
const Login = (props) => {
  return (
    <Container className="content">
      <div className="profile">
        <Row>
          <Col>
            <div>
              <img className="profile-avatar" src={avatar} alt="avatar"></img>
            </div>
          </Col>
          <Col>
            <h2>
              <b>YOUR PROFILE</b>
            </h2>
            <hr />
            <h3>
              <b>HCMUS</b>
            </h3>
            <p>Student</p>
            <p>
              {" "}
              <i class="fas fa-map-marker-alt"></i> Binh Dinh
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
