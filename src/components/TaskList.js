import React from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { toggleCompleteOf, removeTask, addVote } from "../reducers/taskReducer";

const TaskList = () => {
  // the component access the tasks stored in the store with useSelector hook of react-redux library
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleClick={() => dispatch(toggleCompleteOf(task.id))}
            handleDelete={() => dispatch(removeTask(task.id))}
            handleVote={() => dispatch(addVote(task.id))}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
