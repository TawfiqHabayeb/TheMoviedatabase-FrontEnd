import axios from "axios";
import AuthHeader from "./AuthHeader";

const API_URl = "http://localhost:3001/api/";

const USerServices = {
  getUserdash() {
    axios.get(API_URl + "user/dash", { header: AuthHeader() });
  },
};

export default USerServices;
