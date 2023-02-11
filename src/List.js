import React from "react";

export default function List(props) {
  return (
    <div className="todo_style">
      <i
        className="fa-solid fa-xmark"
        onClick={() => {
        props.onSelect(props.id);
        }}
      />

      <li>{props.text}</li>
    </div>
  );
}
