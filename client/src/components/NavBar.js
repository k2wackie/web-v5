import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainMenu from "./MainMenu";
import { AuthStateContext } from "../auth/Auth";
import uselogout from "../hooks/useLogout";

const NavBar = () => {
  const isAuth = useContext(AuthStateContext);
  const navigate = useNavigate();

  const [logoutHandler] = uselogout();

  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <div className="NavBar">
      <Link className="logo link" to="/">
        ACKIE PJT
      </Link>
      {isAuth ? <MainMenu /> : ""}
      {isAuth ? (
        <button className="logout" onClick={logoutHandler}>
          로그아웃
        </button>
      ) : (
        <button className="login" onClick={loginHandler}>
          로그인
        </button>
      )}
    </div>
  );
};

export default React.memo(NavBar);
