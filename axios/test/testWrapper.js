/*
Description:
Test wrapper for HttpService.
*/

const request = require('./src/HttpService')

let search = new HttpRequest('https://itunes.apple.com/search')

const response = search.get('radiohead')

console.log(response)