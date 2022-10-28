
/**
 * API related helpers & configs
 */

export const API_BASE_URL = 'https://parse.k12mate.com/parse';
export const API_APP_ID = 'https://parse.k12mate.com/parse';

// initializeParse(
//     API_BASE_URL,
//     API_APP_ID,
//     ''
// )

export const  initilizeParsePlatform = async () => {

    // Parse.initialize(API_APP_ID, "");
    // Parse.serverURL = API_BASE_URL
    const ParseInit  = 
        await Parse.initializeParse(
                    API_BASE_URL,
                    API_APP_ID,
                    ''
        )
    //console.log("ParseInit >>>",ParseInit)
    return ParseInit;
}