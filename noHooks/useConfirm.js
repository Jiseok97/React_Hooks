import React from "react";
import "./styles.css";

// Not require Hooks
// useConfirm은 사용자가 무언가를 하기 전에 확인 하는 것
// ex) 사용자가 버튼을 크릭하는 작업을 하면 (이벤트 실행 전) 메세지 보여주기
// 어떤 원리 인가?
// browser는 우리가 어떤걸 저장, 삭제할 때, 일단 그걸 막고
// browser는 confirm을 하고, 우리가 확인을 하면 function을 계속 진행

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("deleting ...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure ?", deleteWorld, abort);
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
