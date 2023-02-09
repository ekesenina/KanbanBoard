import React from "react";
import List from "./List";

function Main(props) {
  return (
    <>
      <div className="main__content">
        {Object.keys(props.task).map((taskStatus, index) => (
          <List
            task={props.task}
            status={taskStatus}
            key={taskStatus}
            addTask={props.addTask}
            moveTask={props.moveTask}
          />
        ))}
      </div>
    </>
  );
}

export default Main;
