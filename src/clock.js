import React from "react";
import styles from "./index.module.css";

//конструктор компонента Clock
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //начальный метод цикл жизни компонента
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  //окончание метод цикла жизни компонента - сброс
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  //метод (состояние)
  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className={styles.clock}>
        <h1>
          Local time{" "}
          <span className={styles.time}>
            {this.state.date.toLocaleTimeString()}
          </span>
        </h1>
      </div>
    );
  }
}

export default Clock;
