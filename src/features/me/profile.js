import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import Avatar from "react-avatar";
import "../../css/profile.css";

import { signOut } from "../../redux/auth";

const Login = (Props) => {
  const dispatch = useDispatch();
  const userInfor = useSelector((state) => state.auth.userInfor);
  if (!userInfor) {
    Props.history.push("/signin");
  }

  const logout = () => {
    dispatch(signOut());
  };
  return (
    <Container className="content">
      <div className="profile">
        <Row>
          <Col>
          <Avatar
          className="profile-avatar"
          name={userInfor?userInfor.username:""}
         // src="https://image.thanhnien.vn/1024/uploaded/haoph/2021_03_06/img_0467_lsvb.jpg"
          round={true}
         size="100%"
        />
          </Col>
          <Col>
            <h2>
              <b>YOUR PROFILE</b>
            </h2>
            <hr />
            <h3>
              <b>{userInfor?userInfor.username:""}</b>
            </h3>
            <p>Student</p>
            <p>
              {" "}
              <i className="fas fa-map-marker-alt"></i> Binh Dinh
            </p>
            <Button onClick={() => logout()} className="profile-buttonLogout">
              <h6>Logout</h6>
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Login;
