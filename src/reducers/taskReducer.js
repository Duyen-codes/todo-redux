import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    content: "reducer defines how redux store works",
    complete: true,
    votes: 0,
    id: 1,
  },
  {
    content: "state of store can contain any data",
    complete: false,
    votes: 0,
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
        votes: 0,
        id: generateId(),
      });
    },

    addVote(state, action) {
      const id = action.payload;
      const taskToChange = state.find((n) => n.id === id);
      const changedTask = { ...taskToChange, votes: taskToChange.votes + 1 };
      return state.map((task) => (task.id !== id ? task : changedTask));
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

export const { createTask, toggleCompleteOf, removeTask, addVote } =
  taskSlice.actions;
export default taskSlice.reducer;
