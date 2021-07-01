import React, { useState, useEffect } from "react";


// A modal component is suitable for sending alerts in your application.
/*
This modal component does two things:

    1. It receives a boolean value that determines if it pops up or not
    2. It also receives the message to be displayed when it pops up

To close the modal, set the show state to false. You can do that by calling a setTimeout() function in the useEffect() hook after a few seconds.
*/
function Modal(props) {
  const [message] = useState(props.message);
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  });

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">{message}</section>
    </div>
  );
}

export default Modal;