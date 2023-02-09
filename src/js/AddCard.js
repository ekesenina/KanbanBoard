import React from "react";

function AddCard(props) {
  return (
    <>
      <button
        onClick={props.handlerClick}
        className={`button__add-card${
          (props.isDisabled && "__disabled") || ""
        }`}
        disabled={props.isDisabled}
      >
        <div
          className={`button__add-card__text${
            (props.isDisabled && "__disabled") || ""
          }`}
        >
          Add card
        </div>
      </button>
    </>
  );
}

export default AddCard;
