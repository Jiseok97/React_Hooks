import React, { useState, useEffect } from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  // useEffect(componentDidMount, componentWillUpdate)
  useEffect(updateTitle, [title]);
  // 제목을 업데이트 할 수 있게 return 해줌
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  // 5초 뒤에 title을 Home으로 update
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
