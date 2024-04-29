 
import './App.css';  
import React from 'react'; 

import {useEffect } from 'react';     
import {Items} from '../Items/Items';
function App() {
  useEffect(()=> {document.title = 'Карточки React :)'; } ,[]);
  return (
    <div >    
       <Items/>
    </div>
  );
}

export default App;
