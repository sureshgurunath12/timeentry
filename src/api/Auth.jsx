import {API_APP_ID, API_BASE_URL} from "./config"
//import Parse from 'parse/dist/parse.min.js';
import { initializeParse } from '@parse/react';


initializeParse(
    API_BASE_URL,
    API_APP_ID,
    ''
)

export const initiParse = async () => {
    initializeParse(
        API_BASE_URL,
        API_APP_ID,
        ''
    )
}

export const currentUser = async () => {
    const parse = await initiParse();
    try {
        const currentUser =  parse.User.current();
        console.log('triggered')
        return currentUser
    } catch (error) {
        console.error('Error: ' + error.code + ' ' + error.message)
        throw error;
    }
}   

export const userLogin =  async (username, password) => {
    const parse = await initiParse();
    return parse.User.logIn(username, password)
    .then(function (user) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user);
      //this.userSubject.next(user);
      return user;
    });
    // try {
    //     const user =  parse.User.logIn(username, password)
    //     console.log('triggered')
    //     return user
    // } catch (error) {
    //     console.error('Error: ' + error.code + ' ' + error.message)
    //     throw error;
    // }
}