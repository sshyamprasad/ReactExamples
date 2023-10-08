import React, { useState } from "react";
function CounterOne() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      counter<button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default CounterOne;
