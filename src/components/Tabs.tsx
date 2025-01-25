import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface TabsProps {
  option: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
}

export default function Tabs({ option, handleChange }: TabsProps) {
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
