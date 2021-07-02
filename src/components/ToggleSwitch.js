import React, { useState } from "react";


// A toggle component is used in situations where a true or false answer is necessary. It is an essential form component.

// Our toggle component receives the following props:
/*
1. ID (required): this is the ID that’s going to be passed to the checkbox input control. Without this, the component won’t render
2. Text (required): The Toggle Switch contains an array of two values, which signify the text for True and False
3. Name (optional): this will be label text of the checkbox input
4. onChange (optional): this will used to receive the returned data from the components
5. Checked (optional): this will be directly passed to the element to get its current state
6. Disabled (optional): this will be be used to set the state of the button

When it changes, we update the state and send the value to the event listener sent via props from the parent component.
*/
function ToggleSwitch(props) {
   const [checked, setChecked] = useState(props.defaultChecked);
   const [Text] = useState(props.Text);

   function onChange(e) {
      setChecked(e.target.value);
      if (props.onToggleChange) props.onToggleChange(e);
   }

   return (
      <div className={"toggle toggle-switch"}>
         <input
         type="checkbox"
         name={props.Name}
         className="toggle-switch-checkbox"
         id={props.id}
         defaultChecked={checked}
         onChange={onChange}
         />
         {props.id ? (
         <label className="toggle-switch-label" htmlFor={props.id}>
            <span
               className={
               props.disabled
                  ? "toggle-switch-inner toggle-switch-disabled"
                  : "toggle-switch-inner"
               }
               data-yes={Text[0]}
               data-no={Text[1]}
            />
            <span
               className={
               props.disabled
                  ? "toggle-switch-switch toggle-switch-disabled"
                  : "toggle-switch-switch"
               }
            />
         </label>
         ) : null}
      </div>
   );
}

export default ToggleSwitch;
