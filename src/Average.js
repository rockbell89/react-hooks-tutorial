import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputRef = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onClick = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    console.log(nextList);

    setList(nextList);
    setNumber("");
    inputRef.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputRef}></input>
      <button onClick={onClick}>등록</button>
      <div>
        {list &&
          list.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        <p>평균값 : {avg}</p>
      </div>
    </div>
  );
};

export default Average;
