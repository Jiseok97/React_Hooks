import React from "react";
import "./styles.css";

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
