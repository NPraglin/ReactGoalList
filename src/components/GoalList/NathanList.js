import React from "react";
import './NathanList.css';

const NathanList = props => {

  return (
    <ul className="nathan-list">{
      props.ngoals.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })
      }</ul>
  );

};

export default NathanList;