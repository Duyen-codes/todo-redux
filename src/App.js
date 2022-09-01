import "./App.css";
import {
  createTask,
  toggleCompleteOf,
  removeTask,
} from "./reducers/taskReducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // the component access the tasks stored in the store with useSelector hook of react-redux library
  const tasks = useSelector((state) => state.tasks);

  const addTask = (event) => {
    event.preventDefault();
    const content = event.target.task.value;
    event.target.task.value = "";
    // dispatch action can be done by calling store.dispatch of the redux store, or with dispatch function from useDispatch hook
    dispatch(createTask(content));
  };

  const toggleComplete = (id) => {
    dispatch(toggleCompleteOf(id));
  };

  const deleteTask = (id) => {
    console.log("delete");
    dispatch(removeTask(id));
    console.log("TASKS inside deleteTask: ", tasks);
  };

  return (
    <div className="App">
      <h2>Task Manager</h2>
      <form action="" onSubmit={addTask}>
        <input type="text" name="task" />
        <button type="submit">add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.content}
            <button onClick={() => toggleComplete(task.id)}>
              {task.complete ? "completed" : "not completed"}
            </button>
            <button onClick={() => deleteTask(task.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
