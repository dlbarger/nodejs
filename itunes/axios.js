const axios = require('axios');

// axios.get('https://itunes.apple.com/search?term=radiohead')
// .then(res => {
//   const data = res.data;
//   console.log(data)
// })
// .catch(err => {
//   console.log('Error: ', err.message);
// })

// async function get(uri) {
//     await axios.get(uri).then(
//         res => {
//             const data = res.data;
//             console.log(data.resultCount);
//             return('success');
//         }
//     ).catch(err => {
//         console.log('Error: ', err.message);
//     })
// }

function getData(result) {
    console.log('getData');
    return(result);
}

function getError(error) {
    console.log('getError');
    return(error);
}

uri = 'https://itunes.apple.com/search?term=radiohead';
const response = axios.get(uri).then(getData, getError);
console.log(response)

// const results = get('ttps://itunes.apple.com/search?term=radiohead');
// console.log(results);