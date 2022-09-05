import React from "react";
import "./Form.css";
import Card from "./Card";

const Form = (props) => {
  return(
    <div className= "container">
      <Card/>
      <form>
        
        <input type= "number"
        placeholder= "Card Number 16 digits"
        id= "card-num"
        name= "cardNum"
        value= {props.cardNum}
        onChange= {props.handleCardNum}
        /><br/>

        <input type= "text"
        placeholder= "Card Holder"
        id= "card-holder"
        name= "cardHolder"
        value= {props.cardNum}
        onChange= {props.handleCardHolder}
        /><br/>

        <input type="month" id= "exp-date" placeholder= "Exp date" onChange= {props.handleMonth}/><br/>
        <input type= "number" placeholder= "CVV" onChange= {props.handleCvv} value= {props.cvv}/>

        <button className ="button-36" type= "submit" onClick= {props.handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
export default Form;