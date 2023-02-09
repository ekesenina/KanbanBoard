import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import cross from "../img/cross.svg";

const Description = (props) => {
  let [clicked, setClicked] = React.useState(false);
  let [style, setStyle] = React.useState(
    "button__submit__inactive"
  );

  let [isDisabled, setDiabled] = React.useState(true);

  const textareaRef = useRef(null);

  let taskDescription = props.task.description
    ? props.task.description
    : "This task has no description";

  const clickHandler = () => setClicked((clicked = true));
  const resetHandler = () => setClicked((clicked = false));

  const changeHandler = (event) => {
    let isEdited = Boolean(event.target.value !== taskDescription);
    if (isEdited) {
      setStyle((style = "button__submit__active"));
      setDiabled((isDisabled = false));
    }
    if (!isEdited) {
      setStyle((style = "button__submit__inactive"));
      setDiabled((isDisabled = true));
    }
  };

  const submitHandler = () => {
    let description = textareaRef.current.value;
    props.editDescription(props.task.id, description);
    resetHandler();
    setStyle((style = "button__submit__inactive"));
    setDiabled((isDisabled = true));
  };

  let descriptionText = (
    <>
      <p className="description__text__p description__text__p__scroll" onClick={clickHandler}>
        {taskDescription}
      </p>
    </>
  );

  let descriptionEditForm = (
    <>
      <textarea
        className="textarea textarea__scroll"
        ref={textareaRef}
        defaultValue={taskDescription}
        onChange={changeHandler}
      ></textarea>
      <br />
      <button onClick={submitHandler} className={style} disabled={isDisabled}>
        Submit
      </button>
    </>
  );

  return (
    <>
      <div className="description">
        <div
          className={`${
            (clicked && "description__text__edit") ||
            "description__text description__scroll"
          }`}
        >
          <div className="description__text__title">
            <h2 className="description__text__title__name">{props.task.name}</h2>
            <Link to="/">
              <img src={cross} alt="close" />
            </Link>
          </div>
          {(clicked && descriptionEditForm) || descriptionText}
        </div>
      </div>
    </>
  );
};

export default Description;
