// useState 연습
// setState는 모든 걸 새로고침 (re-render), render function이 없다고 render이 안되는 것은 아님

import React, { useState } from "react";
import "./styles.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  // 만약 allTabs가(ture)가 아니거나 allTabs가 배열이 아니라면
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex], // 현재 index의 모든 원소를 가져옴 (배열 형태로)
    // setCurrentIndex를 통해 state(useState를 통해) 바꿔주고,
    // 그를 통해 currentItem의 currentIndex를 바꿔주면서 새로고침 하는 것!

    chageItem: setCurrentIndex, // setCuurentIndex를 통해 content의 배열을 바꿈
    // setCurrentIndex를 통해 state를 업데이트 시키는 것!!
  };
};

const App = () => {
  const { currentItem, chageItem } = useTabs(0, content); // 초기 값은 배열의 0번째(처음) 실행
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* content의 배열을 가져오고 그 안의 원소들을 가져옴(원소: tab, content) */}
      {content.map((section, index) => (
        // 클릭할 때 마다 changeItem을 통하여 1번째 index와 2번째 index를 불러옴
        // section은 배열의 원소(tab, content)를 가져옴 && 첫번째꺼, 두번째꺼 순서대로 가져옴(map의 기능)
        // index는 배열의 갯수를 의미, 2개
        <button onClick={() => chageItem(index)}>{section.tab}</button>
      ))}
      {/* 현재 선택된 배열의 content를 가져옴 */}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
