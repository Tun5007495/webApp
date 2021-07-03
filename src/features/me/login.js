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
import logo from "../../assets/logo192.png";
const Login = (props) => {
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
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Password"
                />
              </FormGroup>
              <p className="login-forgotPassword">Forgot your password?</p>
              <Button>
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
