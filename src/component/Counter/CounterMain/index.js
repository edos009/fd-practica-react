import React from "react";

const CounterMain = (props) => {
  const {
    setCount,
    count,
    isModeAdd,
    handlerSetMode,
    clickFrequency,
    handlerSetModeClickFrequency,
    startAutoClick,
  } = props;
  console.log(props);

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
      <button onClick={handlerSetCount}>
        {isModeAdd ? "Add Step" : "Sub Step"}
      </button>
      <br />
      <label>
        {isModeAdd ? "Add mode" : "Subtract mode"}
        <input
          type="checkbox"
          onChange={handlerChangeSetMode}
          checked={isModeAdd}
        ></input>
      </label>
      <br />
      <label>
        Select frequency:
        <input
          type="number"
          value={clickFrequency}
          onChange={handlerChangeFrequency}
          step="1000"
        />
      </label>
      <button onClick={handlerSetAutoClick}>Auto Click</button>
      <div>{count}</div>
    </>
  );
};

export default CounterMain;
