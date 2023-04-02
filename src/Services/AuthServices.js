import axios from "axios";
const API_URL = "http://localhost:3001/";

const authServices = {
  SignUp(credentials) {
    return axios.post(`${API_URL}SignUp`, credentials);
  },
  Login(credentials) {
    return axios.post(`${API_URL}Login`, credentials);
  },
  logout() {
    return localStorage.removeItem("token");
  },
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("token"));
  },
};

export default authServices;
