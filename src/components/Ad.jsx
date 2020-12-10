import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Banner = (props) => {
  const handleDeleteClick = (event) => {
    props.onDelete(props.id);
    event.stopPropagation();
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>
        <b>Phone:</b> {props.phone}
      </p>
      <p>
        <b>City:</b> {props.city}
      </p>
      <button className="delete-button" onClick={handleDeleteClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Banner;
