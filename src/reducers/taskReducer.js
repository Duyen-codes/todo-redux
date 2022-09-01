import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    content: "reducer defines how redux store works",
    complete: true,
    id: 1,
  },
  {
    content: "state of store can contain any data",
    complete: false,
    id: 2,
  },
];

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

// createSlice function returns an object containing the reducer as well as action creators defined by reducers param. The reducer can be accessed by todoSlice.reducer property, action creators by todoSlice.actions property.
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask(state, action) {
      const content = action.payload;
      state.push({
        content,
        complete: false,
        id: generateId(),
      });
    },
    toggleCompleteOf(state, action) {
      const id = action.payload;
      const taskToChange = state.find((n) => n.id === id);
      const changedTask = { ...taskToChange, complete: !taskToChange.complete };
      return state.map((task) => (task.id !== id ? task : changedTask));
    },

    removeTask(state, action) {
      const id = action.payload;
      return state.filter((task) => task.id !== id);
    },
  },
});

export const { createTask, toggleCompleteOf, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
