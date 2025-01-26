import { FormControl, MenuItem, Select, SelectChangeEvent, Tooltip } from "@mui/material";

interface TabsProps {
  option: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
}

export default function Tabs({ option, handleChange }: TabsProps) {
  return (
    <FormControl>
      <Select
        size="small"
        id="demo-simple-select"
        value={option}
        onChange={handleChange}
        sx={{
          borderRadius: 3,
          typography: "subtitle1",
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: 3,
              "& .MuiMenuItem-root": {
                borderRadius: 2,
                margin: 0.5,
              },
            },
          },
        }}
      >
        <MenuItem value={"Pending"}>Pending</MenuItem>
        <MenuItem value={"Completed"}>Completed</MenuItem>
      </Select>
    </FormControl>
  );
}
