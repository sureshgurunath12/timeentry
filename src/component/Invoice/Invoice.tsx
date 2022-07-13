import React, { useEffect, useState } from "react";
import {
  projects,
  subProjects,
  projects_data,
  activity,
  tasklist,
} from "../../data/productData";
import PopulateOption from "../PopulateOption";
export const Invoice = () => {
  const [items, setItems] = useState<any[]>(projects_data);

  const buildData = () => {
    var data_val = {
      project: "",
      subproject: "",
      task: "",
      activity: "",
      sat_time: 0,
      sun_time: 0,
      mon_time: 0,
      tue_time: 0,
      wed_time: 0,
      thu_time: 0,
      fri_time: 0,
    };
    return data_val;
  };
  const handleClick = () => {
    let itemArr = [...items];
    let buildDatas = buildData();
    itemArr.push(buildDatas);
    setItems(itemArr);
  };

  const handleSubmitClick = () => {
    console.log("Items >>>>", items);
  };

  // const handleItemChanged = (e: React.ChangeEvent<HTMLInputElement>,i:number) =>{
  //   let itemArr = [...items];
  //   // let i = e.target.attributes.item_key.value;
  //   //let i = e.target
  //    itemArr[i]['project']  = e.target.value;
  //   setItems(itemArr);

  // }

  const handleItemDeleted = (
    e: React.SyntheticEvent<EventTarget>,
    i: number
  ) => {
    let itemArr = [...items];
    itemArr.splice(i, 1);
    setItems(itemArr);
  };

  const projectChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => {
    let itemArr = [...items];
    let name = e.target.name;
    console.log("name item", name);
    itemArr[i][name] = e.target.value;
    setItems(itemArr);
    console.log("item", itemArr);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    let itemArr = [...items];
    itemArr[i][e.target.name] = parseInt(e.target.value);
    console.log(itemArr);
    setItems(itemArr);
  };

  const renderRows = () => {
    return items.map((o, i) => {
      return (
        <tr key={"item-" + i}>
          <td>
            <select
              onChange={(e) => projectChange(e, i)}
              id={"project" + i}
              value={items[i].project}
              name="project"
            >
              {items[i].project ? (
                <option value="">Select</option>
              ) : (
                <option value="" selected>
                  Select
                </option>
              )}
              <PopulateOption options={projects} sel_id={items[i].project} />
            </select>
          </td>
          <td>
            <select
              onChange={(e) => projectChange(e, i)}
              id={"subProject" + i}
              value={items[i].subproject}
              name="subproject"
            >
              {items[i].subproject ? (
                <option value="">Select</option>
              ) : (
                <option value="" selected>
                  Select
                </option>
              )}
              <PopulateOption
                options={subProjects}
                projectId={items[i].project}
                sel_id={items[i].subproject}
              />
            </select>
          </td>
          <td>
            <select
              onChange={(e) => projectChange(e, i)}
              id={"activity" + i}
              value={items[i].activity}
              name="activity"
            >
              {items[i].activity ? (
                <option value="">Select</option>
              ) : (
                <option value="" selected>
                  Select
                </option>
              )}
              <PopulateOption
                options={activity}
                projectId={items[i].subproject}
                sel_id={items[i].activity}
              />
            </select>
          </td>
          <td>
            <select
              onChange={(e) => projectChange(e, i)}
              id={"task" + i}
              value={items[i].task}
              name="task"
            >
              {items[i].task ? (
                <option value="">Select</option>
              ) : (
                <option value="" selected>
                  Select
                </option>
              )}
              <PopulateOption
                options={tasklist}
                projectId={items[i].activity}
                sel_id={items[i].task}
              />
            </select>
          </td>
          <td>
            <input
              name="sat_time"
              type="number"
              value={items[i].sat_time}
              onChange={(e) => onInputChange(e, i)}
            />
          </td>
          <td>
            <input
              name="sun_time"
              type="number"
              value={items[i].sun_time}
              onChange={(e) => onInputChange(e, i)}
            />
          </td>
          <td>
            <input
              name="mon_time"
              type="number"
              value={items[i].mon_time}
              onChange={(e) => onInputChange(e, i)}
            />
          </td>
          <td>
            <input
              name="tue_time"
              type="number"
              value={items[i].tue_time}
              onChange={(e) => onInputChange(e, i)}
            />
          </td>
          <td>
            <input
              name="wed_time"
              type="number"
              value={items[i].wed_time}
              onChange={(e) => onInputChange(e, i)}
            />
          </td>
          <td>
            <input
              name="thu_time"
              type="number"
              value={items[i].thu_time}
              onChange={(e) => onInputChange(e, i)}
            />
          </td>
          <td>
            <input
              name="fri_time"
              type="number"
              value={items[i].fri_time}
              onChange={(e) => onInputChange(e, i)}
            />
          </td>
          <td>
            <button
              className="delete"
              data-key={i}
              onClick={(e) => handleItemDeleted(e, i)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div id="timeEntry" className="timeEntry">
      <div className="pageTitle">
        <h1>Time Entry Page</h1>
      </div>
      <table className="timerntrytbl">
        <thead>
          <tr className="firstRow">
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>11</th>
            <th>10</th>
            <th>13</th>
            <th>12</th>
            <th>18</th>
            <th>13</th>
            <th>11</th>
            <th></th>
          </tr>
          <tr className="headRow">
            <th>Project</th>
            <th>Sub Project</th>
            <th>Activity</th>
            <th>Task</th>
            <th>Sat</th>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thur</th>
            <th>Fri</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
      <hr />
      {/* <input
          type="text"
          value={message}
          onChange={updateMessage}
        /> */}
      <div className="buttonContainer">
        <span>
          <button onClick={handleClick} className="addItem">
            Add Item
          </button>
        </span>
        <span>
          <button onClick={handleSubmitClick} className="submit">
            Submit
          </button>
        </span>
      </div>
    </div>
  );
};

export default Invoice;
