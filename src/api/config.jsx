/**
 * API related helpers & configs
 */
import Parse from "parse";

// export const API_BASE_URL = 'https://parse.k12mate.com/parse';
// export const API_APP_ID = 'myappID';

export const API_BASE_URL = 'http://dev001.kgisystems.com/parse';
export const API_APP_ID = 'TimeEntry';
export const API_JS_KEY= '';

Parse.initialize(API_APP_ID, API_JS_KEY);  // use your appID & your js key
Parse.serverURL = API_BASE_URL; // use your server url

export default Parse;
