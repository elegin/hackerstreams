import React , {useEffect , useState} from 'react';
import twitchUserLive from '../api/twitchLive';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
const useStyles = () => ({
  nolive: {
     backgroundColor: 'black',
  },
  noLiveText: {
    fontSize: '2.5em',
    backgroundColor: 'black',
    color: 'white'
  },});

const Streams = () => {
  const [userData, setUserData] = useState([]);
  const [userLinks, setUserLinks] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    twitchUserLive().then(function(response) {
      const dl = response.map((data) => (
        `https://www.twitch.tv/${data.channel.name}`
      ));
      setUserLinks(dl);
      setUserData(response)
    });
    setInterval(() => {
      twitchUserLive().then(function(response) {
        const dl = response.map((data) => (
          `https://www.twitch.tv/${data.channel.name}`
        ));
        setUserLinks(dl);
        setUserData(response)
       });
     }, 10000); 
  }, []);   
  if(userData.length === 0){
    return (
      <div className={classes.root}>
        <p  className={classes.noLiveText}>No live Hackers</p>
      </div>
   
    ) 
  } else {
    return (
      <Grid doubling columns={4} style={{backgroundColor: '#6441a5'}}>
      {userData.map((card,index) => (
          <Grid.Column key={index}>
            <Card
             href={userLinks[index]}
             target="_blank"  
             rel="noopener noreferrer"
             >
              <Image src={card.preview.large} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{card.channel.name}</Card.Header>
                <Card.Meta>{card.channel.description}</Card.Meta>
               </Card.Content>
               <Card.Content extra >
                  <Icon name='user' color='red'/>
                  LIVE
    </Card.Content>               
            </Card>
        </Grid.Column>
      ))}
    </Grid>        
    );
  }



};

export default Streams;