import React from 'react';
import ReactDOM from 'react-dom';
import FormInput from "../components/FormInput.js";
import CustomSelect from "../components/CustomSelect.js";
import ToggleSwitch from "../components/ToggleSwitch.js";
import Button from "../components/Button.js";
import Modal from "../components/Modal.js";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
