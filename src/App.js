import { useState } from 'react';
import './App.css';
import './components/Button.css';
import { ButtonClear } from './components/ButtonClear';
import { ButtonDigit } from './components/ButtonDigit';
import { ButtonOperation } from './components/ButtonOperation';

function App() {

  const [calcProperties, setCalcProperties] = useState({
    calcVisorValue: "0",
    firstOperandValue: "0",
    operation: "",
    isResult: false,
  });

  const buttonDigitPressed = (e, text) => {

    e.preventDefault();

    if(calcProperties.isResult || calcProperties.calcVisorValue === "0") {
      setCalcProperties({ ...calcProperties, calcVisorValue: text, isResult: false });
    }
    else {
      setCalcProperties({ ...calcProperties, calcVisorValue: calcProperties.calcVisorValue + text, isResult: false });
    }

  };

  const buttonOperationPressed = (e, text) => {

    e.preventDefault();

    if(calcProperties.operation !== "") {
      executeConcatOperation(text);
    }
    else {

      setCalcProperties({
        calcVisorValue: "0",
        firstOperandValue: calcProperties.calcVisorValue,
        operation: text,
      });
    }
  };

  const executeOperation = () => {
    let temp;
    if(calcProperties.operation === "+") {
      temp = (parseInt(calcProperties.firstOperandValue) + parseInt(calcProperties.calcVisorValue)).toString();
    }
    else if(calcProperties.operation === "-") {
      temp = (parseInt(calcProperties.firstOperandValue) - parseInt(calcProperties.calcVisorValue)).toString();
    }

    setCalcProperties({
      calcVisorValue: temp,
      firstOperandValue: calcProperties.calcVisorValue,
      operation: "",
      isResult: true,
    });

  }

  const executeConcatOperation = (nextOperation) => {

    let temp;
    if(calcProperties.operation === "+") {
      temp = (parseInt(calcProperties.firstOperandValue) + parseInt(calcProperties.calcVisorValue)).toString();
    }
    else if(calcProperties.operation === "-") {
      temp = (parseInt(calcProperties.firstOperandValue) - parseInt(calcProperties.calcVisorValue)).toString();
    }

    setCalcProperties({ ...calcProperties, 
      calcVisorValue: temp,
      firstOperandValue: temp,
      operation: nextOperation,
      isResult: true 
    });

  }

  const buttonEqualPressed = (e) => {

    e.preventDefault();

    executeOperation();
  };

  const buttonClearPressed = (e) => {

    e.preventDefault();

    setCalcProperties({
      calcVisorValue: "0",
      firstOperandValue: "0",
      operation: "",
    });
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
          {calcProperties.firstOperandValue}<br />
          {calcProperties.operation}<br />
          {calcProperties.calcVisorValue}<br />
          {(calcProperties.isResult) ? "true" : "false" }<br />
          <p>
            <input className="calcVisor w3-input w3-border" type="text" required="" value={calcProperties.calcVisorValue} readOnly="readonly"></input>
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
