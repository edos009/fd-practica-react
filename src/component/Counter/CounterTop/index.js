import React, { Component } from "react";
import CounterMain from "../CounterMain";
import s from "./CounterTop.module.css";

class CounterTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      isModeAdd: true,
      count: 0,
      clickFrequency: 1000,
      fullTime: "",
    };
    // this.count = 0;
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
    console.log(value);
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
    this.setState({ fullTime: "" });

    if (this.timeId === null) {
      this.timeId = setInterval(() => {
        if (currentTime + clickFrequency <= startTime + 10000) {
          currentTime += clickFrequency;
          this.setCount();
        } else {
          this.setState({
            fullTime: `${(currentTime - startTime) / 1000} seconds`,
          });
          clearInterval(this.timeId);
          this.timeId = null;
        }
      }, clickFrequency);
    }
  };

  componentDidMount() {
    this.startAutoClick();
  }

  setCount = () => {
    const { step, isModeAdd, count } = this.state;
    this.setState({
      count: isModeAdd ? count + step : count - step,
    });
  };

  render() {
    const { step } = this.state;
    return (
      <section>
        <h1 className={s.counter_title}>Counter Upgrade V2.0</h1>
        <input
          className={`${s.step} input`}
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
          count={this.state.count}
          clickFrequency={this.state.clickFrequency}
          handlerSetModeClickFrequency={this.handlerSetModeClickFrequency}
          startAutoClick={this.startAutoClick}
          fullTime={this.state.fullTime}
        />
      </section>
    );
  }
}

export default CounterTop;
