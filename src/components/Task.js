import React from "react";

// Task, responsible for rendering a single task
const Task = ({ task, handleClick, handleDelete, handleVote }) => {
  return (
    <li>
      {task.content}

      <button onClick={handleClick}>
        {task.complete ? "completed" : "not completed"}
      </button>

      <span>Votes: {task.votes}</span>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};

export default Task;
