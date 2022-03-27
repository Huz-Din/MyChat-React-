import React from "react";
import styles from "./index.module.css";

//конструктор компонента Clock
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //начальный метод цикл жизни компонента -Компонент вмонтирован
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  //окончание цикла жизни компонента - сброс (Компонент размонтирован)
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  // метод состояния
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
