import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const App = () => {
  const jsP = useRef();
  // focus()를 통해 input 박스 안에 블럭이 5초 후 활성화 됨
  setTimeout(() => jsP.current.focus(), 5000);
  return (
    <div className="App">
      <h1>Hi</h1>
      <input ref={jsP} placeholder="Hi" />
    </div>
  );
};

export default App;
