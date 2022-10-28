import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import {currentUser, userLogin, currentUserData}  from './api/Auth'
//import { initalizeParse } from '@parse/react';


import "./index.css";

import * as serviceWorker from "serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  SideBar,
  Login,
  Content,
  Reports,
  Users,
  Projects,
} from "./component";


// const user =  await Parse.User.logIn("kali", "kali");
// console.log(user)

//const currentUserObj = currentUser();
const currentAsyncObj = currentUserData();


console.log("currentAsyncObj >>>>", currentAsyncObj)
// currentUserObj.then((data)=>{console.log("currentUserObj >>>>", data)})
const currentUser1= true;

if (currentUser1) {

  ReactDOM.render(
  
    <Router>
      <Header />
      <SideBar />
        <main>
          <div className="content-wrapper">
            <section className="content-header">
              <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Content />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/projects" element={<Projects />} />
              </Routes>
            </section>
          </div>
        </main>
    </Router>,
  
    document.getElementById("root")
  );
} else {
    // show the signup or login page
    ReactDOM.render(
  
      <Router>
      
                <Routes>
                      <Route path="/" element={<Login />} />
                    
                </Routes>
             
      </Router>,
    
      document.getElementById("root")
    );
}
serviceWorker.unregister();
