var axios = require('axios');


// function search(username) {
//     return axios.get('https://api.spotify.com/v1/search?q=sting&type=artist')
// }

const prepareRequest = (artist) => {
  return encodeURIComponent(artist.trim())
}



var spotify_api = {
  search: (artist) => {
    const encodedArtist = prepareRequest(artist);
    console.log('encodedArtist',encodedArtist);
    return axios.get(`https://api.spotify.com/v1/search?q=${encodedArtist}&type=artist`)
  }
}
module.exports = spotify_api;
