
import React, { useEffect, useState } from 'react'; 
 import { Card } from '../card/Card';  
 

 import axios from 'axios'; 
 import './Items.scss';
 
export const Items = () => {
      
 const [elementsAjax, setElementsAjax] = useState(null); 
 const [responseAjax, setResponseAjax] = useState();
 const [loaded, setLoaded] = useState(false);
 const [search, setSearch] = useState('');
  useEffect(() => { 
    const apiUrl = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';
    axios.get(apiUrl).then((resp) => {  
      return resp;
    }).then((response) => {
      return response.data;
    })
    .then ((response) => { 
      setResponseAjax(response);
      setLoaded(!loaded);
    });
     
 
  }, ['']);

  useEffect(() => {
    if (loaded) {  
      const filtereElements =  responseAjax.filter ((element) => { 
       return  element.title.toUpperCase().includes(search.toUpperCase());
      });   
      setElementsAjax(filtereElements);
    }
  }, [responseAjax, search])
  
  
  return (  
    <div className="container">
      <span>Поиск</span> <br/>
      <input type="text"  value={search} onChange={(evt) => setSearch(evt.target.value)} placeholder='Введите текст'/>
      <br/>
       <div  className={'card-items'}>
    {
      elementsAjax && 
      elementsAjax.map((element, index) => {
           return (
            <div key={index} className='card-items'>
         
            <Card  props={element}/>
            </div>
           )
        })
      
    }
   </div>
    </div>
  )
}

