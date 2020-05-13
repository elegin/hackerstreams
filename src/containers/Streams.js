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
                'login':'1o57,secondorderchaos,synshop,lpnoway,hackwithbourbon,alkalinered,hackingdave,lordsaibat',
            }
          }
        );
        setUserData(response.data.users);
    }
    
    fetchData();
  }, []);   

  return (
    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">HackerStreams</ListSubheader>
        </GridListTile>
        {userData.map((tile,index) => (
             <GridListTile key={index}>
              <img src={tile.logo} alt={tile.name} />
              <GridListTileBar
                title={tile.name}
                subtitle={<span>by: {tile.bio}</span>}
                // <a href={`https://www.twitch.tv/${tile.name}`} target="_blank"  rel="noopener noreferrer"></a> 
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


    // return (
    //     <div className={classes.root}>
    //     <GridList cellHeight={180} className={classes.gridList}>
    //       <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
    //         <ListSubheader component="div">HackerStreams</ListSubheader>
    //       </GridListTile>
    //       {userData.map((tile) => (
    //         <GridListTile key={tile.name} cols={1}>
    //           <img src={tile.logo} alt={tile.bio} />
    //         </GridListTile>
    //       ))}
    //     </GridList>
    //   </div>
        // <div>
        //     <h1>Streams</h1>
        //     <Stream />
        // </div> 
    // );

};

export default Streams;