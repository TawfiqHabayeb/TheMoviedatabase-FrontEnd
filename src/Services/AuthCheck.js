import { MainContext } from "../Context/MainContextProvider";

import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const AuthCheck = (props) => {
  const { JWT } = useContext(MainContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {

    if (location.pathname === "/SignUp") {
      return;
    }
    if (!JWT || JWT === "") {
      return navigate("/");
    }
  }, [JWT]);

  return <div>{props.children}</div>;
};

export default AuthCheck;
