import axiosClient from "./axiosClient";
const orderApi = {
  order: (params) => {
    const url = "/api/donhang/khachhangdathang";
    return axiosClient.post(url, params );
  },
};

export default orderApi;
