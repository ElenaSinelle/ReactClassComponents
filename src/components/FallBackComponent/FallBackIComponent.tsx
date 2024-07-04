import { Component } from "react";
import "./FallBackComponent.css";

export default class FallBackComponent extends Component {
  render() {
    return (
      <>
        <p>Something went wrong</p>
        <button onClick={() => history.go(0)}>Reset</button>
      </>
    );
  }
}
