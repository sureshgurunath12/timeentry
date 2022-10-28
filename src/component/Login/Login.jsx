import React, { useRef, useState } from "react";
import {userLogin, currentUser} from '../../api/Auth'
import "./Login.css";
// import { initializeParse, useParseQuery } from '@parse/react';

// export const API_BASE_URL = 'https://parse.k12mate.com/parse';
// export const API_APP_ID = 'https://parse.k12mate.com/parse';

// initializeParse(
//     API_BASE_URL,
//     API_APP_ID,
//     ''
// )

const Login = () => {
  const [formValue, setformValue] = React.useState({
    email: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formValue;
    if (email && email.trim() && password && password.trim()) {
      console.log("email >>>>",email)
      console.log("password >>>>",password)
      // const user = Parse.User.logIn(email, password)
      // const currentUser = Parse.User.current();
      userLogin(email , password);
      const currentUser = currentUser();
      if (currentUser) {
        alert("logged in")
      } else {
        alert("not logged in")
      }
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }
  return (
    <div className="login">
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Login <small>Page</small></h3>
              </div>
             <form id="quickForm" onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-group">
                    <label>Email address</label>
                    <input name="email"
                        placeholder="Enter email"
                        value={formValue.email}
                        onChange={handleChange}
                    />
                   </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter a password"
                      value={formValue.password}
                      onChange={handleChange}
                    />
                   </div>
                  <div className="form-group mb-0">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" name="terms" className="custom-control-input" id="exampleCheck1"/>
                      <label className="custom-control-label">I agree to the <a href="#">terms of service</a>.</label>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            </div>
          <div className="col-md-6">

          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Login;
