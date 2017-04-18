var axios = require('axios');


// function search(username) {
//     return axios.get('https://api.spotify.com/v1/search?q=sting&type=artist')
// }


var spotify_api = {
  search: () => {
    return axios.get('https://api.spotify.com/v1/search?q=sting&type=artist')
  }
}
module.exports = spotify_api;
