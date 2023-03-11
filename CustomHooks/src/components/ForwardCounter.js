import { useState, useEffect } from "react";
import useCounter from "../customHook/counterHook";

import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter(true);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
