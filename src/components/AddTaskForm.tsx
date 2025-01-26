import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as z from "zod";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

import { addTodo } from "../redux/feature/TaskSlice";

const schema = z.object({
  title: z.string().min(5, { message: "Required" }),
  status: z.boolean().default(false),
});

interface AddTaskFormProps {
  open: boolean;
  onClose: () => void;
}

export default function AddTaskForm({ open, onClose }: AddTaskFormProps) {
  const dispatch = useDispatch();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const handleAddTask = (data: z.infer<typeof schema>) => {
    const taskWithId = { ...data, id: Date.now() };
    dispatch(addTodo(taskWithId));
    reset();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            p: 1.5,
          },
        },
      }}
    >
      <DialogTitle>
        <Typography variant="h6" component="div" fontWeight={600}>
          Add Task
        </Typography>
      </DialogTitle>
      <form onSubmit={handleSubmit(handleAddTask)}>
        <DialogContent>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Task Title"
                multiline
                rows={3}
                fullWidth
                error={!!errors.title}
                helperText={errors.title?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                  },
                }}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onClose} sx={{ borderRadius: 2 }}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" sx={{ borderRadius: 2 }}>
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
