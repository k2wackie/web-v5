import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BulletinStateContext } from "../App";

import SideBar from "../components/SideBar";
import BulletinEditor from "../components/BulletinEditor";

const Edit = () => {
  const [chosenData, setChosenData] = useState();
  const navigate = useNavigate();
  const id = useParams();
  const bulletinData = useContext(BulletinStateContext);
  useEffect(() => {
    if (bulletinData.length >= 1) {
      const targetBulletin = bulletinData.find(
        (it) => parseInt(it._id) === parseInt(id.id)
      );
      if (targetBulletin) {
        setChosenData(targetBulletin);
      } else {
        alert("없는 게시물입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, bulletinData, navigate]);

  return (
    <div>
      <div className="contents">
        <SideBar chkSideBar={"bulletin"} />
        <div className="bulletin">
          {chosenData && (
            <BulletinEditor isEdit={true} chosenData={chosenData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Edit);
