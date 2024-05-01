import React, { useEffect, useState } from "react";
import "./OneCard.scss";
import { Link,useParams } from "react-router-dom";
export const OneCard = () => {
  const params = useParams();
  const elementId = parseInt(params.id);
  const [isCardLoading, setIsCardLoading] = useState(true);
  const [OneCardElement, setOneCardElement] = useState(); 
  useEffect(() => {
    const apiUrl = `https://603e38c548171b0017b2ecf7.mockapi.io/homes/${elementId}`;
    fetch(apiUrl)
      .then((resp) => {
        return resp.json();
      })
      .then((response) => {
        setOneCardElement(response);
        setIsCardLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
        setIsCardLoading(false);
      });
  }, [elementId]); 
   
  if (isCardLoading) {
    return <div>Загрузка...</div>;
  }
  document.title = OneCardElement.title;
  return ( 
    
    <div className={"more-card"}>
      <img
        src={`https://via.placeholder.com/300x150/505050?text=${OneCardElement.title}`}
        alt=""
        className={"more-card-img"}
      />
      <span className={"title"}>{OneCardElement.title}</span>
      <i>{OneCardElement.address}</i>
      <span className={"subtitle"}>
        New Properties for Sale from{" "}
        <b>
          {OneCardElement.price.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR",
          })}
        </b>{" "}
      </span>
      <span>Shared Ownership Available</span>
      <Link to="/">Вернуться</Link>
    </div>
  );
};
