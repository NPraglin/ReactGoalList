import React, { useState } from "react";
import './NewToDo.css'

const NewToDo = props => {
  let [enteredText, setEnteredText] = useState(' ');

  const addToDoHandler = event => {
    event.preventDefault();

    const newTodo = {
      id: Math.random().toString(),
      text: enteredText
    };

    setEnteredText(' ')

    props.onAddToDo(newTodo);
  };

  

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  }

  return (
    <form className="new-todo" onSubmit={addToDoHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add To Do</button>
    </form>
  );

};

export default NewToDo;