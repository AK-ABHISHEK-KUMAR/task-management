import { lazy } from "react";
import { Card, CardHeader, CardContent, CardActions, Box } from "@mui/material";

const TaskControl = lazy(() => import("./TaskControl"));
const Tabs = lazy(() => import("./Tabs"));

export default function TaskList() {
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
            <Tabs />
          </Box>
        }
      />
      <CardContent
        sx={{
          flex: 1,
          overflowY: "auto",
        }}
      ></CardContent>
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
