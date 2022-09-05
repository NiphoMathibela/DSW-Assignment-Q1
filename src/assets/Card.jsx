import React from "react";
import "./Card.css";

const Card = (props) => {
  return(
    <div className= "card">
      <div>
        <img src= "https://github.com/NiphoMathibela/DSW-Assignment-Q1/blob/main/src/assets/visa.png?raw=true" className= "visa" />
        <img src="https://github.com/NiphoMathibela/DSW-Assignment-Q1/blob/main/src/assets/chip.png?raw=true" className= "chip"/>
      </div>

      <div>
        <p>Card Holder</p>
        <p>{props.cardHolder}</p>
      </div>

      <div>
        <p>CVV</p>
        <p>{props.cvv}</p>

        <p>Exp Date</p>
        <p>{props.expMonth}/{props.expYear}</p>
      </div>
      
    </div>
  )
}
export default Card;