import React, { useState} from "react";
// Import Parse minified version
import Parse from "api/config";

function Registration({ handler }) {

  const [isSignInOpen, setSignInOpen] = useState(false);
  // State variables
  const [projectname, setProjectname] = useState("");
  const [startdate, setStartdate] = useState(null);
  const [enddate, setEnddate] = useState(null);
  const [totalesthrs, setTotalesthrs] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const strDate = new Date(startdate);
    const endDate = new Date(enddate);

    const ProjectsData = Parse.Object.extend("Projects");
    const projectsData = new ProjectsData();
    projectsData.set("projectid",Math.random().toString(6).slice(2));
    projectsData.set("projectname",projectname);
    projectsData.set("startdate",new Date(startdate));
    projectsData.set("enddate",new Date(enddate));
    projectsData.set("totalestmhrs",parseInt(totalesthrs));
    projectsData.set("projectdescription",description);
    projectsData.set("status",status);
    projectsData.save()
    .then((projectsData) => {
      // Execute any logic that should take place after the object is saved.
      alert('New object created with objectId: ' + projectsData.id);
      window.location.reload(true);
    }, (error) => {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      alert('Failed to create new object, with error code: ' + error.message);
    });
  }

  const handleCancel = async (event) => {
    event.preventDefault();
    document.getElementById("add-project-form").reset();
  }

  return (
    <div className="model registration">
      <div className="model-container">
        <div className="model-container-data">
          <div className="model-header">
            Add Project
            <span className="model-close" onClick={handler}>
              X
            </span>
          </div>
          <div className="model-body">
            <div class="card-body">
            <form class="form-horizontal" id="add-project-form">
                <div class="card-body">
                    <div class="form-group row">
                      <label for="exampleInputEmail1" class="col-sm-4 col-form-label">Project Name</label>
                      <div class="col-sm-8">
                        <input type="text" class="form-control" id="projectName" placeholder="Enter Project Name"
                        onChange={(event) => setProjectname(event.target.value)} value={projectname} />
                      </div>
                    </div>
                   <div class="form-group row">
                      <label for="exampleInputPassword1" class="col-sm-4 col-form-label">Date & Time</label>
                      <div class="col-sm-8">
                        <table>
                        <tr>
                          <td>
                          <div class="form-group">
                              <label>Start</label>
                                <div class="input-group date" id="reservationdatetime" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input" data-target="#reservationdatetime" placeholder="11/01/2022 5:09 PM" onChange={(event) => setStartdate(event.target.value)} value={startdate} />
                                    <div class="input-group-append" data-target="#reservationdatetime" data-toggle="datetimepicker">
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>
                          </td>
                          <td>
                          <div class="form-group">
                              <label>End</label>
                                <div class="input-group date" id="reservationdatetime" data-target-input="nearest">
                                    <input type="text" class="form-control datetimepicker-input" placeholder="11/01/2022 5:09 PM" data-target="#reservationdatetime" onChange={(event) => setEnddate(event.target.value)} value={enddate}/>
                                    <div class="input-group-append" data-target="#reservationdatetime" data-toggle="datetimepicker" >
                                        <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                    </div>
                                </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                      </div>
                    </div> 
                    <div class="form-group row">
                      <label for="exampleInputPassword1" class="col-sm-4 col-form-label">Total Est Hours</label>
                      <div class="col-sm-8"><input type="text" class="form-control" id="totalEstHrs" placeholder="Total Estimated Hours" onChange={(event) => setTotalesthrs(event.target.value)} value={totalesthrs}/></div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputPassword1" class="col-sm-4 col-form-label">Description</label>
                      <div class="col-sm-8"><textarea cols="40" rows="5" placeholder="Enter Description" onChange={(event) => setDescription(event.target.value)} value={description}></textarea></div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputPassword1" class="col-sm-4 col-form-label">Status</label>
                      <div class="col-sm-8">
                        <select name="" onChange={(event) => setStatus(event.target.value)} value={description}>
                            <option value="Active">Active</option>
                            <option value="In-Active">In Active</option>
                            <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </div>
                </div>

                <div class="card-footer">
                  <button type="submit" class="btn btn-info" onClick={handleSubmit}>Submit</button>
                  <button type="submit" class="btn btn-default float-right" onClick={handler}>Cancel</button>
                </div>
              </form>



              {/* <div class="form-group row">
                <label for="exampleInputEmail1" class="col-sm-2 col-form-label">Project Name</label>
                <div class="col-sm-10"><input type="text" class="form-control" id="projectName" placeholder="Enter Project Name"/></div>
              </div>
              <div class="form-group row">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label">Date & Time</label>
                <div class="col-sm-10"><input type="text" class="form-control" id="startDate" placeholder="Start Date"/></div>
              </div> 
              <div class="form-group row">
                <label for="exampleInputPassword1" class="col-sm-2 col-form-label">Total Estimated Hours</label>
                <div class="col-sm-10"><input type="text" class="form-control" id="totalEstHrs" placeholder="Total Estimated Hrs"/></div>
              </div> 
              <div class="form-group row" class="col-sm-2 col-form-label">
                <label for="exampleInputPassword1">Description</label>
                <div class="col-sm-10"><textarea cols="30"></textarea></div>
              </div>               
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div> */}

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Registration;
