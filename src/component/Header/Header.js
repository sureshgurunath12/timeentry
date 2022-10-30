// Header.js
import "./Header.css";
import React,{ useState } from 'react';
import Parse from 'parse/dist/parse.min.js';

export const Header = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const doUserLogOut = async function () {
        try {
            await Parse.User.logOut().then(() => {
                const currentUser = Parse.User.current();  // this will now be null
            });
            await Parse.User.logOut();
            // To verify that current user is now empty, currentAsync can be used
            const currentUser = await Parse.User.current();
            if (currentUser === null) {
                alert('Success! No user is logged in anymore!');
            }
            // Update state variable holding current user
            getCurrentUser();
            return true;
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
            <a href="#" className="logo">
                <span className="logo-mini">Time Entry v1.0</span>
            </a>
            <a href="" className="loggedIdUser" onClick={() => doUserLogOut()}>
                <span className="logout">Logout</span>
            </a>
            <nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown messages-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-envelope-o"></i>
                                <span className="label label-success">4</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">You have 4 messages</li>
                                <li>
                                    <ul className="menu">
                                        <li>
                                            <a href="#">
                                                <div className="pull-left">
                                                    <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                </div>
                                                <h4>
                                                    Support Team
                                                    <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                </h4>
                                                <p>Why not buy a new awesome theme?</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default Header;