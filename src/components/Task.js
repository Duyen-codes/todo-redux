import React from "react";
import { useDispatch } from "react-redux";

// Task, responsible for rendering a single task
const Task = ({ task, handleClick, handleDelete, handleVote }) => {
  return (
    <li>
      {task.content}
      <p>Votes: {task.votes}</p>
      <button onClick={handleClick}>
        {task.complete ? "completed" : "not completed"}
      </button>
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleVote}>Vote</button>
    </li>
  );
};

export default Task;
