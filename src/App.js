import { useDispatch } from "react-redux";
import "./App.css";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import { setFilter } from "./reducers/filterReducer";

function App() {
  return (
    <div className="App">
      <h2>Task Manager</h2>
      <NewTask />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;
