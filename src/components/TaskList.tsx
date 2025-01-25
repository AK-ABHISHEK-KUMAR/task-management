import { Box, Card, CardActions, CardContent, CardHeader, SelectChangeEvent } from "@mui/material";
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
        action={
          <Box display="flex" justifyContent="center" alignItems="center">
            <Tabs option={option} handleChange={handleChange} />
          </Box>
        }
      />
      <CardContent
        sx={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        <TaskItem mode={option} />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TaskControl />
      </CardActions>
    </Card>
  );
}
