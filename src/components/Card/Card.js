import React , {useEffect , useState} from 'react'
import axios from 'axios'
import './Card.css';
const Card = ({users}) => {
  // let users = '1o57,secondorderchaos,synshop,lpnoway,hackwithbourbon,alkalinered,hackingdave,lordsaibat'
  const [userData, setUserData] = useState([]);
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
  <ul>
    {userData.map(name =>

      <li className="card" key={name.name}>
        <a href={`https://www.twitch.tv/${name.name}`} target="_blank"  rel="noopener noreferrer" >
          <img src={name.logo} alt={name.display_name}/>
        </a>
        <p>{name.display_name}</p>
        <p>{name.bio}</p>
      </li>
    )}
  </ul>
  );
}
//     <ul>
//       {userData.map((name,index)=>{
//         let twitchLink = `https://www.twitch.tv/${name.name}`;
//         <li className="card" key={index}>
//           <a href={twitchLink} target="_blank"  rel="noopener noreferrer" > <img src={name.logo} alt={name.display_name}/> </a>
//           <p>{name.display_name}</p>
//           <p>{name.bio}</p>
//         </li>
//       })};
//     </ul>


// const Card = props => {
//   // const [namesList, setNamesList] = useState('');
//   const [userData, setUserData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response  = await axios(
//           {
//             'method':'GET',
//             'url':'https://api.twitch.tv/kraken/users',
//             'headers': {
//                 'Accept': 'application/vnd.twitchtv.v5+json',
//                 'Client-ID': '38kka8u16jpo72tpdefcp6f5nm86kk'
//             },
//             'params': {
//                 'login':'1o57,secondorderchaos,synshop,lpnoway,hackwithbourbon,alkalinered,hackingdave,lordsaibat',
//             }
//           }
//         );
//         setUserData(response.data.users);
//     }
//       fetchData()
//   }, []);      

  //   axios({
  //     'method':'GET',
  //     'url':'https://api.twitch.tv/kraken/users',
  //     'headers': {
  //         'Accept': 'application/vnd.twitchtv.v5+json',
  //         'Client-ID': '38kka8u16jpo72tpdefcp6f5nm86kk'
  //     },
  //     'params': {
  //         'login':'1o57,secondorderchaos,synshop,lpnoway,hackwithbourbon,alkalinered,hackingdave,lordsaibat',
  //     },
  // })

    // getTwitchUsers.getUsers()
    //     .then((response)=>{
    //       console.log(response.data.users)
    //         setNamesList( response.data.users.map((name,index)=>{
    //             let twitchLink = `https://www.twitch.tv/${name.name}`
    //             return <li className="card" key={index}>
    //                  <a href={twitchLink} target="_blank"  rel="noopener noreferrer" > <img src={name.logo} alt={name.display_name}/> </a>
    //                   <p>{name.display_name}</p>
    //                   <p>{name.bio}</p>
    //                 </li>;
    //           })   
    //         )         
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })  
  // },[]);
//   <div className="card">
//   <ul>{namesList}</ul>
// </div>


//   return (
//     <ul>
//       {userData.map((name,index)=>{
//         let twitchLink = `https://www.twitch.tv/${name.name}`;
//         <li className="card" key={index}>
//           <a href={twitchLink} target="_blank"  rel="noopener noreferrer" > <img src={name.logo} alt={name.display_name}/> </a>
//           <p>{name.display_name}</p>
//           <p>{name.bio}</p>
//         </li>
//       })};
//     </ul>
//   );
// }

export default Card;