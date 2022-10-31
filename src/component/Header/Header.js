// Header.js
import "./Header.css";
import React, { useState } from "react";
import Parse from "parse/dist/parse.min.js";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut().then(() => {
        const currentUser = Parse.User.current(); // this will now be null
        // To verify that current user is now empty, currentAsync can be used
        //const currentUser = await Parse.User.current();
        if (currentUser === null) {
          console.log("Success! No user is logged in anymore!");
        }
        // Update state variable holding current user
        getCurrentUser();
        navigate("/");
        window.location.reload(true);
        return true;
      });
      //await Parse.User.logOut();
    } catch (error) {
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  // Function that will return current user and also update current username
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

  return (
    <header className="main-header">
      <div className="header-section">
        <span className="logo-mini">Time Entry v1.0</span>
        <div>
          <span>Welcome Kali</span>
          <span className="logout" onClick={() => doUserLogOut()}>
            Logout
          </span>
        </div>
      </div>
      <nav className="navbar navbar-static-top">Add</nav>
    </header>
  );
};

export default Header;
