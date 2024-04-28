import React from 'react'
import CardStyle from  './Card.module.scss';
export const Card = ({props}) => { 
  return ( 
    <div className={CardStyle.card} key={props.id}> 
     <img src={`https://via.placeholder.com/300x150/505050?text=${props.title}`} alt="" className={CardStyle.image} /> <br/> 
       <div className={CardStyle.textContent}>
       <b className={CardStyle.title}>{props.title} </b> <br/>
      <i>{props.address}</i> <br/>
      <span className={CardStyle.subtitle}>New Properties for Sale from   <b>{props.price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })}</b> </span><br/> 
      <span >Shared Ownership Available</span>
       </div>
    </div> 
  )
}
