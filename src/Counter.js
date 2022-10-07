import React, { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value + -1 };
    case "CHANGED":
      return { value: +action.data };
    default:
      return state;
  }
}

const Counter = () => {
  // const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   console.log("redering");

  //   return () => {
  //     console.log("clean up");
  //   };
  // }, []);

  const onVisible = () => {
    setVisible(!visible);
  };

  // const onChange = (e) => {
  //   setValue(parseInt(e.target.value));
  // };

  // const onIncrease = () => {
  //   setValue((preValue) => preValue + 1);
  // };

  // const onDecrease = () => {
  //   if (value) setValue((preValue) => preValue - 1);
  // };

  return (
    <div>
      <button onClick={onVisible}>{!visible ? "보이기" : "안보이기"}</button>
      {visible && (
        <div>
          {state.value}
          <input
            value={state.value}
            onChange={(e) =>
              dispatch({ type: "CHANGED", data: e.target.value })
            }
          ></input>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        </div>
      )}
    </div>
  );
};

export default Counter;
