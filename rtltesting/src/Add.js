import React from "react";

function Add(val1, val2) {
  function add() {
    return val1 + val2;
  }
  return <div>{add}</div>;
}

export default Add;
