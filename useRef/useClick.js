import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  // onClick의 타입이 function이 아니면 그냥 끝내라.
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  // useEffect 에서 할 일은 referent 안에 element.current가 있는지 확인
  // useEffect는 componentDidMount 상태에 동작함
  // useEffect에 function(if, retrun ... etc)을 넣으면,
  // componentDidMount, componentDidUpdate 때 호출 됨
  useEffect(() => {
    // useEffect가 mount 되었을때 call
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    // 그러고 componentWillUnMount 일 때, return을 함 !!
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
