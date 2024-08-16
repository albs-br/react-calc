import { useState } from 'react';
import './App.css';
import { ButtonClear } from './components/ButtonClear';
import { ButtonDigit } from './components/ButtonDigit';
import { ButtonOperation } from './components/ButtonOperation';

function App() {

  const [calcVisorValue, setCalcVisorValue] = useState("0");

  const buttonPressed = (e, text) => {

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
   
  };

  const buttonClearPressed = (e) => {
  
    console.log("buttonClearPressed");

    e.preventDefault();

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
          <p>      
            <input className="w3-input w3-border" type="text" required="" value={calcVisorValue} readOnly="readonly"></input>
          </p>
          <p>
            <ButtonDigit buttonPressed={buttonPressed} text="7"></ButtonDigit>
            <ButtonDigit buttonPressed={buttonPressed} text="8"></ButtonDigit>
            <ButtonDigit buttonPressed={buttonPressed} text="9"></ButtonDigit>
            <ButtonClear buttonClearPressed={buttonClearPressed}></ButtonClear>
          </p>
          <p>
            <ButtonDigit buttonPressed={buttonPressed} text="4"></ButtonDigit>
            <ButtonDigit buttonPressed={buttonPressed} text="5"></ButtonDigit>
            <ButtonDigit buttonPressed={buttonPressed} text="6"></ButtonDigit>
            <ButtonOperation buttonOperationPressed={buttonOperationPressed} text="+"></ButtonOperation>
          </p>
          <p>
            <ButtonDigit buttonPressed={buttonPressed} text="1"></ButtonDigit>
            <ButtonDigit buttonPressed={buttonPressed} text="2"></ButtonDigit>
            <ButtonDigit buttonPressed={buttonPressed} text="3"></ButtonDigit>
            <ButtonOperation buttonOperationPressed={buttonOperationPressed} text="-"></ButtonOperation>
          </p>
          <p>
            <ButtonDigit buttonPressed={buttonPressed} text="0"></ButtonDigit>
            <ButtonOperation buttonOperationPressed={buttonOperationPressed} text="="></ButtonOperation>
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
