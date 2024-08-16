export const ButtonClear = (props) => {
    return (
      <>
        <button 
          // className="Button w3-btn w3-ripple w3-black" 
          className="Button w3-btn w3-ripple w3-red w3-round w3-padding w3-border w3-border-lightgrey" 
          onClick={props.buttonClearPressed}>
            C
        </button>
      </>
    );
  };
