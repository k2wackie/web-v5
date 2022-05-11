import React from "react";
import "../../css/Chat.css";

const ChatCard = (data) => {
  // console.log(data);
  const userChk = data.userChk ? "sent" : "receive";

  return (
    <div className={userChk}>
      <div className="userName" style={data.style}>
        {data.sender.name}
      </div>
      <div className="message">{data.message}</div>
    </div>
  );
};

export default React.memo(ChatCard);
