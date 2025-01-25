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
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as z from "zod";
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
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const handleAddTask = (data: z.infer<typeof schema>) => {
    console.log(data);
    const taskWithId = { ...data, id: Date.now() };
    dispatch(addTodo(taskWithId));
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
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Title"
                  fullWidth
                  error={!!errors.title}
                  helperText={errors.title?.message}
                />
              )}
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
