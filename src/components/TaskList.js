import React from "react";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { toggleCompleteOf, removeTask, addVote } from "../reducers/taskReducer";

const TaskList = () => {
  // the component access the tasks stored in the store with useSelector hook of react-redux library
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filter);

  const tasks = useSelector((state) => {
    if (state.filter === "ALL") {
      return state.tasks;
    }
    return filter === "COMPLETED"
      ? state.tasks.filter((task) => task.complete)
      : state.tasks.filter((task) => !task.complete);
  });

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
