export const projectData = [
    {
      project: {name:"Project 1",id:"P1"},
      subProjects: [{name:"Sub Project1",id:"SP1", task: [{name:"Task 1",id:"T11", activity: [{name:"Activity 1",id:"A11"}, {name:"Activity 2",id:"A2"}, {name:"Activity 3",id:"A3"}]}]},{name:"Sub Project2",id:"SP2"}, {name:"Sub Project3",id:"SP3"}]
    },
    {
      project: {name:"Project 2",id:"P2"},
      subProjects: [{name:"Sub Project1",id:"SP1",task: [{name:"Task 1",id:"T11", activity: [{name:"Activity 1",id:"A11"}, {name:"Activity 2",id:"A2"}, {name:"Activity 3",id:"A3"}]}]}, {name:"Sub Project2",id:"SP2"}, {name:"Sub Project3",id:"SP3"}]
    },
    {
      project: {name:"Project 3",id:"P3"},
      subProjects: [{name:"Sub Project1",id:"SP1",task: [{name:"Task 1",id:"T11", activity: [{name:"Activity 1",id:"A11"}, {name:"Activity 2",id:"A2"}, {name:"Activity 3",id:"A3"}]}]}, {name:"Sub Project2",id:"SP2"}, {name:"Sub Project3",id:"SP3"}],
    },
  ];
  
  
  
  
  export const projects = [
    { id: 'AD', name: 'Andorra' },
    { id: 'AE', name: 'United Arab Emirates' },
    { id: 'AF', name: 'Afghanistan' },
    { id: 'AG', name: 'Antigua and Barbuda' },
    { id: 'AI', name: 'Anguilla' },
  ]
  
  export const subProjects = [
    { id: 'ad1', name: 'AD: State 1', countryId: 'AD' },
    { id: 'ad2', name: 'AD: State 2', countryId: 'AD' },
    { id: 'ad3', name: 'AD: State 3', countryId: 'AD' },
    { id: 'st1', name: 'AI: State 4', countryId: 'AI' },
    { id: 'st2', name: 'AI: State 5', countryId: 'AI' },
    { id: 'st3', name: 'AI: State 6', countryId: 'AI' },
    { id: 'ag1', name: 'AG: State 7', countryId: 'AG' },
    { id: 'ag2', name: 'AG: State 8', countryId: 'AG' },
    { id: 'ag3', name: 'AG: State 9', countryId: 'AG' },
    { id: 'af1', name: 'AF: State 10', countryId: 'AF' },
    { id: 'af2', name: 'AF: State 11', countryId: 'AF' },
    { id: 'af3', name: 'AF: State 12', countryId: 'AF' },
    { id: 'ae1', name: 'AE: State 13', countryId: 'AE' },
    { id: 'ae2', name: 'AE: State 14', countryId: 'AE' },
    { id: 'ae3', name: 'AE: State 35', countryId: 'AE' }
  ]
  export const activity = [
    { id: 'act1', name: 'Activity 1', subId: 'ad1' },
    { id: 'act2', name: 'Activity 2', subId: 'af1' },
    { id: 'act3', name: 'Activity 3', subId: 'ae1' },
    { id: 'act4', name: 'Activity 4', subId: 'ag1' },
    { id: 'act5', name: 'Activity 5', subId: 'st1' },
    { id: 'act6', name: 'Activity 6', subId: 'st3' },
    { id: 'act7', name: 'Activity 7', subId: 'st2' },
    { id: 'act8', name: 'Activity 8', subId: 'ad2' },
    { id: 'act9', name: 'Activity 9', subId: 'ad3' },
    { id: 'act10', name: 'Activity 10', subId: 'af2' },
    { id: 'act11', name: 'Activity 11', subId: 'af3' },
    { id: 'act12', name: 'Activity 12', subId: 'ag2' },
    { id: 'act13', name: 'Activity 13', subId: 'ag3' },
    { id: 'act14', name: 'Activity 14', subId: 'ae3' },
    { id: 'act15', name: 'Activity 35', subId: 'ae1' }
  ]

  export const tasklist = [{ id: 'task1', name: 'task 1', actId: 'act14' },
  { id: 'task2', name: 'task 2', actId: 'act4' },
  { id: 'task3', name: 'task 3', actId: 'act5' },
  { id: 'task4', name: 'task 4', actId: 'act6' },
  { id: 'task5', name: 'task 5', actId: 'act7' },
  { id: 'task6', name: 'task 6', actId: 'act8' },
  { id: 'task7', name: 'task 7', actId: 'act9' },
  { id: 'task8', name: 'task 8', actId: 'act10' },
  { id: 'task9', name: 'task 9', actId: 'act11' },
  { id: 'task10', name: 'task 10', actId: 'act12' },
  { id: 'task11', name: 'task 11', actId: 'act13' },
  { id: 'task12', name: 'task 12', actId: 'act15' },
  { id: 'task13', name: 'task 13', actId: 'act2' },
  { id: 'task14', name: 'task 14', actId: 'act3' },
  { id: 'task15', name: 'task 35', actId: 'act1' }
  ]
  export const projects_data=[
      {id:"proj1",
      project:"AI",
      subproject:"st3",
      task:"task4",
      activity:"act6",
      sat_time: 4,
      sun_time: 2,
      mon_time: 3,
      tue_time: 6,
      wed_time: 9,
      thu_time: 5,
      fri_time: 6
    },
    {
      id:"proj2",
      project:"AE",
      subproject:"ae3",
      task:"task1",
      activity:"act14",
      sat_time: 7,
      sun_time: 8,
      mon_time: 10,
      tue_time: 6,
      wed_time: 9,
      thu_time: 8,
      fri_time: 5
    }
  ];

  export default projectData;