import React, {useState} from "react";


// A FormInput() component receives an input type to determine what type of input element to render (email, text, etc). It also takes in a method onChange() to receive the value sent back out from the input.
function FormInput(props) {
   const [inputType] = useState(props.type);
   const [inputValue, setInputValue] = useState("");
 
   function handleChange(event) {
     setInputValue(event.target.value);
     if (props.onChange) props.onChange(inputValue);
   }
   return (
      <>
         <input
         type={inputType}
         value={inputValue}
         name="input-form"
         onChange={handleChange}
         class="inputclass"
         />
      </>
   );
}
 
 export default FormInput;
 