import './App.css';
import Invoice from './component/Invoice';
import './api/config'

// import { initializeParse, useParseQuery } from '@parse/react';
import { userInfo } from 'os';
// import Search from './component/Search';
//import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

// const Parse = require('parse');
// Parse.initializeParse("myappID");
// //javascriptKey is required only if you have it on server.
// Parse.serverURL = 'https://parse.k12mate.com/parse'
// initializeParse(
//   'https://parse.k12mate.com/parse',
//   'myappID',
//   ''
// );
const user =  Parse.User.logIn("kali", "kali");
console.log(user)
// Find all projects by the current user
const foo = async () => {
  
  //const currentUser = Parse.User.current();
  // console.log("user >>>>>>",user)
  // console.log("currentUser >>>>>>",currentUser?.id)
  const Projects = Parse.Object.extend("Projects");
  const query = new Parse.Query(Projects);
  //query.equalTo("user", currentUser);
  const results = await query.find();

  results.forEach(proList => {
    console.log("projectName >>>>>", proList.get("projectName"))
  });
 
    // do smt with bar
};

foo();

// const projectsList =  query.find()
// .then((items) => {
//   console.log(item);
//   // The object was retrieved successfully.
// }, (error) => {
//   // The object was not retrieved successfully.
//   // error is a Parse.Error with an error code and message.
// });
// console.log(projectsList)
// console.log("query >>>>>>>",query)
// Find all posts by the current user

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Invoice/>
      </header>
    </div>
  );
}

export default App;
