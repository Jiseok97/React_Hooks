import React, { useState } from "react";
import "./styles.css";

const useInput = (initailValue, validator) => {
  // validator 은 검증 기능
  const [value, setValue] = useState(initailValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    // validator 의 type 이 function 인지 체크
    // 아래 maxLength의 조건이 성립이 되면, Update 하게 됨
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
  // const maxLength = (value) => value.length <= 10;
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
