import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./feature/TaskSlice";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;
