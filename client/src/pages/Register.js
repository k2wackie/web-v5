import React from "react";
import RegisterComp from "../components/RegisterComp";

const Register = () => {
  return (
    <div className="registerPage">
      <RegisterComp />
    </div>
  );
};

export default React.memo(Register);
