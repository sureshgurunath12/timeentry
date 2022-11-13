import { React, useEffect, useState } from "react";
import "./Users.css";
import Parse from "parse/dist/parse.min.js";


function Users() {
  const [userData, setUserData] = useState(null);

  const UserDetails = Parse.Object.extend("_User");
  //console.log(Projects)
  const query = new Parse.Query(UserDetails);
  console.log(query);
  // const currentUser = new Parse.User.current();
  // console.log(currentUser);
  //query.equalTo("user", currentUser);

  const getUserDetails = async () => {
    const results = await query.find();
    console.log("results >>>", results);
    setUserData(results);
  };

  useEffect(() => {
    getUserDetails(); // run it, run it
  }, []);
  return (
    userData && (
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <b>Users</b>
                      </h3>

                      <div className="card-tools">
                        {/* <div className="input-group input-group-sm" style={{width: "150px"}}>
                    <input type="text" name="table_search" className="form-control float-right" placeholder="Search"/>

                    <div className="input-group-append">
                      <button type="submit" className="btn btn-default">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div> */}
                      </div>
                    </div>
                    <div
                      className="card-body table-responsive p-0"
                      style={{ height: "300px" }}
                    >
                      <table className="table table-head-fixed text-nowrap">
                        <thead>
                          <tr>
                            <th>
                              <input type="checkbox" class="checkbox"></input>
                            </th>
                            <th>User Name</th>
                            <th>Created At</th>
                            <th>Email</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          {userData.map((data) => {
                            const DATE_OPTIONS = {
                              weekday: "short",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            };
                            const createdDate = new Date(
                              data.get("createdAt")
                            ).toLocaleDateString("en-US", DATE_OPTIONS);
                            return (
                              <tr>
                                <td>
                                  <input
                                    type="checkbox"
                                    class="checkbox"
                                  ></input>
                                </td>
                                <td>{data.get("username")}</td>
                                <td>{createdDate}</td>
                                <td>{data.get("email")}</td>                               
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default Users;
