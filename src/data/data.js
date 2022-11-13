export const tasks = [{
  Task_ID: 1,
  Task_Assigned_Employee_ID: 10,
  Task_Owner_ID: 1,
  Task_Subject: 'Project 1',
  Task_Start_Date: '2015-01-01T00:00:00',
  Task_Due_Date: '2015-04-01T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 0,
},{
  Task_ID: 28,
  Task_Assigned_Employee_ID: 7,
  Task_Owner_ID: 1,
  Task_Subject: 'Prepare 2015 Financial',
  Task_Start_Date: '2015-01-15T00:00:00',
  Task_Due_Date: '2015-01-31T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 1,
}, {
  Task_ID: 29,
  Task_Assigned_Employee_ID: 4,
  Task_Owner_ID: 1,
  Task_Subject: 'Prepare 2015 Marketing Plan',
  Task_Start_Date: '2015-01-01T00:00:00',
  Task_Due_Date: '2015-01-31T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 1,
}, {
  Task_ID: 32,
  Task_Assigned_Employee_ID: 1,
  Task_Owner_ID: 4,
  Task_Subject: 'Google AdWords Strategy',
  Task_Start_Date: '2015-02-16T00:00:00',
  Task_Due_Date: '2015-02-28T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 29,
}, {
  Task_ID: 38,
  Task_Assigned_Employee_ID: 8,
  Task_Owner_ID: 4,
  Task_Subject: 'Update Sales Strategy Documents',
  Task_Start_Date: '2015-02-20T00:00:00',
  Task_Due_Date: '2015-02-22T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 29,
}, {
  Task_ID: 39,
  Task_Assigned_Employee_ID: 41,
  Task_Owner_ID: 8,
  Task_Subject: 'Create 2012 Sales Report',
  Task_Start_Date: '2015-02-20T00:00:00',
  Task_Due_Date: '2015-02-21T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 29,
}, {
  Task_ID: 40,
  Task_Assigned_Employee_ID: 42,
  Task_Owner_ID: 41,
  Task_Subject: 'Direct vs Online Sales Comparison Report',
  Task_Start_Date: '2015-02-20T00:00:00',
  Task_Due_Date: '2015-02-22T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 29,
}, {
  Task_ID: 41,
  Task_Assigned_Employee_ID: 4,
  Task_Owner_ID: 41,
  Task_Subject: 'Review 2012 Sales Report and Approve 2015 Plans',
  Task_Start_Date: '2015-02-23T00:00:00',
  Task_Due_Date: '2015-02-28T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 29,
},

{
  Task_ID: 42,
  Task_Assigned_Employee_ID: 3,
  Task_Owner_ID: 1,
  Task_Subject: 'Deliver R&D Plans for 2015',
  Task_Start_Date: '2015-03-01T00:00:00',
  Task_Due_Date: '2015-03-10T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 4,
  Task_Completion: 100,
  Task_Parent_ID: 1,
}, {
  Task_ID: 43,
  Task_Assigned_Employee_ID: 32,
  Task_Owner_ID: 3,
  Task_Subject: 'Create 2015 R&D Plans',
  Task_Start_Date: '2015-03-01T00:00:00',
  Task_Due_Date: '2015-03-07T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 42,
}, {
  Task_ID: 44,
  Task_Assigned_Employee_ID: 33,
  Task_Owner_ID: 32,
  Task_Subject: '2015 QA Strategy Report',
  Task_Start_Date: '2015-03-02T00:00:00',
  Task_Due_Date: '2015-03-05T00:00:00',
  Task_Status: 'Completed',
  Task_Priority: 2,
  Task_Completion: 100,
  Task_Parent_ID: 42,
}];

export const employees = [{
  ID: 1,
  Name: 'John Heart',
}, {
  ID: 2,
  Name: 'Samantha Bright',
}, {
  ID: 3,
  Name: 'Arthur Miller',
}, {
  ID: 4,
  Name: 'Robert Reagan',
}, {
  ID: 5,
  Name: 'Greta Sims',
}, {
  ID: 6,
  Name: 'Brett Wade',
}, {
  ID: 7,
  Name: 'Sandra Johnson',
}, {
  ID: 8,
  Name: 'Ed Holmes',
}, {
  ID: 9,
  Name: 'Barb Banks',
}, {
  ID: 10,
  Name: 'Kevin Carter',
}, {
  ID: 11,
  Name: 'Cindy Stanwick',
}, {
  ID: 12,
  Name: 'Sammy Hill',
}, {
  ID: 13,
  Name: 'Davey Jones',
}, {
  ID: 14,
  Name: 'Victor Norris',
}, {
  ID: 15,
  Name: 'Mary Stern',
}, {
  ID: 16,
  Name: 'Robin Cosworth',
}, {
  ID: 17,
  Name: 'Kelly Rodriguez',
}, {
  ID: 18,
  Name: 'James Anderson',
}, {
  ID: 19,
  Name: 'Antony Remmen',
}, {
  ID: 20,
  Name: 'Olivia Peyton',
}, {
  ID: 21,
  Name: 'Taylor Riley',
}, {
  ID: 22,
  Name: 'Amelia Harper',
}, {
  ID: 23,
  Name: 'Wally Hobbs',
}, {
  ID: 24,
  Name: 'Brad Jameson',
}, {
  ID: 25,
  Name: 'Karen Goodson',
}, {
  ID: 26,
  Name: 'Marcus Orbison',
}, {
  ID: 27,
  Name: 'Sandy Bright',
}, {
  ID: 28,
  Name: 'Morgan Kennedy',
}, {
  ID: 29,
  Name: 'Violet Bailey',
}, {
  ID: 30,
  Name: 'Ken Samuelson',
}, {
  ID: 31,
  Name: 'Nat Maguiree',
}, {
  ID: 32,
  Name: 'Bart Arnaz',
}, {
  ID: 33,
  Name: 'Leah Simpson',
}, {
  ID: 34,
  Name: 'Arnie Schwartz',
}, {
  ID: 35,
  Name: 'Billy Zimmer',
}, {
  ID: 36,
  Name: 'Samantha Piper',
}, {
  ID: 37,
  Name: 'Maggie Boxter',
}, {
  ID: 38,
  Name: 'Terry Bradley',
}, {
  ID: 39,
  Name: 'Gabe Jones',
}, {
  ID: 40,
  Name: 'Lucy Ball',
}, {
  ID: 41,
  Name: 'Jim Packard',
}, {
  ID: 42,
  Name: 'Hannah Brookly',
}, {
  ID: 43,
  Name: 'Harv Mudd',
}, {
  ID: 44,
  Name: 'Clark Morgan',
}, {
  ID: 45,
  Name: 'Todd Hoffman',
}, {
  ID: 46,
  Name: 'Jackie Garmin',
}, {
  ID: 47,
  Name: 'Lincoln Bartlett',
}, {
  ID: 48,
  Name: 'Brad Farkus',
}, {
  ID: 49,
  Name: 'Jenny Hobbs',
}, {
  ID: 50,
  Name: 'Dallas Lou',
}, {
  ID: 51,
  Name: 'Stu Pizaro',
}];

