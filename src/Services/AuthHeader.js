import { Json } from "react-router-dom";

export default AuthHeader = () => {
  const token = Json.parse(localStorage.getItem("token"));

  if (token) {
    return { Authorization: "Bearer" + token };
  }
  return {};
};
