import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setShippingAddress } from "../../redux/cart";
import CheckSteps from "../../components/checksteps.js";
import { Container } from "reactstrap";
import "../../css/shipping.css";
const Shipping = (Props) => {
  const [fullname, setFullname] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [postalCode, setPostalCode] = useState();
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.auth);
const cart = useSelector((state)=>state.cart);
const {cartItems} = cart;
  const {userInfor} = userSignin;
  if (!userInfor) {
   Props.history.push('/signin?redirect=shipping');
 }
 if (!cartItems.length) {
    alert("cart is empty!");
    Props.history.push('/');
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setShippingAddress({ fullname, address, city, country, postalCode }));
Props.history.push('/payment');
  };

  return (
    <Container className="content">
      <CheckSteps step1 step2></CheckSteps>

      <form className="form-shipping" onSubmit={submitHandler}>
        <h5>Shipping information</h5>
        <label className="label-shipping" htmlFor="fullname">
          Full Name
        </label>
        <br />
        <input
          className="input-shipping"
          id="fullname"
          type="text"
          placeholder="Enter full name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        ></input>
        <br />
        <label className="label-shipping" htmlFor="address">
          Address
        </label>
        <br />
        <input
          className="input-shipping"
          id="address"
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></input>
        <br />
        <label className="label-shipping" htmlFor="city">
          City
        </label>
        <br />
        <input
          className="input-shipping"
          id="city"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        ></input>
        <br />
        <label className="label-shipping" htmlFor="country">
          Country
        </label>
        <br />
        <input
          className="input-shipping"
          id="country"
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        ></input>
        <br />
        <label className="label-shipping" htmlFor="postalCode">
          Postal Code
        </label>
        <br />
        <input
          className="input-shipping"
          id="postalCode"
          type="text"
          placeholder="Enter postal code"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        ></input>
        <br />
        <button className="input-shipping button-shipping" type="submit">
          Continue
        </button>
      </form>
    </Container>
  );
};

export default Shipping;
