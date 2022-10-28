import {initilizeParsePlatform} from "./config"
import Parse from 'parse/dist/parse.min.js';


// export  function userLogin(username, password) {
//     const parse = initilizeParsePlatform()

//     try {
//         const user = parse.User.logIn(username, password)
//         console.log('triggered')
//         return user
//     } catch (error) {
//         console.error('Error: ' + error.code + ' ' + error.message)
//         throw error;
//     }
// }
initilizeParsePlatform();

export const userLogin =  async (username, password) => {
    //const parse = initilizeParsePlatform();
    try {
        const user = await Parse.User.logIn(username, password)
        console.log('triggered')
        return user
    } catch (error) {
        console.error('Error: ' + error.code + ' ' + error.message)
        throw error;
    }
}

export const currentUser = async () => {
    //const parse = initilizeParsePlatform();
    try {
        const currentUser = await Parse.User.currentUser();
        console.log('triggered')
        return currentUser
    } catch (error) {
        console.error('Error: ' + error.code + ' ' + error.message)
        throw error;
    }
}

export const currentUserData  = async () => {
    //const parse = initilizeParsePlatform();

    try {
        Parse.User.currentAsync().then(function(user) {
            // do stuff with your user
            return user;
        });
        //const currentUser = await User.current();
        
        //return currentUser
    } catch (error) {
        console.error('Error: ' + error.code + ' ' + error.message)
        throw error;
    }
}