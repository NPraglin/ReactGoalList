import React, { useState } from "react";
import './NewNathanGoal.css'

const NewNathanGoal = props => {
  let [enteredText, setEnteredText] = useState(' ');

  const addNathanGoalHandler = event => {
    event.preventDefault();

    const newNathanGoal = {
      id: Math.random().toString(),
      text: enteredText
    };

    setEnteredText(' ')

    props.onAddNathanGoal(newNathanGoal);
  };

  

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  }

  return (
    <form className="new-todo" onSubmit={addNathanGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Personal Goal</button>
    </form>
  );

};

export default NewNathanGoal;