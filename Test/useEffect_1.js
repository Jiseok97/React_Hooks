import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  // useEffect는 2개의 인자를 받음,
  // 첫번째는 function으로써의 effect, 두번째는 deps,
  // 두번째는 deps(리스트)에 있는 값일 때만 값이 변하도록 활성화 됨
  // deps(useEffect의 두번째 인자)가 존재한다면 그 값이 변하고 useEffect가 활성화됨
  // number이 변할때만 sayHello가 작동됨!
  useEffect(sayHello, [number]);

  // useEffect가 sayHello를 component가 mount 되었을때 실행 시킴
  // useEffect는 componentDidMount와 componentWillUnMount, componentDidUpdate 임
  // 첫번째 인자만 주어지면, component는 numount 됨 -> 모든 변화를 감시함
  // 두번째 인자가 주어지고 그 값이 변할때마다 (componentDidUpdate)
  // 첫번째 인자와 함께 두번째 인자가 [] 이렇게 주어지면 한번만 활성화 됨(componentDidMount)
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
