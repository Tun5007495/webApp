import React, { useState, useEffect } from "react";
import classnames from "classnames";
// import { useDispatch} from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  ModalHeader,
  Modal,
  ModalFooter,
  ModalBody,
  Card,
  CardTitle,
  CardText,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import ModeFeedback from "./modalFeedback";
import Avatar from "react-avatar";
import Cookies from "js-cookie";
import "../../css/profile.css";
import orderStatusApi from "../../api/orderStatusApi";
import FeedbackApi from "../../api/feedbackApi";
import orderApi from "../../api/orderApi";
// import { signOut } from "../../redux/auth";
// import { get } from "@reduxjs/toolkit/node_modules/immer/dist/internal";

const Profile = (Props) => {
  // const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [activeTab1, setActiveTab1] = useState("1");
  const [idOrder, setIdOrder] = useState();
  const [listTrangThai, setListTrangThai] = useState([]);
  const userInfor = JSON.parse(Cookies.get("userInfor"));
  const [listOrder, setListOrder] = useState();
  const [showDetaiOrder, setShowDetaiOrder] = useState(false);
  const [listDetaiOrder, setlistDetaiOrder] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [diem, setDiem] = useState(5);
  const [Feedback, setFeedback] = useState("");
  const [option, setOption] = useState("1");
  const [checkFeedback, setcheckFeedback] = useState(0);
  const [change, setChange] = useState({
    status: "",
    currentPage: 1,
    keyword: "",
  });

  if (!userInfor) {
    Props.history.push("/signin");
  }
  const listDiem = [1, 2, 3, 4, 5];
  const logout = () => {
    Cookies.remove("userInfor");
    Props.history.push("/signin");
  };
  const handleDetailorder = async (id) => {
    setIdOrder(id);
    const list = await orderApi.getDetailOrder(id);
    console.log(list.data);
    setlistDetaiOrder(list.data);
    setShowDetaiOrder(true);
  };
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const toggle1 = (tab) => {
    if (activeTab1 !== tab) setActiveTab1(tab);
  };
  useEffect(() => {
    try {
      const fectList = async () => {
        const listTT = await orderStatusApi.getAll();

        const ListOrder = await orderApi.getOrderByIdKhachHang(userInfor.Id);

        setListOrder(ListOrder.data);

        console.log("da", ListOrder.data);
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
  const handleFeedback = async (data) => {
    try {
      console.log("data", data);
      if (data.noiDung === "") {
        toast.warning("vui lòng nhập đánh giá!");
      } else {
        const postFeedback = await FeedbackApi.feedback(data);
        toast.success("Đánh giá thành công!");
        setShowModal(!setShowModal);
      }
    } catch (error) {
      toast.warning("Đánh giá không thành công!");
    }

    // setShowModal(!showModal);
  };
  const handleShowModal = async (item) => {
    try {
      console.log(item);
      const temp = await FeedbackApi.CheckfeedbackOrder(item);
      console.log("temp",temp);
      setcheckFeedback(temp);
      if (temp === 3) {
        toast.warning("đơn hàng đã đánh giá cho shipper và cửa hàng!");
      } else if (checkFeedback) {
        if (temp === 1) {
          toggle1("2");
        } else {
          toggle1("1");
        }

        setShowModal(!showModal);
      } else {
        setShowModal(!showModal);
      }
    } catch (err) {
      console.log(err);
    }

    //
  };
  const handleSetDiem = (item)=>{
console.log("diem",item);
  }
  return (
    <Container className="content">
      <ToastContainer />
      <div className="profile">
        <h2>
          <b>Tài khoản của bạn</b>
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
                         
                          onClick={() => {
                            setShowDetaiOrder(false);
                          }}
                          outline
                          style={{
                            padding: "7px",
                            backgroundColor: "#69D84F",
                            color:"white"
                          }}
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
                              <th>Xem chi tiết</th>
                              <th>Đánh giá</th>
                            </tr>
                          </thead>
                          <tbody>
                            {listOrder
                              ? listOrder.map((item, index) => {
                                  return (
                                    <tr>
                                      <th scope="row">{index}</th>
                                      <td>Jacob</td>
                                      <td>${item.tongTien}</td>
                                      <td>{item.ngayMuaHang}</td>
                                      <td>{item.trangThaiDonHang.ten}</td>
                                      <td>
                                        <Button
                                          onClick={() => {
                                            handleDetailorder(item.id);
                                          }}
                                          style={{
                                            padding: "7px",
                                            backgroundColor: "#69D84F",
                                          }}
                                        >
                                          Xem chi tiết
                                        </Button>
                                      </td>
                                      <td>
                                        <div>
                                          <Button
                                            color="danger"
                                            onClick={() => {
                                              handleShowModal(item.id);
                                            }}
                                            style={{
                                              padding: "7px",
                                              backgroundColor: "#69D84F",
                                            }}
                                          >
                                            Đánh giá
                                          </Button>
                                          <Modal
                                            toggle={() => {
                                              setShowModal(!showModal);
                                            }}
                                            isOpen={showModal}
                                          >
                                            <ModalHeader
                                              toggle={() => {
                                                setShowModal(!showModal);
                                              }}
                                            >
                                              Đánh giá đơn hàng #{item.id}
                                            </ModalHeader>
                                            <ModalBody>
                                              <div>
                                                <Nav tabs>
                                                  <NavItem>
                                                    <NavLink
                                                      className={classnames({
                                                        active:
                                                          activeTab1 === "1",
                                                      })}
                                                      onClick={() => {
                                                        setFeedback("");
                                                        if (
                                                          checkFeedback == 1
                                                        ) {
                                                          toast.warning(
                                                            "đơn hàng đã đánh giá cửa hàng!"
                                                          );
                                                        } else {
                                                          toggle1("1");
                                                        }
                                                      }}
                                                    >
                                                      Cửa hàng
                                                    </NavLink>
                                                  </NavItem>
                                                  <NavItem>
                                                    <NavLink
                                                      className={classnames({
                                                        active:
                                                          activeTab1 === "2",
                                                      })}
                                                      onClick={() => {
                                                        setFeedback("");
                                                        if (
                                                          checkFeedback == 2
                                                        ) {
                                                          toast.warning(
                                                            "đơn hàng đã đánh giá shipper!"
                                                          );
                                                        } else {
                                                          toggle1("2");
                                                        }
                                                      }}
                                                    >
                                                      Shipper
                                                    </NavLink>
                                                  </NavItem>
                                                </Nav>
                                                <TabContent
                                                  activeTab={activeTab1}
                                                >
                                                  <TabPane tabId="1">
                                                    <Row>
                                                      <Col sm="3">
                                                        Chọn sao:
                                                      </Col>
                                                      <Col sm="9">
                                                        <div className="d-flex  p-2">
                                                          <Dropdown
                                                          
                                                            isOpen={
                                                              dropdownOpen
                                                            }
                                                            toggle={() => {
                                                              setdropdownOpen(
                                                                !dropdownOpen
                                                              );
                                                            }}
                                                          >
                                                            <DropdownToggle
                                                              caret
                                                            >
                                                              {diem}
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                              {listDiem?.map(
                                                                (
                                                                  item,
                                                                  index
                                                                ) => {
                                                                  return (
                                                                    <DropdownItem
                                                                      key={
                                                                        index
                                                                      }
                                                                      onClick={() => {
                                                                        handleSetDiem(item);
                                                                        setDiem(
                                                                          item
                                                                        );
                                                                      }}
                                                                    >
                                                                   
                                                                        {item}
                                                                     
                                                                    </DropdownItem>
                                                                  );
                                                                }
                                                              )}
                                                            </DropdownMenu>
                                                          </Dropdown>
                                                        </div>
                                                      </Col>
                                                      <Col
                                                        sm="3"
                                                        style={{
                                                          padding: "1rem",
                                                        }}
                                                      >
                                                        Nhận xét:
                                                      </Col>
                                                      <Col
                                                        sm="9"
                                                        style={{
                                                          padding: "1rem",
                                                        }}
                                                      >
                                                        <input
                                                          className="input-shipping"
                                                          id="fullname"
                                                          type="text"
                                                          placeholder="nhập đánh giá cửa hàng"
                                                          value={Feedback}
                                                          onChange={(e) =>
                                                            setFeedback(
                                                              e.target.value
                                                            )
                                                          }
                                                          required
                                                        ></input>
                                                      </Col>
                                                    </Row>
                                                  </TabPane>
                                                  <TabPane tabId="2">
                                                    <Row>
                                                      <Col sm="3">
                                                        Chọn sao:
                                                      </Col>

                                                      <Col sm="9">
                                                        <div className="d-flex  p-2">
                                                          <Dropdown
                                                            isOpen={
                                                              dropdownOpen
                                                            }
                                                            toggle={() => {
                                                              setdropdownOpen(
                                                                !dropdownOpen
                                                              );
                                                            }}
                                                         
                                                          >
                                                            <DropdownToggle
                                                              caret
                                                            >
                                                              {diem}
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                              {listDiem?.map(
                                                                (
                                                                  item,
                                                                  index
                                                                ) => {
                                                                  return (
                                                                    <DropdownItem
                                                                      key={
                                                                        index
                                                                      }
                                                                      onClick={() => {
                                                                      handleSetDiem(1)
                                                                        setDiem(
                                                                          item
                                                                        );
                                                                      }}
                                                                    >
                                                                      {item}
                                                                    </DropdownItem>
                                                                  );
                                                                }
                                                              )}
                                                            </DropdownMenu>
                                                          </Dropdown>
                                                        </div>
                                                      </Col>
                                                      <Col
                                                        sm="3"
                                                        style={{
                                                          padding: "1rem",
                                                        }}
                                                      >
                                                        Nhận xét:
                                                      </Col>
                                                      <Col
                                                        sm="9"
                                                        style={{
                                                          padding: "1rem",
                                                        }}
                                                      >
                                                        <input
                                                          className="input-shipping"
                                                          id="fullname"
                                                          type="text"
                                                          placeholder="nhập đánh giá shipper"
                                                          value={Feedback}
                                                          onChange={(e) =>
                                                            setFeedback(
                                                              e.target.value
                                                            )
                                                          }
                                                          required
                                                        ></input>
                                                      </Col>
                                                    </Row>
                                                  </TabPane>
                                                </TabContent>
                                              </div>
                                            </ModalBody>
                                            <ModalFooter>
                                              <Button
                                                // style={{
                                                //   padding: "7px",
                                                //   backgroundColor: "#69D84F",
                                                // }}
                                                color="success"
                                                onClick={() => {
                                                  handleFeedback({
                                                    donHangId: item.id,
                                                    LoaiDGId: activeTab1,
                                                    noiDung: Feedback,
                                                    soDiem: diem,
                                                  });
                                                }}
                                              >
                                                Nhận xét
                                              </Button>{" "}
                                              {/* <Button
                                                onClick={() => {
                                                  setShowModal(!showModal);
                                                }}
                                              >
                                                Cancel
                                              </Button> */}
                                            </ModalFooter>
                                          </Modal>
                                        </div>
                                      </td>
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
