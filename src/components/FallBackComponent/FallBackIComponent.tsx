import { Component } from "react";
import "./FallBackComponent.css";

export default class FallBackComponent extends Component {
  render() {
    return (
      <div className="fallBack">
        <p className="fallBackMessage">
          Something went wrong
        </p>
        <button onClick={() => history.go(0)}>Reset</button>
      </div>
    );
  }
}
