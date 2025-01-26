import { Suspense } from "react";

import { Box, CircularProgress, circularProgressClasses, Typography } from "@mui/material";

import TaskList from "./components/TaskList";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 5rem)",
      }}
    >
      <CircularProgress
        size={100}
        thickness={5}
        color="success"
        sx={{
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
      />
      <Typography variant="h5" fontWeight="bold">
        Loading...
      </Typography>
    </Box>
  );
};

function App() {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        borderRadius: 3,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Suspense fallback={<Spinner />}>
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><defs><radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%"><stop offset="15%" stop-color="%23005300" stop-opacity="0.5"></stop><stop offset="75%" stop-color="hsl(105, 69%, 30%)" stop-opacity="1"></stop><stop offset="100%" stop-color="%2397e476" stop-opacity="1"></stop></radialGradient></defs><g fill="url(%23cccircular-grad)"><circle r="448" cx="400" cy="400"></circle><circle r="392" cx="400" cy="400"></circle><circle r="336" cx="400" cy="400"></circle><circle r="280" cx="400" cy="400"></circle><circle r="224" cx="400" cy="400"></circle><circle r="168" cx="400" cy="400"></circle><circle r="112" cx="400" cy="400"></circle></g></svg>')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box sx={{ zIndex: 1 }}>
          <TaskList />
        </Box>
      </Suspense>
    </Box>
  );
}

export default App;
