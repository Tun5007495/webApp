import axiosClient from "./axiosClient";
const  ProductApi = {
  getAll: () => {
    const url = "/products";
    return axiosClient.get(url);
  },
  getId: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  postComment:(data)=>{
    const url = "/products/comment";
    return axiosClient.post(url,data);
  }
}

export default ProductApi;
