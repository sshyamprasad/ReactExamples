import React from "react";
import configureStore from "./customHook/CounterStore";
import useStore from "./customHook/customHook2";
import Counter4 from "./components/Counter4";

configureStore();
function App() {
  const [state, dispatch] = useStore();
  const handleIncrement = () => {
    dispatch("increment", 1);
  };
  const handleDecrement = () => {
    dispatch("decrement", 1);
  };
  return (
    <div>
      counter : {state.counter}
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <Counter4 />
    </div>
  );
}

export default App;
