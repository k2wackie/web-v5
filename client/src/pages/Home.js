import React from "react";
import Header from "../components/Header";
import imgA from "../images/nature-3191091_1920.png";
// const imgA = require("../images/nature-3191091_1920.png");
// import SideMenu from "../components/SideMenu";
// import BulletinList from "../components/BulletinList";

const Home = () => {
  return (
    <div className="HomePage">
      <Header />
      <img src={imgA} style={{ width: "100%" }} />
      <div style={{ color: "white", fontSize: 20 }} className="contents">
        거인의 어깨에 올라서서 더 넓은 세상을 바라보라
      </div>
    </div>
  );
};

export default React.memo(Home);
