import axios from 'axios'
import * as twitchConstant from './getTwitchUsers';

export const twitchUserData = () => {

 let noSpaceShallPass = twitchConstant.TWITCHERS.split(/\s+/).join('');
 let strArr = noSpaceShallPass.split(",");
 
 const shuffle = (array) => {
  var copy = [], n = array.length, i;
  while (n) {
    i = Math.floor(Math.random() * array.length);
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }
  return copy;
}
 
 let randoCalrissian = shuffle(strArr);

  console.log()
  let userData = []
  return axios(
      {
        'method':'GET',
        'url':'https://api.twitch.tv/kraken/users',
        'headers': {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': '38kka8u16jpo72tpdefcp6f5nm86kk'
        },
        'params': {
            'login': randoCalrissian
        }
      }
    )
    .then(response => {
      userData = response.data.users;
      return userData
    });
   

 }

export default twitchUserData;


