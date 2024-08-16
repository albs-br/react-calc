export const ButtonDigit = (props) => {
    return (
      <>
        <button className="Button w3-btn w3-ripple w3-gray" onClick={(e) => props.buttonPressed(e, props.text)}>{props.text}</button>
      </>
    );
  };
