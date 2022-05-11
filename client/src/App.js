import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/App.css";
import New from "./pages/New";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import Bulletin from "./pages/Bulletin";
import Auth from "./auth/Auth";
import MiniPJT from "./pages/MiniPJT";
import NavBar from "./components/NavBar";
import Chat from "./pages/Chat";

export const BulletinStateContext = React.createContext();
export const BulletinDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET": {
      return action.data;
    }
    case "CREATE": {
      fetch(
        action.data.isEdit ? "/api/bulletin/update" : "/api/bulletin/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(action.data),
        }
      );
      return [];
    }
    case "DELETE": {
      fetch("/api/bulletin/delete/" + action.data, {
        method: "DELETE",
      }).catch((err) => console.log(err));
      return [];
    }
    default:
      return [];
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  //GET DATA
  useEffect(() => {
    fetch("/api/bulletin/read")
      .then((res) => res.json())
      .then((newData) => {
        dispatch({ type: "GET", data: newData.data });
      })
      .catch((err) => console.log(err));
  }, [data.length]);

  // CREATE || EDIT
  const onCreateEdit = (author, content, _id, isEdit) => {
    const req = {
      _id: _id,
      author: author,
      content: content,
      isEdit: isEdit,
    };
    dispatch({ type: "CREATE", data: req });
  };

  //DELETE
  const onRemove = (_id) => {
    dispatch({ type: "DELETE", data: _id });
  };

  const AuthNavBar = Auth(NavBar, null);
  const AuthHomePage = Auth(Home, null);
  const AuthBulletinPage = Auth(Bulletin, true);
  const AuthNewPage = Auth(New, true);
  const AuthEditPage = Auth(Edit, true);
  const AuthLoginPage = Auth(Login, false);
  const AuthUserRegisterPage = Auth(UserRegister, false);
  const AuthMiniPage = Auth(MiniPJT, true);
  const AuthChatPage = Auth(Chat, true);

  return (
    <BulletinStateContext.Provider value={data}>
      <BulletinDispatchContext.Provider value={{ onCreateEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <AuthNavBar />
            <Routes>
              <Route path="/" element={<AuthHomePage />} />
              {/* Login */}
              <Route path="/login" element={<AuthLoginPage />} />
              <Route path="/register" element={<AuthUserRegisterPage />} />
              {/* Bulletin Board */}
              <Route path="/bulletin" element={<AuthBulletinPage />} />
              <Route path="/bulletin/new" element={<AuthNewPage />} />
              <Route path="/bulletin/edit/:id" element={<AuthEditPage />} />
              {/* Mini Project */}
              <Route path="/mini" element={<AuthMiniPage />} />
              {/* Chat Menu */}
              <Route path="/chat" element={<AuthChatPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </BulletinDispatchContext.Provider>
    </BulletinStateContext.Provider>
  );
}

export default React.memo(App);
