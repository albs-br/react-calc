export const ButtonDigit = (props) => {
    return (
      <>
        <button 
            // className="Button w3-btn w3-ripple w3-gray" 
            className="Button w3-btn w3-ripple w3-round w3-padding w3-border w3-border-lightgrey" 
            onClick={(e) => props.buttonDigitPressed(e, props.text)}
        >

            {props.text}
        
        </button>
      </>
    );
  };
