import React, { useReducer } from "react";

function reducer(state, action) {
  console.log([action.data.name] + ":" + action.data.value);
  return {
    ...state,
    [action.data.name]: action.data.value,
  };
}

const useInputs = (initialForm) => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch({ data: e.target });
  };
  return [state, onChange];
};

export default useInputs;
