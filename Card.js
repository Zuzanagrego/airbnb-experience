import React from "react";

function Card(props) {
  return (
    <div className="card-body">
      {(props.openSpots === 0 && <div className="card-status">Sold out</div>) ||
        (props.location === "Online" && (
          <div className="card-status">Online</div>
        ))}

      <div className="card-img">
        <img src={`./images/${props.img}`} />
      </div>

      <div className="card-text">
        <p>
          ⭐{props.rating}
          <span className="faded-text">
            ({props.reviewCount}) | {props.location}
          </span>
        </p>
        <p>{props.title}</p>
        <p>
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
