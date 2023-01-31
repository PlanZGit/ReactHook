import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("updating the title...");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        ></input>
        <button
          onClick={(e) => {
            this.setState((prevState) => {
              return { count: prevState.count + 1 };
            });
          }}
        >
          class count {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
