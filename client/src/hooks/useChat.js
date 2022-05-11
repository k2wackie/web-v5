// import React, { useEffect, useState } from "react";

// const useChat = (newChat) => {
//   const [getChat, setGetChat] = useState([]);

//   useEffect(() => {
//     fetch("/api/chat/getchats")
//       .then((res) => res.json())
//       .then((newData) => {
//         // console.log(newData.data);
//         setGetChat(newData.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return getChat;
// };

// export default useChat;
