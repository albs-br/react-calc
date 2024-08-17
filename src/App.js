import { useState } from 'react';
import './App.css';
import './components/Button.css';
import { ButtonClear } from './components/ButtonClear';
import { ButtonDigit } from './components/ButtonDigit';
import { ButtonOperation } from './components/ButtonOperation';

function App() {

  const [calcVisorValue, setCalcVisorValue] = useState("0");
  const [firstOperandValue, setFirstOperandValue] = useState("0");
  const [operation, setOperation] = useState("");

  const buttonDigitPressed = (e, text) => {

    console.log("buttonPressed");

    e.preventDefault();

    if(calcVisorValue === "0") {
      setCalcVisorValue(text);
    }
    else {
      setCalcVisorValue(calcVisorValue + text);
    }
    
  };

  const buttonOperationPressed = (e, text) => {

    console.log("buttonOperationPressed");

    e.preventDefault();

    if(operation !== "") {
      executeOperation();

      setOperation("");
      setFirstOperandValue("0");
    }
    else {
      setOperation(text);
      setFirstOperandValue(calcVisorValue);
      setCalcVisorValue("0");
    }
  };

  const executeOperation = () => {
    if(operation === "+") {
      setCalcVisorValue((parseInt(firstOperandValue) + parseInt(calcVisorValue)).toString());
    }
    else if(operation === "-") {
      setCalcVisorValue((parseInt(firstOperandValue) - parseInt(calcVisorValue)).toString());
    }
  }

  const buttonEqualPressed = (e) => {

    console.log("buttonEqualPressed");

    e.preventDefault();

    executeOperation();

    setOperation("");
    setFirstOperandValue("0");
  };

  const buttonClearPressed = (e) => {
  
    console.log("buttonClearPressed");

    e.preventDefault();

    setOperation("");
    setFirstOperandValue("0");
    setCalcVisorValue("0");
    
  };
  
  return (
    <div className="App">
      
      <br />

      <div className="w3-col l4 m4">
        &nbsp;
      </div>      
      
      <div className="w3-col l3 m4">

        <div className="w3-container w3-black">
          <h2>React Calculator</h2>
        </div>
        <form className="w3-container w3-card-4">
          <br />
          firstOperandValue: {firstOperandValue}<br />
          operation: {operation}<br />
          <p>      
            <input className="calcVisor w3-input w3-border" type="text" required="" value={calcVisorValue} readOnly="readonly"></input>
          </p>
          <p>
            <ButtonDigit buttonDigitPressed={buttonDigitPressed} text="7"></ButtonDigit>
            <ButtonDigit buttonDigitPressed={buttonDigitPressed} text="8"></ButtonDigit>
            <ButtonDigit buttonDigitPressed={buttonDigitPressed} text="9"></ButtonDigit>
            <ButtonClear buttonClearPressed={buttonClearPressed}></ButtonClear>
          </p>
          <p>
            <ButtonDigit buttonDigitPressed={buttonDigitPressed} text="4"></ButtonDigit>
            <ButtonDigit buttonDigitPressed={buttonDigitPressed} text="5"></ButtonDigit>
            <ButtonDigit buttonDigitPressed={buttonDigitPressed} text="6"></ButtonDigit>
            <ButtonOperation buttonOperationPressed={buttonOperationPressed} text="+"></ButtonOperation>
          </p>
          <p>
            <ButtonDigit buttonDigitPressed={buttonDigitPressed} text="1"></ButtonDigit>
            <ButtonDigit buttonDigitPressed={buttonDigitPressed} text="2"></ButtonDigit>
            <ButtonDigit buttonDigitPressed={buttonDigitPressed} text="3"></ButtonDigit>
            <ButtonOperation buttonOperationPressed={buttonOperationPressed} text="-"></ButtonOperation>
          </p>
          <p>
            <ButtonDigit buttonDigitPressed={buttonDigitPressed} text="0"></ButtonDigit>
            <ButtonOperation buttonOperationPressed={buttonEqualPressed} text="="></ButtonOperation>
            <ButtonOperation buttonOperationPressed={buttonOperationPressed} text="/"></ButtonOperation>
            <ButtonOperation buttonOperationPressed={buttonOperationPressed} text="x"></ButtonOperation>
          </p>
          <br />
        </form>

      </div>

    </div>
  );
}

export default App;
