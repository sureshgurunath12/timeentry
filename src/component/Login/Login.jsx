import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';


export const Login = () => {
  const navigate = useNavigate();

  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  // Function that will return current user and also update current username
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

  const handleSubmit = async (event) => { 

    event.preventDefault();

    // Note that these values come from state variables that we've declared before
    
    const usernameValue = username;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
      // logIn returns the corresponding ParseUser object
      alert(
        `Success! User ${loggedInUser.get(
          'username'
        )} has successfully signed in!`
      );
      // To verify that this is in fact the current user, `current` can be used
      const currentUser = await Parse.User.current();
      console.log(loggedInUser === currentUser);
      // Clear input fields
      setUsername('');
      setPassword('');
      // Update state variable holding current user
      getCurrentUser();
      if (loggedInUser === currentUser) {
        localStorage.setItem("authenticated", true);
        navigate("/dashboard");
      }
      return true;
    } catch (error) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
    // const Parse = await initiParse();
    // const { email, password } = formValue;
    // if (email && email.trim() && password && password.trim()) {
    //   console.log("email >>>>",email)
    //   console.log("password >>>>",password)

    //   const user = await Parse.User.logIn(email, password)

    //   const currentUser = await Parse.User.current();
    //   //userLogin(email , password);
    //   //const currentUser = currentUser();
    //   if (currentUser) {
    //     alert("logged in")
    //   } else {
    //     alert("not logged in")
    //   }
    // }
  }

  // const handleChange = (event) => {
  //   setformValue({
  //     ...formValue,
  //     [event.target.name]: event.target.value
  //   })
  // }
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
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                   </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter a password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
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
