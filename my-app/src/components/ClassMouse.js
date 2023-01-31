import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e) => {
    console.log("Mouse event");
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    console.log("componentDidMount");
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return (
      <div>
        ClassMouse X :{this.state.x} Y :{this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
