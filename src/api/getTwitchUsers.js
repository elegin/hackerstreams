import axios from 'axios'




export default {
    getUsers: () =>
        axios({
            'method':'GET',
            'url':'https://api.twitch.tv/kraken/users',
            'headers': {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID': '38kka8u16jpo72tpdefcp6f5nm86kk'
            },
            'params': {
                'login':'1o57,secondorderchaos,synshop,lpnoway,hackwithbourbon,alkalinered,hackingdave,lordsaibat',
            },
        })
        
}



