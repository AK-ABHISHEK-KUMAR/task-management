import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export default function Tabs() {
  const [option, setOption] = useState("Pending");

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
  };

  return (
    <FormControl>
      <Select
        size="small"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={option}
        onChange={handleChange}
      >
        <MenuItem value={"Pending"}>Pending</MenuItem>
        <MenuItem value={"Completed"}>Completed</MenuItem>
      </Select>
    </FormControl>
  );
}
