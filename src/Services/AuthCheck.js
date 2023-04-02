import { MainContext } from "../Context/MainContextProvider";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthCheck = (props) => {
  const { JWT } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!JWT || JWT === " ") {
      return navigate("/");
    }
  }, []);

  return <div>{props.children}</div>;
};

export default AuthCheck;
