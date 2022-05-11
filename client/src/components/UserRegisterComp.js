import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useChkID from "../hooks/useChkID";
import useRegist from "../hooks/useRegist";

const UserRegisterComp = () => {
  const userNameInput = useRef();
  const userEmailInput = useRef();
  const userPWInput = useRef();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const [userChkPW, setUserChkPW] = useState("");

  const userInputData = {
    userName,
    userEmail,
    userPW,
    userChkPW,
    userNameInput,
    userEmailInput,
    userPWInput,
  };

  const [handleSubmit] = useRegist(userInputData);
  const [chkID, chkIDSubmit] = useChkID(userInputData);
  // console.log(chkID);
  const onClick = () => {
    return chkID ? handleSubmit() : alert("이메일 중복 확인을 해주세요.");
  };

  return (
    <div className="loginComp">
      <div className="registerBox">
        <div>회원가입</div>
        <div>
          <input
            ref={userEmailInput}
            type="email"
            name="userEmail"
            placeholder="이메일을 입력하세요."
            value={userEmail}
            onChange={(e) => setUserID(e.target.value)}
          />
          <button className="chkBtn" onClick={chkIDSubmit}>
            중복확인
          </button>
        </div>
        <div>
          <input
            ref={userNameInput}
            type="text"
            name="userName"
            placeholder="이름을 입력하세요."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            ref={userPWInput}
            type="password"
            name="userPSW"
            placeholder="비밀번호를 입력하세요."
            value={userPW}
            onChange={(e) => setUserPW(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="userChkPSW"
            placeholder="비밀번호를 다시 입력하세요."
            value={userChkPW}
            onChange={(e) => setUserChkPW(e.target.value)}
          />
        </div>
        <div>
          <button onClick={onClick}>확 인</button>
        </div>
        <div>
          <p className="registerMSG">
            <Link className="registerLink link" to="/login">
              로그인으로
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserRegisterComp);
