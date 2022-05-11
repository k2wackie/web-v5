import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AuthStateContext = React.createContext();
export const UserNameStateContext = React.createContext();

const Auth = (SpecificComponent, option, adminRoute = null) => {
  //option
  //null: 아무나 출입이 가능한 페이지
  //true: 로그인한 유저만 출입이 가능한 페이지
  //false: 로그인한 유저는 출입 불가능한 페이지
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState(false);
  const [userId, setUserId] = useState(false);

  const userDB = {
    userName,
    userId,
  };

  const AuthenticationCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
      fetch("/api/auth")
        .then((res) => res.json())
        .then((res) => {
          const is_Auth = res.isAuth;
          const userName = res.userName;
          const userId = res.user_ID;
          setIsAuth(is_Auth);
          setUserName(userName);
          setUserId(userId);
          if (!is_Auth) {
            // navigate("/login", { replace: true });
            if (option) {
              navigate("/login", { replace: true });
            }
          } else {
            if (adminRoute && !res.isAdmin) {
              navigate("/", { replace: true });
            } else {
              if (option === false) {
                navigate("/", { replace: true });
              }
            }
          }
        });
    }, [navigate]);
    return (
      <AuthStateContext.Provider value={isAuth}>
        <UserNameStateContext.Provider value={userDB}>
          <SpecificComponent />
        </UserNameStateContext.Provider>
      </AuthStateContext.Provider>
    );
  };

  return AuthenticationCheck;
};

export default Auth;
