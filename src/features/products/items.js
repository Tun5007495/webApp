import { useDispatch } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import "../../css/content.css";
import Item from "./item";
import React,{useEffect, useState} from 'react';
import productApi from "../../api/productApi";
import { setData } from "../../redux/products";
import LoadingBox from '../../components/loadingBox'
const Items = () => {
  const [ products ,setProducts] = useState([]);
  const [isLoading,setLoading] = useState(false);
  const  dispatch = useDispatch();
  useEffect(() => {

    const fetchProductList = async () => {
      try {
        // const params = { _page: 1, _limit: 10 };
        const response = await productApi.getAll();
       
        setLoading(true);
        setProducts(response);
        dispatch(setData(response));
       // console.log("Fetch products successfully: ", response.data);
     
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, [dispatch]);
  return (
    <Container>
       <div className="content">
      {isLoading === false? <LoadingBox/>:   <Row>
        {products.map((item) => (
          <Col key={item._id} md={6} lg={4}>
            <Item item={item}></Item>
          </Col>
        ))}
      </Row>}
   
    </div>
      </Container>
   
  );
};

export default Items;
