import React from "react";

import Button from "./Button";

import "./UpDown.css";

const UpDown = ({ count, increment, decrement }) => (
  <div className="UpDown">
    <h2>{count}</h2>
    <Button text="Increment" onClick={increment} />
    <Button text="Decrement" onClick={decrement} />
  </div>
);

export default UpDown;
