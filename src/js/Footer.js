import React from "react";

function Footer(props) {
  const user = "ek_esenina";
  const date = new Date();

  let statusList = Object.keys(props.task);
  let activeTasks = props.task[statusList[0]].length;
  let finishedTasks = props.task[statusList[3]].length;

  return (
    <footer className="footer">
        <div className="footer__tasks">
          <div className="footer__tasks__active">
            <p>
              Active tasks: {activeTasks}
            </p>
          </div>
          <div className="footer__tasks_finished">
            <p>
              Finished tasks: {finishedTasks}
            </p>
          </div>
        </div>
        <div className="footer__user">
          <p>
            Kanban board by {user}, {date.getFullYear()}
          </p>
        </div>
    </footer>
  );
}

export default Footer;
