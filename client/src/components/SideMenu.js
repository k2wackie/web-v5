import { useEffect } from "react";
import { Link } from "react-router-dom";

let sideList = "";
const sideMenu = {
  bulletin: ["new", "새 글 생성"],
  minipjt: ["calc", "계산기"],
};
const SideMenu = ({ chkSideMenu }) => {
  useEffect(() => {
    sideList = (
      <div className="sideMenu">
        <Link className="link" to={"/bulletin/" + sideMenu[chkSideMenu][0]}>
          {sideMenu[chkSideMenu][1]}
        </Link>
      </div>
    );
  }, [chkSideMenu]);

  return <div>{sideList}</div>;
};

export default SideMenu;
