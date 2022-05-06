import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Calculator from "../components/calculator";

function MiniPJT() {
  return (
    <div className="HomePage">
      <Header />
      <div className="contents">
        <SideMenu chkSideMenu={"minipjt"} />
        <div className="bulletin">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default MiniPJT;
