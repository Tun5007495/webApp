import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import avatar from "../../assets/avatar.jpg";
import "../../css/profile.css";

import { signOut } from "../../redux/auth";

const Login = (Props) => {
  const dispatch = useDispatch();
  const userInfor = useSelector((state) => state.auth.userInfor);

  useEffect(() => {
    if (!userInfor) {
      Props.history.push("/signin");
    }
  }, [Props.history, userInfor]);
  const logout = () => {
    dispatch(signOut());
  };
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
