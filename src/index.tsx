import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import {currentUser} from './api/Auth'
import Parse from "api/config";
//import Parse from 'parse/dist/parse.min.js';

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
  ProjectsTree
} from "./component";
// Import Parse minified version

// export const API_BASE_URL = 'https://parse.k12mate.com/parse';
// export const API_APP_ID = 'myappID';
// export const PARSE_JAVASCRIPT_KEY = '';

// Parse.initialize(API_APP_ID, PARSE_JAVASCRIPT_KEY);
// Parse.serverURL = API_BASE_URL;


const currentUserParse =  Parse.User.current();
console.log("currentUser >>>>",currentUserParse);

if (currentUserParse) {

  ReactDOM.render(
  
    <Router >
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
                    <Route path="/projectstree" element={<ProjectsTree />} />
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
