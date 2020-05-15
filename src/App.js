import React from 'react'
import Streams from './containers/Streams';
import LiveStreams from './containers/LiveStreams';
import { Divider } from 'semantic-ui-react'

const App = props => {
   const styleLink = document.createElement("link");
   styleLink.rel = "stylesheet";
   styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
   document.head.appendChild(styleLink);
   return (
     <div >
         
         <LiveStreams />
         <Divider />
         <Streams />
      </div> 
   );

}

export default App
