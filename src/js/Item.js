import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  if (props.task !== {}) {
    return (
      <>
        <ul>
          {props.task[props.status].map((task, index) => (
            <li className="list__item" key={task.id}>
              <Link to={`/${task.id}`} className="a list__item__a" key={index}>
                {task.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Item;
