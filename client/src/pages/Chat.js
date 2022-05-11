import React, { useEffect, useState, useContext, useRef } from "react";
import io from "socket.io-client";
import SideBar from "../components/SideBar";
import { UserNameStateContext } from "../auth/Auth";
// import useChat from "../hooks/useChat";
import ChatCard from "./sections/ChatCard";
import axios from "axios";

const server = "https://ackie-pjt.herokuapp.com/";
const socket = io(server);

const Chat = () => {
  const messagesEnd = useRef();

  const userDB = useContext(UserNameStateContext);
  const [chatMessage, setChatMessage] = useState("");

  const [chat, setChat] = useState("");
  const [newChat, setNewChat] = useState();
  const [sumChat, setSumChat] = useState();

  useEffect(() => {
    const getChat = axios.get(`/api/chat/getchats`).then((response) => {
      setChat(response.data.data);
    });
    setChat(getChat);
  }, []);

  useEffect(() => {
    socket.on("Output Chat Message", (messageFromBackEnd) => {
      setNewChat(messageFromBackEnd);
    });
    const data = chat ? (newChat ? chat.concat(newChat) : chat) : newChat;
    setSumChat(data);
  }, [chat, newChat]);

  const handleChange = (e) => {
    const inputMSG = e.target.value;
    setChatMessage(inputMSG);
  };

  const submitChatMessage = (e) => {
    e.preventDefault();

    let userId = userDB.userId;
    let userName = userDB.userName;
    let nowTime = Date();
    let type = "Text";

    socket.emit("Input Chat Message", {
      chatMessage,
      userId,
      userName,
      nowTime,
      type,
    });

    setChatMessage("");
    setChat(sumChat);
  };
  useEffect(() => {
    messagesEnd.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });

  const renderCards = () => {
    return (
      chat &&
      chat.map((data) => (
        <ChatCard
          key={data._id}
          {...data}
          userChk={userDB.userId === data.sender._id}
        />
      ))
    );
  };

  return (
    <div className="chat">
      <div className="contents">
        <SideBar chkSideBar={""} />
        <div style={{ flexDirection: "column", width: 600 }} className="board">
          <div style={{ height: "600px", overflowY: "scroll", color: "white" }}>
            {chat && renderCards()}
            <div ref={messagesEnd} style={{ float: "left", clear: "both" }} />
          </div>
          <div style={{ display: "flex" }}>
            <input
              style={{ width: "100%", borderRadius: 5, border: 0 }}
              name="chat"
              type="text"
              value={chatMessage}
              onChange={handleChange}
              placeholder="대화를 입력하세요."
            />
            <button
              style={{
                width: "15%",
                height: 35,
                borderRadius: 15,
                backgroundColor: "#eecc0b",
                border: 0,
                cursor: "pointer",
              }}
              onClick={submitChatMessage}
            >
              전송
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Chat);
