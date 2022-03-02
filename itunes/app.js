/*
Description:
Query iTunes and Apple Book Store content

URI:  https://itunes.apple.com/search?term=<search team>

*/

const request = require('./app')

let api = new HttpRequest('https://itunes.apple.com/search')

api.get('Margolin')


