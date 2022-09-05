import React from "resct";

const Notification = (props) => {
  return(
    <div classNme= "notification">
      <h3>{props.popUpHead}</h3>
      <p>{props.message}</p>
    </div>
  )
}

export default Notification;