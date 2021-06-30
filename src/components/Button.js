import React, { useState } from "react";


// Reusable button to display different color variants or sizes everywhere it is used in your application.
// The button receives three properties via props. The variant (used to determine the button color), the size (lg, xs, sm) to determine the size of the button. You display the button content dynamically using React’s built-in children property (props.children).
function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);

  return (
    <button className={`btn-${variant} btn-${size}`}>{props.children}</button>
  );
}


export default Button;
