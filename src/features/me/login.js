import React, { useState } from "react";
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
import { useDispatch } from "react-redux";

import { signIn } from "../../redux/auth";
import logo from "../../assets/logo192.png";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const submit = (infor) => {
    dispatch(signIn(infor));
  };
  return (
    <Container className="content">
      <Row>
        <Col sm={{ size: 5, offset: 4 }}>
          <div className="login">
            <div className="login-logo">
              <img
                style={{ height: "5rem", width: "5rem" }}
                src={logo}
                alt="logo"
              />
            </div>
            <h2>Log in</h2>
            <hr />
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormGroup>
              <p className="login-forgotPassword">Forgot your password?</p>
              <Button onClick={() => submit({ username, password })}>
                {" "}
                <b>Log in</b>
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
