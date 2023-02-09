import React from "react";
import AddCard from "./AddCard";

function MoveTask(props) {
  let [clicked, setClicked] = React.useState(false);

  const handlerClick = () => setClicked((clicked = true));
  const resetHandler = () => setClicked((clicked = false));

  let statusList = Object.keys(props.task);
  let currentStatusId = statusList.indexOf(props.status);
  let previewsStatus = statusList[currentStatusId - 1];
  let taskStatusId = currentStatusId - 1;

  let isDisabled = props.task[statusList[taskStatusId]].length ? false : true;

  let handlerChange = (event) => {
    let taskId = "";
    const elem = event.target;

    if (elem.matches("select")) {
      const selectedOption = elem.options[elem.selectedIndex];
      taskId = selectedOption.dataset.key;
    }

    resetHandler();
    props.moveTask(taskId, taskStatusId);
  };

  let createTaskList = (
    <select className="select" onChange={handlerChange}>
      <option>Select card</option>
      {props.task[previewsStatus].map((task, index) => (
        <option className="select__option" value={index} key={task.id} data-key={task.id}>
          {task.name}
        </option>
      ))}
    </select>
  );

  return (
    <>
      {(clicked && createTaskList) || (
        <AddCard isDisabled={isDisabled} handlerClick={handlerClick} />
      )}
    </>
  );
}

export default MoveTask;
