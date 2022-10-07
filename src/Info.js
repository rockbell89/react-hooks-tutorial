import React, { useReducer } from "react";
import useInputs from "./useInputs";

function reducer(state, action) {
  console.log([action.data.name] + ":" + action.data.value);
  return {
    ...state,
    [action.data.name]: action.data.value,
  };
}

const Info = () => {
  // const [state, dispatch] = useReducer(reducer, {
  //   name: "",
  //   nickname: "",
  // });

  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  // const onChange = (e) => {
  //   dispatch({ data: e.target });
  // };

  return (
    <div>
      <div>
        이름 :<input name="name" value={name} onChange={onChange}></input>
      </div>
      <div>
        닉네임 :
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        {name} ({nickname})
      </div>
    </div>
  );
};

export default Info;
