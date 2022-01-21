import { useDispatch } from "react-redux";
import {
  Col,
  Container,
  Row,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";
import "../../css/content.css";
import Item from "./item";
import React, { useEffect, useState } from "react";
import productApi from "../../api/productApi";
import { setData } from "../../redux/products";
import LoadingBox from "../../components/loadingBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselImage1 from "../../assets/di-cho-thue.jpg";
import CarouselImage2 from "../../assets/images.png";
const Items = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [price, setPrice] = useState(40);
  const [search, setSearch] = useState();
  const [change, setChange] = useState({
    supplier: "",
    category: "",
    price_from: 0,
    price_to: 999999,
    currentPage: 1,
    option: "",
    sort_by: "",
    sort_order: "",
    list: [],
    tags: "",
  });
  const [show, setShow] = useState(false);
  const [value, setValue] = useState([10000, 999999]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };
  const ChangeMoney = (x) => {
    if (x === null || x === undefined) return "";
    return x.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
  };
   const hotels = [
     { name: "A", price: 40 },
     { name: "B", price: 50 },
     { name: "C", price: 60 },
   ];
   const handleInput = (e) => {
     setPrice(e.target.value);
   };
  const hanldeMoney = () => {
    setShow(!show);
    setChange({
      ...change,
      price_from: value[0],
      price_to: value[1],
      currentPage: 1,
    });
  };
  const searchHandle = async () => {
    console.log(search);
    const listProduct = await productApi.searchByName(search);
    console.log("list", listProduct);
    if (listProduct.length > 0) {
      setProducts(listProduct);
    }
    setSearch("");
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        // const params = { _page: 1, _limit: 10 };
        const response = await productApi.getAll();

        setLoading(true);
        setProducts(response.data);
        dispatch(setData(response));
        // console.log("Fetch products successfully: ", response.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);
  return (
    <Container>
      <div className="content">
        <Slider {...settings}>
          <div>
            <img style={{ minWidth: "100%" }} src={CarouselImage1} />
          </div>

          <div>
            <img style={{ minWidth: "100%" }} src={CarouselImage2} />
          </div>
        </Slider>

        <InputGroup>
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Nhập từ khoá"
            value={search}
          />
          <InputGroupText onClick={() => searchHandle()}>search</InputGroupText>
        </InputGroup>
        <div className="App">
          <input type="range" onInput={handleInput} />
          <h1>Price: {price}</h1>
          <div>
            {hotels
              .filter((hotel) => {
                return hotel.price > parseInt(price, 10);
              })
              .map((hotel) => {
                return (
                  <p key={hotel.name}>
                    {hotel.name} | {hotel.price} &euro;{" "}
                  </p>
                );
              })}
          </div>
        </div>
        {/* <Carousel>
          <div>
            <img src={CarouselImage1} />
            <p className="legend">Legend 1</p>
          </div>

          <div>
            <img src={CarouselImage2} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel> */}
        {isLoading === false ? (
          <LoadingBox />
        ) : (
          <Row>
            {products?.map((item) => (
              <Col key={item.id} md={3} sm={3} lg={3}>
                <Item item={item}></Item>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </Container>
  );
};

export default Items;
