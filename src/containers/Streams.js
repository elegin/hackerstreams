import React , {useEffect , useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
// import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'gray',
  },
  // gridList: {
    // width: 500,
    // height: 450,
  // },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



// const Streams = props => {
const Streams = ({users}) => {
  const [userData, setUserData] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [userStream, setUserStream] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    const fetchData = async () => {
      const response  = await axios(
          {
            'method':'GET',
            'url':'https://api.twitch.tv/kraken/users',
            'headers': {
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID': '38kka8u16jpo72tpdefcp6f5nm86kk'
            },
            'params': {
                'login':'fextralife,1o57,secondorderchaos,synshop,lpnoway,hackwithbourbon,alkalinered,hackingdave,lordsaibat',
            }
          }
        )
          setUserData(response.data.users);
          const channelIds = response.data.users.map((data)=>{ return  data._id });
          setUserIds(channelIds)
          console.log(channelIds)

        const res  = await axios(
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
        );
        setUserStream(res.data);
     }   
     
    
    // const fetchStreams = async (userIds) => {
    //   console.log(userIds)
    //   const response  = await axios(
    //       {
    //         'method':'GET',
    //         'url':'https://api.twitch.tv/kraken/streams',
    //         'headers': {
    //             'Accept': 'application/vnd.twitchtv.v5+json',
    //             'Client-ID': '38kka8u16jpo72tpdefcp6f5nm86kk'
    //         },
    //         'params': {
    //             'channel': userIds,
    //         }
    //       }
    //     );
    //     setUserStream(response.data);
    //     console.log(response.data)
    //  }        

     fetchData()
    // .then(
    //   fetchStreams(userIds)
    // );
  }, []);   




  return (
    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">HackerStreams</ListSubheader>
        </GridListTile>
        {userData.map((tile,index) => (
          // if(userStreams.includes(tile._id)){  
             <GridListTile key={index}>
              <img src={tile.logo} alt={tile.name} />
              <GridListTileBar
                title={tile.name}
                subtitle={<span>by: {tile.bio}</span>}
                 actionIcon={
                  <IconButton aria-label={`Go to ${tile.name}`} className={classes.icon}>
                    <Link  href={`https://www.twitch.tv/${tile.name}`} target="_blank"  rel="noopener noreferrer">
                      GO
                    </Link> 
                  </IconButton>
                }                
              />
            </GridListTile>

         ))}
      </GridList>
    </div>
  );

};

export default Streams;