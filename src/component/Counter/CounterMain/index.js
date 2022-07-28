import React from "react";
import s from "./CounterMain.module.css";

const CounterMain = (props) => {
  const {
    setCount,
    count,
    isModeAdd,
    handlerSetMode,
    clickFrequency,
    handlerSetModeClickFrequency,
    startAutoClick,
    fullTime,
  } = props;

  const handlerSetCount = () => {
    setCount();
  };

  const handlerChangeSetMode = () => {
    handlerSetMode();
  };

  const handlerChangeFrequency = (e) => {
    handlerSetModeClickFrequency(e.target.value);
  };

  const handlerSetAutoClick = () => {
    startAutoClick();
  };

  return (
    <>
      <div className={s.control_btns}>
        <button className={`${s.btn_step} btn`} onClick={handlerSetCount}>
          {isModeAdd ? "Add Step" : "Sub Step"}
        </button>
        <input
          id="isModeAdd"
          className={s.mode_checkbox}
          type="checkbox"
          name="isModeAdd"
          onChange={handlerChangeSetMode}
          checked={isModeAdd}
        />
        <label htmlFor="isModeAdd" className={`${s.mode_box} btn`}>
          {isModeAdd ? "Add mode" : "Sub mode"}
        </label>
      </div>
      <div className={s.controls_frequency}>
        <label className={s.click_frequency_box} htmlFor="clickFrequency">
          Select frequency:
        </label>
        <input
          id="clickFrequency"
          className={`${s.click_frequency} input`}
          type="number"
          value={clickFrequency}
          onChange={handlerChangeFrequency}
          step="1000"
        />
      </div>
      <button
        className={`${s.btn_auto_click} btn`}
        onClick={handlerSetAutoClick}
      >
        Auto Click
      </button>
      <div className={s.count}>
        Count: <span>{count}</span>
      </div>
      <div className={s.auto_clicker}>
        Auto clicker lasted : <span>{fullTime}</span>
      </div>
    </>
  );
};

export default CounterMain;
