import React from "react";
import UserRegisterComp from "../components/UserRegisterComp";

const UserRegister = () => {
  return (
    <div className="registerPage">
      <UserRegisterComp />
    </div>
  );
};

export default React.memo(UserRegister);
