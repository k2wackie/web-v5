import React from "react";
import SideBar from "../components/SideBar";
import Calculator from "../components/calculator";

function MiniPJT() {
  return (
    <div className="HomePage">
      <div className="contents">
        <SideBar chkSideBar={"minipjt"} />
        <div className="bulletin">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default React.memo(MiniPJT);
