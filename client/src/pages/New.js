import React from "react";

import SideBar from "../components/SideBar";
import BulletinEditor from "../components/BulletinEditor";

const New = () => {
  return (
    <div>
      <div className="contents">
        <SideBar chkSideBar={"bulletin"} />
        <div className="board">
          <BulletinEditor isEdit={false} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(New);
