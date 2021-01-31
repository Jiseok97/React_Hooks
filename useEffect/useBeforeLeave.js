import React, { useEffect } from "react";
import "./styles.css";

// 마우스가 페이지를 벗아나면 function 실행

const useBeforLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    // componentWillUnMount때는 이 이벤트를 지움
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello Jiecok</h1>
    </div>
  );
};

export default App;
