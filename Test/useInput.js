import { React, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="What is your name?" {...name} />
      {/* {...name} = name의 모든 기능을 불러옴 */}
      {/* <input placeholder="What is your name?" value={name.value} onChange={name.onChange} />
      이렇게도 가능하나 코드가 너무 길다. */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
