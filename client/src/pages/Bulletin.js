import React from "react";

import SideBar from "../components/SideBar";
import BulletinList from "../components/BulletinList";

const Bulletin = () => {
  return (
    <div className="HomePage">
      <div className="contents">
        <SideBar chkSideBar={"bulletin"} />
        <div className="bulletin">
          <BulletinList />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Bulletin);
