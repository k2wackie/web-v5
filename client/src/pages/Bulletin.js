import React from "react";

import SideBar from "../components/SideBar";
import BulletinList from "../components/BulletinList";

const Bulletin = () => {
  return (
    <div>
      <div className="contents">
        <SideBar chkSideBar={"bulletin"} />
        <div className="board">
          <BulletinList />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Bulletin);
