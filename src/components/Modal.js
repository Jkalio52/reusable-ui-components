import React, { useState, useEffect } from "react";


// A modal component is suitable for sending alerts in your application.
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