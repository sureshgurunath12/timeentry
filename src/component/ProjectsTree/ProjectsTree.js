import React, {useEffect} from 'react';
import {
  TreeList, Editing, Column, RequiredRule, Lookup,
} from 'devextreme-react/tree-list';
import { tasks, employees } from '../../data/data';
import "./ProjectsTree.css"


const statuses = [
  'Not Started',
  'Need Assistance',
  'In Progress',
  'Deferred',
  'Completed',
];

export const ProjectsTree = () => {

    const  onInitNewRow = (e) => {
      e.data.Task_Status = 'Not Started';
      e.data.Task_Start_Date = new Date();
      e.data.Task_Due_Date = new Date();
    }

    return (
      <>
      <div className="headertitle">All Projects</div>
      <div className="breadcrum">Home  | <a href="/projects">Projects</a></div>
      <div className="actionheader">
        <ul>
          <li className="add-project"> <a href="/projects">Add Project</a> </li>
          <li className="copy"> <a href="/projects">Copy</a> </li>
          <li className="delete"> <a href="/projects">Delete</a> </li>
        </ul>
      </div>
      <div id="tree-list-demo">
        <TreeList
          id="tasks"
          dataSource={tasks}
          columnAutoWidth={true}
          wordWrapEnabled={true}
          showBorders={true}
          keyExpr="Task_ID"
          parentIdExpr="Task_Parent_ID"
          onInitNewRow={onInitNewRow}
        >
          <Editing
            allowAdding={true}
            allowUpdating={true}
            allowDeleting={true}
            mode="batch" />
          <Column
            minWidth={250}
            dataField="Task_Subject">
            <RequiredRule />
          </Column>
          <Column
            minWidth={120}
            dataField="Task_Assigned_Employee_ID"
            caption="Assigned">
            <Lookup
              dataSource={employees}
              valueExpr="ID"
              displayExpr="Name" />
            <RequiredRule />
          </Column>
          <Column
            minWidth={120}
            dataField="Task_Status"
            caption="Status">
            <Lookup
              dataSource={statuses} />
          </Column>
          <Column
            dataField="Task_Start_Date"
            caption="Start Date"
            dataType="date" />
          <Column
            dataField="Task_Due_Date"
            caption="Due Date"
            dataType="date" />
        </TreeList>
      </div>
      </>
    );

  
  };



 
export default ProjectsTree;
