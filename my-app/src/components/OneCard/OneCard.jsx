import React from "react";
import "./OneCard.scss";  
import { Link, Route, Routes } from 'react-router-dom';   
export const OneCard = ({search, setSearch, elementsAjax,  setSelectedCard, selectedCard }) => {   
  const OneCardElemet = elementsAjax[selectedCard];
  return (
    <div className={'more-card'}>  
      <img src={`https://via.placeholder.com/300x150/505050?text=${OneCardElemet.title}`} alt="" className={'more-card-img'} /> 
      <span  className={'title'}>{OneCardElemet.title}</span>
        <i>{OneCardElemet.address}</i>
        <span className={"subtitle"}>
          New Properties for Sale from{" "}
          <b>
            {OneCardElemet.price.toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
            })}
          </b>{" "}
        </span>
        <span>Shared Ownership Available</span>
        <Link to="/">Вернуться</Link>
    </div>
  )
}