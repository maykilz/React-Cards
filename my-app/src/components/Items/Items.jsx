import React, { useEffect, useState } from "react";

import { Card } from '../Card/Card'; 
import './Items.scss';
export const Items = () => {
  const [elementsAjax, setElementsAjax] = useState(null);
  const [responseAjax, setResponseAjax] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
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
  }, [isLoading]);
  useEffect(() => {  
    isLoading && setElementsAjax(responseAjax.filter(element => element.title.toUpperCase().includes(search.toUpperCase()))); 
  }, [responseAjax, search, isLoading]);
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
              <Card props={element}/>
              </div>
            );
          })}
      </div>
    </div>
  );
}; 