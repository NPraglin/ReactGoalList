import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NathanList from './components/GoalList/NathanList';
import NewGoal from './components/NewGoal/NewGoal';
import ToDoList from './components/GoalList/ToDoList';
import NewToDo from './components/NewToDo/NewToDo';
import NewNathanGoal from './components/NewNathanGoal/NewNathanGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course!'},
    {id: 'cg2', text: 'Learn all about the course main topic!'},
    {id: 'cg3', text: 'Celebrate with Ice Cream! Help Students in Q&A'}
  ]);

  const [nathanGoals, setNathanGoals] = useState([
    {id: 'ng1', text: 'Master React'},
    {id: 'ng2', text: 'Flex on the classmates'},
    {id: 'ng3', text: 'Score a phat paying job'},
  ]);

  const [toDoList, setToDoList] = useState([
    {id: 'td1', text: 'Go to gym'},
    {id: 'td2', text: 'Eat lunch'},
    {id: 'td3', text: 'Go to sleep'},
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) =>  {
      return prevCourseGoals.concat(newGoal)});
    }

  const addNewToDoHandler = (newToDo) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setToDoList((prevToDoList) =>  {
      return prevToDoList.concat(newToDo)});
    }

  const addNewNathanGoalHandler = (newNathanGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setNathanGoals((prevNathanGoalList) =>  {
      return prevNathanGoalList.concat(newNathanGoal)});
    }

  return (
  <div className="goals-todos">

  <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals} />
  </div>

  <div className="nathan-goals">
    <h2>Nathan's personal goals</h2>
    <NewNathanGoal onAddNathanGoal={addNewNathanGoalHandler} />
    <NathanList ngoals={nathanGoals} />
  </div>

  <div className="nathan-todo">
    <h2>Nathan's To Do List</h2>
    <NewToDo onAddToDo={addNewToDoHandler} />
    <ToDoList tdo={toDoList} />
  </div>
  
  </div>
  );
};


export default App;
