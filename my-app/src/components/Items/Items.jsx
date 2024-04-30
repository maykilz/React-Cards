import React, { useEffect, useState } from "react";

import { Card } from '../Card/Card'; 
import './Items.scss'; 
 
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { OneCard } from "../OneCard/OneCard";

export const Items = () => {
  const [elementsAjax, setElementsAjax] = useState(null);
  const [responseAjax, setResponseAjax] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");  
  const [selectedCard, setSelectedCard] = useState(0); 

  useEffect(() => {
    if (isLoading !=true) {
      const apiUrl = "https://603e38c548171b0017b2ecf7.mockapi.io/homes";
    fetch(apiUrl)
      .then((resp) => {
        return resp.json();
      })
      .then((response) => response)
      .then((response) => {
        setResponseAjax(response);
        setIsLoading(!isLoading);
      }); 
    }
  }, [isLoading]);
  useEffect(() => {  
    isLoading && setElementsAjax(responseAjax.filter(element => element.title.toUpperCase().includes(search.toUpperCase()))); 
  }, [responseAjax, search, isLoading]);
  return ( 
    <Routes>
      <Route path="/" element={<AllCards search={search} setSearch={setSearch} elementsAjax={elementsAjax} setSelectedCard={setSelectedCard} selectedCard={selectedCard} />}>
      </Route>
      <Route path="/card/:id" element={<OneCard setSelectedCards={setSelectedCard} selectedCard={selectedCard} elementsAjax={elementsAjax}/>}></Route>
    </Routes>
  );
}; 

const AllCards  = ({search, setSearch, elementsAjax, setSelectedCard, selectedCard})  => { 
  useEffect(()=> {document.title = 'Карточки React :)'; } ,[]); 
  return (
    <div className="container">
    <div className="searchblock">
    <span>Поиск</span>
     <input
       type="text"
       value={search}
       onChange={(evt) => setSearch(evt.target.value)}
       placeholder="Введите текст"
     />
    </div>
     <div className={"card-items"}>
       {elementsAjax &&
         elementsAjax.map((element, index) => {
           return (
             <div key={index}> 
             <Card props={element} setSelectedCards={setSelectedCard} selectedCard={selectedCard}/>
             </div>
           );
         })}
     </div>
   </div> 
  )
}

 