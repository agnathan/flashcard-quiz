import React, { Component } from "react";
import Button from "./Button";
import "./App.css";

class SimpleStateApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = count => this.setState({ count: this.state.count + 1 });
  decrement = count => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <div className="App">
        <h2>{this.state.count}</h2>
        <Button text="Increment" onClick={this.increment} />
        <Button text="Decrement" onClick={this.decrement} />
      </div>
    );
  }
}

export default SimpleStateApp;
