export const ButtonOperation = (props) => {
    return (
      <>
        <button className="Button w3-btn w3-ripple w3-black" onClick={props.buttonOperationPressed}>{props.text}</button>
      </>
    );
  };
