import React , {useEffect , useState} from 'react';
import { Grid, Card, Image, Icon } from 'semantic-ui-react'

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
    <Grid doubling columns={4} 
      centered={true}
      style={{
          backgroundColor: '#6441a5',
          padding: '10px'
        }}
      >
      {userData.map((card,index) => (
          <Grid.Column key={index} centered={true}>
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
               <Card.Content extra >
                <Icon name='user' />
                !LIVE
              </Card.Content>               
            </Card>
        </Grid.Column>
      ))}
    </Grid>    

  );

};

export default Streams;