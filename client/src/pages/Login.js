import React from "react";
import LoginComp from "../components/LoginComp";
import "../css/Login.css";

const Login = () => {
  return (
    <div className="loginPage">
      <LoginComp />
    </div>
  );
};

export default React.memo(Login);
