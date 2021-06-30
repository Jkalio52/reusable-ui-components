import React, { useState } from "react";

// Reusable button to display different color variants or sizes everywhere it is used in your application.
function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);

  return (
    <button className={`btn-${variant} btn-${size}`}>{props.children}</button>
  );
}


export default Button;
