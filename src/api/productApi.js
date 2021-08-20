import axiosClient from "./axiosClient";
const  ProductApi = {
  getAll: () => {
    const url = "/products";
    return axiosClient.get(url);
  },
  getId: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  }
}

export default ProductApi;
