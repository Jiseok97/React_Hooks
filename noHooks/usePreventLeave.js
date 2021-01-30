import React from "react";
import "./styles.css";

// Not require Hooks
// 함수형 프로그래밍에 적합함

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.retrunValue = "";
  };
  // API에 뭔가를 보냈고, 사람들이 닫지 않기를 바란다면, 그걸 보호 활성화
  // beforeunload는 window가 닫히기 전에 function이 실행되는 걸 허락함
  // 그 function이 위에 있는 event.preventDefault()
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
    console.log("enablePrevent");
  };
  const disalbePrevent = () => {
    window.removeEventListener("beforeunload", listener);
    console.log("disablePrevent");
  };
  return { enablePrevent, disalbePrevent };
};

const App = () => {
  const { enablePrevent, disalbePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disalbePrevent}>UnProtect</button>
    </div>
  );
};

export default App;
