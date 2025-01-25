import { Box } from "@mui/material";
import { Suspense } from "react";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Box>
      <Suspense
        fallback={
          <h1
            style={{
              display: "grid",
              placeContent: "center",
              fontSize: 100,
            }}
          >
            Loading...
          </h1>
        }
      >
        <TaskList />
      </Suspense>
    </Box>
  );
}

export default App;
