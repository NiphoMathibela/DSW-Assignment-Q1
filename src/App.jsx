import { useState } from 'react'
import './App.css'
import Form from "./assets/Form";


function App() {
  const [cardNum, setCardNum] = useState();
  const [cardHolder, setCardHolder] = useState("");
  const [month, setMonth] = useState("");
  const [cvv, setCvv] = useState();

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

    if(cardNum.match(cardReg)){
      console.log("Actual card");
    } else{
      console.log("not a card");
    }

    if(cardHolder == null || cardHolder == ""){
      console.log("enter a name");
    } else{
      console.log("name captured");
    }

    if(month.length > 7 || month.lenght < 7){
      console.log("not valid date");
    } else{
      console.log("valid date");
    }

    if(cvv.length != 3){
      console.log("invalid cvv");
    } else{
      console.log("valid cvv");
    }
    
    if(currentMonth == expMonth && currentYear == expYear){
      console.log("Nearly expired");
    } else{
      console.log("youre good");
    }
  }

  return (
    <div className="App">

      <Form handleCardNum = {handleCardNum} 
      handleSubmit = {handleSubmit}
      handleCardHolder= {handleCardHolder}
      handleMonth= {handleMonth}
      handleCvv= {handleCvv}/>

    </div>
  )
}
  
export default App
