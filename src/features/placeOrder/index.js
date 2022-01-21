import React from "react";
import { useSelector } from "react-redux";
//import { setShippingAddress } from "../../redux/cart";
import CheckSteps from "../../components/checksteps.js";
import { Container, Row, Col } from "reactstrap";
import OrderItems from "./orderItem";
import "../../css/placeOrder.css";
import OrderApi from "../../api/orderApi";
import Cookies from "js-cookie";
// import { ToastContainer, toast } from "react-toastify";
const PlaceOrder = (Props) => {
  //   const [fullname, setFullname] = useState();
  //   const [address, setAddress] = useState();
  //   const [city, setCity] = useState();
  //   const [country, setCountry] = useState();
  //   const [postalCode, setPostalCode] = useState();
  const stateCart = useSelector((state) => state.cart);
  const {
    idDiaChi,
    apartmentnumber,
    streetnames,
    wards,
    fullname,
    district,
    address,
    city,

    sdt,
  } = stateCart.shippingAddress;
  const paymentMethod = stateCart.paymentMethod;
  const items = useSelector((state) => state.cart.cartItems);

  //const dispatch = useDispatch();
  // const userSignin = useSelector((state) => state.auth);

  const total = items.reduce(function (prev, cur) {
    return prev + cur.GiaSP * cur.SoLuong;
  }, 0);
  const userInfor = JSON.parse(Cookies.get("userInfor"));
  console.log(userInfor);
  if (!userInfor) {
    Props.history.push("/signin/redirect=/");
  }

  const submitHandle = (e) => {
    e.preventDefault();
    try {
      let donHang = {
        KhachHangId: userInfor.Id,

        cuaHangId: 1,
        shipperId: null,
        diaChiGiao: {
          tinhTP: city,
          soNhaTo: apartmentnumber,
          duong: streetnames,
          xaPhuong: wards,
          quanHuyen: district,
        },
        TTDHId: 1,
        PTTTId: 1,
        listSanPham: items,
        TongTien: total,
        SDT: sdt,
        NguoiNhan: fullname,
        DiaChiGiaoId: idDiaChi,
      };
      console.log("1", donHang);

      const callApi = async () => {
        await OrderApi.order({
          ...donHang,
        });
      };

      const temp = callApi();
      console.log("2", temp);
      // if () {
      //   Props.history.push("/home");
      // }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container className="content">
      <CheckSteps step1 step2 step3 step4></CheckSteps>

      <form className="form-placeOrder">
        <Row>
          <Col xs="7" md="7" sm="7">
            <Row className="placeOrder-border">
              <div>
                <p>
                  <h5>Shipping</h5>
                </p>
                <p>
                  <b>Name: </b>
                  {fullname}
                </p>
                <p>
                  <b>Phone Number: </b>
                  {sdt}
                </p>
                <p>
                  <b>Address:</b> {idDiaChi},{apartmentnumber}, {streetnames},{wards},{" "}
                  {district} ,{city}
                </p>
              </div>

              {/* <p>{address},{city},{country},{postalCode}</p> */}
            </Row>

            <Row className="placeOrder-border">
              <div>
                <h5>Payment </h5>

                {/* <p>{paymentMethod}</p> */}
                <p>
                  <b>Method:</b> {paymentMethod}
                </p>
              </div>
            </Row>

            <Row className="placeOrder-border">
              <Col sm="12">
                <h5>Order Items</h5>
              </Col>
              <Col>
                {items.map((item) => (
                  <OrderItems key={item._id} item={item}></OrderItems>
                ))}
              </Col>
            </Row>
          </Col>
          <Col xs="4" md="4" sm="4" className="placeOrder-border">
            <h6>
              Order Sumary:{"   "}
              {total}$
            </h6>
            <button className="placeOrder-button" onClick={submitHandle}>
              Place Order
            </button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default PlaceOrder;
