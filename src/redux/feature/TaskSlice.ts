import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../Task.interface";

const Ptask = localStorage.getItem("Ptask");
const Ctask = localStorage.getItem("Ctask");

interface InitialState {
  pendingTask: Task[];
  completedTask: Task[];
  deletingIds: number[];
}

const initialState: InitialState = {
  pendingTask: Ptask ? JSON.parse(Ptask) : [],
  completedTask: Ctask ? JSON.parse(Ctask) : [],
  deletingIds: [],
};

const Todos = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Task>) => {
      const data = action.payload;
      state.pendingTask.unshift(data);
      localStorage.setItem("Ptask", JSON.stringify(state.pendingTask));
    },
    toDelete: (state, action: PayloadAction<number[]>) => {
      state.deletingIds = action.payload;
    },
    updateStatus: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      const taskIndex = state.pendingTask.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        const [task] = state.pendingTask.splice(taskIndex, 1);
        task.status = !task.status;
        state.completedTask.unshift(task);
        localStorage.setItem("Ptask", JSON.stringify(state.pendingTask));
        localStorage.setItem("Ctask", JSON.stringify(state.completedTask));
      }
    },
    deleteTodo: (state) => {
      state.pendingTask = state.pendingTask.filter((task) => !state.deletingIds.includes(task.id));
      state.completedTask = state.completedTask.filter(
        (task) => !state.deletingIds.includes(task.id)
      );
      state.deletingIds = [];
      localStorage.setItem("Ptask", JSON.stringify(state.pendingTask));
      localStorage.setItem("Ctask", JSON.stringify(state.completedTask));
    },
    clearTodo: (state) => {
      state.pendingTask = [];
      state.completedTask = [];
      localStorage.removeItem("Ptask");
      localStorage.removeItem("Ctask");
    },
  },
});

export const { addTodo, toDelete, updateStatus, deleteTodo, clearTodo } = Todos.actions;
export default Todos.reducer;
