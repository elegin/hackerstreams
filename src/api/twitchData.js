import axios from 'axios'
export const twitchUserData = () => {
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
            'login':'elkentaro,1o57,secondorderchaos,synshop,lpnoway,hackwithbourbon,alkalinered,hackingdave,lordsaibat',
        }
      }
    )
    .then(response => {
      userData = response.data.users;
      // console.log(userIds);
      // console.log(userData);
      return userData
    });
   

 }

export default twitchUserData;


