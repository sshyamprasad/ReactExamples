import React from "react";
import useStore from "../customHook/customHook2";

function Counter4() {
  const [state, dispatch] = useStore();
  return <div>another display counter is {state.counter}</div>;
}

export default Counter4;
