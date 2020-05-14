import React , {useEffect , useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
// import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import twitchUserLive from '../api/twitchLive';

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
  const classes = useStyles();

  useEffect(() => {
    twitchUserLive().then(function(response) {
      // console.log(response);
      setUserData(response)
    });
    setInterval(() => {
      twitchUserLive().then(function(response) {
         console.log(response);
         setUserData(response)
       });
     }, 10000); 
  }, []);   
  console.log(userData)
  if(userData.length === 0){
    return (
      <div className={classes.root}>
        No live Hackers
      </div>
    
    ) 
  } else {
    return (
      <div className={classes.root}>
        <GridList cellHeight={500} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">LIVE #HackerStreams </ListSubheader>
          </GridListTile>
          {userData.map((tile,index) => (
              <GridListTile key={index}>
              <img src={tile.preview.medium} alt={tile.channel.name} />
              <GridListTileBar
                title={tile.name}
                subtitle={<span>{tile.channel.description}</span>}
                  actionIcon={
                  <IconButton aria-label={`Go to ${tile.channel.name}`} className={classes.icon}>
                    <Link  href={`https://www.twitch.tv/${tile.channel.name}`} target="_blank"  rel="noopener noreferrer">
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
  }



};

export default Streams;