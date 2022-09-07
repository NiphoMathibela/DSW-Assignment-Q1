import { useState } from 'react'
import './App.css'
import Form from "./assets/Form";
import Card from "./assets/Card";
import Notification from "./assets/Notification";


function App() {
  const [cardNum, setCardNum] = useState("################");
  const [cardHolder, setCardHolder] = useState("");
  const [month, setMonth] = useState("");
  const [cvv, setCvv] = useState();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const expSplit = month.split("-");
    const expMonth = expSplit[1];
    const expYear = expSplit[0];

  const handleCardNum = (e) => {
    setCardNum(e.target.value);
    console.log(cardNum)
  }

  const handleCardHolder = (e) => {
    setCardHolder(e.target.value);
    console.log(cardHolder)
  }

  const handleMonth = (e) => {
    setMonth(e.target.value);
    console.log(month)
  }

  const handleCvv = (e) => {
    setCvv(e.target.value);
    console.log(cvv)
  }
//Submission Of Form
  const handleSubmit = (e) => {
    e.preventDefault();
    const cardReg = /^\d{16}$/;
    const expSplit = month.split("-");
    const expMonth = expSplit[1];
    const expYear = expSplit[0];

    //Current Year And Month
    const currentYear = new Date().getFullYear();
    console.log(currentYear);

    const currentMonth = new Date().getMonth() + 1;
    console.log(currentMonth);

    if(cardNum.length < 16 || cardNum.lenth > 16){
      setMessage("Your card number should be 16 digits.")
      return;
      console.log("Actual card");
    } else if(cardHolder == null || cardHolder == ""){
      setMessage("Enter your name.")
    } else if(month.length > 7 || month.length < 7){
      setMessage("Enter a valid expiration date")
    } else if(cvv.length < 3 || cvv.length > 3){
      setMessage("Enter a valid CVV number, it should be 3 digits.")
      return;
    } else if(currentYear == expYear){
      setMessage("Your card is nearly expired")
      return;
    } else{
      console.log("All good!")
    }

  }

  return (
    <div className="App">
      <Card
        cardHolder= {cardHolder}
        cardNum= {cardNum}
        cvv= {cvv}
        expMonth= {expMonth}
        expYear= {expYear}
      />

      {message && <Notification message= {message}/>}

      <Form handleCardNum = {handleCardNum} 
      handleSubmit = {handleSubmit}
      handleCardHolder= {handleCardHolder}
      handleMonth= {handleMonth}
      handleCvv= {handleCvv}/>

    </div>
  )
}
  
export default App
