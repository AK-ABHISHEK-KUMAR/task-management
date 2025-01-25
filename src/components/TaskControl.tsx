import { Button, ButtonGroup } from "@mui/material";
import { lazy, useState } from "react";

const AddTaskForm = lazy(() => import("./AddTaskForm"));

export default function TaskControl() {
  const [open, setOpen] = useState(false);

  const handleTaskForm = () => setOpen(!open);

  const handleDelete = () => {};

  const handleClear = () => {};

  return (
    <>
      <ButtonGroup variant="outlined" color="error">
        <Button onClick={handleTaskForm}>Add Task</Button>

        <Button>Delete Task</Button>

        <Button>Clear Tasks</Button>
      </ButtonGroup>

      <AddTaskForm open={open} onClose={handleTaskForm} />
    </>
  );
}
