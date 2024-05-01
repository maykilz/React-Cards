import React from "react";
import "./Card.scss";  
import { Link, Route, Routes } from 'react-router-dom';   

export const Card = ({ props, setSelectedCards, selectedCard }) => {    
  return (
    <div className={"card"} key={props.id}>
      <div className={'card-imageblock'}>
      <img
        src={`https://via.placeholder.com/300x150/505050?text=${props.title}`}
        alt={`Картинка ${props.title}`}
        className={"image"}
      />
      <div className={`card-type ${props.type == 'IndependentLiving'? 'card-blue': 'card-orange'}`}><span>{props.type}</span></div>
      </div>  
      <div className="textContent"> 
      <Link to={`/card/${props.id}`} className={'title'} onClick={() => { setSelectedCards(props.id); }}>{props.title}</Link>
        <i>{props.address}</i>
        <span className={"subtitle"}>
          New Properties for Sale from{" "}
          <b>
            {props.price.toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
            })}
          </b>{" "}
        </span>
        <span>Shared Ownership Available</span>
      </div>
    </div>
  );
};
 