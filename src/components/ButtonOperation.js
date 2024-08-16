export const ButtonOperation = (props) => {
    return (
      <>
        <button 
            // className="Button w3-btn w3-ripple w3-black" 
            className="Button w3-btn w3-ripple w3-black w3-round w3-padding w3-border w3-border-black" 
            onClick={props.buttonOperationPressed}>
                
            {props.text}
            
        </button>
      </>
    );
  };
