function FunctionEvent() {
  const handleClick = () => {
    console.log("Button clicke again!");
  };
  return (
    <div>
      Functional Component
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default FunctionEvent;
