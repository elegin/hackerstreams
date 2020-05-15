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
             target="_blank"  
             rel="noopener noreferrer"
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

  );

};

export default Streams;