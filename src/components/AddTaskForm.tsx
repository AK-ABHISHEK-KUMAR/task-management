import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  title: z.string().min(5, { message: "Required" }),
  status: z.boolean().default(false),
});

export default function AddTaskForm({ open, onClose }) {
  const {
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleAddTask = (data) => {
    console.log(data);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 5,
          },
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h5" component="span" fontWeight={600}>
          Add Task
        </Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit(handleAddTask)}>
        <DialogContent>
          <Stack spacing={2} my={2}>
            <TextField
              label="Title"
              name="title"
              fullWidth
              error={!!errors.title}
              helperText={errors.title?.message}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Stack spacing={2} m={2} direction="row" justifyContent="flex-end">
            <Button variant="outlined" onClick={onClose} sx={{ borderRadius: 2 }}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: 2 }}>
              Add
            </Button>
          </Stack>
        </DialogActions>
      </form>
    </Dialog>
  );
}
