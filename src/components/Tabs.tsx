import { FormControl, MenuItem, Select } from "@mui/material";

export default function Tabs({ option, handleChange }) {
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
