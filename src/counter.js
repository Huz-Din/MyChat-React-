import React from "react";
import styles from "./index.module.css";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div className={styles.counter}>
        <button
          className={styles.counter__button_increm}
          onClick={this.increment}
        >
          Increment
        </button>
        <button
          className={styles.counter__button_decrem}
          onClick={this.decrement}
        >
          Decrement
        </button>
        <button className={styles.counter__button_reset} onClick={this.reset}>
          Reset
        </button>
        <h1 className={styles.counter__h1}>Current: {this.state.count}</h1>
      </div>
    );
  }
}
