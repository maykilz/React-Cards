 
import './App.css'; 
import { Items } from './components/items/Items';

 
import { useState, useEffect } from 'react'; 


 
 
function App() {
 
   

  useEffect(()=> {
    document.title = 'Карточки React :)';
  } ,[
  ''
  ]);
  return (
    <div > 
      <Items/>  
    </div>
  );
}

export default App;
