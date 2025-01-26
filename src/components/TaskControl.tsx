import { lazy, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, ButtonGroup } from "@mui/material";

import { clearTodo, deleteTodo } from "../redux/feature/TaskSlice";
import { InitialState } from "../Task.interface";

const AddTaskForm = lazy(() => import("./AddTaskForm"));

export default function TaskControl() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { pendingTask, completedTask, deletingIds } = useSelector(
    (state: InitialState) => state.task
  );

  const handleTaskForm = () => setOpen(!open);

  const handleDelete = () => dispatch(deleteTodo());

  const handleClear = () => dispatch(clearTodo());

  return (
    <>
      <ButtonGroup variant="outlined" color="error">
        <Button onClick={handleTaskForm}>Add Task</Button>

        <Button onClick={handleDelete} disabled={!deletingIds.length}>
          Delete Task
        </Button>

        <Button onClick={handleClear} disabled={!(pendingTask.length + completedTask.length)}>
          Clear Tasks
        </Button>
      </ButtonGroup>

      <AddTaskForm open={open} onClose={handleTaskForm} />
    </>
  );
}
