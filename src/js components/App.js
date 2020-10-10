import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style components/App.css";
import Chat from "../js components/Chat";
import Sidebar from "../js components/Sidebar";
import { selectUser } from "../features/userSlice";
import Login from "../js components/Login";
import { auth } from "../js components/firebase";
import { login, logout } from "../features/userSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);  

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("user is", authUser);
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar />
        <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
