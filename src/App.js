import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NathanList from './components/GoalList/NathanList';
import NewGoal from './components/NewGoal/NewGoal';
import ToDoList from './components/GoalList/ToDoList';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course!'},
    {id: 'cg2', text: 'Learn all about the course main topic!'},
    {id: 'cg3', text: 'Celebrate with Ice Cream! Help Students in Q&A'}
  ]);

  const nathanGoals = [
    {id: 'ng1', text: 'Master React'},
    {id: 'ng2', text: 'Flex on the classmates'},
    {id: 'ng3', text: 'Score a phat paying job'},
  ];

  const toDoList = [
    {id: 'td1', text: 'Go to gym'},
    {id: 'td2', text: 'Eat lunch'},
    {id: 'td3', text: 'Go to sleep'},
  ];

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) =>  {
      return prevCourseGoals.concat(newGoal)});
    }

  return (
  <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals} />

    <h2>Nathan's personal goals</h2>
    <NathanList ngoals={nathanGoals} />

    <h2>Nathan's To Do List</h2>
    <ToDoList tdo={toDoList} />
  </div>
  );
};


export default App;
