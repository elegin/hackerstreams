import React , {useEffect , useState} from 'react';
import { Grid, Card, Image } from 'semantic-ui-react'

import twitchUserData from '../api/twitchData';


const Streams = ({users}) => {
  const [userData, setUserData] = useState([]);
  const [userLinks, setUserLinks] = useState([]);

  useEffect(() => {
    twitchUserData().then(function(response) {
      setUserData(response)
      const dl = response.map((data) => (
        `https://www.twitch.tv/${data.name}`
      ));
      setUserLinks(dl );
    });
 
  }, []);   




  return (
    <Grid doubling columns={4} style={{backgroundColor: '#6441a5'}}>
      {userData.map((card,index) => (
          <Grid.Column key={index}>
            <Card
             href={userLinks[index]}
             >
              <Image src={card.logo} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{card.name}</Card.Header>
                <Card.Meta>{card.bio}</Card.Meta>
               </Card.Content>
            </Card>
        </Grid.Column>
      ))}
    </Grid>    
    // <div className={classes.root}>
    //   <GridList cellHeight={500} className={classes.gridList}>
    //     <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
    //       <ListSubheader component="div">#HackerStreams</ListSubheader>
    //     </GridListTile>
    //     {userData.map((tile,index) => (
    //          <GridListTile key={index}>
    //           <img src={tile.logo} alt={tile.name} />
    //           <GridListTileBar
    //             title={tile.name}
    //             subtitle={<span>{tile.bio}</span>}
    //              actionIcon={
    //               <IconButton aria-label={`Go to ${tile.name}`} className={classes.icon}>
    //                 <Link  href={`https://www.twitch.tv/${tile.name}`} target="_blank"  rel="noopener noreferrer">
    //                   GO
    //                 </Link> 
    //               </IconButton>
    //             }                
    //           />
    //         </GridListTile>

    //      ))}
    //   </GridList>
    // </div>
  );

};

export default Streams;