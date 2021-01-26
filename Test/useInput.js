import React, { useState } from "react";
import "./styles.css";

const useInput = (initailValue, validator) => {
  const [value, setValue] = useState(initailValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLength = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLength);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="What is your name ?" {...name} />
      {/* {...name} = name의 모든 기능을 불러옴 */}
      {/* <input placeholder="What is your name?" value={name.value} onChange={name.onChange} />
      이렇게도 가능하나 코드가 너무 길다. */}
    </div>
  );
};

export default App;
