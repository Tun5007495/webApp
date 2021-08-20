import axiosClient from "./axiosClient";
const orderApi = {
  order: (params) => {
    const url = "/order";
    return axiosClient.post(url, params );
  },
};

export default orderApi;
