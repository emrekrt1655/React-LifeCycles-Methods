import React from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
    };

    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () =>
      this.setState({ mount: false }, this.componentWillUnmount());
  }

  componentWillUnmount() {
    console.log("component will unmount");
    console.log("----------------------");
  }

  render() {
    return (
      <div className="App">
        <div className="Button">
          <button
            onClick={this.unmountCounter}
            disabled={!this.state.mount}
            className="Button-self"
          >
            Unmount Counter
          </button>

          <button
            onClick={this.mountCounter}
            disabled={this.state.mount}
            className="Button-self"
          >
            Mount Counter
          </button>
        </div>

        {this.state.mount ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
