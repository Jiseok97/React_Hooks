import React from "react";
import "./styles.css";

// Not require Hooks
// 함수형 프로그래밍에 적합함

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.retrunValue = "";
  };
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
