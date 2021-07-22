import axiosClient from "./axiosClient";
const CartApi = {
  getAll: (params) => {
    const url = "/cart";
    return axiosClient.get(url, { params });
  },
};

export default CartApi;
