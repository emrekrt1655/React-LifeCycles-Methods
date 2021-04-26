import React from "react";
import "../App.css";

export default class Counter extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      counter: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log(`------------------`);
  }

  shouldComponentUpdate() {
    console.log("Component Should Update!");
    return true;
  }

  render() {
    console.log("Render");
    return (
      <div>
        <div className="Button">
          <button className="Button-self" onClick={this.increment}>
            {" "}
            Increment
          </button>
          <button className="Button-self" onClick={this.decrement}>
            {" "}
            Decrement
          </button>
        </div>
        <div className="Text">Counter: {this.state.counter}</div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update!");
    console.log(`------------------`);
  }
}
