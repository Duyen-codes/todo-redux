import { useDispatch } from "react-redux";
import "./App.css";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import { setFilter } from "./reducers/filterReducer";

function App() {
  const dispatch = useDispatch();
  const filterSelected = (value) => {
    console.log("SELECTED VALUE: ", value);
    dispatch(setFilter(value));
  };
  return (
    <div className="App">
      <h2>Task Manager</h2>
      <NewTask />
      <div>
        all{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("ALL")}
        />
        completed{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("COMPLETED")}
        />
        not completed{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("NOTCOMPLETED")}
        />
      </div>
      <TaskList />
    </div>
  );
}

export default App;
