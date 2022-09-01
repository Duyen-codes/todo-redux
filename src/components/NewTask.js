// separate creating new task into its own component
import { useDispatch } from "react-redux";
import { createTask } from "../reducers/taskReducer";

import React from "react";

const NewTask = (props) => {
  const dispatch = useDispatch();

  const addTask = (event) => {
    event.preventDefault();
    const content = event.target.task.value;
    event.target.task.value = "";
    // dispatch action can be done by calling store.dispatch of the redux store, or with dispatch function from useDispatch hook
    dispatch(createTask(content));
  };

  return (
    <form onSubmit={addTask}>
      <input type="text" name="task" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewTask;
