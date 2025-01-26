import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { toDelete, updateStatus } from "../redux/feature/TaskSlice";
import { InitialState, Task } from "../Task.interface";

interface TaskItemProps {
  mode: "Pending" | "Completed";
}

export default function TaskItem({ mode }: TaskItemProps) {
  const { pendingTask, completedTask, deletingIds } = useSelector(
    (state: InitialState) => state.task
  );
  const dispatch = useDispatch();

  const handleSelection = (e: React.ChangeEvent<HTMLInputElement>, taskId: number) => {
    if (e.target.checked) {
      dispatch(toDelete([...deletingIds, taskId]));
    } else {
      dispatch(toDelete(deletingIds.filter((id: number) => id !== taskId)));
    }
  };

  const handleStatus = (taskId: number) => {
    if (mode === "Completed") return;
    dispatch(updateStatus(taskId));
  };

  const tasks = mode === "Pending" ? pendingTask : completedTask;

  return (
    <Box id={"pendingTaskTable"}>
      {tasks.length === 0 ? (
        <Box
          component="img"
          src={"/assets/TaskDone.svg"}
          alt="Task List"
          sx={{ width: "auto", height: "58vh", display: "block", mx: "auto" }}
        />
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 30 }}></TableCell>
                {/* <TableCell sx={{ width: 50, fontWeight: "bold" }}>Task&nbsp;No.</TableCell> */}
                <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                <TableCell sx={{ width: 50, fontWeight: "bold" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task: Task, index: number) => (
                <TableRow key={index} hover>
                  <TableCell>
                    <Checkbox onChange={(e) => handleSelection(e, task.id)} />
                  </TableCell>
                  {/* <TableCell>{index + 1}</TableCell> */}
                  <TableCell sx={{ typography: "subtitle2" }}>{task.title}</TableCell>
                  <TableCell
                    title={mode === "Pending" ? "Mark Done." : "Done."}
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleStatus(task.id)}
                  >
                    {task.status ? "✅" : "❌"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
