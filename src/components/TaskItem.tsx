import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function TaskItem({ mode }) {
  const [task, setTask] = useState([]);

  useEffect(() => {
    if (mode === "Pending") {
      setTask(JSON.parse(localStorage.getItem("Ptasks")) || []);
    } else {
      setTask(JSON.parse(localStorage.getItem("Ctasks")) || []);
    }
  }, [mode]);

  const handleSelection = (taskId) => {};

  const handleStatus = (taskId) => {};

  return (
    <Box id={"pendingTaskTable"}>
      {task.length === 0 ? (
        <Box
          component="img"
          src={mode === "Pending" ? "/assets/TaskDone.svg" : "/assets/Task.svg"}
          alt="Task List"
          sx={{ width: "auto", height: "58vh", display: "block", mx: "auto" }}
        />
      ) : (
        <TableContainer component={Paper} sx={{ mt: 4, mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 30 }}></TableCell>
                <TableCell sx={{ width: 100 }}>Task No.</TableCell>
                <TableCell>Title</TableCell>
                <TableCell sx={{ width: 50 }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {task?.map((val, ind) => (
                <TableRow key={ind} hover>
                  <TableCell>
                    <Checkbox onChange={() => handleSelection(val.id)} />
                  </TableCell>
                  <TableCell>{ind + 1}</TableCell>
                  <TableCell>{val.title}</TableCell>
                  <TableCell
                    title="Mark Done."
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleStatus(val.id)}
                  >
                    {val.status ? "✅" : "❌"}
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
