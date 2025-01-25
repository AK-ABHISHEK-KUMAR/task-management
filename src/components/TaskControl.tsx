import { Button, ButtonGroup } from "@mui/material";

export default function TaskControl() {
  const handleDelete = () => {};

  const handleClear = () => {};

  return (
    <ButtonGroup variant="outlined" color="error">
      <Button>Add Task</Button>

      <Button>Delete Task</Button>

      <Button>Clear Tasks</Button>
    </ButtonGroup>
  );
}
