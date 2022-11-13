import { React, useEffect, useState } from "react";
import "./Projects.css";
import Parse from "api/config";


export const Projects = () => {
  const [projectData, setProjectData] = useState(null);

  const ProjectsData = Parse.Object.extend("Projects");
  //console.log(Projects)
  const query = new Parse.Query(ProjectsData);
  console.log(query);
  const currentUser = new Parse.User.current();
  console.log(currentUser);
  //query.equalTo("user", currentUser);

  const getProjects = async () => {
    const results = await query.find();
    console.log("results >>>", results);
    setProjectData(results);
  };

  useEffect(() => {
    getProjects(); // run it, run it
  }, []);

  return (
    projectData && (
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <b>Projects</b>
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
                            <th>Project</th>
                            <th>Start Date & Time</th>
                            <th>End Date & Time</th>
                            <th>Total Hours</th>
                            <th>Status</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {projectData.map((data) => {
                            const DATE_OPTIONS = {
                              weekday: "short",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            };
                            const startDate = new Date(
                              data.get("startdate")
                            ).toLocaleDateString("en-US", DATE_OPTIONS);
                            const endDate = new Date(
                              data.get("enddate")
                            ).toLocaleDateString("en-US", DATE_OPTIONS);

                            return (
                              <tr>
                                <td>
                                  <input
                                    type="checkbox"
                                    class="checkbox"
                                  ></input>
                                </td>
                                <td>{data.get("projectname")}</td>
                                <td>{startDate}</td>
                                <td>{endDate}</td>
                                <td>{data.get("totalestmhrs")}</td>
                                <td>
                                  <span className="tag tag-success">
                                    {data.get("status")}
                                  </span>
                                </td>
                                <td>{data.get("projectdescription")}</td>
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
};

export default Projects;
