import axios from 'axios';

export const twitchUserLive = () => {
  return axios({
    method: 'get',
    url: 'https://elegin.github.io/twitchers/'
  }).then(response => {
    let noSpaceShallPass = response.data.split(/\s+/).join('');
    return axios(
      {
        'method':'GET',
        'url':'https://api.twitch.tv/kraken/users',
        'headers': {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Client-ID': '38kka8u16jpo72tpdefcp6f5nm86kk'
        },
        'params': {
            'login': noSpaceShallPass
        }
      }
    )
    .then(response => {
      const channelIds = response.data.users.map((data)=>{ return  data._id });
      // console.log(userIds);
      return axios(
        {
          'method':'GET',
          'url':'https://api.twitch.tv/kraken/streams',
          'headers': {
              'Accept': 'application/vnd.twitchtv.v5+json',
              'Client-ID': '38kka8u16jpo72tpdefcp6f5nm86kk'
          },
          'params': {
              'channel': channelIds.toString(),
          }
        }
      ).then(response => {
        // console.log(response.data.streams)
        return response.data.streams
      })
    });
  })
}
export default twitchUserLive ;


