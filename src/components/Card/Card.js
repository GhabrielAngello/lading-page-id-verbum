import React from "react";
import './Card.css';


function Card(props){
    return(
        <div className="card">
            <img
                src={props.imgCard}
                alt={props.imgCard}
                className="image"
            />
            <h2 className="title-card">{props.title}</h2>
            <p class="subtitle-card">{props.subtitle}</p>
      </div>
    )
}

export default Card;