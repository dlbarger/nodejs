/*
Description:
Query iTunes and Apple Book Store content

URI:  https://itunes.apple.com/search?term=<search team>

Get Example:
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);

    const users = res.data;

    for(user of users) {
      console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    }
  })
  .catch(err => {
    console.log('Error: ', err.message);

*/


const axios = require('axios');

class HttpRequest {

    constructor(url) {
        this.uri = url
    }

    get(searchTerm) {
      searchUri = this.uri +'?term='+ searchTerm;
      axios.get(searchUri).then(
        res => {
          const data = res.data
        }
      )
    }


    // async get(searchTerm) {
    //   try {

    //     const uriString = this.uri + '?term='+ searchTerm;

    //     await axios.get(uriString).then(
    //       response => {
    //         return response
    //       }
    //     )
    //   } catch(err) {
    //     return {
    //       statusCode: 400,
    //       body: 'Error: ' + err.message
    //     }
    //   }
    // } 
};

let api = new HttpRequest('https://itunes.apple.com/search');

resp = api.get('radiohead');
console.log(resp);

