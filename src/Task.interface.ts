export interface Task {
  id: number;
  title: string;
  status: boolean;
}

export interface InitialState {
  task: {
    pendingTask: Task[];
    completedTask: Task[];
    deletingIds: number[];
  };
}
