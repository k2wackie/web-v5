import React from "react";
import SideBar from "../components/SideBar";
import Calculator from "../components/calculator";

function MiniPJT() {
  return (
    <div>
      <div className="contents">
        <SideBar chkSideBar={"minipjt"} />
        <div className="board">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default React.memo(MiniPJT);
