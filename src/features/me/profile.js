import React, { useState, useEffect } from "react";
import classnames from "classnames";
// import { useDispatch} from "react-redux";
import userDefaut from "../../assets/user.png";
import {
  Button,
  Col,
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
} from "reactstrap";
import Avatar from "react-avatar";
import Cookies from "js-cookie";
import "../../css/profile.css";
import orderStatusApi from "../../api/orderStatusApi";

import orderApi from "../../api/orderApi";
// import { signOut } from "../../redux/auth";
// import { get } from "@reduxjs/toolkit/node_modules/immer/dist/internal";

const Profile = (Props) => {
  // const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [idOrder, setIdOrder] = useState();
  const [listTrangThai, setListTrangThai] = useState([]);
  const userInfor = JSON.parse(Cookies.get("userInfor"));
  const [listOrder, setListOrder] = useState();
  const [showDetaiOrder, setShowDetaiOrder] = useState(false);
  const [listDetaiOrder, setlistDetaiOrder] = useState([]);
  
  const [option, setOption] = useState("1");
  const [change, setChange] = useState({
    status: "",
    currentPage: 1,
    keyword: "",
  });
  if (!userInfor) {
    Props.history.push("/signin");
  }

  const logout = () => {
    Cookies.remove("userInfor");
    Props.history.push("/signin");
  };
const handleDetailorder = async(id)=>{
setIdOrder(id);
 const list = await orderApi.getDetailOrder(id);
console.log(list.data)
 setlistDetaiOrder(list.data);
 setShowDetaiOrder(true);
}
  const toggle = (tab) => {
    // console.log('abc', link);
    // window.scrollTo(0, 500);
    // if (idURl !== "") {
    //   router.push(`/tai-khoan-cua-toi`);
    // }
    // if (activeTab === "1" && tab === "1") {
    //   router.push("/tai-khoan-cua-toi");
    //   return;
    // }
    if (activeTab !== tab) setActiveTab(tab);
  };
  useEffect(() => {
    try {
      const fectList = async () => {
        const listTT = await orderStatusApi.getAll();

        const ListOrder = await orderApi.getOrderByIdKhachHang(userInfor.Id);

        setListOrder(ListOrder.data);

        console.log("da", listTT.data);
        listTT.data.unshift({ id: 0, ten: "Tất cả" });

        setListTrangThai(listTT.data);
      };
      fectList();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleOption = async (index, value) => {
    console.log(index, value);
    setOption(index);
    setChange({ ...change, status: value });

    if (value === 0) {
      const ListOrder = await orderApi.getOrderByIdKhachHang(userInfor.Id);
      setListOrder(ListOrder.data);
    } else {
      const fetchListDHId = await orderApi.getOrderByIdKHandStatus({
        idUser: userInfor.Id,
        idTT: value,
      });
      console.log(fetchListDHId);
      if (fetchListDHId.data === "") {
        setListOrder([]);
      } else {
        setListOrder(fetchListDHId.data);
      }
    }
  };
  function reverseString(str) {
    let temp = str.split("-");
    return temp[2] + "-" + temp[1] + "-" + temp[0];
  }

  return (
    <Container className="content">
      <div className="profile">
        <h2>
          <b>YOUR PROFILE</b>
        </h2>

        <div>
          <Row>
            <Col sm="2" lg="2">
              <div className="group_user">
                <img
                  src={userDefaut}
                  style={{ minWidth: "20%", maxWidth: "20%" }}
                />
                <h3>
                  <b>{userInfor ? userInfor.username : ""}</b>
                </h3>
              </div>
              <Nav tabs vertical>
                <NavItem title="Quản lý đơn hàng">
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Quản lí tài khoản
                  </NavLink>
                </NavItem>
                <NavItem title="Thông tin tài khoản">
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Quản lí đơn hàng
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm="10" lg="10">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col>
                      <hr />
                      <div>
                        {userInfor?.username
                          ? "username: " + userInfor.username
                          : ""}
                      </div>
                      <div>
                        {userInfor?.email ? "email: " + userInfor.email : ""}
                      </div>
                      <div>{userInfor?.SDT ? "SDT: " + userInfor.SDT : ""}</div>
                      <div>
                        <b>{userInfor?.GioiTinh ? userInfor.GioiTinh : ""}</b>
                      </div>

                      <p>
                        {" "}
                        <i className="fas fa-map-marker-alt"></i>
                      </p>
                      {/* <Button
                        onClick={() => logout()}
                        className="profile-buttonLogout"
                      >
                        <h6>Logout</h6>
                      </Button> */}
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row className="quan_li_tai_khoan">
                    {showDetaiOrder ? (
                      <div>
                       
                        <Button
                          color="success"
                          onClick={() => {
                            setShowDetaiOrder(false);
                          }}
                          outline
                        >
                          Trở lại
                        </Button>
                        <h3>ID ĐƠN HÀNG:{idOrder}</h3>
                        <Table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Sản phẩm</th>
                              <th>Đơn Giá</th>
                              <th>Số lượng</th>
                              <th>Tổng</th>
                            </tr>
                          </thead>
                          <tbody>
                            {listDetaiOrder
                              ? listDetaiOrder.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <th scope="row">{index}</th>
                                      <td>{item.sanPhamId}</td>
                                      <td>${item.donGia}</td>

                                      <td>{item.soLuong}</td>
                                      <td>{item.soLuong * item.donGia}</td>
                                    </tr>
                                  );
                                })
                              : ""}
                          </tbody>
                        </Table>
                      </div>
                    ) : (
                      <div>
                        <ul className="list_quan_li_tai_khoan">
                          {listTrangThai?.map((item, index) => {
                            return (
                              <li key={index}>
                                <button
                                  onClick={() =>
                                    handleOption(`${index + 1}`, item.id)
                                  }
                                  value={item.value}
                                >
                                  <p
                                    className={`${
                                      option === `${index + 1}`
                                        ? "active status_name"
                                        : "status_name"
                                    }`}
                                  >
                                    {item.ten}
                                  </p>
                                </button>
                              </li>
                            );
                          })}
                        </ul>

                        <Table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Đơn hàng</th>
                              <th>Tổng tiền</th>
                              <th>Thời gian đặt hàng</th>
                              <th>Trạng thái đơn hàng</th>
                            </tr>
                          </thead>
                          <tbody>
                            {listOrder
                              ? listOrder.map((item, index) => {
                                  return (
                                    <tr
                                      onClick={() => {
                                        handleDetailorder(item.id);
                                      }}
                                    >
                                      <th scope="row">{index}</th>
                                      <td>Jacob</td>
                                      <td>${item.tongTien}</td>
                                      <td>
                                        {/* {item.ngayMuaHang} */}
                                        {reverseString(
                                          item.ngayMuaHang.split("T")[0]
                                        )}
                                      </td>
                                      <td>{item.tTDHId}</td>
                                    </tr>
                                  );
                                })
                              : ""}
                          </tbody>
                        </Table>
                      </div>
                    )}

                    <hr></hr>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </div>

        {/* <Row>
          <Col>
            <Avatar
              className="profile-avatar"
              name={userInfor ? userInfor.username : ""}
              // src="https://image.thanhnien.vn/1024/uploaded/haoph/2021_03_06/img_0467_lsvb.jpg"
              round={true}
              size="100%"
            />
          </Col>
          <Col>
            <hr />
            <h3>
              <b>{userInfor ? userInfor.username : ""}</b>
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
        </Row> */}
      </div>
    </Container>
  );
};

export default Profile;
