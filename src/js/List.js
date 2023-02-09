import React from "react";
import Item from "./Item";
import AddTask from "./AddTask";
import MoveTask from "./MoveTask";

function List(props) {
  let statusList = Object.keys(props.task);

  return (
    <>
      <div className="list">
        <h2 className="list__title">{props.status}</h2>
        <div className="list__scroll">
          <Item task={props.task} status={props.status} />
          {(props.status === statusList[0] && (
            <AddTask addTask={props.addTask} />
          )) || (
            <MoveTask
              task={props.task}
              status={props.status}
              moveTask={props.moveTask}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default List;
