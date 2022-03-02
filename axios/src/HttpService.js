/*
Description:
Example of class wrapper for Axios service

Resources:
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await


configs:

const configs = {
    'baseURL': 'https://itunes.apple.com/search',
    'timeout': 1000,
    'headers': {
        'content-type': 'application/json'
    }
}

*/

const axios = require('axios');

async function getResults(uri) {
    try {
        const response = await axios.get(uri);
        if (response) {
            // const json = await response.json();
            result = 'results:  ' + JSON.stringify(response.data);
            return result;
        }
    } catch(err) {
        return {
            statusCode: 400,
            body: err.message
        }
    }
};


const uri = 'https://itunes.apple.com/search?term=radiohead';

const resp = getResults(uri);
console.log(resp);

// (async () => {
//     const resp = await getResults(uri);
//     console.log(resp);
// })
