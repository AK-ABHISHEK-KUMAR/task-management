import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { lazy, useState } from "react";

const TaskControl = lazy(() => import("./TaskControl"));
const TaskItem = lazy(() => import("./TaskItem"));
const Tabs = lazy(() => import("./Tabs"));

export default function TaskList() {
  const [option, setOption] = useState<"Pending" | "Completed">("Pending");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setOption(event.target.value as "Pending" | "Completed");
  };

  return (
    <Card
      elevation={20}
      sx={{
        m: 2,
        p: 2,
        height: "calc(100vh - 4rem)",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            Task Manager✍
          </Typography>
        }
        subheader={
          <Typography variant="subtitle1" color="text.secondary">
            Manage your tasks efficiently
          </Typography>
        }
        action={
          <Box display="flex" justifyContent="center" alignItems="center">
            <Tabs option={option} handleChange={handleChange} />
          </Box>
        }
        sx={{ pb: 0 }}
      />
      <CardContent
        sx={{
          flex: 1,
          overflowY: "auto",
          mt: 2,
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "10px",
            border: "2px solid transparent",
            backgroundClip: "content-box",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
          "&:hover::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
          },
          "&::-webkit-scrollbar-button": {
            display: "none",
          },
        }}
      >
        <TaskItem mode={option} />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <TaskControl />
      </CardActions>
    </Card>
  );
}
