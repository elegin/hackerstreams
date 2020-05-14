import React from 'react'
// import Card from './components/Card/Card';
import Streams from './containers/Streams';
import LiveStreams from './containers/LiveStreams';

const App = props => {

   return (
     <div>
         <LiveStreams />
         <Streams />
      </div> 
   );

}

export default App
