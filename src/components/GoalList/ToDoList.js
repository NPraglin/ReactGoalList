import React from "react";
import './ToDoList.css';

const ToDoList = props => {

  return (
    <ul className="todo-list">{
      props.tdo.map((tdo) => {
        return <li key={tdo.id}>{tdo.text}</li>;
      })
      }</ul>
  );

};

export default ToDoList;