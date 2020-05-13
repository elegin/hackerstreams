import React from 'react'
// import api from './api/api'
import Card from './components/Card/Card';

// function App()  {
  const App = props => {
    // Create state variables
    // let [responseData, setResponseData] = React.useState('')
    // const [namesList, setNamesList] = useState('');

    // fetches data

    
    // const fetchData = (e) => {
    //     e.preventDefault()
    //     api.getData()
    //     .then((response)=>{
    //         // setResponseData(response.data.users)
    //         setNamesList( response.data.users.map((name,index)=>{
    //             return <li key={index}><img src={name.logo}/></li>;
    //           })   
    //         )         
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })
    // }

    return <Card />;
    // return (
    //     <div>
    //         <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>
    //         <ul>{ namesList }</ul>
    //     </div>
    // )
}
export default App
