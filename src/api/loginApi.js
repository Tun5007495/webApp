import axiosClient from "./axiosClient";
const UserApi = {
  postUser: (data) => {
    const url = "/login";
    return axiosClient.post(url, data );
  },
};

export default UserApi;
