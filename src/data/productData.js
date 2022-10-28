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
    { id: 'PR1', name: 'Project 1' },
    { id: 'PR2', name: 'Project 2' },
    { id: 'PR3', name: 'Project 3' },
    { id: 'PR4', name: 'Project 4' },
    { id: 'PR5', name: 'Project 5' },
  ]
  
  
  export const subProjects = [
    { id: 'SP1', name: 'Sub Project 1', countryId: 'PR1' },
    { id: 'SP2', name: 'Sub Project 2', countryId: 'PR1' },
    { id: 'SP3', name: 'Sub Project 3', countryId: 'PR1' },
    { id: 'SP4', name: 'Sub Project 4', countryId: 'PR2' },
    { id: 'SP5', name: 'Sub Project 5', countryId: 'PR2' },
    { id: 'SP6', name: 'Sub Project 6', countryId: 'PR2' },
    { id: 'SP7', name: 'Sub Project 7', countryId: 'PR3' },
    { id: 'SP8', name: 'Sub Project 8', countryId: 'PR3' },
    { id: 'SP9', name: 'Sub Project 9', countryId: 'PR3' },
    { id: 'SP10', name: 'Sub Project 10', countryId: 'PR4' },
    { id: 'SP11', name: 'Sub Project 11', countryId: 'PR4' },
    { id: 'SP12', name: 'Sub Project 12', countryId: 'PR4' },
    { id: 'SP13', name: 'Sub Project 13', countryId: 'PR5' },
    { id: 'SP14', name: 'Sub Project 14', countryId: 'PR5' },
    { id: 'SP15', name: 'Sub Project 35', countryId: 'PR5' }
  ]
  export const activity = [
    { id: 'act1', name: 'Activity 1', subId: 'SP1' },
    { id: 'act2', name: 'Activity 2', subId: 'SP2' },
    { id: 'act3', name: 'Activity 3', subId: 'SP3' },
    { id: 'act4', name: 'Activity 4', subId: 'SP4' },
    { id: 'act5', name: 'Activity 5', subId: 'SP5' },
    { id: 'act6', name: 'Activity 6', subId: 'SP6' },
    { id: 'act7', name: 'Activity 7', subId: 'SP7' },
    { id: 'act8', name: 'Activity 8', subId: 'SP8' },
    { id: 'act9', name: 'Activity 9', subId: 'SP9' },
    { id: 'act10', name: 'Activity 10', subId: 'SP10' },
    { id: 'act11', name: 'Activity 11', subId: 'SP11' },
    { id: 'act12', name: 'Activity 12', subId: 'SP12' },
    { id: 'act13', name: 'Activity 13', subId: 'SP13' },
    { id: 'act14', name: 'Activity 14', subId: 'SP14' },
    { id: 'act15', name: 'Activity 35', subId: 'SP15' }
  ]

  export const tasklist = [
  { id: 'task1', name: 'task 1', actId: 'act14' },
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
      project:"PR1",
      subproject:"SP3",
      task:"task14",
      activity:"act3",
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
      project:"PR3",
      subproject:"SP9",
      task:"task7",
      activity:"act9",
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