// import firebase from "firebase";
import React, { useState, useEffect } from "react";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import {  useDispatch } from "react-redux";
import { Link} from 'react-router-dom'
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import logo from "../../assets/logo192.png";
// import { signIn } from "../../redux/auth";
import loginApi from "../../api/userApi";
import Cookies from "js-cookie";
import ShipperImgae from "../../assets/shipper.png"
// const uiConfig = {
//   // Popup signin flow rather than redirect flow.
//   signInFlow: "redirect",
//   signInSuccessUrl: "/",
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     //firebase.auth.FacebookAuthProvider.PROVIDER_ID
//   ],
// };
const Signin = (Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  const redirect = Props.location.search
    ? Props.location.search.split("=")[1]
    : "/profile";

 const userInfor = Cookies.get("userInfor");

  useEffect(() => {
    if (userInfor) {
      Props.history.push(redirect);
    }
  }, [Props.history, redirect, userInfor]);
  //const { userInfor } = userSignin;
  // useEffect(() => {
  //   if (userInfor) {
  //     Props.history.push(redirect);
  //   }
  // }, [Props.history, redirect, userInfor]);

  const submit = async (infor) => {
    try {
      // const params = { _page: 1, _limit: 10 };
      const data = await loginApi.postUser(infor);

      // localStorage.setItem("userInfor", JSON.stringify(data));
      //console.log(localStorage.getItem('userInfor'));

      if (data) {
        Cookies.set("userInfor", JSON.stringify(data));
         Props.history.push(redirect);
      }

      // console.log("Fetch products successfully: ", response.data);
    } catch (error) {
      console.log("Failed to login: ", error);
    }
    //dispatch(signIn(infor));
  };
  return (
    <Container className="content">
      <Row>
        <Col sm="7">
          <img lassName="image_Shipper" src={ShipperImgae}></img>
        </Col>
        <Col sm={{ size: 5  }}>
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
                <Label for="exampleEmail">Username</Label>
                <Input
                  type="text"
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
              </Button>{" "}
              <Button>
                <Link to="/register">
                  <b>register</b>
                </Link>
              </Button>
              {/* <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              /> */}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
