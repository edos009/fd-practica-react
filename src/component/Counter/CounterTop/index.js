import React, { Component } from "react";
import CounterMain from "../CounterMain";
import s from "./CounterTop.module.css";

class CounterTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      isModeAdd: true,
      clickFrequency: 1000,
    };
    this.count = 0;
    this.timeId = null;
  }

  handlerChangeStep = ({ target: { value } }) => {
    const step = Number(value);

    if (step < 1 || step > 1000000) {
      return;
    }
    this.setState({ step: step });
  };

  handlerSetModeClickFrequency = (value) => {
    this.setState({ clickFrequency: Number(value) });
  };

  handlerSetMode = () => {
    const { isModeAdd } = this.state;
    this.setState({ isModeAdd: !isModeAdd });
  };

  startAutoClick = () => {
    const { clickFrequency } = this.state;
    const startTime = new Date().getSeconds() * 1000;
    let currentTime = startTime;
    const fullTime = 10000

    if (this.timeId === null) {
      this.timeId = setInterval(() => {
        if (currentTime + clickFrequency <= startTime + fullTime) {
          currentTime += clickFrequency;
          this.setCount();
        } else {
          console.log(`${fullTime / 1000}c.`);
          clearInterval(this.timeId);
          this.timeId = null;
        }
      }, clickFrequency);
    }
  };

  componentDidMount(){
    this.startAutoClick();
  }

  setCount = () => {
    const { step, isModeAdd } = this.state;
    this.setState({ step: 1 });
    return isModeAdd ? (this.count += step) : (this.count -= step);
  };

  render() {
    const { step } = this.state;
    return (
      <section>
        <h1 className={s.counter_title}>Counter Upgrade 2.0</h1>
        <input
          type="number"
          name="step"
          value={step}
          onChange={this.handlerChangeStep}
        />
        <CounterMain
          step={this.state.step}
          setCount={this.setCount}
          isModeAdd={this.state.isModeAdd}
          handlerSetMode={this.handlerSetMode}
          count={this.count}
          clickFrequency={this.state.clickFrequency}
          handlerSetModeClickFrequency={this.handlerSetModeClickFrequency}
          startAutoClick={this.startAutoClick}
        />
      </section>
    );
  }
}

export default CounterTop;
