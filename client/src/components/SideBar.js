import React from "react";
import { Link } from "react-router-dom";

let sideList = "";
const sideMenu = {
  bulletin: ["new", "새 글 생성"],
  minipjt: ["calc", "계산기"],
};
const SideBar = ({ chkSideBar }) => {
  if (chkSideBar === "") {
    return (sideMenu.none = ["none", "none"]);
  }
  // console.log(chkSideBar, sideMenu);
  sideList = (
    <div className="sideBar">
      <Link className="link" to={"/bulletin/" + sideMenu[chkSideBar][0]}>
        {sideMenu[chkSideBar][1]}
      </Link>
    </div>
  );

  return <div>{sideList}</div>;
};

export default React.memo(SideBar);
